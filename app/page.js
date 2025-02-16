'use client'

import {motion} from 'motion/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DestinationCard from '@/components/DestinationCard'

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <div>
      <title>Japan Travel Planner</title>
      <meta name="description" content="Plan your trip to Japan with ease!" />
    </div>

    <Header />

    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Explore Japan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DestinationCard
          title="Tokyo"
          image="/images/tokyo.jpg"
          description="The bustling capital of Japan, known for its modernity and tradition."
        />
        <DestinationCard
          title="Kyoto"
          image="/images/kyoto.jpg"
          description="A city of temples, shrines, and traditional tea houses."
        />
        <DestinationCard
          title="Osaka"
          image="/images/osaka.jpg"
          description="Famous for its street food, nightlife, and historic castles."
        />
      </div>
    </motion.main>

    <Footer />
  </div>
  )
}

export default page