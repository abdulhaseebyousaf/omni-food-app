import React from 'react'
import PricingCard from '../common/PricingCard'
import image from '../assets/PricingPhotos/black-tick.png'
import PricingEndCard from '../common/PricingEndCard'

function Pricing() {
  return (
    <div className='py-24' >
      <div className='max-w-[1200px] px-8 mx-auto'>
        <p className='block text-base font-medium text-[#cf711f] uppercase mb-4 tracking-[0.75px] '>Pricing</p>
        <h2 className='text-[44px] mb-24 leading-[1.2] text-[#333] font-bold tracking-[-0.5px] ' >Eating well without breaking the bank</h2>
        
        </div>  
        <div className='grid max-w-[1200px] mb-12 gap-x-16 gap-y-24  grid-cols-2 mx-auto '>
<div className='justify-items-end'>
<div className=' border-2 border-solid border-[#fdf2e9] p-[46px] rounded-[11px] w-[75%]'>
   <PricingCard 
   text={'Starter'}
   dollar={'$'}
   number={'399'}
   paragraph={'per month. That is just $13 per meal!'}
   image={image}
   contact1={'1 meal per day'}
   contact2={'Order from 11am to 9pm'}
   contact3={'Delivery is free'}
   buttonText={'Start eating well'}
   />
</div>
    </div>
<div className=' border-2 border-solid border-[#fdf2e9] p-[46px] rounded-[11px] bg-[#fdf2e9] w-[75%]'>
   <PricingCard 
   text={'Complete'}
   dollar={'$'}
   number={'649'}
   paragraph={'per month. That is just $13 per meal!'}
   image={image}
   contact1={'1 meal per day'}
   contact2={'Order from 11am to 9pm'}
   contact3={'Delivery is free'}
   buttonText={'Start eating well'}
   />
</div>
{/*  */}
        </div>
        <div className='mb-24 grid gap-x-16 gap-y-24 max-w-[1200] px-8 max-auto'>
        <aside className='text-base text-[#555] font-normal leading-[1.6] text-center'>
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
    </div>

    <div className='grid grid-cols-4 gap-x-16  gap-y-24 px-8 mx-auto max-w-[1200px]' >
 <PricingEndCard
 paragraph={'Never cook again!'}
 contact1={'Our subscriptions cover 365 days per year, even including major holidays.'}
 />
 <PricingEndCard
 paragraph={'Local and organic'}
 contact1={'Our cooks only use local, fresh, and organic products to prepare your meals.'}
 />
 <PricingEndCard
 paragraph={'No waste'}
 contact1={'All our partners only use reusable containers to package all your meals.'}
 />
 <PricingEndCard
 paragraph={'Pause anytime'}
 contact1={'Going on vacation? Just pause your subscription, and we refund unused days.'}
 />
    </div>

    </div>
  )
}

export default Pricing