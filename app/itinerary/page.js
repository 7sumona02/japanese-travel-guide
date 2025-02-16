'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Itinerary() {
  const [itinerary, setItinerary] = useState([]);
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    time: '',
    activity: '',
    notes: '',
    budget: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Update existing item
      const updatedItinerary = [...itinerary];
      updatedItinerary[editIndex] = formData;
      setItinerary(updatedItinerary);
      setEditIndex(null);
    } else {
      // Add new item
      setItinerary([...itinerary, formData]);
    }
    setFormData({
      destination: '',
      date: '',
      time: '',
      activity: '',
      notes: '',
      budget: '',
    });
  };

  const handleEdit = (index) => {
    setFormData(itinerary[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedItinerary = itinerary.filter((_, i) => i !== index);
    setItinerary(updatedItinerary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Plan Your Itinerary</h1>

        {/* Itinerary Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Destination</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Enter destination"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Activity</label>
              <select
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Select activity</option>
                <option value="Sightseeing">Sightseeing</option>
                <option value="Shopping">Shopping</option>
                <option value="Dining">Dining</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add notes"
                className="w-full p-2 border rounded-lg"
                rows="3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Budget (¥)</label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Enter budget"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
          >
            <FaSave className="mr-2" />
            {editIndex !== null ? 'Update' : 'Add'} Itinerary Item
          </button>
        </motion.form>

        {/* Itinerary List */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4">Your Itinerary</h2>
          {itinerary.length === 0 ? (
            <p className="text-center text-gray-500">No itinerary items added yet.</p>
          ) : (
            <div className="space-y-4">
              {itinerary.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 border rounded-lg flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.destination}</h3>
                    <p className="text-sm text-gray-600">
                      {item.date} | {item.time} | {item.activity}
                    </p>
                    <p className="text-sm text-gray-600">{item.notes}</p>
                    <p className="text-sm text-gray-600">Budget: ¥{item.budget}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="p-2 text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="p-2 text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  );
}