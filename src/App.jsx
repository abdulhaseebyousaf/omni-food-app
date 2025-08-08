// import { useState } from 'react'
import './App.css'
import Featured from './components/Featured'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import MealSection from './components/MealSection'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
    <Header />
    <Hero />
    <Featured />
    <HowItWorks />
    <MealSection />
    <Testimonials />
    <Pricing />
    </>
  )
}

export default App
