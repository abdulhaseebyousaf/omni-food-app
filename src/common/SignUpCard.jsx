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
      <h2 className="text-inherit text-[44px] mb-8 max-[1201px]:text-[32.4px] max-[1201px]:mb-[28.8px] max-[945px]:text-[28.8px] max-[945px]:mb-[25.6px] leading-[1.2]  tracking-[-0.5px] font-bold">
        {heading}
      </h2>
      <p className="text-lg mb-12 max-[945px]:mb-[38.4px] max-[945px]:text-[14.4px] max-[1201px]:text-[16.2px] max-[1201px]:mb-[43.2px] leading-[1.8] text-[#45260a]">{text}</p>

      <form className="grid max-[1201px]:grid-cols-1 gap-x-8 gap-y-6 max-[1201px]:gap-x-7 max-[945px]:gap-y-[19.2px] max-[1201px]:gap-y-[21.6px] grid-cols-2">
        <div>
          {/* name  */}
          <label
            htmlFor="full-Name"
            className="block text-base max-[945px]:text-[12.8px] max-[945px]:mb-[9.6px] max-[1201px]:text-sm max-[1201px]:mb-[10.8px] mb-3 font-medium"
          >
            {labelname}
          </label>

          <input
            type="text"
            placeholder="John Smith"
            name="full-name"
            required
            className="w-full p-3 text-lg text-inherit max-[945px]:text-[14.4px]  border-none bg-[#fdf2e9] rounded-[11px] max-[1201px]:p-[8.8px] max-[1201px]:text-[16.2px] outline-none placeholder:text-[#aaaaac]  "
          />
        </div>
        {/* email */}
        <div>
          <label htmlFor="email" className="block max-[945px]:text-[12.8px] max-[1201px]:text-sm max-[1201px]:mb-[10.8px] text-base mb-3 font-medium">
            {labelemailname}
          </label>
          <input
            type="email"
            placeholder="me@example.com"
            name="email"
            required
            className="w-full p-3 text-lg text-inherit max-[945px]:text-[14.4px]  border-none bg-[#fdf2e9] rounded-[11px] max-[1201px]:p-[8.8px] max-[1201px]:text-[16.2px] outline-none placeholder:text-[#aaaaac] "
          />
        </div>
        {/* for options  */}
        <div>
          <label
            htmlFor="select-where"
            className="block text-base max-[945px]:text-[12.8px] max-[1201px]:text-sm max-[1201px]:mb-[10.8px] mb-3 font-medium"
          >
            {options}
          </label>
          <select
            name="select-where"
         required
            className="w-full p-3 text-lg text-inherit max-[945px]:text-[14.4px]  border-none bg-[#fdf2e9] rounded-[11px] max-[1201px]:p-[10.8px] max-[1201px]:text-[16.2px] outline-none shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
          >
            <option className="max-[1201px]:text-sm max-[945px]:text-[14.4px]  " value>{option1}</option>
            <option className="max-[1201px]:text-sm max-[945px]:text-[14.4px] " value="friends">{option2}</option >
            <option className="max-[1201px]:text-sm  max-[945px]:text-[14.4px] " value="youtube">{option3}</option >
            <option className="max-[1201px]:text-sm max-[945px]:text-[14.4px]  " value="podcast">{option4}</option >
            <option className="max-[1201px]:text-sm max-[945px]:text-[14.4px]  "  value="ad">{option5}</option>
            <option  className="max-[1201px]:text-sm  max-[945px]:text-[14.4px] " value="others">{option6}</option>
          </select>
        </div>
        {/* submit button */}
        <button
          type="submit"
          className="bg-[#45260a] max-[1201px]:text-lg max-[1201px]:p-[10.8px] text-[#fdf2e9] hover:bg-white hover:text-[#555] self-end p-3 inline-block cursor-pointer font-semibold text-xl rounded-[9px] border-none transition-all duration-300"
        >
          Sign up now
        </button>
      </form>
    </>
  );
};

export default SignUpCard;  
