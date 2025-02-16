import { motion } from 'framer-motion';

export default function DestinationCard({ title, image, description }) {
  return (
    <motion.div
  whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
  whileTap={{ scale: 0.95 }}
  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
>
  <img src={image} alt={title} className="w-full h-48 object-cover" />
  <div className="p-4">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
</motion.div>
  );
}