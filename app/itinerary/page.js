'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'motion/react'
import ItineraryBuilderForm from '@/components/ItineraryBuilderForm'
export default function Itinerary() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div>
        <title>Itinerary - Japan Travel Planner</title>
      </div>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <ItineraryBuilderForm />
      </main>

      <Footer />
    </div>
  );
}