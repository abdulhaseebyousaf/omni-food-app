import React from 'react'

const PricingEndCard = ({paragraph, contact1, image1 }) => {
  return (
    <>
    <div>
        <div className='text-[#e67e22] max-[1201px]:mb-3.5 max-[1201px]:p-3.5 w-fit bg-[#fdf2e9] mb-8 p-4  rounded-[50%] max-[945px]:mb-[25px] '>
       <img className='w-8 h-8 max-[1201px]:h-7 max-[945px]:h-[25px] max-[945px]:w-[25px] max-[1201px]:w-7 ' src={image1} alt="" />
        </div>
     <p className='text-[#333] max-[945px]:mb-3 max-[945px]:text-[19.2px]   max-[1201px]:text-[21.4px] max-[1201px]:mb-[14.4px] font-bold mb-4 text-2xl'>{paragraph}</p>
     <p className='text-lg leading-[1.8] text-[#555] max-[945px]:text-sm max-[1201px]:text-[16.2px]' >{contact1}</p>
        </div>  
    </>
  )
}

export default PricingEndCard
