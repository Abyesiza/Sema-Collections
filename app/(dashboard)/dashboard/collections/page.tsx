"use client";

import { useState } from 'react';
import Image from 'next/image';
import { 
  Plus, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  Tag,
  Layers
} from 'lucide-react';
import Modal from '@/components/ui/Modal';
import NewCollectionForm from '@/components/collections/NewCollectionForm';

interface Collection {
  id: number;
  name: string;
  status: 'draft' | 'published' | 'archived';
  items: number;
  price: string;
  date: string;
  image: string;
  category: string;
}

const collections: Collection[] = [
  {
    id: 1,
    name: "Summer Breeze 2024",
    status: 'published',
    items: 24,
    price: "From $89",
    date: "Jan 15, 2024",
    image: "/images/collections/summer-breeze.jpg",
    category: "Summer Wear"
  },
  {
    id: 2,
    name: "Urban Nights",
    status: 'published',
    items: 18,
    price: "From $129",
    date: "Dec 28, 2023",
    image: "/images/collections/urban-nights.jpg",
    category: "Evening Wear"
  },
  {
    id: 3,
    name: "Winter Essentials",
    status: 'draft',
    items: 15,
    price: "From $149",
    date: "In Progress",
    image: "/images/collections/winter-essentials.jpg",
    category: "Winter Wear"
  }
];

export default function Collections() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [isNewCollectionModalOpen, setIsNewCollectionModalOpen] = useState(false);

  const filteredCollections = selectedStatus === 'all' 
    ? collections 
    : collections.filter(collection => collection.status === selectedStatus);

  const handleCreateCollection = (data: any) => {
    console.log('New collection:', data);
    setIsNewCollectionModalOpen(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif mb-1">Collections</h1>
          <p className="text-muted-foreground">
            Manage and organize your fashion collections
          </p>
        </div>
        <button 
          onClick={() => setIsNewCollectionModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Collection
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 p-1 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
        {['all', 'published', 'draft', 'archived'].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedStatus === status
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-white/5'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCollections.map((collection) => (
          <div
            key={collection.id}
            className="group relative bg-black/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
          >
            {/* Collection Image */}
            <div className="relative h-48">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  collection.status === 'published' ? 'bg-green-500/20 text-green-500' :
                  collection.status === 'draft' ? 'bg-yellow-500/20 text-yellow-500' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {collection.status.charAt(0).toUpperCase() + collection.status.slice(1)}
                </span>
              </div>

              {/* Actions Menu */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Collection Info */}
            <div className="p-6">
              <h3 className="text-xl font-serif mb-4">{collection.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Layers className="w-4 h-4" />
                  <span>{collection.items} Items</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Tag className="w-4 h-4" />
                  <span>{collection.price}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{collection.date}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="flex items-center justify-center gap-2 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="flex items-center justify-center gap-2 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isNewCollectionModalOpen}
        onClose={() => setIsNewCollectionModalOpen(false)}
        title="Create New Collection"
      >
        <NewCollectionForm onSubmit={handleCreateCollection} />
      </Modal>
    </div>
  );
} 