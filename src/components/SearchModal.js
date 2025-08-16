import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaHeart, FaComment } from 'react-icons/fa';

export default function SearchModal({ isOpen, onClose, posts, onProfileClick }) {
  const [query, setQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [activeTab, setActiveTab] = useState('top');
  
  // Sample photo grid for exploration
  const explorePhotos = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1529502669403-86f198b6587a?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=600&q=80',
  ];
  
  const trendingSearches = [
    { term: 'nature', count: '2.1M posts' },
    { term: 'sunset', count: '845K posts' },
    { term: 'friends', count: '1.5M posts' },
    { term: 'food', count: '3.2M posts' },
    { term: 'travel', count: '2.8M posts' },
    { term: 'art', count: '1.1M posts' },
  ];

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredPosts([]);
      setFilteredUsers([]);
      return;
    }

    const postResults = posts.filter(post => 
      post.username.toLowerCase().includes(query.toLowerCase()) ||
      post.caption.toLowerCase().includes(query.toLowerCase())
    );
    
    const userResults = postResults.reduce((acc, post) => {
      const existingUser = acc.find(user => user.username === post.username);
      if (!existingUser) {
        acc.push({
          username: post.username,
          avatar: post.avatar,
          bio: 'User on Instagram',
          followers: Math.floor(Math.random() * 10000)
        });
      }
      return acc;
    }, []);

    setFilteredPosts(postResults);
    setFilteredUsers(userResults);
  }, [query, posts]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Search Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-200">
        <div className="flex items-center flex-1 bg-gray-100 rounded-lg px-3 py-2">
          <FaSearch className="w-4 h-4 text-gray-500 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="ml-2">
              <FaTimes className="w-4 h-4 text-gray-500" />
            </button>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-gray-900 hover:text-gray-700 p-2"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      </div>

      {/* Search Tabs */}
      {query && (
        <div className="flex border-b border-gray-200">
          {['Top', 'Accounts', 'Tags', 'Places'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`flex-1 py-3 text-sm font-medium border-b-2 ${
                activeTab === tab.toLowerCase()
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Search Content */}
      <div className="flex-1 overflow-y-auto">
        {query === '' ? (
          /* No Search Query - Show Explore Grid */
          <div>
            {/* Trending Searches */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Recent</h3>
              <div className="space-y-3">
                {trendingSearches.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(item.term)}
                    className="flex items-center justify-between w-full p-2 hover:bg-gray-50 rounded-lg text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <FaSearch className="w-4 h-4 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">#{item.term}</p>
                        <p className="text-sm text-gray-500">{item.count}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Explore Photos Grid */}
            <div className="p-1">
              <div className="grid grid-cols-3 gap-1">
                {explorePhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-square cursor-pointer hover:opacity-80 transition-opacity relative"
                  >
                    <img
                      src={photo}
                      alt="Explore"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay for post stats */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                      <div className="flex items-center gap-4 text-white opacity-0 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-1">
                          <FaHeart className="w-5 h-5" />
                          <span className="font-semibold">{Math.floor(Math.random() * 1000)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaComment className="w-5 h-5" />
                          <span className="font-semibold">{Math.floor(Math.random() * 100)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Search Results */
          <div>
            {activeTab === 'accounts' || activeTab === 'top' ? (
              filteredUsers.length > 0 && (
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Accounts</h3>
                  <div className="space-y-3">
                    {filteredUsers.map((user, index) => (
                      <button
                        key={index}
                        onClick={() => onProfileClick(user)}
                        className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg text-left"
                      >
                        <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
                          <img
                            src={user.avatar}
                            alt={user.username}
                            className="w-full h-full rounded-full object-cover border border-white"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{user.username}</p>
                          <p className="text-sm text-gray-500">{user.followers.toLocaleString()} followers</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )
            ) : null}

            {(activeTab === 'top' || activeTab === 'tags') && filteredPosts.length > 0 && (
              <div className="p-1 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-1">
                  {filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      className="aspect-square cursor-pointer hover:opacity-80 transition-opacity relative"
                      onClick={() => onProfileClick(post)}
                    >
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                        <div className="flex items-center gap-4 text-white opacity-0 hover:opacity-100 transition-opacity">
                          <div className="flex items-center gap-1">
                            <FaHeart className="w-4 h-4" />
                            <span className="text-sm font-semibold">{post.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {query && filteredUsers.length === 0 && filteredPosts.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-gray-500 mb-2">No results found</p>
                <p className="text-sm text-gray-400">Try searching for something else</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
