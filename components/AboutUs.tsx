import React from "react";
import services from "@/utils/services.json";
function AboutUs() {
  return (
    <div className="mx-auto relative w-10/12 space-y-10">
      <div className=" flex flex-col gap-4 lg:gap-6">
        <h1 className="font-semibold text-xl tracking-[0.3em] md:text-2xl md:tracking-widest lg:text-3xl lg:leading-[55px] lg:tracking-[0.3em]">
          Get to know us better
        </h1>
        <p className="text-[131725] font-light text-lg leading-loose md:text-xl md:leading-loose lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-[55px]">
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value
          proposition.
        </p>
      </div>
      <div className="absolute flex gap-8 overflow-auto w-full">
        {services.map((service, index) => (
          <div className="flex min-w-[80%] bg-black rounded-2xl" key={index}>
            <img
              src={service.image}
              alt=""
              className="relative h-56 md:h-80 xl:h-96 w-full rounded-2xl object-cover opacity-50"
            />
            <div className="absolute h-full flex flex-col justify-center w-full">
              <div className="text-white space-y-5 md:space-y-8 px-5 md:px-10 xl:px-20 w-10/12 md:w-9/12">
                <h1 className="font-semibold md:text-3xl lg:text-4xl xl:text-5xl">
                  {service.name}
                </h1>
                <p className="text-sm leading-relaxed md:text-lg md:leading-loose lg:text-xl lg:leading-relaxed xl:text-2xl xl:leading-relaxed font-extralight">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
