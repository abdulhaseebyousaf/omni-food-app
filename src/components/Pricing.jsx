import React from 'react'
import PricingCard from '../common/PricingCard'
import PricingEndCard from '../common/PricingEndCard'
import logofirst from '../assets/Pricingsvg/first.svg'
import logosecond from '../assets/Pricingsvg/second.svg'
import logothird from '../assets/Pricingsvg/third.svg'
import logofourth from '../assets/Pricingsvg/fourth.svg'

function Pricing() {
  return (
    <div id='pricing' className='py-24 max-[1201px]:py-24 max-[945px]:py-14 max-[945px]:pt-20 max-sm:py-9' >
      <div className='max-w-[1200px] max-[945px]:px-[25px] max-[1201px]:px px-8 mx-auto max-[1201px]:max-w-[1080px] max-md:pt-7 '>
        
         <p className='block text-base max-[1201px]:text-[14px] max-[1201px]:mb-[14px] font-medium text-[#cf711f] uppercase mb-4 tracking-[0.75px] max-[1021px]:mb-3 max-[945px]:text-[12px]'>Pricing</p>

        <h2 className='text-[44px] max-[1201px]:text-[32px] max-[1201px]:mb-[86px] mb-24 max-[945px]:mb-[76px] max-[945px]:text-[28px] leading-[1.2] text-[#333] font-bold tracking-[-0.5px] max-[705px]:mb-9 max-[405px]:text-[28px] '>Eating well without breaking the bank</h2>
        
        </div>  
        <div className='grid max-w-[1200px] mb-12 gap-x-16 gap-y-24  grid-cols-2   mx-auto max-[1201px]:max-w-[1080px] max-[1201px]:mb-[43px] max-[1201px]:gap-x-[47px] max-[945px]:gap-x-[38px] max-[545px]:justify-items-center max-[545px]:grid-cols-1 max-[705px]:pl-6 max-[545px]:gap-y-9 max-[705px]:pr-6'>
<div className='justify-items-end max-[545px]:justify-items-center max-[705px]:w-full '>
<div className=' border-2 max-[1201px]:p-[41.2px] max-[945px]:p-9  border-solid border-[#fdf2e9] max-[705px]:w-full p-[46px]  rounded-[11px] w-[70.9%] '>
   <PricingCard 
   text={'Starter'}
   dollar={'$'}
   number={'399'}
   paragraph={'per month. That is just $13 per meal!'}
   showicon={true}
   contact1={'1 meal per day'}
   contact2={'Order from 11am to 9pm'}
   contact3={'Delivery is free'}
   contact4={''}
   buttonText={'Start eating well'}
   />
</div>
    </div>
<div className='pricingCard overflow-hidden border-2 max-[945px]:p-9  relative border-solid border-[#fdf2e9] p-[46px] rounded-[11px] bg-[#fdf2e9] max-[1201px]:p-[33px] w-[70.9%] max-[705px]:w-full '>
   <PricingCard 
   text={'Complete'}
   dollar={'$'}
   number={'649'}
   paragraph={'per month. That is just $11 per meal!'}
   contact11={'2 meals'}
   contact1={' per day'}
   contact2={'Order'}
   contact22={' 24/7'}
   contact3={'Delivery is free'}
   contact4={'Get access to latest recipes'}
  showicon={false}
   buttonText={'Start eating well'}
   />
</div>
{/*  */}
        </div>
        <div className='mb-24 max-[545px]:mb-[76px] grid gap-x-16 gap-y-24 max-w-[1200] px-8 max-auto  max-sm:mb-6 max-sm:px-[25px]'>
        <aside className='text-base text-[#555] font-normal leading-[1.6] text-center max-sm:text-left max-[1201px]:text-sm  max-[945px]:text-xs'>
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
    </div>

    <div className='grid grid-cols-4 max-[545px]:grid-cols-1 max-[705px]:grid-cols-2 max-[705px]:gap-y-[51px] max-[545px]:gap-y-[38px]  max-[1201px]:gap-x-[43.2px] max-[946px]:gap-x-[38px] max-[1201px]:max-w-[1080px] gap-x-16  gap-y-24 px-8 mx-auto max-w-[1200px]  max-[1201px]:px-7 max-[945px]:px-[25px] max-sm:gap-y-6  ' >
 <PricingEndCard
 image1={logofirst}
 paragraph={'Never cook again!'}
 contact1={'Our subscriptions cover 365 days per year, even including major holidays.'}
 />
 <PricingEndCard
 image1={logosecond}
 paragraph={'Local and organic'}
 contact1={'Our cooks only use local, fresh, and organic products to prepare your meals.'}
 />
 <PricingEndCard
 image1={logothird}
 paragraph={'No waste'}
 contact1={'All our partners only use reusable containers to package all your meals.'}
 />
 <PricingEndCard
 image1={logofourth}
 paragraph={'Pause anytime'}
 contact1={'Going on vacation? Just pause your subscription, and we refund unused days.'}
 />
    </div>

    </div>
  )
}

export default Pricing