import React from 'react'
import SignUpCard from '../common/SignUpCard'

function SignUpForm() {
  return (
    <>
<div id='signup' className='pt-12 pb-32'>
<div className='max-w-[1200px] mx-auto px-8' >
<div className='grid grid-cols-[2fr_1fr] rounded-[11px] overflow-hidden shadow-[0_38.4px_76.8px_rgba(0,0,0,0.15)] bg-[linear-gradient(to_right_bottom,#eb984e,#e67e22)]'>
<div className='px-16 pt-12 pb-16 text-[#45260a]'>
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
<div id='cta-image' className='bg-cover bg-center'></div>
</div>
</div>
</div>
    </>
  )
}

export default SignUpForm