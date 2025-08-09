import React from "react";
import Card from "../common/Card";
import appImage1 from "../assets/WorksPhoto/app-screen-1.png";
import appImage2 from "../assets/WorksPhoto/app-screen-2.png";
import appImage3 from "../assets/WorksPhoto/app-screen-3.png";
function HowItWorks() {
  return (
    <div id="how" className="py-24">
      <div className="max-w-[1200px] px-8 mx-auto">
        <span className="text-[#cf711f] pb-4 text-base font-medium uppercase tracking-[0.75px] ">
          how it work
        </span>
        <h2 className="text-[44px] mb-24 font-bold text-[#333]">
          Your daily dose of health in 3 simple steps
        </h2>
        {/*  */}
      </div>
      <div className="max-w-[1200px] max-[1200px]:gap-y-[57.6px] gap-y-16  flex flex-col  px-8 mx-auto ">
        {/* div */}
        <Card 
        image={appImage1}
        number={'01'}
        heading={'Tell us what you like (and what not)'}
        description={'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!'}
        flexDirection={'row'}
        />
        {/* second */}
      <Card
        number={'02'}
        heading={'Approve your weekly meal plan'}
        description={'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!'}
        flexDirection={'flex-row-reverse'}
        image={appImage2}
        />
        {/* third */}
     <Card
     image={appImage3}
        number={'03'}
        heading={'Receive meals at convenient time'}
        description={'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!'}
         flexDirection={'row'}
     />
      </div>
    </div>
  );
}

export default HowItWorks;
