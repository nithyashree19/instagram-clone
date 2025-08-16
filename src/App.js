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
import ActivityPage from './components/ActivityPage';
import CreatePage from './components/CreatePage';
import ExplorePage from './components/ExplorePage';
import { stories, posts, suggested } from './data/mockData';

export default function App() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfilePage, setShowProfilePage] = useState(false);
  const [showReels, setShowReels] = useState(false);
  const [showActivity, setShowActivity] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); // Track active section
  
  const currentUser = {
    username: 'sumithra',
    avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
    bio: 'Travel enthusiast 🌍 | Photography lover 📸',
    posts: 127,
    followers: 1245,
    following: 389
  };

  const handleStoryClick = (story) => setSelectedStory(story);

  const handleProfileClick = (user) => {
    if (window.innerWidth < 1024) {
      setShowProfilePage(true);
      setActiveTab('profile');
    } else {
      setSelectedProfile(user);
    }
  };

  // FIXED: Home button handler
  const handleHomeClick = () => {
    closeModal(); // Close all modals
    setActiveTab('home'); // Set active tab to home
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
    if (window.innerWidth >= 1024) {
      setSelectedProfile(currentUser);
    } else {
      setShowProfilePage(true);
    }
    setActiveTab('profile');
  };

  const handleReelsClick = () => {
    setShowReels(true);
    setActiveTab('reels');
  };

  const handleExploreClick = () => {
    setShowExplore(true);
    setActiveTab('explore');
  };

  // FIXED: Close modal and reset to home
  const closeModal = () => {
    setSelectedStory(null);
    setSelectedProfile(null);
    setShowSearch(false);
    setShowProfilePage(false);
    setShowReels(false);
    setShowActivity(false);
    setShowCreate(false);
    setShowExplore(false);
    // Don't reset activeTab here - let individual handlers manage it
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <MobileHeader 
        onProfileClick={handleProfileClick}
        onSearchClick={handleSearchClick}
      />

      {/* Desktop Layout with Active Tab Tracking */}
      <div className="hidden lg:flex max-w-7xl mx-auto bg-gray-50">
        <div className="sticky top-0 h-screen">
          <Sidebar 
            onHomeClick={handleHomeClick}
            onSearchClick={handleSearchClick} 
            onReelsClick={handleReelsClick} 
            onProfileClick={handleProfilePageClick}
            onCreateClick={handleCreateClick}
            onActivityClick={handleActivityClick}
            onExploreClick={handleExploreClick}
            activeTab={activeTab} // Pass active tab
          />
        </div>
        
        <div className="flex-1 max-w-2xl mx-auto px-8 py-8">
          <div className="space-y-6">
            <Stories stories={stories} onStoryClick={handleStoryClick} />
            <div className="space-y-6">
              {posts.map(post => (
                <Post key={post.id} post={post} onProfileClick={handleProfileClick} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-80 py-8">
          <Suggestions suggested={suggested} onProfileClick={handleProfileClick} />
        </div>
      </div>
      
      <div className="lg:hidden">
        <div className="pt-14 pb-16">
          <div className="max-w-md mx-auto px-4 py-4">
            <Stories stories={stories} onStoryClick={handleStoryClick} />
            <div className="mt-6 space-y-6">
              {posts.map(post => (
                <Post key={post.id} post={post} onProfileClick={handleProfileClick} />
              ))}
            </div>
          </div>
        </div>
        
        <MobileNavigation 
          onHomeClick={handleHomeClick}
          onSearchClick={handleSearchClick}
          onCreateClick={handleCreateClick}
          onActivityClick={handleActivityClick}
          onProfileClick={() => setShowProfilePage(true)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* All Modals */}
      {selectedStory && <StoryModal story={selectedStory} onClose={closeModal} />}
      {selectedProfile && !showProfilePage && <ProfileModal user={selectedProfile} onClose={closeModal} />}
      
      <SearchModal isOpen={showSearch} onClose={() => { closeModal(); setActiveTab('home'); }} />
      <ProfilePage user={currentUser} onClose={() => { closeModal(); setActiveTab('home'); }} isOpen={showProfilePage} />
      <ReelsPage isOpen={showReels} onClose={() => { closeModal(); setActiveTab('home'); }} />
      <ActivityPage isOpen={showActivity} onClose={() => { closeModal(); setActiveTab('home'); }} />
      <CreatePage isOpen={showCreate} onClose={() => { closeModal(); setActiveTab('home'); }} />
      <ExplorePage isOpen={showExplore} onClose={() => { closeModal(); setActiveTab('home'); }} />
    </div>
  );
}
