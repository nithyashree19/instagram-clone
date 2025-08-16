import React, { useState, useRef } from 'react';
import { FaBars, FaRegPaperPlane, FaTimes, FaHome, FaSearch, FaCompass, FaYoutube, FaHeart, FaPlusCircle, FaUser, FaCog } from 'react-icons/fa';

export default function MobileHeader({ suggested, onProfileClick, onSearchClick }) {
  const [showNavigation, setShowNavigation] = useState(false);
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    
    const currentX = e.touches.clientX;
    const deltaX = currentX - touchStartX.current;
    
    if (deltaX < -100) {
      setShowNavigation(true);
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

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
      <header 
        className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 flex justify-between items-center h-14 px-4 z-50"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-900 select-none tracking-wide">Instagram</h1>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="Direct messages">
            <FaRegPaperPlane className="w-5 h-5 text-gray-900" />
          </button>
          
          <button onClick={handleMenuClick} className="p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="Open menu">
            <FaBars className="w-5 h-5 text-gray-900" />
          </button>
        </div>
      </header>

      {showNavigation && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowNavigation(false)} aria-hidden="true" />
      )}

      <div className={`lg:hidden fixed top-0 right-0 h-screen w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${showNavigation ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 h-full overflow-y-auto">
          {/* FIXED: Shows "Menu" not "Suggestions for you" */}
          <div className="flex items-center justify-between mb-6 pt-4">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button onClick={() => setShowNavigation(false)} className="text-gray-500 hover:text-gray-700 p-1">
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onProfileClick({username: 'sumithra', avatar: 'https://randomuser.me/api/portraits/women/30.jpg'})}>
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
              <img src="https://randomuser.me/api/portraits/women/30.jpg" alt="Profile" className="rounded-full w-full h-full object-cover border border-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">sumithra</p>
              <p className="text-xs text-gray-500">View your profile</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-1">
            {navigationItems.map(({ id, icon: Icon, label }) => (
              <button key={id} className="flex items-center gap-4 w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors text-gray-900" onClick={() => { if (id === 'search' && onSearchClick) onSearchClick(); console.log(`Navigate to ${label}`); setShowNavigation(false); }}>
                <Icon className="w-6 h-6" />
                <span className="font-normal">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
