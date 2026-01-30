import { useState } from 'react';
import type { ContentItem } from '../App';

interface ModalProps {
  item: ContentItem;
  onClose: () => void;
}

function getYouTubeEmbedUrl(url: string): string {
  const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  if (videoIdMatch && videoIdMatch[1]) {
    return `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1&rel=0`;
  }
  return url;
}

export function Modal({ item, onClose }: ModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (item.videoUrl) {
      setIsPlaying(true);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      <div 
        className="relative bg-[#181818] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center hover:bg-[#282828] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Image or Video */}
        <div className="relative aspect-video">
          {isPlaying && item.videoUrl ? (
            <iframe
              src={getYouTubeEmbedUrl(item.videoUrl)}
              title={item.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{item.title}</h2>
                <div className="flex gap-3">
                  <button 
                    onClick={handlePlay}
                    className={`flex items-center gap-2 px-6 py-2 rounded font-semibold transition-all ${
                      item.videoUrl 
                        ? 'bg-white text-black hover:bg-white/90 cursor-pointer' 
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    {item.videoUrl ? 'Play' : 'No Video'}
                  </button>
                  <button className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white transition-colors">
                    <span className="text-xl">+</span>
                  </button>
                  <button className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white transition-colors">
                    <span className="text-lg">👍</span>
                  </button>
                  <button className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white transition-colors">
                    <span className="text-lg">❤️</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {isPlaying && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <button 
                onClick={() => setIsPlaying(false)}
                className="text-pink-400 hover:text-pink-300 transition-colors text-sm flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to details
              </button>
            </div>
          )}
          
          <div className="flex items-center gap-4 mb-4 text-sm">
            <span className="text-green-400 font-semibold">100% Match</span>
            <span className="border border-gray-500 px-2">2024</span>
            <span className="bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded">{item.category}</span>
            {item.videoUrl && (
              <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Video
              </span>
            )}
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-sm">
              <span className="text-gray-500">Made with:</span> Love, Care, and Endless Affection
            </p>
            <p className="text-gray-400 text-sm mt-1">
              <span className="text-gray-500">Tags:</span> Romance, Love, Priya, Forever, Valentine's Day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
