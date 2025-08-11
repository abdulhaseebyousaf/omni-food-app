import React from 'react'

function FooterAccount({heading, li1, li2, li3, li4,}) {
  return (
    <>
     <div className='max-[705px]:grid-cols-4  '>
<h1 className='text-lg mb-10  max-[945px]:mb-8 max-[945px]:text-[14.4px] max-[1201px]:mb-9  max-[1201px]:text-[16.2px] font-medium  row-start-1 '>{heading}</h1>

<ul className='list-none flex flex-col max-[1201px]:gap-[21.6px] max-[945px]:gap-[19.2px] gap-6'>

    <a href='#' className='text-base max-[945px]:text-[12.8px] hover:text-[#555] text-[#767676] max-[1201px]:text-[14.4px] transition-all font-normal cursor-pointer duration-300 '>{li1}</a>
    <a href='#' className='text-base hover:text-[#555] max-[945px]:text-[12.8px] text-[#767676] max-[1201px]:text-[14.4px] transition-all font-normal cursor-pointer duration-300 '>{li2}</a>
    <a href='#' className='text-base hover:text-[#555] text-[#767676] max-[945px]:text-[12.8px] max-[1201px]:text-[14.4px] transition-all font-normal cursor-pointer duration-300 '>{li3}</a>
    <a href='#' className='text-base max-[945px]:text-[12.8px] hover:text-[#555] text-[#767676] max-[1201px]:text-[14.4px] transition-all font-normal cursor-pointer duration-300 '>{li4}</a>
</ul>
     </div>
    </>
  )
}

export default FooterAccount