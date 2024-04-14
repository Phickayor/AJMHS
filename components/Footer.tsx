import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle, BiLogoWhatsapp } from "react-icons/bi";

function Footer() {
  return (
    <div className="mx-auto w-10/12 grid gap-4 py-5">
      <div className="flex gap-2 justify-between">
        <div className="flex self-center gap-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-12 h-12 self-center md:w-20 md:h-20"
          />
          <h1 className="self-center text-sm md:text-lg lg:text-xl">
            AMEN JET MEDICAL HEALTH SERVICES
          </h1>
        </div>
        <div className="flex gap-2 md:gap-5 text-4xl text-[#001A74] self-start md:self-center">
          <BiLogoFacebookCircle/>
          <AiFillInstagram />
          <BiLogoWhatsapp />
        </div>
      </div>

      <p className="font-light md:text-lg lg:text-xl lg:leading-relaxed xl:text-2xl xl:leading-9 md:w-3/5">
        Leverage agile frameworks to provide a robust synopsis for strategy
        collaborative thinking to further the overall value proposition.
      </p>
    </div>
  );
}

export default Footer;
