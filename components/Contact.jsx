import React from "react";

function Contact() {
  return (
    <div className="mx-auto w-10/12 flex flex-col py-5 xl:py-10">
      <div className="py-5 xl:py-14 rounded-2xl flex flex-col justify-between gap-3 bg-[#DADAFF] text-center">
        <div className="space-y-2">
          <h1 className="font-semibold text-lg md:text-3xl md:leading-[55px] tracking-[0.3em]">
            Contact Us
          </h1>
          <p className="text-md md:text-2xl md:leading-[55px]">
            Kindly fill the form
          </p>
        </div>
        <form className="py-5 mx-auto w-10/12 space-y-6">
          <div className="grid md:grid-cols-2 lg:gap-y-5 xl:gap-y-8 gap-3 text-[#DADAFF] [&>*]:bg-[#131725] xl:[&>*]:p-6 [&>*]:p-5 focus:[&>*]:outline-none [&>*]:rounded-xl">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
            <input type="number" placeholder="Phone Number" required />
            <input type="text" placeholder="City" required />
            <input
              type="text"
              placeholder="Your message"
              className="md:col-span-2"
            />
          </div>
          <button
            type="submit"
            className="bg-[#8383FF] text-white text-2xl font-light self-center py-3 px-16 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
