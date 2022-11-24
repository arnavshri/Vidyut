import React from 'react'
import Logo from '@/assets/logo.svg';
import HomeIcon from '@/assets/homeIcon.svg';
import WhyElectricIcon from '@/assets/whyElectric.svg';
import CalculatorIcon from '@/assets/calculator.svg'
import FAQIcon from '@/assets/question.svg';
import ChooseIcon from '@/assets/choose.svg';
import {useLocation, Link} from 'react-router-dom'
const SidebarItem = ({title,icon,link})=>{
    const location = useLocation();
    const isActive = location.pathname === link;

    return (
        <Link to={link} className='block'>
        <div className={`${isActive?'bg-[#348215] ':''} px-6 text-white text-lg font-semibold gap-5 transition-all cursor-pointer flex hover:bg-[#348215] py-3 items-center  rounded-md`}>
            {<img src={icon} className='w-[30px]'/>}{title}
        </div></Link>
    )
}

const SidebarLinks = [
    {title : 'Home', link:'/', icon : HomeIcon},
    {title : 'Why Electric', link:'/why-electric', icon : WhyElectricIcon},
    {title : 'Calculator', link:'/calculator', icon : CalculatorIcon},
    {title : 'Comparator', link:'/choose-vehicle', icon : ChooseIcon},
    {title : 'Driving Pattern', link:'/drivingpattern', icon : "https://i.ibb.co/1m2X9kp/carbon-road.png"},
    {title : 'Incentives', link:'/incentives', icon : "https://i.ibb.co/gPNm5Dt/incentive-menu.png"},
    {title : 'FAQs', link:'/faqs', icon : FAQIcon},
]

const Sidebar = () => {
  return (
    <div className='w-full px-2 py-6 h-full bg-[#5a9a40]'>
        <div className='px-4'>
            <img src={Logo} className='w-[160px] h-auto'/>
        </div>
        <div className='mt-12 space-y-4'>
            {SidebarLinks?.map(sideBarLink=>(
                <SidebarItem {...sideBarLink}/>
            ))}
        </div>
    </div>
  )
}

export default Sidebar