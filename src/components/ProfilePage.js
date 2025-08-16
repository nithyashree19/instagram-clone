import React, { useState } from 'react';
import { FaGrid, FaUserTag, FaEllipsisH, FaArrowLeft } from 'react-icons/fa';

export default function ProfilePage({ user, onClose, isOpen }) {
  const [activeTab, setActiveTab] = useState('posts');
  
  if (!isOpen) return null;
  
  const userPosts = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1529502669403-86f198b6587a?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col">
      {/* Profile Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={onClose} className="p-1">
          <FaArrowLeft className="w-5 h-5 text-gray-900" />
        </button>
        <span className="font-semibold text-gray-900">{user?.username || 'sumithra'}</span>
        <button>
          <FaEllipsisH className="w-5 h-5 text-gray-900" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Profile Info */}
        <div className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
              <img
                src={user?.avatar || 'https://randomuser.me/api/portraits/women/30.jpg'}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="font-semibold text-lg">{user?.posts || 127}</div>
                  <div className="text-gray-500 text-sm">Posts</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">{user?.followers?.toLocaleString() || '1,245'}</div>
                  <div className="text-gray-500 text-sm">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">{user?.following || 389}</div>
                  <div className="text-gray-500 text-sm">Following</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-gray-900">{user?.username || 'sumithra'}</h2>
            <p className="text-gray-600 text-sm mt-1">{user?.bio || 'Travel enthusiast 🌍 | Photography lover 📸'}</p>
          </div>

          <div className="flex gap-2 mb-4">
            <button className="flex-1 bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-lg">
              Edit Profile
            </button>
            <button className="flex-1 bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-lg">
              Share Profile
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-t border-gray-200">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex-1 py-3 flex items-center justify-center ${
              activeTab === 'posts'
                ? 'border-t-2 border-gray-900 text-gray-900'
                : 'text-gray-500'
            }`}
          >
            <FaGrid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab('tagged')}
            className={`flex-1 py-3 flex items-center justify-center ${
              activeTab === 'tagged'
                ? 'border-t-2 border-gray-900 text-gray-900'
                : 'text-gray-500'
            }`}
          >
            <FaUserTag className="w-5 h-5" />
          </button>
        </div>

        {/* Posts Grid */}
        <div className="p-1">
          <div className="grid grid-cols-3 gap-1">
            {userPosts.map((photo, index) => (
              <div key={index} className="aspect-square">
                <img
                  src={photo}
                  alt="Post"
                  className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
