import React, { useState } from 'react';
import { FaHome, FaSearch, FaPlusCircle, FaHeart, FaUser } from 'react-icons/fa';

export default function MobileNavigation({ 
  onHomeClick,
  onSearchClick, 
  onCreateClick,
  onActivityClick,
  onProfileClick,
  activeTab,
  setActiveTab
}) {

  const handleNavigation = (tabId) => {
    console.log(`Navigating to: ${tabId}`); // For debugging
    setActiveTab(tabId);
    
    // FIXED: Proper navigation for each icon
    switch(tabId) {
      case 'home':
        console.log('Home clicked');
        if (onHomeClick) onHomeClick();
        break;
      case 'search':
        console.log('Search clicked');
        if (onSearchClick) onSearchClick();
        break;
      case 'create':
        console.log('Create clicked');
        if (onCreateClick) onCreateClick();
        break;
      case 'activity':
        console.log('Activity clicked');
        if (onActivityClick) onActivityClick();
        break;
      case 'profile':
        console.log('Profile clicked');
        if (onProfileClick) onProfileClick();
        break;
      default:
        console.log(`Unknown navigation: ${tabId}`);
        break;
    }
  };

  const navItems = [
    { id: 'home', icon: FaHome, label: 'Home' },
    { id: 'search', icon: FaSearch, label: 'Search' },
    { id: 'create', icon: FaPlusCircle, label: 'Create' },
    { id: 'activity', icon: FaHeart, label: 'Activity' },
    { id: 'profile', icon: FaUser, label: 'Profile' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-50">
      <div className="flex items-center justify-around h-14 px-1">
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
