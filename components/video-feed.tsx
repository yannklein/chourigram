'use client';

import { useState, useEffect } from 'react';
import { VideoCard } from '@/components/ui/video-card';
import users from '@/lib/generated-users.json';

export function VideoFeed() {
  const [usersWithVideo, setUsersWithVideo] = useState(users.filter(u => u.video));
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreUsersWithVideo = () => {
    setIsLoading(true);
    // Simulate loading more usersWithVideo
    setTimeout(() => {
      setUsersWithVideo(prev => [...prev, ...users.filter(u => u.video).map(u => ({
        ...u,
        id: u.id + '_' + Date.now(),
      }))]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop 
          >= document.documentElement.offsetHeight - 1000 && !isLoading) {
        loadMoreUsersWithVideo();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-black min-h-screen">
      {usersWithVideo.map((u) => (
        <VideoCard key={u.id} user={u} />
      ))}
      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
        </div>
      )}
    </div>
  );
}