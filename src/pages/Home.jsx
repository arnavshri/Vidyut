import Layout from "@/components/common/Layout";
import SearchItem from "@/components/Home/SearchItem";
import { newsSearchByQueryAPI } from "@/services/newsSearch";
import { isError, useQuery } from "@tanstack/react-query";

import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { TailSpin as Loader } from "react-loader-spinner";
const Home = () => {
  const [searchInput, setSearchInput] = useState('Electric Vehicle');

  const [searchData, setSearchData] = useState([]);
  const handleChange = (e) => setSearchInput(e.target.value);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSearch = async () => {
    setError(false);
    try {
      setIsLoading(true);
      const result = await newsSearchByQueryAPI(searchInput);
      setSearchData(result?.data?.articles)
      console.log(result);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    let timeOutId;
    setError(false);
    if (searchInput) {
    timeOutId = setTimeout(handleSearch(), 1000);
    }
  return () => clearTimeout(timeOutId);

  }, [searchInput]);

  return (
    <Layout>
      <div className="px-12 py-12">
        <div className="text-3xl font-semibold">News & Updates</div>
        <div className="flex mt-8 relative items-center w-full">
          <MdSearch size={22} className="absolute opacity-50 left-2" />
          <input
            value={searchInput}
            onChange={handleChange}
            className="w-full px-9 py-2 border-[1px] outline-none border-gray-400 rounded-xl"
            placeholder="Search electric vehicle related news"
          />
        </div>
        <div className="mt-8">
          <div className="text-3xl font-semibold">Headlines</div>
          <div className="mt-8 space-y-6">
            {isLoading?<div className="">Loading...</div>:error?<div className="">No Results Found!</div>:<div className="space-y-3">{
            searchData?.map(data=>(
              <SearchItem {...data}/>
            ))
            }</div>}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
