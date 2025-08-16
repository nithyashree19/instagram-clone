import React, { useState, useRef } from 'react';
import { FaBars, FaRegPaperPlane } from 'react-icons/fa';

export default function MobileHeader({ suggested, onProfileClick }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [followStates, setFollowStates] = useState(
    suggested.reduce((acc, user) => ({ ...acc, [user.id]: false }), {})
  );
  const touchStartX = useRef(null);

  const toggleFollow = (userId) => {
    setFollowStates(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    
    const currentX = e.touches.clientX;
    const deltaX = currentX - touchStartX.current;
    
    // Swipe right to open suggestions
    if (deltaX > 100) {
      setShowSuggestions(true);
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  // FIXED: Only show suggestions on swipe, not on menu button click
  const handleMenuClick = () => {
    // Do nothing on menu click - only respond to swipe
    console.log('Menu clicked - use swipe to open suggestions');
  };

  return (
    <>
      {/* Mobile Header */}
      <header 
        className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 flex justify-between items-center h-14 px-4 z-50"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={handleMenuClick} // FIXED: No longer opens suggestions
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Menu (swipe right for suggestions)"
        >
          <FaBars className="w-5 h-5 text-gray-900" />
        </button>

        <h1 className="text-xl font-bold text-gray-900 select-none tracking-wide">Instagram</h1>
        
        <button
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Direct messages"
        >
          <FaRegPaperPlane className="w-5 h-5 text-gray-900" />
        </button>
      </header>

      {/* Overlay */}
      {showSuggestions && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowSuggestions(false)}
          aria-hidden="true"
        />
      )}

      {/* Suggestions Drawer - ONLY opens on swipe */}
      <div
        className={`lg:hidden fixed top-14 right-0 h-screen w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          showSuggestions ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Suggestions for you</h2>
            <button
              onClick={() => setShowSuggestions(false)}
              className="text-gray-500 hover:text-gray-700 p-1"
            >
              ✕
            </button>
          </div>

          {/* Current User Profile */}
          <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
            <div 
              className="flex gap-3 items-center cursor-pointer"
              onClick={() => onProfileClick({
                username: 'sumithra',
                avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
                bio: 'Travel enthusiast 🌍 | Photography lover 📸',
                posts: 127,
                followers: 1245,
                following: 389
              })}
            >
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
                <img 
                  src="https://randomuser.me/api/portraits/women/30.jpg" 
                  alt="Profile" 
                  className="rounded-full w-full h-full object-cover border border-white"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">sumithra</p>
                <p className="text-xs text-gray-500">Your profile</p>
              </div>
            </div>
          </div>

          {/* Suggested Users */}
          <div className="space-y-3">
            {suggested.map(user => (
              <div key={user.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div 
                  className="flex gap-3 items-center cursor-pointer flex-1"
                  onClick={() => onProfileClick(user)}
                >
                  <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
                    <img 
                      src={user.avatar} 
                      alt={user.username} 
                      className="rounded-full w-full h-full object-cover border border-white"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{user.username}</p>
                    <p className="text-xs text-gray-500 truncate">{user.bio || 'Suggested for you'}</p>
                  </div>
                </div>
                <button 
                  className={`text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors ${
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
        </div>
      </div>
    </>
  );
}
