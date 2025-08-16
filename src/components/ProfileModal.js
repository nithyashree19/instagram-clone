import React from 'react';
import { FaTimes } from 'react-icons/fa';

export default function ProfileModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4 animate-slideIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Profile</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex flex-col items-center">
          <img 
            src={user.avatar} 
            alt={user.username}
            className="w-32 h-32 rounded-full border-4 border-gray-200 mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">{user.username}</h4>
          {user.bio && (
            <p className="text-gray-600 text-center mb-4">{user.bio}</p>
          )}
          
          {/* Show stats if it's your profile */}
          {(user.posts || user.followers || user.following) && (
            <div className="flex justify-between w-full mb-4 text-center">
              <div>
                <p className="font-semibold text-lg">{user.posts || 0}</p>
                <p className="text-sm text-gray-500">Posts</p>
              </div>
              <div>
                <p className="font-semibold text-lg">{user.followers?.toLocaleString() || 0}</p>
                <p className="text-sm text-gray-500">Followers</p>
              </div>
              <div>
                <p className="font-semibold text-lg">{user.following || 0}</p>
                <p className="text-sm text-gray-500">Following</p>
              </div>
            </div>
          )}
          
          {/* Only Message Button - Follow Button Removed */}
          <div className="w-full">
            <button className="w-full border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
