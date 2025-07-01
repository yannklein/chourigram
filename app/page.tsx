'use client';

import { useState } from 'react';
import { TopNav } from '@/components/ui/top-nav';
import { BottomNav } from '@/components/ui/bottom-nav';
import { StoryBar } from '@/components/ui/story-bar';
import { VideoFeed } from '@/components/video-feed';
import { SearchPage } from '@/components/search-page';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <StoryBar />
            <VideoFeed />
          </>
        );
      case 'search':
        return <SearchPage />;
      case 'create':
        return (
          <div className="max-w-md mx-auto bg-white dark:bg-black min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-2xl">📹</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Create Video</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Upload your video content here</p>
            </div>
          </div>
        );
      case 'activity':
        return (
          <div className="max-w-md mx-auto bg-white dark:bg-black min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-red-500 text-2xl">❤️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Activity</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">See your likes and interactions</p>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="max-w-md mx-auto bg-white dark:bg-black min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-blue-500 text-2xl">👤</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Profile</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Your profile and settings</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 dark:bg-black">
      <TopNav />
      <div className="pt-16 pb-20">
        {renderContent()}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}