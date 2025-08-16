import React from 'react';
import { FaHome, FaSearch, FaCompass, FaYoutube, FaRegPaperPlane, FaHeart, FaPlusCircle, FaUser, FaBars, FaEllipsisH } from 'react-icons/fa';

export default function Sidebar({ 
  onSearchClick, 
  onReelsClick, 
  onProfileClick, 
  onCreateClick, 
  onActivityClick, 
  onExploreClick,
  onHomeClick,
  activeTab // NEW PROP for tracking active section
}) {
  
  const navItems = [
    { id: 'home', icon: FaHome, label: 'Home', onClick: onHomeClick },
    { id: 'search', icon: FaSearch, label: 'Search', onClick: onSearchClick },
    { id: 'explore', icon: FaCompass, label: 'Explore', onClick: onExploreClick },
    { id: 'reels', icon: FaYoutube, label: 'Reels', onClick: onReelsClick },
    { id: 'messages', icon: FaRegPaperPlane, label: 'Messages', onClick: () => alert('Messages coming soon!') },
    { id: 'activity', icon: FaHeart, label: 'Notifications', onClick: onActivityClick },
    { id: 'create', icon: FaPlusCircle, label: 'Create', onClick: onCreateClick },
    { id: 'profile', icon: FaUser, label: 'Profile', onClick: onProfileClick },
  ];

  return (
    <nav className="flex flex-col gap-2 min-w-[245px] sticky top-0 p-4 h-screen border-r border-gray-200 bg-white">
      {/* Instagram Logo */}
      <div className="flex items-center mb-8 p-3 cursor-pointer" onClick={onHomeClick}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" 
          alt="Instagram" 
          className="w-24"
        />
      </div>
      
      {/* Navigation Items with Active States */}
      <div className="flex flex-col gap-1">
        {navItems.map(({ id, icon: Icon, label, onClick }) => (
          <button 
            key={id}
            onClick={onClick}
            className={`flex items-center gap-4 text-base font-normal rounded-lg p-3 transition-colors text-left ${
              activeTab === id 
                ? 'bg-gray-100 text-gray-900 font-semibold' 
                : 'text-gray-800 hover:bg-gray-50'
            }`}
          >
            <Icon className="w-6 h-6" /> 
            <span>{label}</span>
          </button>
        ))}
      </div>
      
      {/* Bottom Items */}
      <div className="mt-auto flex flex-col gap-1">
        <button className="flex items-center gap-4 text-gray-800 text-base font-normal hover:bg-gray-100 rounded-lg p-3 transition-colors text-left">
          <FaBars className="w-6 h-6" /> 
          <span>Threads</span>
        </button>
        <button className="flex items-center gap-4 text-gray-800 text-base font-normal hover:bg-gray-100 rounded-lg p-3 transition-colors text-left">
          <FaEllipsisH className="w-6 h-6" /> 
          <span>More</span>
        </button>
      </div>
    </nav>
  );
}
