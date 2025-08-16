import React, { useState } from 'react';

export default function Suggestions({ suggested, onProfileClick }) {
  const [followStates, setFollowStates] = useState(
    suggested.reduce((acc, user) => ({ ...acc, [user.id]: false }), {})
  );

  // Current user profile state - ONLY THIS IS ENHANCED
  const [currentUser, setCurrentUser] = useState({
    username: 'sumithra',
    avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
    bio: 'Travel enthusiast 🌍 | Photography lover 📸',
    posts: 127,
    followers: 1245,
    following: 389
  });

  const toggleFollow = (userId) => {
    setFollowStates(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  return (
    <div className="sticky top-0 w-80 p-4">
      {/* Enhanced Current User Profile - ONLY CHANGE */}
      <div className="flex items-center justify-between mb-6">
        <div 
          className="flex gap-3 items-center cursor-pointer"
          onClick={() => onProfileClick({
            username: currentUser.username,
            avatar: currentUser.avatar,
            bio: currentUser.bio,
            posts: currentUser.posts,
            followers: currentUser.followers,
            following: currentUser.following
          })}
        >
          <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
            <img 
              src={currentUser.avatar} 
              alt="Profile" 
              className="rounded-full w-full h-full object-cover border border-white"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{currentUser.username}</p>
            <p className="text-xs text-gray-500">{currentUser.bio}</p>
          </div>
        </div>
        <button className="text-sm text-blue-500 font-semibold hover:text-blue-700">
          Switch
        </button>
      </div>
      
      {/* Suggestions Header - UNCHANGED */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-500 font-semibold text-sm">Suggested for you</p>
        <button className="text-gray-900 text-sm font-semibold hover:text-gray-700">
          See All
        </button>
      </div>
      
      {/* Suggested Users - COMPLETELY UNCHANGED */}
      {suggested.map(user => (
        <div key={user.id} className="flex items-center justify-between mb-3">
          <div 
            className="flex gap-3 items-center cursor-pointer flex-1"
            onClick={() => onProfileClick(user)}
          >
            <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
              <img 
                src={user.avatar} 
                alt={user.username} 
                className="rounded-full w-full h-full object-cover border border-white"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{user.username}</p>
              <p className="text-xs text-gray-500">Suggested for you</p>
            </div>
          </div>
          <button 
            className={`text-sm font-semibold px-3 py-1 rounded transition-colors ${
              followStates[user.id] 
                ? 'bg-gray-200 text-gray-600 hover:bg-gray-300' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            onClick={() => toggleFollow(user.id)}
          >
            {followStates[user.id] ? 'Following' : 'Follow'}
          </button>
        </div>
      ))}
    </div>
  );
}
