import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import type { DirectoryEntry } from '../types';

interface DirectoryCardProps {
  entry: DirectoryEntry;
}

export function DirectoryCard({ entry }: DirectoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={entry.imageUrl}
          alt={entry.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{entry.title}</h3>
          <span className="flex items-center text-sm text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1">{entry.stats.rating.toFixed(1)}</span>
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{entry.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {entry.category}
          </span>
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Visit
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}