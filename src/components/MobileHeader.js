import React, { useState, useRef } from 'react';
import { FaBars, FaRegPaperPlane, FaTimes, FaHome, FaSearch, FaCompass, FaYoutube, FaHeart, FaPlusCircle, FaUser, FaCog } from 'react-icons/fa';

export default function MobileHeader({ suggested, onProfileClick, onSearchClick }) {
  const [showNavigation, setShowNavigation] = useState(false);
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
    
    // Swipe right to open navigation from LEFT side
    if (deltaX > 100) {
      setShowNavigation(true);
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  // Menu button opens LEFT navigation
  const handleMenuClick = () => {
    setShowNavigation(true);
  };

  const navigationItems = [
    { id: 'home', icon: FaHome, label: 'Home' },
    { id: 'search', icon: FaSearch, label: 'Search' },
    { id: 'explore', icon: FaCompass, label: 'Explore' },
    { id: 'reels', icon: FaYoutube, label: 'Reels' },
    { id: 'create', icon: FaPlusCircle, label: 'Create' },
    { id: 'activity', icon: FaHeart, label: 'Activity' },
    { id: 'profile', icon: FaUser, label: 'Profile' },
    { id: 'settings', icon: FaCog, label: 'Settings' },
  ];

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
          onClick={handleMenuClick}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Open menu"
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
      {showNavigation && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowNavigation(false)}
          aria-hidden="true"
        />
      )}

      {/* MOVED BACK TO LEFT SIDE: Navigation Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-screen w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          showNavigation ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pt-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" 
              alt="Instagram" 
              className="w-24"
            />
            <button
              onClick={() => setShowNavigation(false)}
              className="text-gray-500 hover:text-gray-700 p-1"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Current User Profile */}
          <div 
            className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
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
              <p className="text-xs text-gray-500">View your profile</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="space-y-1 mb-6">
            {navigationItems.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                className="flex items-center gap-4 w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors text-gray-900"
                onClick={() => {
                  if (id === 'search' && onSearchClick) {
                    onSearchClick();
                  }
                  console.log(`Navigate to ${label}`);
                  setShowNavigation(false);
                }}
              >
                <Icon className="w-6 h-6" />
                <span className="font-normal">{label}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <hr className="border-gray-200 mb-6" />

          {/* Suggestions Section */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Suggestions for you</h3>
            <div className="space-y-3">
              {suggested.slice(0, 3).map(user => (
                <div key={user.id} className="flex items-center justify-between">
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
                      <p className="text-xs text-gray-500 truncate">{user.bio || 'Suggested for you'}</p>
                    </div>
                  </div>
                  <button 
                    className={`text-xs font-semibold px-3 py-1 rounded-lg transition-colors ${
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
            <button className="text-blue-500 text-sm font-semibold mt-3 hover:text-blue-700">
              See all suggestions
            </button>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-gray-200 text-xs text-gray-400 space-y-2">
            <div className="flex flex-wrap gap-3">
              <span>About</span>
              <span>Help</span>
              <span>Press</span>
              <span>Terms</span>
            </div>
            <p className="mt-2">© 2025 Instagram Clone</p>
          </div>
        </div>
      </div>
    </>
  );
}
