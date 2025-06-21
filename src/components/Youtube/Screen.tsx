import { Youtube } from 'lucide-react';
import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';
interface YouTubePlayerButtonProps {
  videoId: string;
}

const YouTubePlayerButton: React.FC<YouTubePlayerButtonProps> = ({ videoId }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const playerRef = useRef<YT.Player | null>(null);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
    },
  };

  interface YouTubePlayerEvent {
    target: YT.Player;
    data?: number;
  }

  const onReady = (event: YouTubePlayerEvent) => {
    playerRef.current = event.target;
    console.log('YouTube player is ready.');
  };

  const handlePlayClick = () => {
    setShowPlayer(true);
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  interface YouTubePlayerStateChangeEvent {
    target: YT.Player;
    data: number;
  }

  const onStateChange = (event: YouTubePlayerStateChangeEvent) => {};

  return (
    <div>
      {!showPlayer && (
        <button
          onClick={handlePlayClick}
          className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
        >
          <Youtube className="h-5 w-5 mr-2" />
          Video
        </button>
      )}

      {showPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 relative w-full max-w-2xl">
            <button
              onClick={() => setShowPlayer(false)}
              className="absolute -top-1 right-2 text-gray-700 text-red-400 text-2xl font-bold hover:text-red-600 "
              aria-label="סגור"
            >
              ×
            </button>
            <div className="w-full h-[70vh] ">
              <YouTube
                videoId={videoId}
                opts={{
                  ...opts,
                  width: '100%',
                }}
                onReady={onReady}
                onStateChange={onStateChange}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubePlayerButton;