// app/actions/fetchVideoInfo.ts
export async function extractVideoId(url: string) {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export async function fetchVideoInfo(url: string) {
  try {
    const videoId = extractVideoId(url);
    
    if (!videoId) {
      throw new Error('Invalid YouTube URL');
    }

    // Get the default thumbnail
    const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    
    // Fetch the page HTML
    const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`);
    const html = await response.text();

    // Extract title using regex
    const titleMatch = html.match(/<title>([^<]*)<\/title>/);
    let title = titleMatch ? titleMatch[1].replace(' - YouTube', '') : 'Untitled Video';

    return {
      id: videoId,
      title: title,
      thumbnail: thumbnail,
      url: `https://www.youtube.com/watch?v=${videoId}`
    };
  } catch (error) {
    console.error('Error fetching video info:', error);
    throw error;
  }
}