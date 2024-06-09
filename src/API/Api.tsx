// import axios, {AxiosResponse} from 'axios';

// export const fetchPictures = async (query, page) => {
//   const BASE_URL = 'https://pixabay.com/api';
//   const OPTIONS = `q=${query}&page=${page}&key=32269286-83e5915044612836799c36253&image_type=photo&orientation=horizontal&per_page=12`;
//   const response = await axios.get(`${BASE_URL}/?${OPTIONS}`);
//   return await response.data;
// };

import axios from 'axios';

export async function fetchPictures<T>(query: string, page: number): Promise<T> {
  const BASE_URL = 'https://pixabay.com/api';
  const OPTIONS = `q=${query}&page=${page}&key=32269286-83e5915044612836799c36253&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(`${BASE_URL}/?${OPTIONS}`);
  return await response.data;
};