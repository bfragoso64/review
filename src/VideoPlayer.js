// VideoPlayer.js
import React, { useState, useEffect } from "react";
import { listVideos, getVideoURL } from "./videoService";
import './App.css'; // Ensure you import the CSS file

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [titles, setTitles] = useState([
    "Exam Overview, Endocrine, Renal & Hematology",
    "Cardiovascular",
    "Extra Cardiovascular recording",
    "Neurology & Pulmonary",
    "Professional Caring, GI, Multisystem & Hemodynamics",
  ]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoNames = await listVideos();
        const videoPromises = videoNames.map(async (name) => {
          const url = await getVideoURL(name);
          return { name, url };
        });
        const videoData = await Promise.all(videoPromises);
        setVideos(videoData);
      } catch (error) {
        setError("Error fetching videos. See console for details.");
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="VideoPlayer">
      {error && <p style={{ color: "red" }}>{error}</p>}
      {videos.length > 0 && (
        <div>
          <h3 className="Title">Video Files:</h3>
          <ul>
            {videos.map((video, index) => (
              <div key={index}>
                <p className="Title">{titles[index]}</p>
                <video controls>
                  <source src={video.url} type="video/mp4" />
                </video>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
