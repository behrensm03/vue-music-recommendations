import axios from 'axios';

export interface Artist {
  id: string;
  name: string;
}

const URL = "https://music-recommendations-lake-five.vercel.app/"

// export const fetchItems = async () => {
//   const resp = await axios.get<Item[]>(URL+"items");
//   return resp.data;
// }

export const fetchArtists = async () => {
  const resp = await axios.get<Artist[]>(URL+"artists")
  return resp.data;
}
