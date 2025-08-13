import React from "react";
import Card from "../common/Card";
import appImage1 from "../assets/WorksPhoto/app-screen-1.png";
import appImage2 from "../assets/WorksPhoto/app-screen-2.png";
import appImage3 from "../assets/WorksPhoto/app-screen-3.png";
function HowItWorks() {
  return (
    <div id="how" className=" py-24 max-[945px]:py-5 max-[1201px]:py-[86px] ">
      <div className="max-w-[1200px] px-8 max-[1201px]:px-7 max-[945px]:px-[25px] max-[1201px]:max-w-[1080px] mx-auto">
        <span className="text-[#cf711f] max-[945px]:text-xs max-[945px]:mb-3   max-[1201px]:text-sm  max-[1201px]:pb-3.5  pb-4 text-base font-medium uppercase tracking-[0.75px] ">
          how it workS
        </span>
        <h2 className="text-[44px] max-[945px]:text-[28px] max-sm:leading-7.5 max-sm:pt-4 max-[945px]:mb-[76px] max-[1201px]:text-[32px] max-[545px]:mb-[38px] max-[1201px]:mb-[86px] mb-24 font-bold text-[#333] ">
          Your daily dose of health in 3 simple steps
        </h2>
        {/*  */}
      </div>
      <div className="max-w-[1201px] max-[1201px]:max-w-[1080px] max-[1201px]:gap-y-[57.6px] gap-y-16 max-[945px]:gap-y-[38px]  flex flex-col max-[945px]:px-[25px] px-8 mx-auto max-[1201px]:px-7 ">
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
        description={'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.'}
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
