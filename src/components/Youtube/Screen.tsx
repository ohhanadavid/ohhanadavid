// src/components/YouTubePlayerButton.js

import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube'; // ייבוא הקומפוננטה של נגן יוטיוב

interface YouTubePlayerButtonProps {
  videoId: string;
}

const YouTubePlayerButton: React.FC<YouTubePlayerButtonProps> = ({ videoId }) => {
  const [showPlayer, setShowPlayer] = useState(false); // מצב לשליטה על הצגת הנגן
  const playerRef = useRef<YT.Player | null>(null); // Ref לגישה ישירה לאובייקט הנגן

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
    <div style={{ textAlign: 'center', margin: '20px' }}>
      {!showPlayer && ( // מציג את הכפתור רק אם הנגן לא מוצג
        <button
          onClick={handlePlayClick}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            backgroundColor: '#ff0000',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '20px',
            transition: 'background-color 0.3s ease',
          }}
        >
          הפעל סרטון
        </button>
      )}

      {showPlayer && ( // מציג את הנגן רק אם showPlayer הוא true
        <YouTube
          videoId={videoId} // מזהה הסרטון
          opts={opts} // אופציות הנגן
          onReady={onReady} // פונקציה שנקראת כשהנגן מוכן
          onStateChange={onStateChange} // פונקציה שנקראת כשמצב הנגן משתנה
        />
      )}
    </div>
  );
};

export default YouTubePlayerButton;