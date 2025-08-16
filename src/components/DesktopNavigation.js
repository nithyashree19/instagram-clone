import React, { useState } from 'react';
import { FaHome, FaSearch, FaYoutube, FaShoppingBag, FaUser } from 'react-icons/fa';

export default function DesktopNavigation() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: FaHome },
    { id: 'search', icon: FaSearch },
    { id: 'reels', icon: FaYoutube },
    { id: 'shop', icon: FaShoppingBag },
    { id: 'profile', icon: FaUser },
  ];

  return (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-white border-b border-gray-300 z-50">
      <div className="max-w-5xl mx-auto w-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 cursor-pointer">
          Instagram
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-60">
          <FaSearch className="w-4 h-4 text-gray-500 mr-3" />
          <input 
            type="text" 
            placeholder="Search"
            className="bg-transparent text-sm text-gray-900 placeholder-gray-500 w-full outline-none"
          />
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-6">
          {navItems.map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Icon 
                className={`w-6 h-6 ${activeTab === id ? 'text-gray-900' : 'text-gray-500'}`}
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
