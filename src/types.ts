export interface DirectoryEntry {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  imageUrl: string;
  dateAdded: string;
  stats: {
    visits: number;
    rating: number;
  };
}

export type SortOption = 'alphabetical' | 'date' | 'rating';
export type ViewMode = 'grid' | 'list';