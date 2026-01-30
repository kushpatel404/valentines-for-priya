export function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-gray-800 py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-red-400 bg-clip-text text-transparent">
            PRIYAFLIX
          </span>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          {['💕', '❤️', '💖', '💗', '💝'].map((heart, i) => (
            <span key={i} className="text-2xl animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
              {heart}
            </span>
          ))}
        </div>

        <div className="mb-8 max-w-xl mx-auto">
          <p className="text-gray-400 text-lg italic">
            "In all the world, there is no heart for me like yours. 
            In all the world, there is no love for you like mine."
          </p>
          <p className="text-pink-400 mt-2">— Maya Angelou</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500 mb-8">
          <div>
            <p className="hover:text-pink-400 cursor-pointer transition-colors">Our First Date</p>
            <p className="hover:text-pink-400 cursor-pointer transition-colors">Love Letters</p>
          </div>
          <div>
            <p className="hover:text-pink-400 cursor-pointer transition-colors">Photo Album</p>
            <p className="hover:text-pink-400 cursor-pointer transition-colors">Future Dreams</p>
          </div>
          <div>
            <p className="hover:text-pink-400 cursor-pointer transition-colors">Adventures</p>
            <p className="hover:text-pink-400 cursor-pointer transition-colors">Inside Jokes</p>
          </div>
          <div>
            <p className="hover:text-pink-400 cursor-pointer transition-colors">Bucket List</p>
            <p className="hover:text-pink-400 cursor-pointer transition-colors">Our Song</p>
          </div>
        </div>

        <div className="text-gray-600 text-sm">
          <p>Made with ❤️ just for you, Priya</p>
          <p className="mt-1">Happy Valentine's Day 2024</p>
        </div>
      </div>
    </footer>
  );
}
