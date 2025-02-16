import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-600 text-white py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Japan Travel Planner
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/destinations" className="hover:underline">Destinations
              </Link>
            </li>
            <li>
              <Link href="/itinerary" className="hover:underline">Itinerary
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}