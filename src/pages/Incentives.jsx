import Layout from "@/components/common/Layout";
import React, { useState } from "react";

export const NavigationItem = ({ img, title, selected, setSelected,item }) => {
  return (
    <div onClick={()=>setSelected(item)} className="flex items-center flex-col cursor-pointer  w-full justify-center ">
        <div className="flex flex-col items-center border-gray-400 border-[1px] w-fit px-8 py-7 rounded-xl justify-center">
      <div>
        <img src={img} className="w-[180px]" />
      </div>
      <div className="mt-2 text-lg font-semibold text-center">{title}</div>
      </div>
    </div>
  );
};

  const Incentives = () => {
  const [selected,setSelected] = useState(null);
return (
  <Layout>
    {selected===null?<div className="py-8 px-12">
      <div className="text-3xl font-semibold">
        Incentives
      </div>
      <div className="mt-16 w-[75%] mx-auto grid grid-cols-2 gap-12 justify-center items-center">
          {/* {WHY_ELECTRIC_DATA?.map(item=>(<NavigationItem item={item} selected={selected} setSelected={setSelected} img={item.navImg} title={item.title}/>))} */}
      </div>
    </div>:<ItemDescription setSelected={setSelected} title={selected?.title} description={selected?.description} items={selected?.items}/>}
  </Layout>
);
};

;
export default Incentives;