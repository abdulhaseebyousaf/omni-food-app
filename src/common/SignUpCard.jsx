import React from "react";

const SignUpCard = ({
  heading,
  text,
  labelname,
  labelemailname,
  options,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
}) => {
  return (
    <>
      <h2 className="text-inherit text-[44px] mb-8 leading-[1.2]  tracking-[-0.5px] font-bold">
        {heading}
      </h2>
      <p className="text-lg mb-12 leading-[1.8] text-[#45260a]">{text}</p>
      <form className="grid gap-x-8 gap-y-6 grid-cols-2">
        <div>
          {/* name  */}
          <label
            htmlFor="full-Name"
            className="block text-base mb-3 font-medium"
          >
            {labelname}
          </label>
          <input
            type="text"
            placeholder="John Smith"
            name="full-name"
            required
            className="w-full p-3 text-lg text-inherit border-none bg-[#fdf2e9] rounded-[11px]  outline-none shadow-[0_1px_2px_rgba(0,0,0,0.1)] placeholder:font-normal placeholder:text-[#aaaaac] "
          />
        </div>
        {/* email */}
        <div>
          <label htmlFor="email" className="block text-base mb-3 font-medium">
            {labelemailname}
          </label>
          <input
            type="email"
            placeholder="me@example.com"
            name="email"
            required
            className="w-full p-3 text-lg text-inherit border-none bg-[#fdf2e9] rounded-[11px]  outline-none shadow-[0_1px_2px_rgba(0,0,0,0.1)] placeholder:font-normal placeholder:text-[#aaaaac] "
          />
        </div>
        {/* for options  */}
        <div>
          <label
            htmlFor="select-where"
            className="block text-base mb-3 font-medium"
          >
            {options}
          </label>
          <select
            name="select-where"
         required
            className="w-full p-3 text-lg text-inherit border-none bg-[#fdf2e9] rounded-[11px]  outline-none shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
          >
            <option value>{option1}</option>
            <option value="friends">{option2}</option>
            <option value="youtube">{option3}</option>
            <option value="podcast">{option4}</option>
            <option value="ad">{option5}</option>
            <option value="others">{option6}</option>
          </select>
        </div>
        {/* submit button */}
        <button
          type="submit"
          className="bg-[#45260a] text-[#fdf2e9] hover:bg-white hover:text-[#555] self-end p-3 inline-block cursor-pointer font-semibold text-xl rounded-[9px] border-none transition-all duration-300"
        >
          Sign up now
        </button>
      </form>
    </>
  );
};

export default SignUpCard;  
