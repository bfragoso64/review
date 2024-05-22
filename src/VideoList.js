// VideoList.js
import React, { useState } from 'react';
import { listVideos } from './videoService';

const VideoList = () => {
  const [videoNames, setVideoNames] = useState([]);
  const [error, setError] = useState(null);

  const handleListVideos = async () => {
    try {
      console.log("Listing videos..."); // Debugging
      const names = await listVideos();
      console.log("Video names fetched:", names); // Debugging
      setVideoNames(names);
      setError(null); // Clear any previous error messages
    } catch (error) {
      setError("Error fetching video names. See console for details.");
      console.error("Error fetching video names:", error);
    }
  };

  return (
    <div>
      <button onClick={handleListVideos}>List Videos</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {videoNames.length > 0 && (
        <div>
          <h3>Video Files:</h3>
          <ul>
            {videoNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VideoList;
