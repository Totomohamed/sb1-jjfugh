import React, { useState, useMemo } from 'react';
import { Compass, Plus, Upload } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { DirectoryCard } from './components/DirectoryCard';
import { DonationSection } from './components/DonationSection';
import { SocialLinks } from './components/SocialLinks';
import { FileImport } from './components/FileImport';
import { CompanyForm } from './components/CompanyForm';
import { NewsletterSubscription } from './components/NewsletterSubscription';
import { WebScrapingSearch } from './components/WebScrapingSearch';
import { mockEntries, categories } from './data/mockData';
import type { SortOption, ViewMode, DirectoryEntry } from './types';

export function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState<SortOption>('alphabetical');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showImport, setShowImport] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [entries, setEntries] = useState(mockEntries);

  const handleFileImport = (files: File[]) => {
    console.log('Imported files:', files);
  };

  const handleAddCompany = (company: Omit<DirectoryEntry, 'id' | 'dateAdded' | 'stats'>) => {
    const newCompany: DirectoryEntry = {
      ...company,
      id: Date.now().toString(),
      dateAdded: new Date().toISOString(),
      stats: { visits: 0, rating: 0 }
    };
    setEntries(prev => [...prev, newCompany]);
    setShowForm(false);
  };

  const filteredEntries = useMemo(() => {
    return entries
      .filter((entry) => {
        const matchesSearch = entry.title.toLowerCase().includes(search.toLowerCase()) ||
                            entry.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || entry.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        switch (sortOption) {
          case 'alphabetical':
            return a.title.localeCompare(b.title);
          case 'date':
            return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
          case 'rating':
            return b.stats.rating - a.stats.rating;
          default:
            return 0;
        }
      });
  }, [entries, search, selectedCategory, sortOption]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Compass className="h-8 w-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-900">Web Directory</h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setShowForm(!showForm);
                  setShowImport(false);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Company
              </button>
              <button
                onClick={() => {
                  setShowImport(!showImport);
                  setShowForm(false);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Upload className="h-5 w-5 mr-2" />
                Import Data
              </button>
            </div>
          </div>
          <div className="mt-6">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          {showImport && (
            <div className="mt-6">
              <FileImport onFileImport={handleFileImport} />
            </div>
          )}
          {showForm && (
            <div className="mt-6">
              <CompanyForm onSubmit={handleAddCompany} />
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <FilterBar
              selectedCategory={selectedCategory}
              categories={categories}
              sortOption={sortOption}
              viewMode={viewMode}
              onCategoryChange={setSelectedCategory}
              onSortChange={setSortOption}
              onViewModeChange={setViewMode}
            />

            <div className="mt-6">
              <WebScrapingSearch />
            </div>

            {filteredEntries.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No results found</p>
              </div>
            ) : (
              <div className={`mt-6 grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2' 
                  : 'grid-cols-1'
              }`}>
                {filteredEntries.map((entry) => (
                  <DirectoryCard key={entry.id} entry={entry} />
                ))}
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <NewsletterSubscription />
              <DonationSection />
              <SocialLinks />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}