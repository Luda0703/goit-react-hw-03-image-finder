import axios from 'axios'

const KEY = "35573875-4d45445cc9cc07d3b69f02897";
axios.defaults.BASE_URL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = KEY;
axios.defaults.params = {
    orientation: 'landscape',
    per_page: 15,
  };

export const getImages = async (query, page) => {
    const { data } = await axios.get(`search?query=${query}&page=${page}`) 
    return data
 };