import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Stories from './components/Stories';
import Post from './components/Post';
import Suggestions from './components/Suggestions';
import MobileNavigation from './components/MobileNavigation';
import MobileHeader from './components/MobileHeader'; // NEW IMPORT - Replace MobileSidebar
import StoryModal from './components/StoryModal';
import ProfileModal from './components/ProfileModal';
import { stories, posts, suggested } from './data/mockData';

export default function App() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleProfileClick = (user) => {
    setSelectedProfile(user);
  };

  const closeModal = () => {
    setSelectedStory(null);
    setSelectedProfile(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile Header - NEW ADDITION */}
      <MobileHeader 
        suggested={suggested}
        onProfileClick={handleProfileClick}
      />

      {/* Desktop Layout */}
      <div className="hidden lg:flex max-w-7xl mx-auto bg-gray-50">
        {/* Left Sidebar */}
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>
        
        {/* Main Content */}
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
        
        {/* Right Sidebar - Suggestions */}
        <div className="w-80 py-8">
          <Suggestions 
            suggested={suggested} 
            onProfileClick={handleProfileClick}
          />
        </div>
      </div>
      
      {/* Mobile Layout - Updated with top padding for header */}
      <div className="lg:hidden">
        <div className="max-w-md mx-auto px-4 py-4 pb-16 pt-16"> {/* pt-16 for header space */}
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
        <MobileNavigation />
      </div>

      {/* Modals */}
      {selectedStory && (
        <StoryModal 
          story={selectedStory} 
          onClose={closeModal}
        />
      )}
      
      {selectedProfile && (
        <ProfileModal 
          user={selectedProfile} 
          onClose={closeModal}
        />
      )}
    </div>
  );
}
