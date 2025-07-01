import Image from 'next/image';
import { VideoPlayer } from './video-player';
import { useState } from 'react';
import { X } from 'lucide-react';


export const SearchImage = ({ user }: { user: any }) => {
  const [showVideo, setShowVideo] = useState(false);
  const handleVideoClick = () => {
    console.log("Video clicked");
    
    setShowVideo(true);
  }
  const handleCloseVideo = () => {
    console.log("Close video");
    
    setShowVideo(false);
  }
  return (
    <>
    <button onClick={handleVideoClick}>
      <Image
        src={user.videoThumbnail || ''}
        alt=""
        width={500}
        height={500}
        className="w-full h-full object-cover aspect-square"
        
      />
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
