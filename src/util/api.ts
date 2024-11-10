import axios from 'axios';

export interface Artist {
  id: string;
  name: string;
}

export interface Recommendation {
  id: string;
  name: string;
  similarity: number;
}

const URL = "https://music-recommendations-lake-five.vercel.app/"

export const fetchArtists = async () => {
  const resp = await axios.get<Artist[]>(URL+"artists")
  return resp.data;
}

export const fetchRecommendations = async (ids: string[]) => {
  const resp = await axios.get<Recommendation[]>(URL+"recommend", {
    params: {
      ids: ids.join(",")
    }
  });
  return resp.data.slice(0, Math.min(5, resp.data.length));
}
