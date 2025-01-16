"use client";

import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

interface Message {
  type: 'user' | 'assistant';
  content: string;
}

export default function FashionAdviceChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'assistant',
      content: 'Hello! I\'m your personal fashion advisor. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: 'Thank you for your question! Our fashion experts will get back to you soon.'
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-black/90 transition-colors z-50"
        style={{ display: isOpen ? 'none' : 'block' }}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white shadow-2xl rounded-lg flex flex-col z-50">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center bg-black text-white rounded-t-lg">
            <h3 className="font-serif">Fashion Advisor</h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask for fashion advice..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}