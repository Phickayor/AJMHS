import React from "react";

function Contact() {
  return (
    <div className="mx-auto w-10/12 flex flex-col py-10 space-y-6">
      <div className="py-14 rounded-2xl bg-[#DADAFF] text-center">
        <h1 className="font-semibold text-3xl leading-[55px] tracking-[0.3em]">
          Contact Us
        </h1>
        <p className="text-2xl leading-[55px]">Kindly fill the form</p>
        <form className="py-5 mx-auto w-10/12 space-y-6">
          <div className="grid grid-cols-2 gap-y-8 gap-x-3 text-[#DADAFF] [&>*]:bg-[#131725] [&>*]:p-6 [&>*]:rounded-xl">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
            <input type="number" placeholder="Phone Number" required />
            <input type="text" placeholder="City" required />
            <input
              type="text"
              placeholder="Your message"
              className="col-span-2"
            />
          </div>
        </form>
      </div>

      <button
        type="submit"
        className="bg-[#8383FF] text-white text-2xl font-light self-center py-3 px-16 rounded-full"
      >
        Submit
      </button>
    </div>
  );
}

export default Contact;
