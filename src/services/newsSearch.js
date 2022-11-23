import axios from 'axios';
const TOKEN = '01eafcdf6df9d8ecc2c9ce9da1861509';
export const newsSearchByQueryAPI = async(query)=>{
    const result = await axios.get(`https://gnews.io/api/v4/search?q=${query}&token=${TOKEN}&lang=en&max=10`)
    return result;
}
