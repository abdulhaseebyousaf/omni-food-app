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
    <footer className='py-[128px] border-t border-solid border-[#eee]'>
<div className='grid gap-x-16 gap-y-24 grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] max-w-[1200px] mx-auto px-8'>
<FooterCards 
logo={logo}
insta={instalogo}
facebook={facebooklogo}
twitterlogo={twitterlogo}
copyright={'Copyright © 2025 by Omnifood, Inc. All rights reserved.'}
/>
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


</div>

    </footer>
    </>
  )
}

export default Footer