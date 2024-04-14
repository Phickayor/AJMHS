import React from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <div className="mx-auto w-10/12 z-20 py-5 flex justify-between sticky top-0 backdrop-blur-lg">
      <div className="flex gap-2">
        <img src="/images/logo.png" alt="Amen Jet" className="w-12 md:w-16 h-12 md:h-16" />
        <h1 className="hidden md:block self-center text-xl xl:text-2xl">
          Amen Jet Medical Health Services
        </h1>
        <h1 className="md:hidden block self-center text-xl xl:text-2xl">
          Amen Jet
        </h1>
      </div>
      <ul className="hidden lg:flex gap-5 xl:gap-8 self-center">
        <li>Home</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Reviews</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <FaBars className="lg:hidden self-center cursor-pointer text-2xl" />
    </div>
  );
}

export default Header;
