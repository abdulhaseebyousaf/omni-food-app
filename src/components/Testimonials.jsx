import React from 'react'
import image from '../assets/testimonialsPhoto/dave.jpg'
import ben from '../assets/testimonialsPhoto/ben.jpg'
import steve from '../assets/testimonialsPhoto/steve.jpg'
import hannah from '../assets/testimonialsPhoto/hannah.jpg'
import TestimonialCard from '../common/TestimonialCard'
import TestimonialPhotos from '../common/TestimonialPhotos'
import gallery1 from '../assets/galleryPhoto/gallery-1.jpg'
import gallery2 from '../assets/galleryPhoto/gallery-2.jpg'
import gallery3 from '../assets/galleryPhoto/gallery-3.jpg'
import gallery4 from '../assets/galleryPhoto/gallery-4.jpg'
import gallery5 from '../assets/galleryPhoto/gallery-5.jpg'
import gallery6 from '../assets/galleryPhoto/gallery-6.jpg'
import gallery7 from '../assets/galleryPhoto/gallery-7.jpg'
import gallery8 from '../assets/galleryPhoto/gallery-8.jpg'
import gallery9 from '../assets/galleryPhoto/gallery-9.jpg'
import gallery10 from '../assets/galleryPhoto/gallery-10.jpg'
import gallery11 from '../assets/galleryPhoto/gallery-11.jpg'
import gallery12 from '../assets/galleryPhoto/gallery-12.jpg'

function Testimonials() {
  return (
    <div id='testimonials' className='bg-[#fdf2e9] max-[945px]:grid-cols-1 grid grid-cols-[55fr_45fr] items-center'>
        <div className='p-24 max-[1201px]:py-[86px] max-[1201px]:px-[28.8px] max-[945px]:px-[25px] max-[945px]:py-[76px]'>

            <span className='block text-base font-medium max-[1201px]:text-sm max-[1201px]:mb-3.5 text-[#cf711f] uppercase mb-4 max-[945px]:text-[12px] max-[945px]:mb-3 tracking-[0.75px]'>Testimonials</span>

            <h1 className='text-[44px] leading-[1.2] mb-24 tracking-[-0.5px] max-[945px]:mb-[76px] max-[945px]:text-[28px] font-bold max-[1201px]:text-[32px] max-[1201px]:mb-[86px] max-[704px]:mb-[38.4px] '>Once you try it, you can't go back</h1>
           
            <div className='grid gap-x-12 gap-y-20 max-[945px]:gap-y-[38.4px] max-[945px]:gap-x-[64.4px] max-[1201px]:gap-y-[43px] max-[545px]:grid-cols-1 max-[1201px]:gap-x-[72px] grid-cols-2'>
                <TestimonialCard
                image={image}
                description={'Inexpensive, healthy and great-tasting meals,without even having to order manually! It feels truly magical.'}
                text={'— Dave Bryson'}
                />
                <TestimonialCard
                image={ben}
                description={'The AI algorithm is crazy good,it chooses the right meals for me every time. It is amazing not to worry about food anymore!'}
                text={'— Ben Hadley'}
                />
                <TestimonialCard
                image={steve}
                description={'Omnifood is a life saver! I just started a company, so there is no time for cooking. I could not live without my daily meals now!'}
                text={'— Steve Miller'}
                />
                <TestimonialCard
                image={hannah}
                description={'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.'}
                text={'— Hannah Smith'}
                />
                 </div>
        </div>

<TestimonialPhotos 
  gallery1={gallery1}
  gallery2={gallery2}
  gallery3={gallery3}
  gallery4={gallery4}
  gallery5={gallery5}
  gallery6={gallery6}
  gallery7={gallery7}
  gallery8={gallery8}
  gallery9={gallery9}
  gallery10={gallery10}
  gallery11={gallery11}
  gallery12={gallery12}
/>
    </div>
  )
}

export default Testimonials