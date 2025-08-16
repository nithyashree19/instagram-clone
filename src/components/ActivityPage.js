import React from 'react';
import { FaTimes, FaHeart, FaComment, FaUserPlus, FaUsers } from 'react-icons/fa';

export default function ActivityPage({ isOpen, onClose }) {
  if (!isOpen) return null;

  const activities = [
    {
      id: 1,
      type: 'like',
      user: 'kavitha',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      action: 'liked your photo',
      time: '2h',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      type: 'follow',
      user: 'guru',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
      action: 'started following you',
      time: '4h'
    },
    {
      id: 3,
      type: 'comment',
      user: 'roja',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      action: 'commented: "Amazing shot! 😍"',
      time: '1d',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 4,
      type: 'like',
      user: 'alex_adventures',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      action: 'liked your reel',
      time: '2d',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 5,
      type: 'mention',
      user: 'travel_guru',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      action: 'mentioned you in a story',
      time: '3d'
    }
  ];

  const thisWeek = [
    {
      id: 6,
      type: 'follow_suggestion',
      users: ['john_doe', 'jane_smith', 'mike_jones'],
      action: 'Follow requests from people you may know',
      count: 12
    }
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* FIXED: Header with Close Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={onClose}>
          <FaTimes className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Activity</h1>
        <div className="w-6"></div>
      </div>

      {/* Activity Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h2 className="font-semibold text-gray-900 mb-4">Today</h2>
          
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
                  <img 
                    src={activity.avatar}
                    alt={activity.user}
                    className="w-full h-full rounded-full object-cover border border-white"
                  />
                </div>
                
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>

                {activity.image && (
                  <img 
                    src={activity.image}
                    alt="Post"
                    className="w-12 h-12 object-cover rounded"
                  />
                )}

                {activity.type === 'follow' && (
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-lg text-sm font-semibold hover:bg-blue-600">
                    Follow Back
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-4">This Week</h2>
          
          <div className="space-y-4">
            {thisWeek.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <FaUsers className="w-6 h-6 text-gray-500" />
                </div>
                
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.action}</p>
                  <p className="text-xs text-gray-500">{item.count} new requests</p>
                </div>

                <button className="text-blue-500 text-sm font-semibold">
                  See All
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
