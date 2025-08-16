import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function StoryModal({ story, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (currentImageIndex < story.storyImages.length - 1) {
            setCurrentImageIndex(prev => prev + 1);
            return 0;
          } else {
            onClose();
            return 100;
          }
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [currentImageIndex, story.storyImages.length, onClose]);

  if (!story) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="relative max-w-md w-full mx-4">
        {/* Progress bars */}
        <div className="flex gap-1 mb-4">
          {story.storyImages.map((_, index) => (
            <div key={index} className="flex-1 h-1 bg-gray-600 rounded">
              <div 
                className="h-full bg-white rounded transition-all duration-100"
                style={{ 
                  width: index < currentImageIndex ? '100%' : 
                         index === currentImageIndex ? `${progress}%` : '0%'
                }}
              />
            </div>
          ))}
        </div>

        {/* Story header */}
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={story.avatar} 
            alt={story.username}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <span className="text-white font-semibold">{story.username}</span>
          <button 
            onClick={onClose}
            className="ml-auto text-white hover:text-gray-300"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Story image */}
        <div className="relative">
          <img 
            src={story.storyImages[currentImageIndex]}
            alt="Story"
            className="w-full rounded-lg"
          />
        </div>

        {/* Navigation */}
        <div className="absolute inset-0 flex">
          <button 
            className="flex-1"
            onClick={() => {
              if (currentImageIndex > 0) {
                setCurrentImageIndex(prev => prev - 1);
                setProgress(0);
              }
            }}
          />
          <button 
            className="flex-1"
            onClick={() => {
              if (currentImageIndex < story.storyImages.length - 1) {
                setCurrentImageIndex(prev => prev + 1);
                setProgress(0);
              } else {
                onClose();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
