'use client';

import { useState, useEffect } from 'react';
import { VideoCard } from '@/components/ui/video-card';
import { mockVideos } from '@/lib/mock-data';

export function VideoFeed() {
  const [videos, setVideos] = useState(mockVideos);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreVideos = () => {
    setIsLoading(true);
    // Simulate loading more videos
    setTimeout(() => {
      setVideos(prev => [...prev, ...mockVideos.map(video => ({
        ...video,
        id: video.id + '_' + Date.now(),
      }))]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop 
          >= document.documentElement.offsetHeight - 1000 && !isLoading) {
        loadMoreVideos();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-black min-h-screen">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
        </div>
      )}
    </div>
  );
}