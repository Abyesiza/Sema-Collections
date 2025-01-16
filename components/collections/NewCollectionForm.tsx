"use client";

import { useState } from 'react';
import { Upload, Plus, X } from 'lucide-react';

interface FormData {
  name: string;
  category: string;
  description: string;
  basePrice: string;
  status: 'draft' | 'published';
}

interface NewCollectionFormProps {
  onSubmit: (data: FormData) => void;
}

export default function NewCollectionForm({ onSubmit }: NewCollectionFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    category: '',
    description: '',
    basePrice: '',
    status: 'draft'
  });
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Collection Images */}
      <div>
        <label className="block text-sm mb-2">Collection Images</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <label className="relative aspect-square rounded-xl border-2 border-dashed border-white/10 hover:border-primary/50 transition-colors cursor-pointer">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
              <Upload className="w-6 h-6" />
              <span className="text-sm">Upload Images</span>
            </div>
          </label>
          
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square rounded-xl overflow-hidden bg-white/5">
              <img
                src={URL.createObjectURL(image)}
                alt={`Preview ${index}`}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setImages(images.filter((_, i) => i !== index))}
                className="absolute top-2 right-2 p-1 bg-black/50 rounded-lg hover:bg-black/70 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Collection Details */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-2">Collection Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary"
            placeholder="Enter collection name"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Category</label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary"
            placeholder="e.g., Summer Wear, Evening Collection"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary min-h-[100px]"
            placeholder="Describe your collection..."
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Base Price</label>
          <input
            type="text"
            value={formData.basePrice}
            onChange={(e) => setFormData({ ...formData, basePrice: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary"
            placeholder="Starting price for items in this collection"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Status</label>
          <div className="grid grid-cols-2 gap-4 p-1 bg-white/5 rounded-lg">
            {['draft', 'published'].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFormData({ ...formData, status: status as 'draft' | 'published' })}
                className={`py-2 rounded-lg transition-colors ${
                  formData.status === status
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-white/5'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end gap-4">
        <button
          type="submit"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
        >
          Create Collection
        </button>
      </div>
    </form>
  );
} 