import React from 'react'
import image from '../assets/hero.webp'
import customer1 from '../assets/HeroPhotos/customer-1.jpg'
import customer2 from '../assets/HeroPhotos/customer-2.jpg'
import customer3 from '../assets/HeroPhotos/customer-3.jpg'
import customer4 from '../assets/HeroPhotos/customer-4.jpg'
import customer5 from '../assets/HeroPhotos/customer-5.jpg'
import customer6 from '../assets/HeroPhotos/customer-6.jpg'
export default function Hero() {
  return (
    // main div
    <div className='pt-12 pb-24 bg-[#fdf2e9]'>
        {/* for main first main div */}
<div className='max-w-[1300px] mx-auto grid gap-24 items-center grid-cols-2 px-8'>
    {/* hero-text-box */}
    <div className='text-[#555] font-normal '>
        <h1 className='text-[52px] text-[#343a40] mb-8  font-bold tracking-tighter' >  A healthy meal delivered to your door, every single day
            </h1>
            <h2 className='mb-12 text-[20px]' >
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </h2>
            {/*buttons */}
            <div>
            <button href="#" className='hover:bg-[#cf711f] cursor-pointer text-white hover:transition-all font-semibold hover:duration-300 mr-4 rounded-[9px] px-8 py-4 bg-[#e67e22]'>Start eating well</button>
            <button href="#" className='hover:bg-[#fdf2e9] cursor-pointer text-black hover:transition-all hover:duration-300 mr-4 font-semibold rounded-[9px] px-8 py-4 bg-white hover:border-white'>Learn more ↓</button>
            </div>
            {/* last images */}
            <div className='flex items-center  mt-20'>
                {/*  */}
                <div className='flex mr-8'>
                    <img className='h-12 w-12 rounded-[50%] mr-[-16px] border-[3px] border-solid border-[#fdf2e9]' src={customer1} alt="" />
                    <img className='h-12 w-12 rounded-[50%] mr-[-16px] border-[3px] border-solid border-[#fdf2e9]'  src={customer2} alt="" />
                    <img className='h-12 w-12 rounded-[50%] mr-[-16px] border-[3px] border-solid border-[#fdf2e9]'  src={customer3} alt="" />
                    <img className='h-12 w-12 rounded-[50%] mr-[-16px] border-[3px] border-solid border-[#fdf2e9]'  src={customer4} alt="" />
                    <img className='h-12 w-12 rounded-[50%] mr-[-16px] border-[3px] border-solid border-[#fdf2e9]'  src={customer5} alt="" />
                    <img className='h-12 w-12 rounded-[50%] mr-[-16px] border-[3px] border-solid border-[#fdf2e9]'  src={customer6} alt="" />
                </div>
                {/* text */}
                <div className='text-lg font-semibold'>
                    <span className='text-[#cf711f] font-bold'>250,000+</span>
                     meals delivered last year!
                    </div>
            </div>
    </div>
    <div>
        <picture>
            <img src={image} alt="" />
        </picture>
    </div>
     </div>
     {/* main div */}
    </div>
  )
}
