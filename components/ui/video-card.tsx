'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { VideoPlayer } from '@/components/ui/video-player';
import { Video } from '@/lib/mock-data';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const [isLiked, setIsLiked] = useState(video.isLiked);
  const [likes, setLikes] = useState(video.likes);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src={video.user.avatar} />
            <AvatarFallback>{video.user.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-gray-900 dark:text-white">
              {video.user.username}
            </span>
            {video.user.isVerified && (
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
          src={video.videoUrl}
          poster={video.thumbnail}
          className="w-full aspect-square object-cover"
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
              className={`p-0 hover:bg-transparent ${isLiked ? 'animate-heart' : ''}`}
            >
              <Heart
                className={`w-6 h-6 ${
                  isLiked
                    ? 'fill-red-500 text-red-500'
                    : 'text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              />
            </Button>
            <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
              <MessageCircle className="w-6 h-6 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300" />
            </Button>
            <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
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
            {formatNumber(likes)} likes
          </span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm text-gray-900 dark:text-white mr-2">
            {video.user.username}
          </span>
          <span className="text-sm text-gray-900 dark:text-white">
            {video.caption}
          </span>
        </div>

        {/* Comments */}
        {video.comments > 0 && (
          <button className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            View all {formatNumber(video.comments)} comments
          </button>
        )}

        {/* Time */}
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {new Date(video.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}