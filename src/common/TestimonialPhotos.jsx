import React from 'react'

function TestimonialPhotos({ gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, }) {
  return (
    <>
    <div className='grid  gap-4 p-4 grid-cols-3' > 
      <figure className='overflow-hidden'>
        <img className='hover:transform duration-400 hover:scale-[1.1]'  src={gallery1} alt="" />
      </figure>
      <figure className='overflow-hidden' >
        <img className='hover:transform duration-400 hover:scale-[1.1]'  src={gallery2} alt="" />
      </figure>
      <figure className='overflow-hidden' >
        <img className='hover:transform duration-400 hover:scale-[1.1]'  src={gallery3} alt="" />
      </figure>
      <figure className='overflow-hidden' >
        <img className='hover:transform duration-400 hover:scale-[1.1]'  src={gallery4} alt="" />
      </figure>
      <figure className='overflow-hidden' >
        <img className='hover:transform duration-400 hover:scale-[1.1]'  src={gallery5} alt="" />
      </figure>
      <figure className='overflow-hidden' >
        <img className='hover:transform duration-400 hover:scale-[1.1]'  src={gallery6} alt="" />
      </figure>
      <figure className='overflow-hidden' >
        <img className='hover:transform duration-400 hover:scale-[1.1]'  src={gallery7} alt="" />
      </figure>
      
      <figure className='overflow-hidden' >
        <img className='hover:transform duration-400 hover:scale-[1.1]'  src={gallery8} alt="" />
      </figure>
         <figure className='overflow-hidden' >
        <img className='hover:transform duration-400 hover:scale-[1.1]'  src={gallery9} alt="" />
      </figure>
         <figure className='overflow-hidden' >
        <img className='hover:transform duration-400 hover:scale-[1.1]'  src={gallery10} alt="" />
      </figure>
         <figure className='overflow-hidden' >
        <img className='hover:transform duration-400 hover:scale-[1.1]'  src={gallery11} alt="" />
      </figure>
 <figure className='overflow-hidden' >
        <img className='hover:transform duration-400 hover:scale-[1.1]'  src={gallery7} alt="" />
      </figure>
    </div>
    </>
  )
}

export default TestimonialPhotos