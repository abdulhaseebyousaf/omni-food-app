import React from "react";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import MealSection from "./components/MealSection";
import Pricing from "./components/Pricing";
import SignUpForm from "./components/SignUpForm";
import Testimonials from "./components/Testimonials";

function home() {
  return (
    <div>
      <Hero />
      <Featured />
      <HowItWorks />
      <MealSection />
      <Testimonials />
      <Pricing />
      <SignUpForm />
    </div>
  );
}

export default home;
