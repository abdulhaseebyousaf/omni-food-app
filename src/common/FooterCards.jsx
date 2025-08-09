import React from 'react'

const FooterCards = ({logo, insta, facebook, twitterlogo, copyright, }) => {
  return (
    <>
     <div className='flex flex-col'>
        <a className='mb-8' href="#">
            <img className='h-[22px]' src={logo} alt="" />
        </a>
        <ul className='list-none flex gap-x-6'>
            <li>
            <a href="#">
                <img className='w-6' src={insta} alt="" />
                </a>    
            </li>
            <li>
            <a href="#">
                <img className='w-6' src={facebook} alt="" />
                </a>    
            </li>
            <li>
            <a href="#">
                <img className='w-6' src={twitterlogo} alt="" />
                </a>    
            </li>
        </ul>
        <p className='mt-[66px] text-[#767676] text-sm leading-[1.6]'>{copyright}</p>
        </div> 
        <div>
            <p className='text-lg font-medium mb-10' >Contact us</p>
            <h2 className='text-base text-[#555] leading-[1.6] mb-6'>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </h2>
            <h2 className='text-base cursor-pointer leading-[1.6] hover:text-[#555] transition-all duration-300 text-[#767676]'>
             415-201-6370
            </h2>
            <h2 className='text-base cursor-pointer hover:text-[#555] leading-[1.6] transition-all duration-300 text-[#767676] '>
             hello@omnifood.com
            </h2>
        </div>
    
    </>
  )
}

export default FooterCards
