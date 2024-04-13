"use client";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import reviews from "@/utils/reviews.json";
function Reviews() {
  let [count, setCount] = useState(0);
  const HandleIncrement = () => {
    if (count < reviews.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  const HandleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(reviews.length - 1);
    }
  };
  return (
    <div className="mx-auto w-10/12 ">
      <div className="flex justify-between text-3xl">
        <h1 className="font-semibold leading-[55px] tracking-[0.3em]">
          What our customer says
        </h1>
        <div className="flex gap-5 self-center">
          <div className="flex space-x-10 justify-center text-white">
            <div
              onClick={HandleDecrement}
              className="bg-[#8383FF] cursor-pointer w-10 h-10 text-center rounded-full flex flex-col justify-center"
            >
              <FaAngleLeft className="self-center" />
            </div>
            <div
              onClick={HandleIncrement}
              className="bg-[#8383FF] cursor-pointer w-10 h-10 text-center rounded-full flex flex-col justify-center"
            >
              <FaAngleRight className="self-center" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="bg-[#131725] text-3xl text-[#D5D5FF] rounded-2xl py-14 px-20">
          <h1 className="font-semibold leading-[55px]">
            {reviews[count].name}
          </h1>
          <p className="font-light leading-[55px]">{reviews[count].review}</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
