import React from 'react'

const ProductCard = ({ image, text, heading, svg, number, textsecond, thirdnumber, secondnumber, fourthnumber, textlast,secondsvg, thirdsvg, innertext, display }) => {
  return (
    <>
    <div className='transition-all   rounded-[11px] overflow-hidden shadow-[0_2.4rem_4.8rem_rgba(0,0,0,0.075)] ' >
      {/* for image */}
      <img src={image} alt="" />
      {/* for image */}
      <div className='pt-8 px-12 pb-12'>
        <div className='mb-3 flex gap-x-1' >
          <span className='bg-[#51cf66] inline-block px-2 py-1 text-[12px] uppercase text-[#333] rounded-full font-semibold ' >{text}</span>
          {/*  */}
          <span className={`bg-[#ffd43b] ${display} px-2 py-1 text-[12px] uppercase text-[#333] rounded-full font-semibold `} >{innertext}</span>
        </div>
        <div className='mb-8'>
        <span className='text-2xl text-[#333] font-semibold '>{heading}</span>
        </div>
        <ul className='flex list-none flex-col gap-5' >
          <li className='flex items-center gap-4 text-lg'>
            <div className='icon-inner' >
          <img className='h-6 w-6 text-[#e67e22] ' src={svg} alt="" />
            </div>
            <span className='text-lg text-[#555] font-normal' ><strong className='font-medium' >{number}</strong> {textsecond}</span>
          </li>
          <li className='flex items-center gap-4 text-lg'>
            <div className='icon-inner' >
          <img className='h-6 w-6 text-[#e67e22] ' src={secondsvg} alt="" />
            </div>
            <span className='text-lg text-[#555] font-medium' ><strong className='font-normal' >{thirdnumber}</strong> {secondnumber}</span>
          </li>
                <li className='flex items-center gap-4 text-lg'>
            <div className='icon-inner' >
          <img className='h-6 w-6 text-[#e67e22] ' src={thirdsvg} alt="" />
            </div>
            <span className='text-lg text-[#555] font-normal' ><strong className='font-medium' >{fourthnumber}</strong> {textlast}</span>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default ProductCard
