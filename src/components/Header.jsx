import React from 'react'
import logo from '../assets/omnifood-logo.png'
function Header() {
  return (
    <div>
       <div className='flex justify-between items-center bg-[#fdf2e9] h-24 px-12 relative ' >
    <img className='h-[22px] w-[163px]' src={logo} />
       <nav className='flex items-center  gap-x-12 list-none'>
        <li className='text-[#333] hover:transition-all hover:duration-300 cursor-pointer hover:text-[#cf711f] font-normal text-lg'>How it works</li>
        <li className='text-[#333] hover:text-[#cf711f] hover:transition-all hover:duration-300 cursor-pointer font-normal text-lg'>Meals</li>
        <li className='text-[#333] hover:transition-all hover:text-[#cf711f] hover:duration-300 cursor-pointer font-normal text-lg'>Testimonials</li>
        <li className='text-[#333] hover:transition-all hover:duration-300 hover:text-[#cf711f] cursor-pointer font-normal text-lg'>Pricing</li>
        <li>
            <a className='text-white bg-[#e67e22] hover:transition-all hover:duration-300 hover:bg-[#cf711f] rounded-[9px] px-6 py-3' href="#">Try for free</a>
            </li>      
       </nav>
        </div> 
    </div>
  )
}

export default Header