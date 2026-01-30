import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#141414]/95 backdrop-blur-sm' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-red-400 bg-clip-text text-transparent">
            PRIYAFLIX
          </span>
          <span className="text-2xl animate-pulse">💕</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-pink-400 transition-colors">Home</a>
          <a href="#" className="hover:text-pink-400 transition-colors">Our Story</a>
          <a href="#" className="hover:text-pink-400 transition-colors">Memories</a>
          <a href="#" className="hover:text-pink-400 transition-colors">Love Notes</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-sm font-bold">
            P
          </div>
        </div>
      </div>
    </header>
  );
}
