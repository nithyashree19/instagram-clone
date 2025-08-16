import React, { useState } from 'react';
import { FaHome, FaSearch, FaPlus, FaHeart, FaUser } from 'react-icons/fa';

export default function MobileNavigation({ onSearchClick, onProfileClick }) {
  const [activeTab, setActiveTab] = useState('home');

  const handleNavigation = (tabId) => {
    setActiveTab(tabId);
    
    switch(tabId) {
      case 'search':
        if (onSearchClick) onSearchClick();
        break;
      case 'profile':
        if (onProfileClick) {
          onProfileClick({
            username: 'sumithra',
            avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
            bio: 'Travel enthusiast 🌍 | Photography lover 📸',
            posts: 127,
            followers: 1245,
            following: 389
          });
        }
        break;
      default:
        // Handle other navigation
        console.log(`Navigate to ${tabId}`);
    }
  };

  const navItems = [
    { id: 'home', icon: FaHome, label: 'Home' },
    { id: 'search', icon: FaSearch, label: 'Search' },
    { id: 'create', icon: FaPlus, label: 'Create' },
    { id: 'activity', icon: FaHeart, label: 'Activity' },
    { id: 'profile', icon: FaUser, label: 'Profile' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-50 safe-area-pb">
      <div className="flex items-center justify-around h-16 px-1">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => handleNavigation(id)}
            className="flex flex-col items-center justify-center py-2 px-3 transition-colors min-w-0 flex-1"
            aria-label={label}
          >
            <Icon 
              className={`w-6 h-6 mb-1 ${
                activeTab === id 
                  ? 'text-gray-900' 
                  : 'text-gray-500'
              }`}
            />
            <span 
              className={`text-xs ${
                activeTab === id 
                  ? 'text-gray-900 font-medium' 
                  : 'text-gray-500'
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
