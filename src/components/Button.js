import React from "react";
import Plus from "../assets/images/plus.svg";

const Button = () => {
  return (
    <div className="w-[122px] h-[40px] bg-[#E4E7EE] flex items-center justify-center cursor-pointer">
      <div className="mr-[14.5px]">
        <img src={Plus} alt="plus" />
      </div>
      <div className="text-black leading-[15px] text-sm font-normal">Button</div>
    </div>
  );
};

export default Button;
