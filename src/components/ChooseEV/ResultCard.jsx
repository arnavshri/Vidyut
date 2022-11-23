import React from 'react'

const IMG = 'https://e-amrit.niti.gov.in/images/ev/ev_1617783472.jpg'

const ResultCard = ({makers,model_name,battery,battery_type,charger_rating,distance_range,charge_time, logopath}) => {
  return (
    <div className='bg-white w-full px-5 py-6 rounded-xl'>
        <div className='w-full h-[280px] rounded-md' style={{background : `url(${logopath}) center center/cover no-repeat` }}></div>
        <div className='mt-5 space-y-4 text-lg'>
            <div className='flex items-center justify-between py-3 border-b-[1px]'>
                <div className='font-bold'>Make</div>
                <div className=''>{makers}</div>
            </div>
            <div className='flex items-center justify-between py-3 border-b-[1px]'>
                <div className='font-bold'>Model</div>
                <div className=''>{model_name}</div>
            </div>
            <div className='flex items-center justify-between py-3 border-b-[1px]'>
                <div className='font-bold'>Battery Size (kWh)</div>
                <div className=''>{battery}</div>
            </div>
            <div className='flex items-center justify-between py-3 border-b-[1px]'>
                <div className='font-bold'>Battery Type</div>
                <div className=''>{battery_type}</div>
            </div>
            <div className='flex items-center justify-between py-3 border-b-[1px]'>
                <div className='font-bold'>Charger Rating (kW)</div>
                <div className=''>{charger_rating}</div>
            </div>
            <div className='flex items-center justify-between py-3 border-b-[1px]'>
                <div className='font-bold'>Driving Range</div>
                <div className=''>{distance_range}</div>
            </div>
            <div className='flex items-center justify-between py-3 border-b-[1px]'>
                <div className='font-bold'>Charging time (hours)</div>
                <div className=''>{charge_time}</div>
            </div>
        </div>
    </div>
  )
}

export default ResultCard