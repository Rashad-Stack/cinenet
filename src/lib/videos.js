import videoTestData from "../data/videos.json";

const fetchVideos = async (url) => {
  const apiKey = process.env.NEXT_PUBLIC_YOU_TUBE_API_KEY;
  const BASE_URL = `https://youtube.googleapis.com/youtube/v3`;
  const response = await fetch(`${BASE_URL}/${url}&key=${apiKey}`);
  return await response.json();
};

export const getCommonVideos = async (url) => {
  const isDevelopment = process.env.DEVELOPMENT;

  try {
    const videos = isDevelopment ? videoTestData : await fetchVideos(url);

    if (videos.error) {
      return [];
    }

    return videos?.items.map((video) => {
      const id = video.id?.videoId || video.id;
      const snippet = video.snippet;
      return {
        title: snippet?.title,
        image: snippet.thumbnails.high.url,
        id,
        description: snippet.description,
        publishTime: snippet.publishedAt,
        channelTitle: snippet.channelTitle,
        statistics: video.statistics ? video.statistics : { viewCount: 0 },
      };
    });
  } catch (error) {
    console.log("Something went wrong with this video", error);
  }
};

export const getVideos = async (searchQuery) => {
  const URL = `search?part=snippet&maxResults=5&q=${searchQuery}&type=video`;
  return getCommonVideos(URL);
};

export const getVideoById = (videoId) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;
  return getCommonVideos(URL);
};

/**GET https://youtube.googleapis.com/youtube/v3/Ks-_Mh1QhMc&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json
 */
