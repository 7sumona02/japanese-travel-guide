import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ItineraryBuilderForm() {
  const [itinerary, setItinerary] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItinerary([...itinerary, newItem]);
      setNewItem('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Build Your Itinerary</h2>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a destination or activity"
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          onClick={addItem}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul>
        {itinerary.map((item, index) => (
          <li key={index} className="mb-2 p-2 bg-gray-100 rounded-lg">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}