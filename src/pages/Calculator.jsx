import ChargingCalculator from "@/components/Calculator/ChargingCalculator";
import CrudeCalculator from "@/components/Calculator/CrudeCalculator";
import JourneyCalculator from "@/components/Calculator/JourneyCalculator";
import Layout from "@/components/common/Layout";
import { calculator_options } from "@/utils/data/calculator_options";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { NavigationItem } from "./WhyElectric";

export const CalcInput = ({ label, type, options, valueType, ...props }) => {
  return (
    <div className="flex items-center gap-4 justify-between w-full">
      <div className="text-black font-semibold">{label}</div>
      {type === "select" ? (
        <select
          {...props}
          className="bg-white rounded-xl w-[200px] px-12 py-2 text-primary"
        >
          {options?.map((o) => (
            <option value={o.value}>{o.label}</option>
          ))}
        </select>
      ) : (
        <div className="flex relative w-[200px] items-center ">
          <input
            {...props}
            className="bg-white pl-3 w-full rounded-xl  px-12 py-2"
          />
          <div className="px-4 py-2 text-white rounded-md bg-primary absolute right-0">
            {valueType}
          </div>
        </div>
      )}
    </div>
  );
};

const CALCUALTORS = [
    {
        title: "Journey Calculator",
        img: "/images/calculator/journey-calculator.png",
        description: "Calculate the cost of your journey",
        id : 0,
    }
]

const Calculator = () => {
  const [selectedCalculator, setSelectedCalculator] = useState(null);
  if (selectedCalculator==='test') return <Layout><JourneyCalculator></JourneyCalculator></Layout>
  if (selectedCalculator==='test2') return <Layout><ChargingCalculator></ChargingCalculator></Layout>
  if (selectedCalculator==='test3') return <Layout><CrudeCalculator></CrudeCalculator></Layout>
  if (selectedCalculator==='test4') return <Layout><CO2Calculator></CO2Calculator></Layout>

  return (
    <Layout>
      {selectedCalculator !== null ? (
        <JourneyCalculator />
      ) : (
        <>
                   <div className='py-8 px-12 bg-[#0000000c] text-3xl'>Journey Cost Calculator</div>
        <div className="mt-16 w-[75%] py-8 mx-auto grid grid-cols-2 gap-12 justify-center items-center">
            <NavigationItem
              item={'test'}
              selected={selectedCalculator}
              setSelected={setSelectedCalculator}
              img={'https://i.ibb.co/fSfCt5G/journey.png'}
              title={'Journey Calculator'}
            />
            <NavigationItem
              item={'test2'}
              selected={selectedCalculator}
              setSelected={setSelectedCalculator}
              img={'https://i.ibb.co/SfrK7FX/charging.png'}
              title={'Charging Calculator'}
            />
            <NavigationItem
              item={'test3'}
              selected={selectedCalculator}
              setSelected={setSelectedCalculator}
              img={'https://i.ibb.co/XLxN8sK/crudeoil.png'}
              title={'Crude Oil Saving Calculator'}
            />
            <NavigationItem
              item={'test4'}
              selected={selectedCalculator}
              setSelected={setSelectedCalculator}
              img={'https://res.cloudinary.com/insight-byte/image/upload/v1669209531/image_2_1_pluag9.svg'}
              title={'Journey Calculator'}
            />
        </div>
        </>
      )}
    </Layout>
  );
};

export default Calculator;
