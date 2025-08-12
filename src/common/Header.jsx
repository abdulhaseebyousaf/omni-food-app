import React, { useState } from 'react'
import logo from '../assets/omnifood-logo.png'
import HowItWorks from '../components/HowItWorks'
import { CiMenuBurger } from "react-icons/ci";
import NavMain from './Navmain'
function Header() {
const [visible, setVisible] = useState(false)

const handleShow = () =>{
  setVisible(true)
}
  
  return (
    <div>
       <div className='flex w-full justify-between items-center max-[1201px]:px-7 max-[1201px]:h-[87px] bg-[#fdf2e9] h-24 px-12 relative max-[545px]:px-[25px] max-[545px]:h-[76px] ' >
    <img className='h-[22px] w-[163px] max-[1201px]:h-[19px] max-[1201px]:w-[147px] max-[545px]:h-[17px] max-[545px]:w-[130px] ' src={logo} />
       <nav className='flex items-center max-[1201px]:gap-x-7 max-[945px]:hidden gap-x-12 list-none'>
        <a href='#how'  className='text-[#333] hover:transition-all hover:duration-300 cursor-pointer max-[1201px]:text-base hover:text-[#cf711f] font-medium text-lg'>How it works</a>
        <a href='#meal' className='text-[#333] hover:text-[#cf711f] hover:transition-all hover:duration-300 cursor-pointer max-[1201px]:text-base font-medium text-lg'>Meals</a>
        <a href='#testimonials' className='text-[#333] hover:transition-all hover:text-[#cf711f] hover:duration-300 cursor-pointer max-[1201px]:text-base font-medium text-lg'>Testimonials</a>
        <a href='#pricing' className='text-[#333] hover:transition-all hover:duration-300 hover:text-[#cf711f] cursor-pointer max-[1201px]:text-base font-medium text-lg'>Pricing</a>
        <li>
            <a  className='text-white bg-[#e67e22] max-[1201px]:text-base max-[1201px]:px-[21px] text-lg font-medium hover:transition-all hover:duration-300 hover:bg-[#cf711f] rounded-[9px] px-6 py-[10px]' href="#signup">Try for free</a>
            </li>      
       </nav>  
  <div onClick={() => handleShow()}
    className="w-9 h-10 cursor-pointer hidden max-[945px]:flex flex-col items-center justify-center"
  >
    <input className="hidden peer" type="checkbox" />
    <div
      className="w-[78%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.55rem] "
    ></div>
    <div
      className="w-[78%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center "
    ></div>
    <div
      className="w-[78%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.55rem] "
    ></div>
  </div> 
   { visible &&
     <NavMain setVisible={setVisible} /> 
   }
        </div>
    </div>
  )
}

export default Header