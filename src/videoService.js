// videoService.js
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from './Firebase';

const listVideos = async () => {
  try {
    const listRef = ref(storage, '/');
    console.log("Listing videos from path:", listRef.fullPath); // Debugging
    const res = await listAll(listRef);
    console.log("List result:", res); // Debugging
    const videoNames = res.items.map((itemRef) => itemRef.name);
    console.log("Video names:", videoNames); // Debugging
    return videoNames;
  } catch (error) {
    console.error("Error listing videos:", error);
    throw error;
  }
};

const getVideoURL = async (fileName) => {
    try {
      const videoRef = ref(storage, fileName);
      const url = await getDownloadURL(videoRef);
      return url;
    } catch (error) {
      console.error("Error fetching video URL:", error);
      throw error;
    }
  };

export { listVideos,getVideoURL };
