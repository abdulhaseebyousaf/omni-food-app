import React from "react";

const Card = ({ image, number, heading, description, flexDirection }) => {
  return (
    <div className={`flex gap-x-24 max-[1201px]:max-w-[1080px] max-[545px]:flex-col-reverse max-[1201]:gap-x-[43.2px] items-center max-[545px]:gap-y-3 max-[945px]:gap-x-9 w-fit ${flexDirection}`}>
      <div className="w-1/2 max-[545px]:w-full" >
        <p className="text-[86px] max-[945px]:text-[59.2px] text-[#ddd]  font-semibold max-[1201px]:text-[77px] mb-0  ">{number}</p>
        <h3 className="text-3xl mb-8 font-bold max-[1201px]:mb-7 max-[945px]:text-[19px] max-[945px]:mb-[25px] max-[1201px]:text-[21.6px] max-sm:mb-4  text-[#333]">{heading}</h3>
        <h4 className="text-lg max-[1201px]:text-base max-[945px]:text-sm  text-[#555]">{description}</h4>
      </div>
        <div className="step-img-box relative   flex items-center justify-center" >
          <img className="w-[36%]" src={image} alt="" />
        </div>
      </div>
  );
};

export default Card;
