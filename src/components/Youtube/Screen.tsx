// src/components/YouTubePlayerButton.js

import { use } from 'i18next';
import { Youtube } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube'; // ייבוא הקומפוננטה של נגן יוטיוב

interface YouTubePlayerButtonProps {
  videoId: string;
}

const YouTubePlayerButton: React.FC<YouTubePlayerButtonProps> = ({ videoId }) => {
  const [showPlayer, setShowPlayer] = useState(false); // מצב לשליטה על הצגת הנגן
  const playerRef = useRef<YT.Player | null>(null); // Ref לגישה ישירה לאובייקט הנגן

useEffect(() => {
  console.log('YouTube Player Button component mounted', videoId);
}, []);
  // אופציות לנגן יוטיוב
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1, // הפעל אוטומטית כאשר הנגן נטען
      controls: 1, // הצג פקדים
      rel: 0, // אל תציג סרטונים קשורים בסיום
    },
  };

  // פונקציה שתופעל כאשר הנגן מוכן
interface YouTubePlayerEvent {
    target: YT.Player;
    data?: number;
}

const onReady = (event: YouTubePlayerEvent) => {
    playerRef.current = event.target; // שמור הפניה לנגן
    console.log('YouTube player is ready.');
    // אם רוצים, אפשר להפעיל את הסרטון כאן אם הוא לא מופעל אוטומטית דרך playerVars
    // event.target.playVideo();
};

  // פונקציה שתופעל כאשר לוחצים על הכפתור
  const handlePlayClick = () => {
    setShowPlayer(true); // הצג את הנגן

    // אם הנגן כבר קיים ומוכן, הפעל אותו
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
    // הערה: במצב של autoplay: 1 ב-opts, הסרטון יופעל אוטומטית כש-`YouTube` קומפוננטה מרונדרת.
    // אם לא היית משתמש ב-autoplay, היית צריך להוסיף כאן לוגיקה שתפעיל את הסרטון לאחר שהנגן נטען.
  };

  // פונקציה שתופעל כאשר מצב הנגן משתנה
interface YouTubePlayerStateChangeEvent {
    target: YT.Player;
    data: number;
}

const onStateChange = (event: YouTubePlayerStateChangeEvent) => {
    if (event.data === window.YT.PlayerState.ENDED) {
        console.log('Video ended.');
        // אפשרות: להסתיר את הנגן שוב בסיום
        // setShowPlayer(false);
    }
};

  return (
    <div >
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
            <div className="w-full  h-[70vh] ">
              <YouTube
                videoId={videoId}
                opts={{
                  ...opts,
                  width: '100%',
                  //height: '100%',
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