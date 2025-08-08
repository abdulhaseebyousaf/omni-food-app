import React from 'react'

const PricingEndCard = ({paragraph, contact1 }) => {
  return (
    <>
    <div>
        <div className='text-[#e67e22] h-8 w-8 bg-[#fdf2e9] mb-8 p-4 rounded-[50%]' >
        </div>
     <p className='text-[#333] font-bold mb-4 text-2xl'>{paragraph}</p>
     <p className='text-lg leading-[1.8] text-[#555] ' >{contact1}</p>
        </div>  
    </>
  )
}

export default PricingEndCard
