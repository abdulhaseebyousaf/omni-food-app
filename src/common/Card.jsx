import React from "react";

const Card = ({ image, number, heading, description, flexDirection }) => {
  return (
    <div className={`flex gap-x-24 max-[545px]:flex-col-reverse max-[1200]:gap-x-[43.2px] items-center w-fit ${flexDirection}`}>
      <div className="w-[536px]" >
        <p className="text-[86px] max-[945px]:text-[59.2px] text-[#ddd] mb-3 font-semibold ">{number}</p>
        <h3 className="text-3xl mb-8 font-bold max-[1200px]:text-[21.6px] text-[#333]">{heading}</h3>
        <h4 className="text-lg max-[1200px]:text-base text-[#555]">{description}</h4>
      </div>
      <div className="relative  w-[517px] flex items-center justify-center">
        <div className="step-img-box">
          <img className="h-[379px]" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
