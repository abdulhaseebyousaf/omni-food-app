import React from 'react'
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const PricingCard = ({text, dollar, number, paragraph,  contact1, contact2, contact3,  contact4, buttonText,showicon }) => {
  return (
    <>
       <div className='mb-12 text-center '>
        <p className='text-[#cf711f] font-semibold text-xl uppercase mb-8 '>{text}</p>
        <h5 className='font-semibold text-[62px] text-[#333] mb-4'>
            <span className='text-3xl font-medium mr-2' >{dollar}
            </span>
            {number}
            </h5>
            <p className='text-base leading-[1.6] text-[#6f6f6f]'>{paragraph}</p>
    
    </div>
    <ul className='list-none flex flex-col gap-4'>
        <li className='flex items-center gap-4 leading-[1.2] text-lg '>
            <p className='text-[#e67e22] text-3xl'>
                <MdDone />
            </p>
            <p className='text-lg leading-[1.2] text-[#555]'>{contact1}
             
            </p>
        </li>
        <li className='flex items-center gap-4 leading-[1.2] text-lg '>
            <p className='text-[#e67e22] text-3xl'>
                <MdDone />
            </p>
            <p className='text-lg leading-[1.2] text-[#555]'>{contact2}</p>
        </li>
        <li className='flex items-center gap-4 leading-[1.2] text-lg '>
            <p className='text-[#e67e22] text-3xl'>
                <MdDone />
            </p>
            <p className='text-lg leading-[1.2] text-[#555]'>{contact3}</p>
        </li>
        <li className='flex items-center gap-4 leading-[1.2] text-lg '>
            <p className='text-[#e67e22] text-3xl'>
                 {showicon === true ? <RxCross2 /> : <MdDone />  }
                
            </p>
            
            <p className='text-lg leading-[1.2]  text-[#555]'>{contact4}</p>
        </li>
    </ul>
    <div className='flex justify-center'>
<a href="#" className="hover:bg-[#cf711f]  cursor-pointer text-xl text-white hover:transition-all font-semibold hover:duration-300 mt-12 rounded-[9px] px-8 py-4 bg-[#e67e22]">{buttonText}</a>
    </div>
    </>
  )
}

export default PricingCard
