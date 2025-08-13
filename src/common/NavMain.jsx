import React, { useState } from 'react'
import Image from '../assets/header-svg/cross.svg'

const NavMain = ({ setVisible }) => {
    
const handelhide = () => {
    setVisible(false)
}

  return (
      <>
          <div id='main' className='mainnav transform  absolute left-0 top-0 w-full h-screen hidden max-[945px]:flex items-center  justify-center transition-all ease-in duration-300  pointer-events-auto  '>
        
    <img id='crossImage' className='absolute  right-9 top-8  w-5 h-5' src={Image} alt="" onClick={() => handelhide()} />

<ul className='flex flex-col items-center gap-y-[43.4px]'>
          <a href='#how' onClick={handelhide}  className='text-[#333] hover:transition-all hover:duration-300 cursor-pointer leading-5 hover:text-[#cf711f] font-medium text-2xl'>How it works</a>
        <a href='#meal' onClick={handelhide} className='text-[#333] hover:text-[#cf711f] hover:transition-all hover:duration-300 leading-5 cursor-pointer  font-medium text-2xl'>Meals</a>
        <a href='#testimonials' onClick={handelhide} className='text-[#333] hover:transition-all hover:text-[#cf711f] hover:duration-300 leading-5 cursor-pointer  font-medium text-2xl'>Testimonials</a>
        <a href='#pricing' onClick={handelhide} className='text-[#333] hover:transition-all hover:duration-300 hover:text-[#cf711f] cursor-pointer leading-5  font-medium text-2xl'>Pricing</a>
        <a href='#signup' onClick={handelhide} className='text-white bg-[#e67e22] text-2xl font-medium hover:transition-all hover:duration-300 hover:bg-[#cf711f] leading-5 rounded-[9px] py-[10px] px-[19px]'>
                Try for free
            </a>      
      </ul>
    </div>
      </>
  )
}

export default NavMain
