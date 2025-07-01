import { VideoPlayer } from './video-player';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

export const AvatarVideo = ({ user }: { user: any }) => {
  const [showVideo, setShowVideo] = useState(false);
  const handleVideoClick = () => {
    console.log('Video clicked');

    setShowVideo(true);
  };
  const handleCloseVideo = () => {
    console.log('Close video');

    setShowVideo(false);
  };
  return (
    <>
      <button
        onClick={handleVideoClick}
        className="flex flex-col items-center gap-0 min-w-[70px]"
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5">
            <Avatar className="w-full h-full border-2 border-white dark:border-black">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <span className="text-xs text-gray-600 dark:text-gray-400 text-center truncate w-full">
          {user.displayName}
        </span>
      </button>
      {showVideo && (
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 h-screen w-screen mx-auto z-50"
          onClick={handleCloseVideo}
        >
          <VideoPlayer
            src={user.video || ''}
            // poster property removed as it's not supported by VideoPlayerProps
            className="w-full h-full object-contains"
            thumbnail={''}
            autoplay={true}
          />
        </div>
      )}
    </>
  );
};
