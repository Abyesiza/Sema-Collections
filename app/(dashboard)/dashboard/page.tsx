"use client";

import { 
  BarChart2, 
  TrendingUp, 
  Users, 
  ShoppingBag,
  Eye,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';

const stats = [
  {
    name: 'Total Views',
    value: '24.5K',
    change: '+12%',
    icon: Eye
  },
  {
    name: 'Followers',
    value: '2,340',
    change: '+5.2%',
    icon: Users
  },
  {
    name: 'Collections',
    value: '12',
    change: '+2',
    icon: ShoppingBag
  },
  {
    name: 'Engagement',
    value: '87%',
    change: '+3%',
    icon: ThumbsUp
  }
];

const recentActivity = [
  {
    type: 'comment',
    user: 'Sarah M.',
    action: 'commented on your Summer Collection',
    time: '2 hours ago'
  },
  {
    type: 'like',
    user: 'Michael R.',
    action: 'liked your new design',
    time: '4 hours ago'
  },
  {
    type: 'follow',
    user: 'Emma W.',
    action: 'started following you',
    time: '5 hours ago'
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-serif">Dashboard</h1>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors">
          New Collection
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="p-6 bg-black/5 backdrop-blur-xl rounded-2xl border border-white/10"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-5 h-5 text-primary" />
              <span className="text-sm text-green-500">{stat.change}</span>
            </div>
            <p className="text-3xl font-semibold mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 bg-black/5 backdrop-blur-xl rounded-2xl border border-white/10">
          <h2 className="text-xl font-serif mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{activity.user}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="p-6 bg-black/5 backdrop-blur-xl rounded-2xl border border-white/10">
          <h2 className="text-xl font-serif mb-6">Performance Overview</h2>
          <div className="aspect-[4/3] bg-white/5 rounded-xl flex items-center justify-center">
            <BarChart2 className="w-12 h-12 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
} 