import React from 'react'

function FooterAccount({heading, li1, li2, li3, li4,}) {
  return (
    <>
     <div>
<h1 className='text-lg mb-10 font-medium'>{heading}</h1>
<ul className='list-none flex flex-col  gap-6'>
    <a href='#' className='text-base hover:text-[#555] text-[#767676] transition-all font-normal cursor-pointer duration-300 '>{li1}</a>
    <a href='#' className='text-base hover:text-[#555] text-[#767676] transition-all font-normal cursor-pointer duration-300 '>{li2}</a>
    <a href='#' className='text-base hover:text-[#555] text-[#767676] transition-all font-normal cursor-pointer duration-300 '>{li3}</a>
    <a href='#' className='text-base hover:text-[#555] text-[#767676] transition-all font-normal cursor-pointer duration-300 '>{li4}</a>
</ul>
     </div>
    </>
  )
}

export default FooterAccount