import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="h-5 w-5 text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Subscribe to receive updates and alerts about new companies.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}