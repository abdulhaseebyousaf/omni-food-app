import React from "react";
import ProductCard from "../common/ProductCard";
import imagee from "../assets/mealPhoto/meal-1.jpg";
import image from "../assets/mealPhoto/meal-2.jpg";
import flamesvg from "../assets/svg/flame.svg";
import secondsvg from "../assets/svg/restaurant.svg";
import starsvg from "../assets/svg/star.svg";
import { MdDone } from "react-icons/md";

function MealSection() {
  const DIETS = [
    {
      diet: "Vegetarian",
    },
    {
      diet: "Vegan",
    },
    {
      diet: "Pescatarian",
    },
    {
      diet: "Gluten-free",
    },
    {
      diet: "Lactose-free",
    },
    {
      diet: "Keto",
    },
    {
      diet: "Paleo",
    },
    {
      diet: "Low FODMAP",
    },
    {
      diet: "Kid-friendly",
    },
  ];

  return (
    <div id="meal" className="py-24 max-[1201px]:py-[86px] max-sm:py-7 max-[705px]:py-[76px] ">
      <div className="px-8 mx-auto max-w-[1200px] max-[705px]:px-0  ">
        <span className="uppercase font-medium max-sm:text-left max-sm:px-[25px] text-base  block text-[#cf711f] mb-4 tracking-[0.75px] text-center max-[1201px]:text-sm max-[1201px]:mb-4 ">
          Meals
        </span>
        <h2 className="text-[44px] text-center mb-24 text-[#333] max-sm:text-left max-sm:text-2xl max-sm:px-[25px] max-sm:mb-8 max-[1201px]:text-[32px] max-[1201px]:mb-[96.6px] tracking-[-0.5px] max-[945px]:text-[28.8px] max-[945px]:mb-[76px]  leading-[1.2] font-bold">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div className="mb-12 max-[705px]:gap-x-[38px] max-[545px]:grid-cols-1 grid grid-cols-3  gap-x-16 px-8 mx-auto max-[705px]:grid-cols-2 max-[705px]:gap-y-[51px] max-[705px]:px-[25px]  max-w-[1200px] max-[1201px]:max-w-[1080px] max-[1201px]:gap-x-[43px] max-sm:gap-y-8 max-[945px]:gap-x-[38.4px] max-sm:mb-8">
        <ProductCard
          image={imagee}
          text={"Vegetarian"}
          heading={"Japanese Gyozas"}
          svg={flamesvg}
          number={"650"}
          textsecond={"calories"}
          secondsvg={secondsvg}
          thirdnumber={"NutriScore ® "}
          secondnumber={"74"}
          thirdsvg={starsvg}
          fourthnumber={"4.9"}
          display={"hidden"}
          textlast={"rating (537)"}
        />
        <ProductCard
          image={image}
          text={"Vegen"}
          innertext={"Paleo"}
          display={"flex"}
          heading={"Avocado Salad"}
          svg={flamesvg}
          number={"400"}
          textsecond={"calories"}
          secondsvg={secondsvg}
          thirdnumber={"NutriScore ® "}
          secondnumber={"92"}
          thirdsvg={starsvg}
          fourthnumber={"4.8"}
          textlast={"rating (441)"}
        />
        <div className="dites  max-[705px]:col-span-full max-[705px]:justify-self-left  ">
          <h1 className="text-3xl max-[1201px]:text-[21px] max-[1201px]:mb-[28px] tracking-[-0.5px] mb-8 text-[#333] font-bold">
            Works with any diet:
          </h1>
            <div className="flex flex-col gap-y-4 max-[945px]:gap-y-3">
          {DIETS.map((diet) => (
            <div className="flex  gap-x-4 items-center max-[1201px]:text-base max-[945px]:text-sm text-lg text-[#555]">
              <p className="text-[#e67e22] max-[1201px]:text-[27px] max-[945px]:text-[24px] text-3xl ">
                <MdDone />
              </p>
              <p>{diet.diet}</p>
            </div>
          ))}
          </div> 
        </div>
      </div>
      <div className="text-center ">
        <h1 className="inline-block h-[27px] font-normal cursor-pointer hover:text-[#cf711f] text-lg text-[#e67e22] hover:border-transparent border-b border-solid border-[#e67e22] pb-0.5 transition-all duration-300">
          See all recipes →
        </h1>
      </div>
    </div>
  );
}

export default MealSection;
