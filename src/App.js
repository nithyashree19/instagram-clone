import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Stories from './components/Stories';
import Post from './components/Post';
import Suggestions from './components/Suggestions';
import MobileNavigation from './components/MobileNavigation';
import MobileHeader from './components/MobileHeader';
import StoryModal from './components/StoryModal';
import ProfileModal from './components/ProfileModal';
import SearchModal from './components/SearchModal';
import ProfilePage from './components/ProfilePage'; // NEW IMPORT
import { stories, posts, suggested } from './data/mockData';

export default function App() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfilePage, setShowProfilePage] = useState(false); // NEW STATE
  const [currentUser, setCurrentUser] = useState({
    username: 'sumithra',
    avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
    bio: 'Travel enthusiast 🌍 | Photography lover 📸',
    posts: 127,
    followers: 1245,
    following: 389
  });

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleProfileClick = (user) => {
    // Check if it's mobile and user is viewing their own profile
    if (window.innerWidth < 1024 && user.username === 'sumithra') {
      setShowProfilePage(true);
    } else {
      setSelectedProfile(user);
    }
  };

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const closeModal = () => {
    setSelectedStory(null);
    setSelectedProfile(null);
    setShowSearch(false);
    setShowProfilePage(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile Header */}
      <MobileHeader 
        suggested={suggested}
        onProfileClick={handleProfileClick}
      />

      {/* Desktop Layout */}
      <div className="hidden lg:flex max-w-7xl mx-auto bg-gray-50">
        <div className="sticky top-0 h-screen">
          <Sidebar onSearchClick={handleSearchClick} />
        </div>
        
        <div className="flex-1 max-w-2xl mx-auto px-8 py-8">
          <div className="space-y-6">
            <Stories stories={stories} onStoryClick={handleStoryClick} />
            <div className="space-y-6">
              {posts.map(post => (
                <Post 
                  key={post.id} 
                  post={post} 
                  onProfileClick={handleProfileClick}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-80 py-8">
          <Suggestions 
            suggested={suggested} 
            onProfileClick={handleProfileClick}
          />
        </div>
      </div>
      
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="pt-14 pb-20">
          <div className="max-w-md mx-auto px-4 py-4">
            <Stories stories={stories} onStoryClick={handleStoryClick} />
            <div className="mt-6 space-y-6">
              {posts.map(post => (
                <Post 
                  key={post.id} 
                  post={post} 
                  onProfileClick={handleProfileClick}
                />
              ))}
            </div>
          </div>
        </div>
        <MobileNavigation 
          onSearchClick={handleSearchClick}
          onProfileClick={handleProfileClick}
        />
      </div>

      {/* Modals */}
      {selectedStory && (
        <StoryModal 
          story={selectedStory} 
          onClose={closeModal}
        />
      )}
      
      {selectedProfile && !showProfilePage && (
        <ProfileModal 
          user={selectedProfile} 
          onClose={closeModal}
        />
      )}

      <SearchModal
        isOpen={showSearch}
        onClose={closeModal}
        posts={posts}
        onProfileClick={handleProfileClick}
      />

      {/* Mobile Profile Page - NEW */}
      {showProfilePage && (
        <ProfilePage
          user={currentUser}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
