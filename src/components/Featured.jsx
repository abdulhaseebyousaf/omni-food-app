import React from 'react'
import business from '../assets/FeaturedPhotos/business-insider.png'
import forbes from '../assets/FeaturedPhotos/forbes.png'
import tech from '../assets/FeaturedPhotos/techcrunch.png'
import neww from '../assets/FeaturedPhotos/the.png'
import usa from '../assets/FeaturedPhotos/usa-today.png'
import Slider from 'react-infinite-logo-slider'
function Featured() {
  return (
    <section className='pt-12 max-[507px]:pt-[38px] max-[507]:pb-[25px]  pb-8'>
        <div className='max-w-[1200px] max-[1201px]:max-w-[1080px] mx-auto max-[545px]:px-3 px-8'>
            <h1 className='text-center text-[14px] tracking-[0.75px]  font-medium mb-6 uppercase  text-[#888] max-[507]:mb-6 max-[507px]:text-[11px] max-[1201px]:mb-[19px] '>AS FEATURED IN</h1>
           <Slider
            width="240px"
            padding-left="10px"
            duration={40}
             display= "flex"
             align-items= "center"
           justify-content= "center"
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >

            <Slider.Slide>
                <img className='h-8 w-32  justify-center max-sm:h-6 brightness-0 opacity-50' src={tech} alt="" />
               </Slider.Slide>
               <Slider.Slide>
               
                <img className='h-8 w-32 jmax-sm:h-6 brightness-0 opacity-50' src={business} alt="error" />
               
                </Slider.Slide>
                <Slider.Slide>
                

                <img className='h-8 w-32 justify-center max-sm:h-6 brightness-0 opacity-50' src={neww} alt="" />
               
                </Slider.Slide>
                <Slider.Slide>
                  

                <img className='h-8 w-32 justify-center max-sm:h-6 brightness-0 opacity-50' src={forbes} alt="" />
             
                </Slider.Slide>
                <Slider.Slide>
                 
    
                <img className='h-8 justify-center max-sm:h-6 brightness-0 opacity-50' src={usa} alt="" />
                
            </Slider.Slide>
        </Slider>
          </div>

    </section>
  )
}

export default Featured