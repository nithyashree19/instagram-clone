import React, { useState } from 'react';
import { FaHome, FaSearch, FaYoutube, FaShoppingBag, FaUser } from 'react-icons/fa';

export default function MobileNavigation() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: FaHome },
    { id: 'search', icon: FaSearch },
    { id: 'reels', icon: FaYoutube },
    { id: 'shop', icon: FaShoppingBag },
    { id: 'profile', icon: FaUser },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 px-1 z-50">
      <div className="flex items-center justify-around h-12">
        {navItems.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className="flex-1 flex items-center justify-center py-2 transition-colors"
          >
            <Icon 
              className={`w-6 h-6 ${activeTab === id ? 'text-gray-900' : 'text-gray-500'}`}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}
