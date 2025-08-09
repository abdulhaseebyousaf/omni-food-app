import React from 'react'
import logo from '../assets/omnifood-logo.png'
import HowItWorks from '../components/HowItWorks'
function Header() {
  return (
    <div>
       <div className='flex w-full justify-between items-center bg-[#fdf2e9] h-24 px-12 relative ' >
    <img className='h-[22px] w-[163px]' src={logo} />
       <nav className='flex items-center  gap-x-12 list-none'>
        <a href='#how'  className='text-[#333] hover:transition-all hover:duration-300 cursor-pointer hover:text-[#cf711f] font-medium text-lg'>How it works</a>
        <a href='#meal' className='text-[#333] hover:text-[#cf711f] hover:transition-all hover:duration-300 cursor-pointer font-medium text-lg'>Meals</a>
        <a href='#testimonials' className='text-[#333] hover:transition-all hover:text-[#cf711f] hover:duration-300 cursor-pointer font-medium text-lg'>Testimonials</a>
        <a href='#pricing' className='text-[#333] hover:transition-all hover:duration-300 hover:text-[#cf711f] cursor-pointer font-medium text-lg'>Pricing</a>
        <li>
            <a  className='text-white bg-[#e67e22] text-lg font-medium hover:transition-all hover:duration-300 hover:bg-[#cf711f] rounded-[9px] px-6 py-[10px]' href="#signup">Try for free</a>
            </li>      
       </nav>
        </div> 
    </div>
  )
}

export default Header