"use client"
import React from "react";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  const scrollToComponent = (componentId:string) => {
    const element = document.getElementById(componentId);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <div className="text-center py-8 md:py-12 xl:py-24 mx-auto w-11/12 xl:w-10/12">
      <div className="mx-auto lg:w-4/5 xl:w-3/5 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#8383FF] text-2xl md:text-4xl md:leading-loose lg:text-5xl font-medium lg:leading-[50px]">
            Experience Care&nbsp;
            <span className="text-[#0000AB]">Beyond Expectations</span>
          </h1>
          <p className="font-extralight text-md md:text-2xl">
            Transforming Lives, One Patient at a Time
          </p>
        </div>
        <button onClick={()=>scrollToComponent("about")} className="mx-auto group w-fit rounded-full bg-[#00005A] hover:bg-white hover:text-[#00005A] text-white px-5 py-4 flex gap-6 md:gap-10 justify-between">
          <span className="self-center text-sm md:text-md group-hover:font-medium font-extralight">
            Start your Journey
          </span>
          <div className="bg-white group-hover:bg-[#00005A] self-center rounded-full p-1 md:p-2">
            <FaArrowDown className="text-center text-xs md:text-md text-black group-hover:text-white group-hover:animate-bounce" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Hero;
