import React from "react";
import {AiOutlineArrowLeft} from 'react-icons/ai'
const ItemDescription = ({ title, description, items,setSelected }) => {
  return (
    <div className="px-16 py-10">
      <div className="text-3xl font-semibold flex items-center gap-5 "><AiOutlineArrowLeft size={26} className='hover:scale-105 cursor-pointer transition-all' onClick={()=>setSelected(null)} />{title}</div>
      <div className="text-lg mt-2">{description}</div>
      <div className="mt-8 space-y-8">
        {items?.map((item) => {
          return (
            <div>
              <div className="text-3xl font-semibold font-mono">
                {item?.title}
              </div>
              <div className="flex mt-8 items-center gap-10">
                <div className="shrink-0">
                  <img src={item?.img} className="w-[350px] " />
                </div>
                <div className="text-lg">{item?.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemDescription;
