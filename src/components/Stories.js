import React from 'react';

export default function Stories({ stories, onStoryClick }) {
  return (
    <div className="flex gap-4 overflow-x-auto border border-gray-200 rounded-lg p-4 bg-white scrollbar-hide">
      {stories.map((story) => (
        <div 
          key={story.id} 
          className="flex flex-col items-center flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onStoryClick(story)}
        >
          <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
            <img 
              src={story.avatar} 
              alt={story.username} 
              className="rounded-full w-full h-full object-cover border-2 border-white"
            />
          </div>
          <p className="text-xs mt-2 truncate max-w-[4rem] text-center text-gray-800">
            {story.username}
          </p>
        </div>
      ))}
    </div>
  );
}
