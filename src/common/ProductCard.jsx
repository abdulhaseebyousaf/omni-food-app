import React from 'react'

const ProductCard = ({ image, text, heading, svg, number, textsecond, thirdnumber, secondnumber, fourthnumber, textlast,secondsvg, thirdsvg, innertext, display }) => {
  return (
    <>
    <div className='transition-all duration-400 hover:transform hover:-translate-y-[12px]  rounded-[11px] overflow-hidden shadow-[0_2.5rem_4.8rem_rgba(0,0,0,0.075)] '>
      {/* for image */}
      <img src={image} alt="" />
      {/* for image */}
      <div className='pt-8 max-[1201px]:pt-7 max-[1201px]:px-[43px] max-[1201px]:pb-[43px] px-12 pb-12 max-[945px]:pt-[19px] max-[945px]:px-[25px] max-[945px]:pb-[25px] '>
        <div className='mb-3 flex gap-x-1' >
          <span className='bg-[#51cf66] inline-block px-2  text-[12px] max-[1201px]:text-[10px] text-center h-fit max-[1201px]:px-[7px] max-[1201px]:py-[3px]    uppercase text-[#333] rounded-full font-semibold ' >{text}</span>
          {/*  */}
          <span className={`bg-[#ffd43b]  ${display} px-2 flex items-center text-[12px] uppercase text-[#333] rounded-full font-semibold  max-[945px]:text-[9.6px]`} >{innertext}</span>
        </div>
        <div className='mb-8 max-[1201px]:mb-7 max-[945px]:mb-[25px] '>
        <span className='text-2xl text-[#333]  font-semibold max-[1201px]:text-[21px]    max-[945px]:text-[19px]  '>{heading}</span>
        </div>
        <ul className='flex list-none flex-col gap-5 max-[1201px]:gap-[18px] max-[945px]:gap-4 ' >
          <li className='flex items-center gap-4 text-lg'>
            <div className='icon-inner' >
          <img className='h-6 w-6 text-[#e67e22] max-[1201px]:w-[21px] max-[1201px]:h-[21px] max-[945px]:w-[19px] max-[945px]:h-[19px] ' src={svg} alt="" />
            </div>
            <span className='text-lg text-[#555] font-normal max-[1201px]:text-base max-[945px]:text-sm ' ><strong className='font-medium' >{number}</strong> {textsecond}</span>
          </li>
          <li className='flex items-center gap-4 text-lg'>
            <div className='icon-inner' >
          <img className='h-6 w-6 text-[#e67e22] max-[945px]:w-[19px] max-[945px]:h-[19px] max-[1201px]:w-[21px] max-[1201px]:h-[21px]' src={secondsvg} alt="" />
            </div>
            <span className='text-lg text-[#555] font-medium max-[945px]:text-sm ' ><strong className='font-normal ' >{thirdnumber}</strong> {secondnumber}</span>
          </li>
                <li className='flex items-center gap-4 text-lg'>
            <div className='icon-inner' >
          <img className='h-6 w-6 text-[#e67e22] max-[945px]:w-[19px] max-[945px]:h-[19px] max-[1201px]:w-[21px] max-[1201px]:h-[21px] ' src={thirdsvg} alt="" />
            </div>
            <span className='text-lg text-[#555] font-normal max-[945px]:text-sm ' ><strong className='font-medium ' >{fourthnumber}</strong> {textlast}</span>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default ProductCard
