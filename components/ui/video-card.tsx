'use client';

import { useEffect, useState } from 'react';
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { VideoPlayer } from '@/components/ui/video-player';

type User = {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  videoThumbnail: string | null;
  video: string | null;
  isVerified: boolean;
  followers: number;
  following: number;
};

export function VideoCard({ user }: { user: User }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(typeof window !== 'undefined' ? Math.floor(Math.random() * 10000) + 1000 : 0);
  const [date, setDate] = useState<string | null>(null);

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const likesCount = Math.floor(Math.random() * 10000) + 1000;
    setLikes(likesCount);
  
    const now = new Date('2025-07-05T00:00:00Z');
    const tenDaysAgo = new Date('2025-06-25T00:00:00Z');
    tenDaysAgo.setDate(now.getDate() - 10);
    const randomTimestamp =
      Math.random() * (now.getTime() - tenDaysAgo.getTime()) +
      tenDaysAgo.getTime();
    const formattedDate = new Date(randomTimestamp).toLocaleDateString();
    setDate(formattedDate);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-gray-900 dark:text-white">
              {user.displayName}
            </span>
            {user.isVerified && (
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
        </div>
        <Button variant="ghost" size="sm" className="p-1">
          <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </Button>
      </div>

      {/* Video */}
      <div className="relative">
        <VideoPlayer
          src={user.video || ''}
          // poster property removed as it's not supported by VideoPlayerProps
          className="w-full aspect-square object-cover"
          thumbnail={''}
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`p-0 hover:bg-transparent ${
                isLiked ? 'animate-heart' : ''
              }`}
            >
              <Heart
                className={`w-6 h-6 ${
                  isLiked
                    ? 'fill-red-500 text-red-500'
                    : 'text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-0 hover:bg-transparent"
            >
              <MessageCircle className="w-6 h-6 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-0 hover:bg-transparent"
            >
              <Send className="w-6 h-6 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBookmark}
            className="p-0 hover:bg-transparent"
          >
            <Bookmark
              className={`w-6 h-6 ${
                isBookmarked
                  ? 'fill-gray-900 dark:fill-white text-gray-900 dark:text-white'
                  : 'text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            />
          </Button>
        </div>

        {/* Likes */}
        <div className="mb-2">
          <span className="font-semibold text-sm text-gray-900 dark:text-white">
            {/* {likes} likes */}
          </span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm text-gray-900 dark:text-white mr-2">
            {user.username}
          </span>
        </div>

        {/* Comments */}
        {/* {video.comments > 0 && (
          <button className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            View all {formatNumber(video.comments)} comments
          </button>
        )} */}

        {/* Time */}
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {date}
        </span>
      </div>
    </div>
  );
}
