import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'

function aboutus() {
  return (
    <div>
             <Hero />
              <HowItWorks />
              <Testimonials />
              <Pricing />
    </div>
  )
}

export default aboutus