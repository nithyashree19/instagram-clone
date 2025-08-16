import React, { useState } from 'react';
import { FaHome, FaSearch, FaYoutube, FaShoppingBag, FaUser } from 'react-icons/fa';

export default function MobileNavigation({ onSearchClick, onProfileClick, activeTab, setActiveTab }) {
  
  const handleNavigation = (tabId) => {
    setActiveTab(tabId);
    
    switch(tabId) {
      case 'search':
        if (onSearchClick) {
          onSearchClick();
        }
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
      case 'home':
        // Navigate to home - close any modals
        if (onSearchClick) {
          // This will close search modal
          window.location.reload(); // Simple way to go back to home
        }
        break;
      default:
        console.log(`Navigating to ${tabId}`);
        break;
    }
  };

  const navItems = [
    { id: 'home', icon: FaHome },
    { id: 'search', icon: FaSearch },
    { id: 'reels', icon: FaYoutube },
    { id: 'shop', icon: FaShoppingBag },
    { id: 'profile', icon: FaUser }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around h-12 px-1">
        {navItems.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleNavigation(id)}
            className="flex flex-col items-center justify-center py-1 px-2 transition-colors min-w-0 flex-1"
            aria-label={`Navigate to ${id}`}
          >
            <Icon 
              className={`w-6 h-6 ${
                activeTab === id 
                  ? 'text-gray-900' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}
