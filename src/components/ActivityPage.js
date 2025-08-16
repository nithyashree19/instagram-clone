import React from 'react';
import { FaTimes, FaHeart, FaComment, FaUserPlus } from 'react-icons/fa';

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
    }
  ];

  return (
    <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={onClose}>
          <FaTimes className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Activity</h1>
        <div className="w-6"></div>
      </div>

      {/* Activity Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h2 className="font-semibold text-gray-900 mb-4">Recent Activity</h2>
          
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
                    className="w-12 h-12 object-cover"
                  />
                )}

                {activity.type === 'follow' && (
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-lg text-sm font-semibold">
                    Follow Back
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
