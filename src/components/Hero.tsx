import { useState } from 'react';

export function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative h-[85vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 via-red-900/30 to-purple-900/40" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent" />
        
        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float text-pink-500/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                fontSize: `${10 + Math.random() * 20}px`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-12 max-w-2xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 text-xs font-semibold rounded">
            EXCLUSIVE
          </span>
          <span className="text-pink-400 text-sm">Valentine's Day Special</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
            For My Dearest
          </span>
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Priya ❤️
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
          Every moment with you feels like a beautiful movie. This Valentine's Day, 
          I've created this special place just for you – filled with all the reasons 
          I love you, our cherished memories, and dreams of our future together.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setShowVideo(true)}
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded font-semibold hover:bg-white/90 transition-all transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Play Our Story
          </button>
          <button className="flex items-center gap-2 bg-gray-500/50 text-white px-6 py-3 rounded font-semibold hover:bg-gray-500/70 transition-all backdrop-blur-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            More Info
          </button>
        </div>

        <div className="mt-8 flex items-center gap-4 text-sm">
          <span className="text-green-400 font-semibold">100% Match</span>
          <span className="border border-gray-500 px-2">Forever</span>
          <span>❤️ Romantic • 💕 Heartwarming • ✨ Magical</span>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          
          <div 
            className="relative w-full max-w-5xl aspect-video animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl border border-pink-500/30">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yYCbWWGtvcQ?autoplay=1&rel=0"
                title="Our Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Title below video */}
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <h3 className="text-xl font-semibold text-white">Our Story 💕</h3>
              <p className="text-gray-400 text-sm mt-1">A journey of love and memories</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
