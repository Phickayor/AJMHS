import React from "react";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <div className="text-center py-24 mx-auto w-10/12">
      <div className="mx-auto w-3/5 flex flex-col gap-5">
        <h1 className="text-[#8383FF] text-5xl font-medium leading-[50px]">
          Experience Care&nbsp;
          <span className="text-[#0000AB]">Beyond Expectations</span>
        </h1>
        <p className="font-extralight text-2xl">
          Transforming Lives, One Patient at a Time
        </p>
        <button className="mx-auto w-fit rounded-full bg-[#00005A] text-white px-5 py-4 flex gap-10 justify-between">
          <span className="self-center">Start your Journey </span>
          <div className="bg-white self-center rounded-full p-2">
            <FaArrowDown className="text-center text-black" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Hero;
