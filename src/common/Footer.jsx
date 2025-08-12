import React from 'react'
import logo from '../assets/omnifood-logo.png'
import FooterCards from '../common/FooterCards'
import instalogo from '../assets/footersvg/insta.svg'
import facebooklogo from '../assets/footersvg/facebook.svg'
import twitterlogo from '../assets/footersvg/twitter.svg'
import FooterAccount from '../common/FooterAccount'

function Footer() {
  return (
    <>
    <footer className='py-[128px] max-[1201px]:py-[115.5px] max-[945px]:py-[102.4px] border-t border-solid border-[#eee] max-sm:py-12'>

<div className='grid gap-x-16 gap-y-24 max-sm:gap-y-5 max-[945px]:gap-x-[38.4px] max-[1201px]:max-w-[1080px] grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] max-w-[1200px] mx-auto px-8 max-[945px]:px-[25.6px] max-[705px]:grid-cols-6 max-[545px]:gap-y-[38px] max-[545px]:gap-x-[19px]'>

<FooterAccount 
heading={'Account'}
li1={'Create account'}
li2={'Sign in'}
li3={'iOS app'}
li4={'Android app   '}
/>
<FooterAccount 
heading={'Company'}
li1={'About Omnifood'}
li2={'For Business'}
li3={'Cooking partners'}
li4={'Careers'}
/>
<FooterAccount 
heading={'Resources'}
li1={'Recipe directory'}
li2={'Help center'}
li3={'Privacy & terms'}
li4={''}
/>
<FooterCards 
logo={logo}
insta={instalogo}
facebook={facebooklogo}
twitterlogo={twitterlogo}
copyright={'Copyright © 2025 by Omnifood, Inc. All rights reserved.'}
/>


</div>
    </footer>
    </>
  )
}

export default Footer