import React, { useState } from 'react';
import { FaGrid, FaUserTag, FaCog, FaPlus, FaEllipsisH } from 'react-icons/fa';

export default function ProfilePage({ user, onClose }) {
  const [activeTab, setActiveTab] = useState('posts');
  
  const userPosts = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1529502669403-86f198b6587a?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col lg:hidden">
      {/* Profile Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={onClose}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
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
              <div className="flex justify-between items-center mb-2">
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

          <div className="flex gap-2">
            <button className="flex-1 bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-lg">
              Edit Profile
            </button>
            <button className="flex-1 bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-lg">
              Share Profile
            </button>
            <button className="bg-gray-200 text-gray-900 p-2 rounded-lg">
              <FaUserTag className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stories Highlights */}
        <div className="px-4 py-2">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-100">
                <FaPlus className="w-6 h-6 text-gray-500" />
              </div>
              <span className="text-xs text-gray-500 mt-1">New</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-t border-gray-200 mt-4">
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
