import axios from 'axios';

const Axios = axios.create({
    baseURL : 'http://localhost:5001'
})

export const getBrandNamesAPI = async(type)=>{
    if (!type && type === "default") return;
    console.log(`Getting brand names...`)
    const res = await Axios.get(`/get-model?type=${type}`);
    console.log(res);
    return res;
}

export const getModelsbyBrand = async(modelId)=>{
    if (!modelId && modelId == "default") return;
    console.log(`Getting models by brand...`)
    const res = await Axios.get(`/get-brands?model=${modelId}`);
    console.log(res);
    return res;
}

export const getModelData =async(data)=>{
    if (!data) return;
    console.log(`Getting model data...`)
    const res = await Axios.post(`/get-model-data`,data);
    console.log(res);
    return res;
}