import React from 'react';
import { FaTimes, FaHeart, FaComment, FaShare, FaMusic } from 'react-icons/fa';

export default function ReelsPage({ isOpen, onClose }) {
  if (!isOpen) return null;

  const reelsData = [
    {
      id: 1,
      video: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      username: 'nature_explorer',
      caption: 'Beautiful mountain sunrise 🌅 #nature #mountains',
      likes: 2341,
      comments: 189,
      music: 'Original Audio - nature_explorer'
    },
    {
      id: 2,
      video: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80',
      username: 'city_vibes',
      caption: 'Urban life never stops 🏙️ #city #lifestyle',
      likes: 1876,
      comments: 234,
      music: 'Trending - Hip Hop Beat'
    },
    {
      id: 3,
      video: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
      username: 'forest_walker',
      caption: 'Deep in the woods 🌲 #forest #adventure',
      likes: 987,
      comments: 67,
      music: 'Nature Sounds - Peaceful'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black text-white">
        <button onClick={onClose}>
          <FaTimes className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Reels</h1>
        <div className="w-6"></div>
      </div>

      {/* Reels Content */}
      <div className="flex-1 overflow-y-auto">
        {reelsData.map((reel) => (
          <div key={reel.id} className="relative h-screen w-full snap-start">
            <img 
              src={reel.video}
              alt="Reel"
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* Content overlay */}
            <div className="absolute bottom-20 left-4 right-16 text-white">
              <p className="font-semibold text-lg mb-2">@{reel.username}</p>
              <p className="text-sm mb-3">{reel.caption}</p>
              
              {/* Music info */}
              <div className="flex items-center gap-2">
                <FaMusic className="w-4 h-4" />
                <span className="text-sm">{reel.music}</span>
              </div>
            </div>

            {/* Side Actions */}
            <div className="absolute bottom-20 right-4 flex flex-col gap-6">
              <div className="flex flex-col items-center">
                <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-1">
                  <FaHeart className="w-6 h-6 text-white" />
                </button>
                <span className="text-white text-xs font-semibold">{reel.likes}</span>
              </div>
              
              <div className="flex flex-col items-center">
                <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-1">
                  <FaComment className="w-6 h-6 text-white" />
                </button>
                <span className="text-white text-xs font-semibold">{reel.comments}</span>
              </div>
              
              <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <FaShare className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
