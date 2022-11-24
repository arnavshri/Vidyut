import React, { useState } from 'react'
import { CalcInput } from '@/pages/Calculator';
import { calculator_options } from '@/utils/data/calculator_options';

const CrudeCalculator = () => {
    const [values, setValues] = useState({
        vehicleSegment: '',
    })

    const [isSubmitted, setIsSubmitted] = useState(false);
    return (
        <div className=''>
            <div className='py-fit px-fit bg-[#0000000c] text-3xl'>Crude Oil Saving Cost Calculator</div>
            {isSubmitted ? <><div className='bg-primary mt-24 rounded-xl text-white w-[85%] mx-auto py-8 px-12'>
                <div className='grid text-xl  gap-12 font-semibold grid-cols-3 text-black'>
                    <div className='text-white'>Annual Crude Oil saving is</div>
                    <div className=' h-fit py-2 w-[120px] text-center bg-white rounded-md'> 304.17 Liters</div>
                    {/* <div className=' py-2 w-[120px] text-center bg-white rounded-md'>₹ 330.93</div>
                      <div className='text-white'>Cost per km</div>
                      <div className=' py-2 w-[120px] text-center bg-white rounded-md'>₹ 0.15</div>
                      <div className=' py-2 w-[120px] text-center bg-white rounded-md'>₹ 1.65</div>
                      <div className='text-white'>Annual Fuel Cost</div>
                      <div className=' py-2 w-[120px] text-center bg-white rounded-md'>₹ 10973.05</div>
                      <div className=' py-2 w-[120px] text-center bg-white rounded-md'>₹ 120790.67</div> */}
                </div>
                <div className='flex items-center mt-16 justify-center'>
                    <button onClick={() => setIsSubmitted(false)} className='px-12 bg-white text-primary py-2 font-semibold rounded-md'>Calculated Again</button>
                </div>
            </div></> : <div className='mt-16 w-[80%] mx-auto'>
                <div className='w-full rounded-t-xl h-[30vh]' style={{ background: `url(https://e-amrit.niti.gov.in/assets/admin/dist/img/new-fronend-img/calculator-bg.jpg) center center/cover` }}></div>
                <div className='bg-[#00000017] py-8'>

                    <div className='mt-12 grid grid-cols-2 gap-x-24 gap-y-12 px-8'>
                        <CalcInput label='Vehicle Segment' type='select' options={calculator_options['Vehicle Segment']} />
                        <CalcInput label='Comparing Vehicle' valueType='%' type='select' options={calculator_options['Comparing Vehicle']} />
                        {/* <CalcInput label='State' valueType='kWh' type='select' options={calculator_options['State']}/> */}
                        <CalcInput label='Distance' valueType='Km' type='' options={[]} />
                        <CalcInput label='Journey Frequency' valueType='₹/L' type='select' options={calculator_options['Journey Frequency']} />
                        <CalcInput label='Annual Journey Distance' valueType='Km' type='' options={[]} />
                        <CalcInput label='Conventional Vehicle Average Mileage' valueType='km/L' type='' options={[]} />
                        <CalcInput label='Life Cycle of Vehicle' valueType='Years' type='' options={[]} />

                    </div>
                    <div className='mt-12 flex items-center justify-center text-white'>
                        <button onClick={() => setIsSubmitted(true)} className='px-12 py-3 rounded-md text-xl font-semibold  bg-primary'>Calculate Total Cost</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default CrudeCalculator