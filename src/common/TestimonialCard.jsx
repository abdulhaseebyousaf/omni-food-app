import React from 'react'

function TestimonialCard({ image, description, text }) {
  return (
    <>
<div>
    <img className='w-16 rounded-[50%] max-[1201px]:w-14 max-[945px]:h-[51px] max-[945px]:w-[51px] max-[1201px]:mb-[14px]  mb-3' src={image} alt="" />
    <blockquote className='text-lg max-[945px]:text-sm max-[945px]:mb-3.5   leading-[1.8] mb-4 text-[#555] max-[1201px]:mb-3.5 max-sm:leading-5 max-[1201px]:text-base' >
             {description}
              </blockquote>
      <p className='text-base [1201px]:text-sm text-[#6f6f6f] max-[945px]:text-[12.8px]'>{text}</p>        
</div>
    </>
  )
}

export default TestimonialCard