import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const FooterCards = ({logo,  copyright, }) => {
  return (
    <>
     <div className='flex flex-col max-[705px]:col-span-3'>
        <a className='mb-14 max-[1201px]:mb-7 max-[945px]:mb-[25.6px]' href="#">
            <img className='h-[22px] max-[945px]:h-[19px] max-[1201px]:h-[19.3px] ' src={logo} alt="" />
        </a>
        <ul className='list-none flex gap-x-6 '>
            <li>
             <a href="#">
                <p  className = "text-2xl text-[#767676] hover:text-[#555] duration-300 max-[1201px]:text-[21px] max-[945px]:w-[19.19px]"
                >
               <FaInstagram />
               </p>
                </a>          
            </li>
            <li>
            <a href="#">
                <p  className = "text-2xl text-[#767676] hover:text-[#555] duration-300 max-[1201px]:text-[21px] max-[945px]:text-[19.19px]"
                >
               <FaFacebook />
               </p>
                </a>    
            </li>
            <li>
            <a href="#">
                <p  className = "text-2xl text-[#767676] hover:text-[#555] duration-300 max-[1201px]:text-[21px] max-[945px]:text-[19.19px]"
                >
              <FaTwitter />
               </p>
                </a>        
            </li>
        </ul>
        <p className='mt-[58px] max-[945px]:text-[11.2px] max-[945px]:mt-[52.1406px] text-[#767676] max-[1201px]:text-[12px] max-[1201px]:mt-[58px] text-sm leading-[1.6]'>{copyright}</p>
        </div> 
        <div className='max-[705px]:col-span-3 ' >
            <p className='text-lg  max-[945px]:text-[14.4px] text-[#555] max-[945px]:mb-5 max-[1201px]:text-[16.2px] max-[1201px]:mb-9 font-medium mb-10' >Contact us</p>
            <h2 className='text-base max-[1201px]:mb-[21.6px] text-[#555] max-[1201px]:text-[14.4px]  leading-[1.6] max-sm:mb-3.5 mb-6 max-sm:text-xs'>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </h2>
            <h2 className='text-base cursor-pointer max-[1201px]:text-[14.4px] leading-[1.6] hover:text-[#555] transition-all max-sm:text-xs duration-300 text-[#767676]'>
             415-201-6370
            </h2>
            <h2 className='text-base cursor-pointer hover:text-[#555] max-[1201px]:text-[14.4px] leading-[1.6] transition-all max-sm:text-xs  duration-300 text-[#767676] '>
             hello@omnifood.com
            </h2>
        </div>
    
    </>
  )
}

export default FooterCards
