import React from "react";
import services from "@/utils/services.json";
function AboutUs() {
  return (
    <div className="mx-auto w-10/12 space-y-6">
      <div className=" flex flex-col gap-6">
        <h1 className="font-semibold text-3xl tracking-[0.3em]">
          Get to know us better
        </h1>
        <p className="text-[131725] font-light text-3xl leading-[55px]">
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
              className="relative h-96 w-full rounded-2xl object-cover opacity-50"
            />
            <div className="absolute h-full flex flex-col justify-center w-full">
              <div className="text-white space-y-8 mx-auto w-9/12">
                <h1 className="font-semibold text-5xl">{service.name}</h1>
                <p className="text-2xl leading-relaxed">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
