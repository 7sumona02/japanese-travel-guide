import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Etiquette from '@/components/Etiquette';

export default function EtiquettePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Etiquette />
      </main>
      <Footer />
    </div>
  );
}