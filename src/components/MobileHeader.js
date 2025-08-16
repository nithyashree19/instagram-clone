import React, { useState, useRef } from 'react';
import { FaBars, FaRegPaperPlane, FaTimes, FaHome, FaSearch, FaCompass, FaYoutube, FaHeart, FaPlusCircle, FaUser, FaCog, FaBookmark, FaHistory, FaClock } from 'react-icons/fa';

export default function MobileHeader({ suggested, onProfileClick, onSearchClick }) {
  const [showMenu, setShowMenu] = useState(false);
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    
    const currentX = e.touches.clientX;
    const deltaX = currentX - touchStartX.current;
    
    // Swipe right to open menu
    if (deltaX > 100) {
      setShowMenu(true);
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  // FIXED: Menu button opens proper navigation menu
  const handleMenuClick = () => {
    setShowMenu(true);
  };

  const mainMenuItems = [
    { id: 'profile', icon: FaUser, label: 'Your Profile' },
    { id: 'saved', icon: FaBookmark, label: 'Saved' },
    { id: 'activity', icon: FaClock, label: 'Your Activity' },
    { id: 'settings', icon: FaCog, label: 'Settings' },
    { id: 'help', icon: '?', label: 'Help' },
  ];

  const quickActions = [
    { id: 'home', icon: FaHome, label: 'Home' },
    { id: 'search', icon: FaSearch, label: 'Search' },
    { id: 'explore', icon: FaCompass, label: 'Explore' },
    { id: 'reels', icon: FaYoutube, label: 'Reels' },
    { id: 'create', icon: FaPlusCircle, label: 'Create' },
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
      {showMenu && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowMenu(false)}
          aria-hidden="true"
        />
      )}

      {/* COMPLETELY FIXED: Navigation Menu from LEFT side */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-screen w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 h-full overflow-y-auto">
          {/* Header - FIXED: Shows navigation menu title */}
          <div className="flex items-center justify-between mb-6 pt-4">
            <div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" 
                alt="Instagram" 
                className="w-20"
              />
            </div>
            <button
              onClick={() => setShowMenu(false)}
              className="text-gray-500 hover:text-gray-700 p-1"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Current User Profile */}
          <div 
            className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => {
              onProfileClick && onProfileClick({
                username: 'sumithra',
                avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
                bio: 'Travel enthusiast 🌍 | Photography lover 📸',
                posts: 127,
                followers: 1245,
                following: 389
              });
              setShowMenu(false);
            }}
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
              <p className="text-xs text-gray-500">View profile</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  className="flex flex-col items-center gap-2 p-3 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => {
                    if (id === 'search' && onSearchClick) {
                      onSearchClick();
                    }
                    console.log(`Navigate to ${label}`);
                    setShowMenu(false);
                  }}
                >
                  <Icon className="w-6 h-6 text-gray-900" />
                  <span className="text-xs text-gray-600">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Menu Items */}
          <div className="space-y-1 mb-6">
            {mainMenuItems.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                className="flex items-center gap-4 w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors text-gray-900"
                onClick={() => {
                  console.log(`Navigate to ${label}`);
                  setShowMenu(false);
                }}
              >
                {Icon === '?' ? (
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-600">?</span>
                  </div>
                ) : (
                  <Icon className="w-6 h-6" />
                )}
                <span className="font-normal">{label}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <hr className="border-gray-200 mb-4" />

          {/* Suggestions - Small section */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 mb-3">Discover People</h3>
            <div className="space-y-2">
              {suggested && suggested.slice(0, 2).map(user => (
                <div key={user.id} className="flex items-center justify-between">
                  <div 
                    className="flex gap-2 items-center cursor-pointer flex-1"
                    onClick={() => onProfileClick && onProfileClick(user)}
                  >
                    <div className="w-8 h-8 rounded-full">
                      <img 
                        src={user.avatar} 
                        alt={user.username} 
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-900">{user.username}</p>
                    </div>
                  </div>
                  <button className="text-xs font-semibold px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-gray-200 text-xs text-gray-400">
            <p>© 2025 Instagram Clone</p>
          </div>
        </div>
      </div>
    </>
  );
}
