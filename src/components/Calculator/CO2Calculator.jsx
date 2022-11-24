import React, { useState } from 'react'
import { CalcInput } from '@/pages/Calculator';
import { calculator_options } from '@/utils/data/calculator_options';

const CO2Calculator = () => {
    const [values,setValues] = useState({
        vehicleSegment : '',
    })
    
    const [isSubmitted,setIsSubmitted] = useState(false);
    return (
      <div className=''>
              <div className='py-fit px-fit bg-[#0000000c] text-3xl'>Crude Oil Saving Cost Calculator</div>
              {isSubmitted?<><div className='bg-primary mt-24 rounded-xl text-white w-[95%] mx-auto py-8 px-12'>
                  <div className='grid text-xl  gap-12 font-semibold grid-cols-4 text-black'>
                      <div className='text-white'>CO2 emissions from conventional vehicle</div>
                      <div className=' h-fit py-2 w-[120px] text-center bg-white rounded-md'> 0.71 Tonnes</div>
                      <div className='text-white'>CO2 emissions due to electric vehicle</div>
                      <div className=' h-fit py-2 w-[120px] text-center bg-white rounded-md'> 0.49 Tonnes</div>
                      <div className='text-white'>Annual CO2 emissions savings by opting EV</div>
                      <div className=' h-fit py-2 w-[120px] text-center bg-white rounded-md'> 0.22 Tonnes</div>
                      <div className='text-white'>CO2 emissions reductions during the lifecycle of the vehicle</div>
                      <div className=' h-fit py-2 w-[120px] text-center bg-white rounded-md'> 3.34 Tonnes</div>
                      {/* <div className=' py-2 w-[120px] text-center bg-white rounded-md'>₹ 330.93</div>
                      <div className='text-white'>Cost per km</div>
                      <div className=' py-2 w-[120px] text-center bg-white rounded-md'>₹ 0.15</div>
                      <div className=' py-2 w-[120px] text-center bg-white rounded-md'>₹ 1.65</div>
                      <div className='text-white'>Annual Fuel Cost</div>
                      <div className=' py-2 w-[120px] text-center bg-white rounded-md'>₹ 10973.05</div>
                      <div className=' py-2 w-[120px] text-center bg-white rounded-md'>₹ 120790.67</div> */}
                  </div>
                  <div className='flex items-center mt-16 justify-center'>
                      <button className='px-12 bg-white text-primary py-2 font-semibold rounded-md'>Calculated Again</button>
                  </div>
              </div></>:<div className='mt-16 w-[80%] mx-auto'>
                  <div className='w-full rounded-t-xl h-[30vh]' style={{background : `url(https://e-amrit.niti.gov.in/assets/admin/dist/img/new-fronend-img/calculator-bg.jpg) center center/cover`}}></div>
                  <div className='bg-[#00000017] py-8'>
                      
                      <div className='mt-12 grid grid-cols-2 gap-x-24 gap-y-12 px-8'>
                              <CalcInput label='Vehicle Segment' type='select' options={calculator_options['Vehicle Segment']}/>
                              <CalcInput label='Comparing Vehicle' valueType='%' type='select' options={calculator_options['Comparing Vehicle']}/>
                              <CalcInput label='Journey Distance' valueType='km' type='' options={[]}/>
                              <CalcInput label='Journey Frequency' valueType='₹/L' type='select' options={calculator_options['Journey Frequency']}/>
                              <CalcInput label='Annual Journey Distance' valueType='Km' type='' options={[]}/>
                              <CalcInput label='CO2 Emission Factor' valueType='g/km' type='' options={[]}/>
                              <CalcInput label='Comparable EV Battery Capacity' valueType='kWh' type='' options={[]}/>
                              <CalcInput label='Electric vehicle Range' valueType='km' type='' options={[]}/>
                              <CalcInput label='Battery Needed for total Journey' valueType='kWh' type='' options={[]}/>
                              <CalcInput label='Electricity CO2 Emission Factor' valueType='g/kWh' type='' options={[]}/>
                              <CalcInput label='Lifecycle of the vehicle' valueType='year' type='' options={[]}/>




                      </div>
                      <div className='mt-12 flex items-center justify-center text-white'>
                          <button onClick={()=>setIsSubmitted(true)} className='px-12 py-3 rounded-md text-xl font-semibold  bg-primary'>Calculate Total Cost</button>
                      </div>
                  </div>
              </div>}
          </div>
    )
  }

export default CO2Calculator