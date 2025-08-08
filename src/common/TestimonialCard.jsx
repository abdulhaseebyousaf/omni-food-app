import React from 'react'

function TestimonialCard({ image, description, text }) {
  return (
    <>
<div>
    <img className='w-16 rounded-[50%] mb-3' src={image} alt="" />
    <blockquote className='text-lg leading-[1.8] mb-4 text-[#555] ' >
             {description}
              </blockquote>
      <p className='text-base text-[#6f6f6f]'>{text}</p>        
</div>
    </>
  )
}

export default TestimonialCard