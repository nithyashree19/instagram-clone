import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiMessageCircle, FiSend, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';

export default function Post({ post, onProfileClick }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(post.comments || []);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        username: 'you',
        text: newComment
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg mb-6 bg-white max-w-xl">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onProfileClick(post)}
        >
          <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
            <img 
              src={post.avatar} 
              alt={post.username} 
              className="rounded-full w-full h-full object-cover border border-white"
            />
          </div>
          <span className="font-semibold text-gray-900">{post.username}</span>
        </div>
        <button>
          <FiMoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      {/* Post Image */}
      <img 
        src={post.image} 
        alt="Post content" 
        className="w-full object-cover cursor-pointer"
        onDoubleClick={() => setLiked(true)}
      />
      
      {/* Action Buttons */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => setLiked(!liked)}
            className="transform transition-transform active:scale-75"
          >
            {liked ? (
              <FaHeart className="w-6 h-6 text-red-500" />
            ) : (
              <FaRegHeart className="w-6 h-6 text-gray-900" />
            )}
          </button>
          <button 
            onClick={() => setShowComments(!showComments)}
            className="transform transition-transform active:scale-75"
          >
            <FiMessageCircle className="w-6 h-6 text-gray-900" />
          </button>
          <button className="transform transition-transform active:scale-75">
            <FiSend className="w-6 h-6 text-gray-900" />
          </button>
        </div>
        <button 
          onClick={() => setSaved(!saved)}
          className="transform transition-transform active:scale-75"
        >
          <FiBookmark className={`w-6 h-6 ${saved ? 'fill-current' : ''} text-gray-900`} />
        </button>
      </div>
      
      {/* Post Details */}
      <div className="px-4 pb-4">
        <p className="font-semibold text-sm mb-1">
          {liked ? post.likes + 1 : post.likes} likes
        </p>
        <p className="text-sm mb-2">
          <span className="font-semibold">{post.username}</span> {post.caption}
        </p>
        
        {/* Comments Section */}
        {showComments && (
          <div className="mt-3 space-y-2">
            {comments.map(comment => (
              <p key={comment.id} className="text-sm">
                <span className="font-semibold">{comment.username}</span> {comment.text}
              </p>
            ))}
            
            {/* Add Comment */}
            <form onSubmit={handleAddComment} className="flex gap-2 mt-3">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 text-sm border-none outline-none"
              />
              <button 
                type="submit"
                className="text-blue-500 font-semibold text-sm hover:text-blue-700"
              >
                Post
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
