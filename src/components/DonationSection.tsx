import React from 'react';
import { Heart } from 'lucide-react';

export function DonationSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="h-5 w-5 text-red-500" />
        <h3 className="text-lg font-semibold text-gray-900">Support Us</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Help us maintain and improve this directory by making a donation.
      </p>
      <button
        onClick={() => window.open('https://example.com/donate', '_blank')}
        className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
      >
        Make a Donation
      </button>
    </div>
  );
}