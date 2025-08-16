import React, { useState } from 'react';
import { FaHome, FaSearch, FaPlus, FaHeart, FaUser } from 'react-icons/fa';

export default function MobileNavigation({ onSearchClick }) {
  const [activeTab, setActiveTab] = useState('home');

  const handleSearchClick = () => {
    setActiveTab('search');
    if (onSearchClick) {
      onSearchClick();
    }
  };

  const navItems = [
    { 
      id: 'home', 
      icon: FaHome, 
      onClick: () => setActiveTab('home'),
      label: 'Home'
    },
    { 
      id: 'search', 
      icon: FaSearch, 
      onClick: handleSearchClick,
      label: 'Search'
    },
    { 
      id: 'create', 
      icon: FaPlus, 
      onClick: () => setActiveTab('create'),
      label: 'Create'
    },
    { 
      id: 'activity', 
      icon: FaHeart, 
      onClick: () => setActiveTab('activity'),
      label: 'Activity'
    },
    { 
      id: 'profile', 
      icon: FaUser, 
      onClick: () => setActiveTab('profile'),
      label: 'Profile'
    },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-50 safe-area-pb">
      <div className="flex items-center justify-around h-14 px-2">
        {navItems.map(({ id, icon: Icon, onClick, label }) => (
          <button
            key={id}
            onClick={onClick}
            className="flex flex-col items-center justify-center py-1 px-2 transition-colors min-w-0 flex-1"
            aria-label={label}
          >
            <Icon 
              className={`w-6 h-6 mb-1 ${
                activeTab === id 
                  ? 'text-gray-900' 
                  : 'text-gray-500 hover:text-gray-700'
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
