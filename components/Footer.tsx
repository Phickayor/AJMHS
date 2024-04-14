import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import {
  BiLogoFacebookCircle,
  BiLogoWhatsapp
} from "react-icons/bi";

function Footer() {
  return (
    <div className="mx-auto w-10/12 grid grid-cols-4">
      <div className="space-y-4 col-span-3">
        <img src="/images/logo.png" alt="logo" className="w-24 h-24" />
        <p className="font-light text-2xl leading-9 w-10/12">
          Leverage agile frameworks to provide a robust synopsis for strategy
          collaborative thinking to further the overall value proposition.
        </p>
      </div>
      <div className="flex gap-5 text-4xl text-[#001A74] justify-end self-center">
        <BiLogoFacebookCircle />
        <AiFillInstagram />
        <BiLogoWhatsapp />
      </div>
    </div>
  );
}

export default Footer;
