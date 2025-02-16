'use client'
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DestinationCard from '@/components/DestinationCard'
import { motion } from 'motion/react'
import Map from '@/components/Map'

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('Japan');
  const [filterCategory, setFilterCategory] = useState('tourism');

  // Fetch destinations from Geoapify API
  const fetchDestinations = async (query, category) => {
    try {
      const response = await axios.get('https://api.geoapify.com/v2/places', {
        params: {
          categories: category,
          filter: `rect:122.933,20.425,153.986,45.557`, // Bounding box around Japan
          limit: 50,
          apiKey: process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY, // Add your API key in .env
        },
      });
      setDestinations(response.data.features);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching destinations:', error);
      setLoading(false);
    }
  };

  // Fetch data when the page loads or filters change
  useEffect(() => {
    fetchDestinations(searchQuery, filterCategory);
  }, [searchQuery, filterCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Destinations in Japan</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded-lg shadow-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setFilterCategory('tourism')}
            className={`px-4 py-2 rounded-lg ${
              filterCategory === 'tourism' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Tourist Attractions
          </button>
          <button
            onClick={() => setFilterCategory('catering')}
            className={`px-4 py-2 rounded-lg ${
              filterCategory === 'catering' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Restaurants
          </button>
          <button
            onClick={() => setFilterCategory('accommodation')}
            className={`px-4 py-2 rounded-lg ${
              filterCategory === 'accommodation' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Hotels
          </button>
        </div>

        {/* Destination Grid */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.properties.place_id}
                title={destination.properties.name || 'Unnamed Place'}
                description={destination.properties.formatted || 'A place in Japan'}
              />
            ))}
          </div>
        )}
      </motion.main>

      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Explore Japan on the Map</h2>
        <Map />
      </div>

      <Footer />
    </div>
  );
}

