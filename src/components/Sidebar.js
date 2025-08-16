import React from 'react';
import { FaHome, FaSearch, FaCompass, FaYoutube, FaRegPaperPlane, FaHeart, FaPlusCircle, FaUserCircle, FaBars, FaEllipsisH } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-2 min-w-[245px] sticky top-0 p-4 h-screen border-r border-gray-200">
      {/* Instagram Logo */}
      <div className="flex items-center mb-8 p-3">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" 
          alt="Instagram" 
          className="w-24"
        />
      </div>
      
      {/* Navigation Items */}
      <div className="flex flex-col gap-1">
        <a href="#" className="flex items-center gap-4 text-gray-800 text-base font-normal hover:bg-gray-100 rounded-lg p-3 transition-colors">
          <FaHome className="w-6 h-6" /> 
          <span>Home</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-800 text-base font-normal hover:bg-gray-100 rounded-lg p-3 transition-colors">
          <FaSearch className="w-6 h-6" /> 
          <span>Search</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-800 text-base font-normal hover:bg-gray-100 rounded-lg p-3 transition-colors">
          <FaCompass className="w-6 h-6" /> 
          <span>Explore</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-800 text-base font-normal hover:bg-gray-100 rounded-lg p-3 transition-colors">
          <FaYoutube className="w-6 h-6" /> 
          <span>Reels</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-800 text-base font-normal hover:bg-gray-100 rounded-lg p-3 transition-colors">
          <FaRegPaperPlane className="w-6 h-6" /> 
          <span>Messages</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-800 text-base font-normal hover:bg-gray-100 rounded-lg p-3 transition-colors">
          <FaHeart className="w-6 h-6" /> 
          <span>Notifications</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-800 text-base font-normal hover:bg-gray-100 rounded-lg p-3 transition-colors">
          <FaPlusCircle className="w-6 h-6" /> 
          <span>Create</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-800 text-base font-normal hover:bg-gray-100 rounded-lg p-3 transition-colors">
          <FaUserCircle className="w-6 h-6" /> 
          <span>Profile</span>
        </a>
      </div>
      
      {/* Bottom Items */}
      <div className="mt-auto flex flex-col gap-1">
        <a href="#" className="flex items-center gap-4 text-gray-800 text-base font-normal hover:bg-gray-100 rounded-lg p-3 transition-colors">
          <FaBars className="w-6 h-6" /> 
          <span>Threads</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-800 text-base font-normal hover:bg-gray-100 rounded-lg p-3 transition-colors">
          <FaEllipsisH className="w-6 h-6" /> 
          <span>More</span>
        </a>
      </div>
    </nav>
  );
}
