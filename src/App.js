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
import ProfilePage from './components/ProfilePage';
import ReelsPage from './components/ReelsPage';
import ActivityPage from './components/ActivityPage'; // NEW IMPORT
import CreatePage from './components/CreatePage'; // NEW IMPORT
import { stories, posts, suggested } from './data/mockData';

export default function App() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfilePage, setShowProfilePage] = useState(false);
  const [showReels, setShowReels] = useState(false);
  const [showActivity, setShowActivity] = useState(false); // NEW STATE
  const [showCreate, setShowCreate] = useState(false); // NEW STATE
  const [activeTab, setActiveTab] = useState('home');
  
  const currentUser = {
    username: 'sumithra',
    avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
    bio: 'Travel enthusiast 🌍 | Photography lover 📸',
    posts: 127,
    followers: 1245,
    following: 389
  };

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleProfileClick = (user) => {
    if (window.innerWidth < 1024) {
      setShowProfilePage(true);
      setActiveTab('profile');
    } else {
      setSelectedProfile(user);
    }
  };

  // FIXED: Proper navigation handlers
  const handleHomeClick = () => {
    closeModal();
    setActiveTab('home');
  };

  const handleSearchClick = () => {
    setShowSearch(true);
    setActiveTab('search');
  };

  const handleCreateClick = () => {
    setShowCreate(true);
    setActiveTab('create');
  };

  const handleActivityClick = () => {
    setShowActivity(true);
    setActiveTab('activity');
  };

  const handleProfilePageClick = () => {
    setShowProfilePage(true);
    setActiveTab('profile');
  };

  const handleReelsClick = () => {
    setShowReels(true);
    setActiveTab('reels');
  };

  const closeModal = () => {
    setSelectedStory(null);
    setSelectedProfile(null);
    setShowSearch(false);
    setShowProfilePage(false);
    setShowReels(false);
    setShowActivity(false);
    setShowCreate(false);
    setActiveTab('home');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile Header */}
     <MobileHeader 
  suggested={suggested}
  onProfileClick={handleProfileClick}
  onSearchClick={handleSearchClick} // ADD THIS LINE
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
        <div className="pt-14 pb-16">
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
        
        {/* FIXED: Mobile Navigation with proper handlers */}
        <MobileNavigation 
          onHomeClick={handleHomeClick}
          onSearchClick={handleSearchClick}
          onCreateClick={handleCreateClick}
          onActivityClick={handleActivityClick}
          onProfileClick={handleProfilePageClick}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* All Modals */}
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

      <ProfilePage
        user={currentUser}
        onClose={closeModal}
        isOpen={showProfilePage}
      />

      <ReelsPage
        isOpen={showReels}
        onClose={closeModal}
      />

      {/* NEW: Activity and Create Pages */}
      <ActivityPage
        isOpen={showActivity}
        onClose={closeModal}
      />

      <CreatePage
        isOpen={showCreate}
        onClose={closeModal}
      />
    </div>
  );
}
