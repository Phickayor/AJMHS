import React from "react";

function Header() {
  return (
    <div className="mx-auto w-10/12 z-20 py-5 flex justify-between">
      <div className="flex gap-2">
        <img
          src="/images/logo.png"
          alt="Amen Jet"
          className="w-12 md:w-16 h-12 md:h-16"
        />
        <h1 className="self-center md:text-xl xl:text-2xl">
          Amen Jet Medical Health Services
        </h1>
      </div>
    </div>
  );
}

export default Header;
