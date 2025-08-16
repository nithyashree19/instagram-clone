import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaHeart, FaComment } from 'react-icons/fa';

export default function SearchModal({ isOpen, onClose, posts, onProfileClick }) {
  const [query, setQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  // Sample explore photos for when search is empty
  const explorePhotos = [
    { id: 1, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', likes: 234, comments: 12 },
    { id: 2, image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80', likes: 456, comments: 23 },
    { id: 3, image: 'https://images.unsplash.com/photo-1529502669403-86f198b6587a?auto=format&fit=crop&w=600&q=80', likes: 789, comments: 45 },
    { id: 4, image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', likes: 123, comments: 8 },
    { id: 5, image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80', likes: 567, comments: 34 },
    { id: 6, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80', likes: 890, comments: 56 },
    { id: 7, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=80', likes: 345, comments: 19 },
    { id: 8, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80', likes: 678, comments: 27 },
    { id: 9, image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=600&q=80', likes: 234, comments: 15 }
  ];
  
  const recentSearches = [
    'nature', 'sunset', 'food', 'travel', 'art', 'friends'
  ];

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredPosts([]);
      setFilteredUsers([]);
      return;
    }

    // Filter posts by username or caption
    const postResults = posts.filter(post => 
      post.username.toLowerCase().includes(query.toLowerCase()) ||
      post.caption.toLowerCase().includes(query.toLowerCase())
    );
    
    // Get unique users
    const userResults = postResults.reduce((acc, post) => {
      const existingUser = acc.find(user => user.username === post.username);
      if (!existingUser) {
        acc.push({
          username: post.username,
          avatar: post.avatar,
          bio: post.caption.substring(0, 30) + '...',
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
          <FaSearch className="w-4 h-4 text-gray-500 mr-2" />
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
          className="text-gray-900 hover:text-gray-700 p-1"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      </div>

      {/* Search Content */}
      <div className="flex-1 overflow-y-auto">
        {query === '' ? (
          /* No Search Query - Show Explore */
          <div>
            {/* Recent Searches */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Recent</h3>
              <div className="space-y-3">
                {recentSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(term)}
                    className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg text-left"
                  >
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <FaSearch className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-gray-900">{term}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Explore Photos Grid */}
            <div className="p-1">
              <div className="grid grid-cols-3 gap-1">
                {explorePhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="aspect-square cursor-pointer hover:opacity-80 transition-opacity relative"
                  >
                    <img
                      src={photo.image}
                      alt="Explore"
                      className="w-full h-full object-cover"
                    />
                    {/* Hover overlay with stats */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                      <div className="flex items-center gap-4 text-white opacity-0 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-1">
                          <FaHeart className="w-4 h-4" />
                          <span className="font-semibold text-sm">{photo.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaComment className="w-4 h-4" />
                          <span className="font-semibold text-sm">{photo.comments}</span>
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
            {/* Users Section */}
            {filteredUsers.length > 0 && (
              <div className="p-4 border-b border-gray-200">
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
            )}

            {/* Posts Grid */}
            {filteredPosts.length > 0 && (
              <div className="p-1">
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
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity flex items-center justify-center">
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

            {/* No Results */}
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
