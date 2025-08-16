import React, { useState } from 'react';
import { FaBars, FaRegPaperPlane, FaTimes, FaHome, FaSearch, FaCompass, FaYoutube, FaHeart, FaPlusCircle, FaUser, FaCog, FaBookmark } from 'react-icons/fa';

export default function MobileHeader({ onProfileClick, onSearchClick }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 flex justify-between items-center h-14 px-4 z-50">
        <button onClick={() => setShowMenu(true)} className="p-2 rounded-md hover:bg-gray-100 transition-colors">
          <FaBars className="w-5 h-5 text-gray-900" />
        </button>
        <h1 className="text-xl font-bold text-gray-900 select-none tracking-wide">Instagram</h1>
        <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
          <FaRegPaperPlane className="w-5 h-5 text-gray-900" />
        </button>
      </header>

      {showMenu && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowMenu(false)} />
      )}

      <div className={`lg:hidden fixed top-0 left-0 h-screen w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-6 pt-4">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button onClick={() => setShowMenu(false)} className="text-gray-500 hover:text-gray-700 p-1">
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100" onClick={() => { onProfileClick && onProfileClick({username: 'sumithra', avatar: 'https://randomuser.me/api/portraits/women/30.jpg'}); setShowMenu(false); }}>
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
              <img src="https://randomuser.me/api/portraits/women/30.jpg" alt="Profile" className="rounded-full w-full h-full object-cover border border-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">sumithra</p>
              <p className="text-xs text-gray-500">View your profile</p>
            </div>
          </div>

          <div className="space-y-1">
            <button onClick={() => { setShowMenu(false); }} className="flex items-center gap-4 w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors text-gray-900">
              <FaHome className="w-6 h-6" />
              <span className="font-normal">Home</span>
            </button>
            <button onClick={() => { onSearchClick && onSearchClick(); setShowMenu(false); }} className="flex items-center gap-4 w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors text-gray-900">
              <FaSearch className="w-6 h-6" />
              <span className="font-normal">Search</span>
            </button>
            <button onClick={() => { setShowMenu(false); }} className="flex items-center gap-4 w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors text-gray-900">
              <FaCompass className="w-6 h-6" />
              <span className="font-normal">Explore</span>
            </button>
            <button onClick={() => { setShowMenu(false); }} className="flex items-center gap-4 w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors text-gray-900">
              <FaYoutube className="w-6 h-6" />
              <span className="font-normal">Reels</span>
            </button>
            <button onClick={() => { setShowMenu(false); }} className="flex items-center gap-4 w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors text-gray-900">
              <FaPlusCircle className="w-6 h-6" />
              <span className="font-normal">Create</span>
            </button>
            <button onClick={() => { setShowMenu(false); }} className="flex items-center gap-4 w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors text-gray-900">
              <FaBookmark className="w-6 h-6" />
              <span className="font-normal">Saved</span>
            </button>
            <button onClick={() => { setShowMenu(false); }} className="flex items-center gap-4 w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors text-gray-900">
              <FaCog className="w-6 h-6" />
              <span className="font-normal">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
