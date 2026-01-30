import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContentRow } from './components/ContentRow';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';
import { loveReasons, memories, loveSongs, loveMovies } from './data/content';

export interface ContentItem {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  videoUrl?: string;
}

export function App() {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  return (
    <div className="min-h-screen bg-[#141414] text-white overflow-x-hidden">
      <Header />
      <Hero />
      
      <main className="relative z-10 -mt-32 pb-20">
        <ContentRow 
          title="💝 Reasons I Love You" 
          items={loveReasons} 
          onItemClick={setSelectedItem}
        />
        <ContentRow 
          title="📸 Our Beautiful Memories" 
          items={memories} 
          onItemClick={setSelectedItem}
        />
        <ContentRow 
          title="🎵 Songs That Remind Me of You" 
          items={loveSongs} 
          onItemClick={setSelectedItem}
        />
        <ContentRow 
          title="🎬 Movies to Watch Together" 
          items={loveMovies} 
          onItemClick={setSelectedItem}
        />
      </main>

      <Footer />

      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
