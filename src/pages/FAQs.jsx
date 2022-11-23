import Layout from "@/components/common/Layout";
import Accordian from "@/components/FAQ/Accordian";
import { FAQ_DATA } from "@/utils/data/faq_data";
import React, { useState } from "react";

const FAQCategory = ({ title, category, setCategory }) => {
  const isActive = category === title;
  return (
    <div
      onClick={() => setCategory(title)}
      className={`${
        isActive ? "bg-primary text-white" : "text-black"
      } transition-all px-10 py-2 rounded-xl cursor-pointer hover:bg-primary  hover:text-white border-[1px] border-gray-400`}
    >
      {title}
    </div>
  );
};

const FAQs = () => {
  const FAQ_CATEGORIES = Object.keys(FAQ_DATA);
  const [category, setCategory] = useState(FAQ_CATEGORIES.at(0) || "none");
  return (
    <Layout>
      <div className="w-full">
        <div className="px-12 py-10 bg-gray-100 text-4xl font-semibold w-full">
          FAQ
        </div>
        <div className="w-full mt-8 px-12">
          <div className="flex space-x-4 overflow-x-auto">
            {FAQ_CATEGORIES?.map((title) => (
              <FAQCategory
                title={title}
                category={category}
                setCategory={setCategory}
              />
            ))}
          </div>
        </div>
        <div className="px-12 mt-12">
          <Accordian items={FAQ_DATA[category]} />
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;
