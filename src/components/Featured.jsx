import React from 'react'
import business from '../assets/FeaturedPhotos/business-insider.png'
import forbes from '../assets/FeaturedPhotos/forbes.png'
import tech from '../assets/FeaturedPhotos/techcrunch.png'
import neww from '../assets/FeaturedPhotos/the.png'
import usa from '../assets/FeaturedPhotos/usa-today.png'

function Featured() {
  return (
    <section className='pt-12 pb-8'>
        <div className='max-w-[1200px] mx-auto px-8'>
            <h1 className='text-center text-[14px] tracking-[0.75px] font-normal mb-6 text-[#888] '>AS FEATURED IN</h1>
            <div className='flex justify-around'>
                <img className='h-8 brightness-0 opacity-50' src={tech} alt="" />
                <img className='h-8 brightness-0 opacity-50' src={business} alt="error" />
                <img className='h-8 brightness-0 opacity-50' src={neww} alt="" />
                <img className='h-8 brightness-0 opacity-50' src={forbes} alt="" />
                <img className='h-8 brightness-0 opacity-50' src={usa} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Featured