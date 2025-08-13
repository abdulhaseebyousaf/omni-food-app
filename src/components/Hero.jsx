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
    <div className='pt-12 pb-24 bg-[#fdf2e9] max-[1201px]:pt-11 max-[1201px]:pb-[86px] max-[545px]:pt-5 max-[545px]:pb-[51px]  '>
        {/* for main first main div */}
<div className='max-w-[1300px] max-[1345px]:max-w-[1200px] max-[1201px]:max-w-[1080px] max-[1201px]:gap-[43.2px]  mx-auto grid gap-24 items-center grid-cols-2 max-[945px]:grid-cols-1 max-[945px]:px-16 max-[545px]:px-[25px] max-[945px]:text-center max-[945px]:gap-[51px] mt-24 px-8 max-[1201px]:mt-[98px] max-[945]:mt-[69px]'>
    {/* hero-text-box */}
    <div className='text-[#555] font-normal '>
        <h1 className='text-[52px] text-[#343a40] max-[545px]:mb-[25px] max-[1345px]:text-[44px] max-[545px]:text-[35px] max-[945px]:text-[35px] max-[945px]:mb-[25px] mb-8 max-[1201px]:text-[39.6px]  max-[545px]:text-left tracking-[-0.5px] font-bold leading-[1.05]' >  A healthy meal delivered to your door, every single day
            </h1>
            <h2 className='mb-12 max-[945px]:mb-4.5 leading-[1.6] max-[945px]:text-base text-[20px] max-[1201px]:text-lg max-[545px]:text-left max-[1201px]:mb-[43px]' >
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </h2>
            {/*buttons */}
    <div className='max-sm:flex  max-sm:flex-col max-sm:gap-3 '>
            <a href="#signup" className='hover:bg-[#cf711f] cursor-pointer max-[412px]:w-full text-white hover:transition-all font-semibold hover:duration-300 max-sm:mr-0 mr-[19px] rounded-[9px] px-8 py-[14px] max-[945px]:text-base text-xl max-[945px]:px-8 max-[1201px]:mr-3.5 max-[1201px]:px-7 justify-center max-[383px]:flex max-[1201px]:py-3.5 max-[1201px]:text-lg  max-[545px]:px-3 bg-[#e67e22]  '>Start eating well</a>
            <a href="#how" className='hover:bg-[#fdf2e9] cursor-pointer text-[#555] hover:transition-all hover:duration-300 hover:shadow-[inset_0_0_0_3px_#fff] font-semibold rounded-[9px] px-8 max-[945px]:px-8 py-3 max-[1201px]:px-7 max-[1201px]:py-3.5 max-[1201px]:text-lg max-[383px]:flex justify-center max-[945px]:text-base text-xl inline-block bg-white hover:border-white'>Learn more ↓</a>
    </div>
              
            {/* last images */}
            <div className='flex items-center gap-x-1 max-[945px]:gap-3.5 max-[945px]:justify-center mt-20 max-[945px]:mt-7  max-[1201px]:mt-[72px] max-sm:gap-3 max-sm:flex  max-sm:flex-col'>
             
              
                {/*  */}
                <div className='flex mr-7 max-[945px]:mr-3'>
                    <img className='h-12 w-12 max-[945px]:w-[39px] max-[945px]:h-[39px] max-[1201px]:w-[42px] max-[1201px]:h-[42px] rounded-[50%] mr-[-16px] border-[3px] border-solid border-[#fdf2e9]' src={customer1} alt="" />
                    <img className='h-12 w-12 max-[945px]:w-[39px] max-[945px]:h-[39px] max-[1201px]:w-[42px] max-[1201px]:h-[42px] rounded-[50%] mr-[-16px] border-[3px] border-solid border-[#fdf2e9]'  src={customer2} alt="" />
                    <img className='h-12 w-12 max-[945px]:w-[39px] max-[945px]:h-[39px] max-[1201px]:w-[42px] max-[1201px]:h-[42px] rounded-[50%] mr-[-16px] border-[3px] border-solid border-[#fdf2e9]'  src={customer3} alt="" />
                    <img className='h-12 w-12 max-[945px]:w-[39px] max-[945px]:h-[39px] max-[1201px]:w-[42px] max-[1201px]:h-[42px] rounded-[50%] mr-[-16px] border-[3px] border-solid border-[#fdf2e9]'  src={customer4} alt="" />
                    <img className='h-12 w-12 max-[945px]:w-[39px] max-[945px]:h-[39px] max-[1201px]:w-[42px] max-[1201px]:h-[42px] rounded-[50%] mr-[-16px] border-[3px] border-solid border-[#fdf2e9]'  src={customer5} alt="" />
                    <img className='h-12 w-12 max-[945px]:w-[39px] max-[945px]:h-[39px] max-[1201px]:w-[42px] max-[1201px]:h-[42px] rounded-[50%] mr-[-16px] border-[3px] border-solid border-[#fdf2e9]'  src={customer6} alt="" />
                </div>
                {/* text */}
               <div className='text-lg max-[945px]:text-sm font-semibold  leading-4 max-[1201px]:text-base'>
                    <span className='text-[#cf711f] font-bold'>250,000+ </span>
                     meals delivered last year!
                    </div>  
            </div>
    </div>
    <div>
        <picture>
            <img className='max-[945px]:w-[60%] max-[545px]:w-[80%] mx-auto'  src={image} alt="" />
        </picture>
    </div>
     </div>
     {/* main div */}
    </div>
  )
}
