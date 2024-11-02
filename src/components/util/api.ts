import axios from 'axios';

export interface Item {
  id: string;
  name: string;
}

const URL = "https://music-recommendations-lake-five.vercel.app/items"

export const fetchItems = async () => {
  const resp = await axios.get<Item[]>(URL);
  return resp.data;
}
