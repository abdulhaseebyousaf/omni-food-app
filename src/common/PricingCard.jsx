import React from 'react'
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const PricingCard = ({text, dollar, number, paragraph,  contact1, contact2, contact3,  contact4, buttonText,showicon }) => {
  return (
    <>
       <div className='mb-12 text-center max-[1201px]:mb-[43px] max-[945px]:mb-[38px]'>
        <p className='text-[#cf711f] max-[1201px]:text-lg  max-[1201px]:mb-2   font-semibold text-xl uppercase mb-2 max-[945px]:text-base max-[945px]:mb-[25px]'>{text}</p>
        
        <h5 className='font-semibold text-[62px] max-[1201px]:text-[55px] text-[#333] max-[945px]:text-5xl max-[945px]:mb-3  '>
            <span className='text-3xl max-[945px]:text-2xl  max-[1201px]:text-[27px] font-medium mr-2' >{dollar}
            </span>
            {number}
            </h5>
            <p className='text-base leading-[1.6] max-[945px]:text-xs text-[#6f6f6f]'>{paragraph}</p>
    
    </div>
    <ul className='list-none flex flex-col gap-4 max-[945px]:gap-3  ` max-[1201px]:gap-3.5 '>
        <li className='flex items-center gap-4 leading-[1.2] text-lg '>
            <p className='text-[#e67e22] max-[945px]:text-2xl  max-[1201px]:text-[27px] text-3xl'>
                <MdDone />
            </p>
            <p className='text-lg leading-[1.2] max-[945px]:text-sm  max-[1201px]:text-base text-[#555]'>{contact1}
             
            </p>
        </li>
        <li className='flex items-center gap-4 leading-[1.2] text-lg '>
            <p className='text-[#e67e22] text-3xl  max-[945px]:text-2xl max-[1201px]:text-[27px]'>
                <MdDone />
            </p>
            <p className='text-lg leading-[1.2] max-[945px]:text-sm max-[1201px]:text-base text-[#555]'>{contact2}</p>
        </li>

        <li className='flex items-center gap-4 leading-[1.2] max-[1201px]:text-base text-lg '>
            <p className='text-[#e67e22]  max-[945px]:text-2xl text-3xl max-[1201px]:text-[27px]'>
                <MdDone />
            </p>
            <p className='text-lg max-[945px]:text-sm  max-[1201px]:text-base leading-[1.2] text-[#555]'>{contact3}</p>
        </li>
        <li className='flex items-center  gap-4 leading-[1.2] max-[1201px]:text-base text-lg '>
            <p className='text-[#e67e22] max-[945px]:text-2xl text-3xl max-[1201px]:text-[27px]'>
                 {showicon === true ? <RxCross2 /> : <MdDone />  }
                
            </p>
            
            <p className='text-lg leading-[1.2] max-[945px]:text-sm text-[#555]'>{contact4}</p>
        </li>
    </ul>
    <div className='flex justify-center'>
<a href="#" className="hover:bg-[#cf711f] max-[1201px]:mt-[43px] max-[1201px]:text-lg cursor-pointer text-xl text-white hover:transition-all font-semibold hover:duration-300  mt-12 rounded-[9px] max-[1201px]:px-7  max-[1201px]:py-3.5  px-8 py-4 bg-[#e67e22] text-center max-[945px]:text-base max-[945px]:py-3 max-[945px]:mt-9  max-[945px]:px-6 ">{buttonText}</a>
    </div>
    </>
  )
}

export default PricingCard
