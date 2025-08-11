import React from 'react'
import business from '../assets/FeaturedPhotos/business-insider.png'
import forbes from '../assets/FeaturedPhotos/forbes.png'
import tech from '../assets/FeaturedPhotos/techcrunch.png'
import neww from '../assets/FeaturedPhotos/the.png'
import usa from '../assets/FeaturedPhotos/usa-today.png'

function Featured() {
  return (
    <section className='pt-12 max-[507px]:pt-[38px] max-[507]:pb-[25px]  pb-8'>
        <div className='max-w-[1200px] max-[1201px]:max-w-[1080px] mx-auto max-[545px]:px-3 px-8'>
            <h1 className='text-center text-[14px] tracking-[0.75px]  font-medium mb-6 uppercase  text-[#888] max-[507]:mb-6 max-[507px]:text-[11px] max-[1201px]:mb-[19px] '>AS FEATURED IN</h1>
            <div className='flex justify-around'>
                <img className='h-8 max-[945px]:h-[19px] max-[545px]:h-[9.6px] max-[1201px]:h-8 brightness-0 opacity-50' src={tech} alt="" />
                <img className='h-8 max-[945px]:h-[19px] max-[545px]:h-[9.6px] max-[1201px]:h-8 brightness-0 opacity-50' src={business} alt="error" />
                <img className='h-8 max-[945px]:h-[19px] max-[545px]:h-[9.6px] max-[1201px]:h-8 brightness-0 opacity-50' src={neww} alt="" />
                <img className='h-8 max-[945px]:h-[19px] max-[545px]:h-[9.6px] max-[1201px]:h-8 brightness-0 opacity-50' src={forbes} alt="" />
                <img className='h-8 max-[945px]:h-[19px] max-[545px]:h-[9.6px] max-[1201px]:h-8 brightness-0 opacity-50' src={usa} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Featured