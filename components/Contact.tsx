"use client";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [city, setCity] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);
    try {
      const url =
        process.env.NEXT_PUBLIC_ENVORONMENT == "production"
          ? process.env.NEXT_PUBLIC_LIVE_URL
          : process.env.NEXT_PUBLIC_LOCAL_URL;
      const res = await fetch(`${url}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, city, message })
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        setEmail("");
        setName("");
        setPhone("");
        setCity("");
        setMessage("");
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
    setLoader(false);
  };
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
        <form
          className="py-5 mx-auto w-10/12 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 lg:gap-y-5 xl:gap-y-8 gap-3 text-[#DADAFF] [&>*]:bg-[#131725] xl:[&>*]:p-6 [&>*]:p-5 focus:[&>*]:outline-none [&>*]:w-full [&>*]:rounded-xl">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              value={phone}
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="text"
              value={city}
              placeholder="City, Country."
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <input
              value={message}
              type="text"
              required
              placeholder="Your message"
              onChange={(e) => setMessage(e.target.value)}
              className="md:col-span-2"
            />
          </div>
          <button
            type="submit"
            className="bg-[#8383FF] hover:bg-[#8383CC] mx-auto w-9/12 md:w-fit md:px-16 duration-200 text-white text-2xl font-light self-center text-center py-3 rounded-full"
          >
            {loader ? <FaSpinner className="animate-spin" /> : "Submit"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
