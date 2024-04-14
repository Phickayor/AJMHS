import React from "react";

function Gallery() {
  return (
    <div className="mx-auto w-10/12 py-8 xl:py-16">
      <div>
        <h1 className="font-semibold text-xl tracking-[0.3em] md:text-2xl md:tracking-widest lg:text-3xl lg:leading-[55px] lg:tracking-[0.3em]">
          Our Gallery
        </h1>
        <p className="font-extralight tracking-[0.3em] text-md md:text-2xl md:tracking-widest lg:text-3xl xl:leading-[55px] xl:tracking-[0.3em]">
          With every Click, a Story to tell
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 py-5 ">
        <div className="grid grid-rows-4 gap-5 [&>*]:rounded-2xl">
          <img
            src="/images/image5.jpg"
            alt=""
            className="w-full h-full max-h-60 2xl:max-h-96 object-cover"
          />
          <img
            src="/images/image4.jpg"
            alt=""
            className="w-full h-full max-h-60 2xl:max-h-96 object-cover"
          />
          <img
            src="/images/image7.jpg"
            alt=""
            className="row-span-2 object-cover w-full h-full"
          />
        </div>
        <div className="space-y-5 h-fit [&>*]:rounded-2xl">
          <img
            src="/images/image2.jpg"
            alt=""
            className="object-cover w-full"
          />
          <img
            src="/images/image3.jpg"
            alt=""
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
