import React, { useState } from 'react';
import { Building2, Link, Image, Tags, FileText, Star } from 'lucide-react';
import type { DirectoryEntry } from '../types';

interface CompanyFormProps {
  onSubmit: (company: Omit<DirectoryEntry, 'id' | 'dateAdded' | 'stats'>) => void;
}

export function CompanyForm({ onSubmit }: CompanyFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    url: '',
    imageUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      description: '',
      category: '',
      url: '',
      imageUrl: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Building2 className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-semibold text-gray-900">Add Company</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Building2 className="h-4 w-4" />
            Company Name
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <FileText className="h-4 w-4" />
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Tags className="h-4 w-4" />
            Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select a category</option>
            {['Technology', 'Marketing', 'Design', 'Business', 'Education'].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="url" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Link className="h-4 w-4" />
            Website URL
          </label>
          <input
            type="url"
            id="url"
            value={formData.url}
            onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Image className="h-4 w-4" />
            Company Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            value={formData.imageUrl}
            onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
            placeholder="https://images.unsplash.com/..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
      >
        <Star className="h-5 w-5" />
        Add Company
      </button>
    </form>
  );
}