"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Search, Star, MoreVertical, Send, Paperclip, Phone, Video } from 'lucide-react';

interface Message {
  id: number;
  user: {
    name: string;
    image: string;
    online: boolean;
  };
  lastMessage: string;
  time: string;
  unread: number;
  starred: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    user: {
      name: "Sarah Miller",
      image: "/images/users/sarah.jpg",
      online: true
    },
    lastMessage: "I love the new summer collection! When will...",
    time: "2m ago",
    unread: 2,
    starred: true
  },
  {
    id: 2,
    user: {
      name: "Fashion Week Team",
      image: "/images/users/fashion-week.jpg",
      online: true
    },
    lastMessage: "Your collection has been selected for...",
    time: "1h ago",
    unread: 1,
    starred: true
  },
  {
    id: 3,
    user: {
      name: "John Anderson",
      image: "/images/users/john.jpg",
      online: false
    },
    lastMessage: "Can we schedule a meeting to discuss the...",
    time: "3h ago",
    unread: 0,
    starred: false
  }
  // Add more messages as needed
];

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState<number>(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const selectedChatData = messages.find(m => m.id === selectedChat);

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-8">
      {/* Messages List */}
      <div className="w-96 flex flex-col bg-black/5 backdrop-blur-xl rounded-2xl border border-white/10">
        {/* Search */}
        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto">
          {messages.map((message) => (
            <button
              key={message.id}
              onClick={() => setSelectedChat(message.id)}
              className={`w-full flex items-start gap-4 p-4 hover:bg-white/5 transition-colors ${
                selectedChat === message.id ? 'bg-white/5' : ''
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={message.user.image}
                    alt={message.user.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                {message.user.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                )}
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{message.user.name}</span>
                  <span className="text-xs text-muted-foreground">{message.time}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{message.lastMessage}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {message.unread > 0 && (
                  <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                    {message.unread}
                  </span>
                )}
                {message.starred && (
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      {selectedChatData && (
        <div className="flex-1 flex flex-col bg-black/5 backdrop-blur-xl rounded-2xl border border-white/10">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={selectedChatData.user.image}
                    alt={selectedChatData.user.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                {selectedChatData.user.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                )}
              </div>
              <div>
                <h2 className="font-medium">{selectedChatData.user.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {selectedChatData.user.online ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Add chat messages here */}
            <div className="flex flex-col gap-4">
              {/* Example message bubbles */}
              <div className="flex justify-start">
                <div className="max-w-[80%] bg-white/5 rounded-2xl rounded-tl-none px-4 py-2">
                  <p>Hi! I love your new summer collection! When will it be available in stores?</p>
                  <span className="text-xs text-muted-foreground">2:30 PM</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[80%] bg-primary/10 rounded-2xl rounded-tr-none px-4 py-2">
                  <p>Thank you! The collection will be available next month. I'll send you the exact launch date soon.</p>
                  <span className="text-xs text-muted-foreground">2:32 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary"
              />
              <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 