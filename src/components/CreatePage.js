import React from 'react';
import { FaTimes, FaCamera, FaImage, FaVideo, FaBookOpen, FaMicrophone } from 'react-icons/fa';

export default function CreatePage({ isOpen, onClose }) {
  if (!isOpen) return null;

  const createOptions = [
    { 
      id: 'photo', 
      icon: FaCamera, 
      title: 'Post', 
      description: 'Share a photo or video',
      color: 'bg-blue-500'
    },
    { 
      id: 'story', 
      icon: FaBookOpen, 
      title: 'Story', 
      description: 'Share to your story',
      color: 'bg-purple-500'
    },
    { 
      id: 'reel', 
      icon: FaVideo, 
      title: 'Reel', 
      description: 'Create a short video',
      color: 'bg-red-500'
    },
    { 
      id: 'live', 
      icon: FaMicrophone, 
      title: 'Live', 
      description: 'Go live with your followers',
      color: 'bg-pink-500'
    },
  ];

  const templates = [
    {
      id: 1,
      name: 'Story Template 1',
      preview: 'https://images.unsplash.com/photo-1586953135003-5ba4d4c24203?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Story Template 2', 
      preview: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'Post Template 1',
      preview: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* FIXED: Header with Close Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={onClose}>
          <FaTimes className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Create</h1>
        <div className="w-6"></div>
      </div>

      {/* Create Options */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">Create New</h2>
          <div className="grid grid-cols-2 gap-4">
            {createOptions.map((option) => (
              <button
                key={option.id}
                className="flex flex-col items-center gap-3 p-6 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={() => alert(`Creating ${option.title}...`)}
              >
                <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">{option.title}</h3>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">Templates</h2>
          <div className="grid grid-cols-3 gap-3">
            {templates.map((template) => (
              <button
                key={template.id}
                className="aspect-[9/16] rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
                onClick={() => alert(`Using ${template.name}...`)}
              >
                <img
                  src={template.preview}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button 
              className="flex items-center gap-3 w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
              onClick={() => alert('Opening camera...')}
            >
              <FaCamera className="w-6 h-6 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">Take Photo</p>
                <p className="text-sm text-gray-500">Capture a new moment</p>
              </div>
            </button>
            
            <button 
              className="flex items-center gap-3 w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
              onClick={() => alert('Opening gallery...')}
            >
              <FaImage className="w-6 h-6 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">Choose from Gallery</p>
                <p className="text-sm text-gray-500">Select existing photos</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
