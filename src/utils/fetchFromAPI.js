import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
 const rapidAPIKey = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;
 console.log("Key",rapidAPIKey);

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': rapidAPIKey,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

   return data;
}