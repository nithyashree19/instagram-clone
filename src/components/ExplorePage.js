import React from 'react';
import { FaTimes, FaHeart, FaComment } from 'react-icons/fa';

export default function ExplorePage({ isOpen, onClose }) {
  if (!isOpen) return null;

  const exploreData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
      likes: 1523,
      comments: 89,
      type: 'photo'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=600&q=80',
      likes: 892,
      comments: 45,
      type: 'photo'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1516571934555-bf60624ba0e6?auto=format&fit=crop&w=600&q=80',
      likes: 2341,
      comments: 156,
      type: 'video'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
      likes: 678,
      comments: 34,
      type: 'photo'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be5?auto=format&fit=crop&w=600&q=80',
      likes: 1045,
      comments: 67,
      type: 'photo'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&w=600&q=80',
      likes: 1789,
      comments: 123,
      type: 'video'
    }
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* FIXED: Header with Close Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={onClose}>
          <FaTimes className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Explore</h1>
        <div className="w-6"></div>
      </div>

      {/* Explore Grid */}
      <div className="flex-1 overflow-y-auto p-1">
        <div className="grid grid-cols-3 gap-1 max-w-4xl mx-auto">
          {exploreData.map((item) => (
            <div
              key={item.id}
              className="aspect-square cursor-pointer hover:opacity-80 transition-opacity relative group"
            >
              <img
                src={item.image}
                alt="Explore content"
                className="w-full h-full object-cover"
              />
              
              {item.type === 'video' && (
                <div className="absolute top-2 right-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l7-5-7-5z"/>
                  </svg>
                </div>
              )}
              
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1">
                    <FaHeart className="w-5 h-5" />
                    <span className="font-semibold">{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaComment className="w-5 h-5" />
                    <span className="font-semibold">{item.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
