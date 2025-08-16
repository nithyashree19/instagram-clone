import React from 'react';
import { FaTimes, FaHeart, FaComment, FaShare } from 'react-icons/fa';

export default function ReelsPage({ isOpen, onClose }) {
  if (!isOpen) return null;

  const reelsData = [
    {
      id: 1,
      video: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      username: 'nature_lover',
      caption: 'Beautiful sunset vibes 🌅',
      likes: 1234,
      comments: 89
    },
    {
      id: 2,
      video: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80',
      username: 'travel_guru',
      caption: 'Epic adventure awaits! 🏔️',
      likes: 2567,
      comments: 156
    }
  ];

  return (
    <div className="lg:hidden fixed inset-0 bg-black z-50 flex flex-col">
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
          <div key={reel.id} className="relative h-screen w-full">
            <img 
              src={reel.video}
              alt="Reel"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Controls */}
            <div className="absolute bottom-20 left-4 right-16">
              <p className="text-white font-semibold text-lg mb-2">@{reel.username}</p>
              <p className="text-white text-sm">{reel.caption}</p>
            </div>

            {/* Side Actions */}
            <div className="absolute bottom-20 right-4 flex flex-col gap-6">
              <button className="flex flex-col items-center">
                <FaHeart className="w-8 h-8 text-white mb-1" />
                <span className="text-white text-xs">{reel.likes}</span>
              </button>
              <button className="flex flex-col items-center">
                <FaComment className="w-8 h-8 text-white mb-1" />
                <span className="text-white text-xs">{reel.comments}</span>
              </button>
              <button className="flex flex-col items-center">
                <FaShare className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
