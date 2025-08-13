import React from 'react'
import SignUpCard from '../common/SignUpCard'

function SignUpForm() {
  return (
    <>
<div id='signup' className='pt-12 max-[945px]:pt-[38.4px] max-[945px]:pb-[102.4px] pb-32 max-[1201px]:pt-[43.2px] max-[1201px]:pb-[115.2px] max-sm:py-9'>
<div className='max-w-[1200px] max-[455px]:px-[25.6px] max-[1201px]:max-w-[1080px] mx-auto max-[1201px]:px-7 px-8' >
<div className='grid grid-cols-[2fr_1fr] max-[545px]:grid-cols-1 rounded-[11px] overflow-hidden shadow-[0_38.4px_76.8px_rgba(0,0,0,0.15)] bg-[linear-gradient(to_right_bottom,#eb984e,#e67e22)]'>
  
<div className='px-16 pt-12 pb-16 max-[1201px]:pt-[43.2px] max-[1201px]:px-[57.6px] max-[1201px]:pb-[57.6px] max-[545px]:p-[25.6px] max-[945px]:pt-[38.4px] max-[945px]:px-[51.2px] max-[945px]:pb-[51.2px] text-[#45260a]'>
<SignUpCard 
heading={'Get your first meal for free!'}
text={'Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!'}
labelname={'Full Name'}
labelemailname={'Email address'}
options={'Where did you hear from us?'}
option1={'Please choose one option:'}
option2={'Friends and family'}
option3={'YouTube video'}
option4={'Podcast'}
option5={'Facebook ad'}
option6={'Others'}
/>
</div>
<div id='cta-image' className='bg-cover bg-center max-[545px]:h-64 max-[545px]:row-start-1 max-[545px]:row-end-auto '></div>
</div>
</div>
</div>
    </>
  )
}

export default SignUpForm