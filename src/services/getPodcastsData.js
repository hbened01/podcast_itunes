import { VITE_API_ITUNES_URL } from "@/constants/";

const getPodcastsData = async () => {
  try {
    const url = `${VITE_API_ITUNES_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`;
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};

export default getPodcastsData;
