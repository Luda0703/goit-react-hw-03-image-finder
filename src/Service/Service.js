import axios from 'axios'

const KEY = "35573875-4d45445cc9cc07d3b69f02897";
axios.defaults.BASE_URL = 'https://pixabay.com/api/';
axios.defaults.headers.common['Authorization'] = KEY;
axios.defaults.params = {
    orientation: 'horizontal',
    image_type: 'photo',
    per_page: 12,
  };

export const getImages = async (query, page) => {
    const { data } = await axios.get(`?q=${query}&page=${page}`) 
    return data
 };

