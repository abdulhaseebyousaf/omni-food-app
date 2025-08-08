import React from 'react'

function TestimonialPhotos({ gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, }) {
  return (
    <>
    <div className='grid  gap-4 p-4 grid-cols-3' > 
        <img  src={gallery1} alt="" />
        <img  src={gallery2} alt="" />
        <img  src={gallery3} alt="" />
        <img  src={gallery4} alt="" />
        <img  src={gallery5} alt="" />
        <img  src={gallery6} alt="" />
        <img  src={gallery7} alt="" />
        <img  src={gallery8} alt="" />
        <img  src={gallery9} alt="" />
        <img  src={gallery10} alt="" />
        <img  src={gallery11} alt="" />
        <img  src={gallery12} alt="" />
    </div>
    </>
  )
}

export default TestimonialPhotos