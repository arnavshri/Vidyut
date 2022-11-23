import ResultCard from "@/components/ChooseEV/ResultCard";
import Layout from "@/components/common/Layout";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { getBrandNamesAPI, getModelData, getModelsbyBrand } from "@/services/compareVehicle";
const SelectComponent = ({ options,label, ...props }) => {
  return (
    <select defaultValue='default' {...props} className="w-full px-3 rounded-2xl py-2  border-[1px] border-gray-400">
      <option disabled={true} value='default'>{label}</option>
      {options?.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

const ChooseVehicle = () => {
  const [inputOptionsOne,setInputOptionsOne] = useState({
    type : [{label : 'Four Wheeler', value : "4"}, {label : 'Two Wheeler', value : "6"}],
    brand : [],
    model : [],
  })
  const [inputOptionsTwo,setInputOptionsTwo] = useState({
    type : [{label : 'Four Wheeler', value : "4"}, {label : 'Two Wheeler', value : "6"}],
    brand : [],
    model : [],
  })
  const [selectionOne,setSelectionOne] = useState({
    type : 'default',brand : 'default', model : 'default'
  })
  const [selectionTwo,setSelectionTwo] = useState({
    type : 'default',brand : 'default', model : 'default'
  })

  const handleChange = (e, selection=1)=>{
    if (selection === 1) return setSelectionOne(prev=>({...prev,[e.target.name] : e.target.value}));
    setSelectionTwo(prev=>({...prev,[e.target.name]  :e.target.value}));
  }

  useEffect(()=>{
    console.log(selectionOne);
    const fetchBrands = async ()=>{
      console.log(`Fetching brands..`)
      const {data} = await getBrandNamesAPI(selectionOne.type);
      if (data && data?.length>0) {
        console.log(data);
        setInputOptionsOne(prev=>({...prev, brand : data?.map(c=>({label : c.name, value : c.id}))}))
        }
    }
    fetchBrands();
  }, [selectionOne.type])
  useEffect(()=>{
    console.log(selectionTwo);
    const fetchBrands = async ()=>{
      console.log(`Fetching brands..`)
      const {data} = await getBrandNamesAPI(selectionTwo.type);
      if (data && data?.length>0) {
      console.log(data);
      setInputOptionsTwo(prev=>({...prev, brand : data?.map(c=>({label : c.name, value : c.id}))}))
      }
    }
    fetchBrands();
  }, [selectionTwo.type])

  useEffect(()=>{
    console.log(selectionTwo);
    const fetchBrands = async ()=>{
      console.log(`Fetching brands..`)
      const {data} = await getModelsbyBrand(selectionTwo.brand);
      if (data && data?.length>0) {
      console.log(data);
      setInputOptionsTwo(prev=>({...prev, model : data?.map(c=>({label : c.name, value : c.id}))}))
      }
    }
    fetchBrands();
  }, [selectionTwo.brand])

  const [result,setResult] = useState(null);
  
  useEffect(()=>{
    console.log(selectionOne);
    const fetchBrands = async ()=>{
      console.log(`Fetching brands..`)
      const {data} = await getModelsbyBrand(selectionOne.brand);
      if (data && data?.length>0) {
      console.log(data);
      setInputOptionsOne(prev=>({...prev, model : data?.map(c=>({label : c.name, value : c.id}))}))
      }
    }
    fetchBrands();
  }, [selectionOne.brand])

  const handleSearch = async()=>{
    console.log(`Searching..`)
    const data = {
      ev1 : selectionOne.type,
      make1 : selectionOne.brand,
      model1 : selectionOne.model,
      ev2 : selectionTwo.type,
      make2 : selectionTwo.brand,
      model2 : selectionTwo.model,
    }
    console.log(data);

    const result = await getModelData(data);
    setResult(result.data);
    console.log(result);
    
  }

  return (
    <Layout>
      <div className="py-12 px-12">
        <div className="text-3xl font-semibold">Compare  Vehicle</div>
        <div className="mt-12 px-8 py-5 bg-[#0000000f] rounded-xl">
          <div className="text-xl font-semibold text-gray-700 text-center">
            Compare your  vehicles according to your lifestyle
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div className="bg-white px-4 py-4 rounded-md">
              <div className="text-lg text-center "> Vehicle 1</div>
              <div className="mt-4  items-center grid grid-cols-3 gap-4">
                <SelectComponent label='type' name='type' value={selectionOne.type} onChange={handleChange}   options={inputOptionsOne.type} />
                <SelectComponent label='brand' name='brand' value={selectionOne.brand} onChange={handleChange} options={inputOptionsOne.brand} />
                <SelectComponent label='model' name='model' value={selectionOne.model} onChange={handleChange} options={inputOptionsOne.model} />
              </div>
            </div>
            <div className="bg-white px-4 py-4 rounded-md">
              <div className="text-lg text-center"> Vehicle 2</div>
              <div className="grid mt-4 grid-cols-3 gap-4">
                <SelectComponent label='type' name='type' value={selectionTwo.type}  onChange={(e)=>handleChange(e,2)}  options={inputOptionsTwo.type} />
                <SelectComponent label='brand' name='brand' value={selectionTwo.brand} onChange={(e)=>handleChange(e,2)} options={inputOptionsTwo.brand} />
                <SelectComponent label='model' name='model' value={selectionTwo.model} onChange={(e)=>handleChange(e,2)} options={inputOptionsTwo.model} />
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <button className="bg-primary rounded-3xl px-16 py-3 text-white" onClick={handleSearch}>Search</button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-24">
            {result && result?.length>0 && result.map((c,i)=>(<ResultCard key={i} {...c}/>))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChooseVehicle;
