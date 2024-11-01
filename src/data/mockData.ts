import type { DirectoryEntry } from '../types';

export const categories = [
  'All',
  'Technology',
  'Marketing',
  'Design',
  'Business',
  'Education'
];

export const mockEntries: DirectoryEntry[] = [
  {
    id: '1',
    title: 'TechCorp Solutions',
    description: 'Leading provider of enterprise software solutions',
    category: 'Technology',
    url: 'https://example.com',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    dateAdded: '2024-03-01T00:00:00.000Z',
    stats: {
      visits: 1200,
      rating: 4.5
    }
  },
  {
    id: '2',
    title: 'DesignHub Creative',
    description: 'Professional design services for modern businesses',
    category: 'Design',
    url: 'https://example.com',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    dateAdded: '2024-02-28T00:00:00.000Z',
    stats: {
      visits: 800,
      rating: 4.8
    }
  }
];