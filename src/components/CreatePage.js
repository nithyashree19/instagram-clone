import React from 'react';
import { FaTimes, FaCamera, FaImage, FaVideo } from 'react-icons/fa';

export default function CreatePage({ isOpen, onClose }) {
  if (!isOpen) return null;

  const createOptions = [
    { id: 'photo', icon: FaCamera, title: 'Take Photo', description: 'Capture a new photo' },
    { id: 'gallery', icon: FaImage, title: 'Photo Gallery', description: 'Choose from gallery' },
    { id: 'video', icon: FaVideo, title: 'Video', description: 'Record or upload video' },
  ];

  return (
    <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={onClose}>
          <FaTimes className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Create</h1>
        <div className="w-6"></div>
      </div>

      {/* Create Options */}
      <div className="flex-1 p-4">
        <div className="space-y-4">
          {createOptions.map((option) => (
            <button
              key={option.id}
              className="flex items-center gap-4 w-full p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => alert(`${option.title} functionality coming soon!`)}
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <option.icon className="w-6 h-6 text-gray-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">{option.title}</h3>
                <p className="text-sm text-gray-500">{option.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors">
              <div className="text-2xl mb-2">📸</div>
              <span className="text-sm font-medium">Story</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors">
              <div className="text-2xl mb-2">🎥</div>
              <span className="text-sm font-medium">Reel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

