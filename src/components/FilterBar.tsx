import React from 'react';
import { LayoutGrid, List, SortAsc } from 'lucide-react';
import type { SortOption, ViewMode } from '../types';

interface FilterBarProps {
  selectedCategory: string;
  categories: string[];
  sortOption: SortOption;
  viewMode: ViewMode;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: SortOption) => void;
  onViewModeChange: (mode: ViewMode) => void;
}

export function FilterBar({
  selectedCategory,
  categories,
  sortOption,
  viewMode,
  onCategoryChange,
  onSortChange,
  onViewModeChange
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedCategory === category
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="block w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="alphabetical">A-Z</option>
          <option value="date">Newest</option>
          <option value="rating">Rating</option>
        </select>

        <div className="flex items-center gap-1 border rounded-lg p-1">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-1 rounded ${
              viewMode === 'grid'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <LayoutGrid className="h-5 w-5" />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-1 rounded ${
              viewMode === 'list'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}