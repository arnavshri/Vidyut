import React, { useState } from 'react'
import { CalcInput } from '@/pages/Calculator';
import { calculator_options } from '@/utils/data/calculator_options';

const ChargingCalculator = () => {
    const [values,setValues] = useState({
        vehicleSegment : '',
    })
    
    const [isSubmitted,setIsSubmitted] = useState(false);
    return (
      <div className=''>
              <div className='py-8 px-12 bg-[#0000000c] text-3xl'>Charging Cost Calculator</div>
              {isSubmitted?<><div className='bg-primary mt-24 rounded-xl text-white w-[75%] mx-auto py-8 px-12'>
                  <div className='grid text-xl  gap-12 font-semibold grid-cols-3 text-black'>
                      <div></div>
                      <div className='text-white'>Charging Time</div>
                      <div className=' h-fit py-1 w-[120px] text-center bg-white rounded-md'>3 Hours</div>
                      <div></div>
                      <div className='text-white'>KwH Added</div>
                      <div className=' h-fit py-1 w-[120px] text-center bg-white rounded-md'> 1.5 KwH</div>
                      <div></div>
                      <div className='text-white'>Charge Cost</div>
                      <div className=' h-fit py-1 w-[120px] text-center bg-white rounded-md'>₹ 9.98</div>
                      <div></div>
                      <div className='text-white'>Cost Per Km</div>
                      <div className=' h-fit py-1 w-[120px] text-center bg-white rounded-md'>₹ 0.2</div>

                  </div>
                  <div className='flex items-center mt-16 justify-center'>
                      <button className='px-12 bg-white text-primary py-2 font-semibold rounded-md'>Calculated Again</button>
                  </div>
              </div></>:<div className='mt-16 w-[80%] mx-auto'>
                  <div className='w-full rounded-t-xl h-[30vh]' style={{background : `url(https://e-amrit.niti.gov.in/assets/admin/dist/img/new-fronend-img/calculator-bg.jpg) center center/cover`}}></div>
                  <div className='bg-[#00000017] py-8'>
                      
                      <div className='mt-12 grid grid-cols-2 gap-x-24 gap-y-12 px-8'>
                              <CalcInput label='Vehicle Segment' type='select' options={calculator_options['Vehicle Segment']}/>
                              <CalcInput label='State' valueType='kWh' type='select' options={calculator_options['State']}/>
                              {/* <CalcInput label='Annual Journey Distance' valueType='Km' type='' options={[]}/> */}
                              <CalcInput label='Battery Capacity' valueType='kWh' type='' options={[]}/>
                              {/* <CalcInput label='Electric vehicle Range' valueType='km' type='select' options={[]}/> */}
                              <CalcInput label='Domestic tariff' valueType='₹/kWh' type='' options={[]}/>
                              <CalcInput label='Range' valueType='Km' type='' options={[]}/>
                              {/* <CalcInput label='Public Charging Cost' valueType='₹' type='' options={[]}/>
                              <CalcInput label='Percentage of vehicle battery charged at public place' valueType='%' type='' options={[]}/> */}
                              <CalcInput label='Comparing Vehicle' valueType='%' type='select' options={calculator_options['Comparing Vehicle']}/>
                              <CalcInput label='Home Charger' valueType='kW' type='' options={[]}/>
                              <CalcInput label='Conventional Vehicle Average Mileage' valueType='km/L' type='' options={[]}/>
                              <CalcInput label='Distance to be Travelled' valueType='Km' type='' options={[]}/>
                              {/* <CalcInput label='Journey Frequency' valueType='₹/L' type='select' options={calculator_options['Journey Frequency']}/> */}
                          
                      </div>
                      <div className='mt-12 flex items-center justify-center text-white'>
                          <button onClick={()=>setIsSubmitted(true)} className='px-12 py-3 rounded-md text-xl font-semibold  bg-primary'>Calculate Total Cost</button>
                      </div>
                  </div>
              </div>}
          </div>
    )
  }
export default ChargingCalculator