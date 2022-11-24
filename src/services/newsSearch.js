import axios from 'axios';
const TOKEN = '245b5c67d1a45420035110159e1428a6';
export const newsSearchByQueryAPI = async(query)=>{
    const result = await axios.get(`https://gnews.io/api/v4/search?q=${query}&token=${TOKEN}&lang=en&max=10`)
    return result;
}
