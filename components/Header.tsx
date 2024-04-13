import React from 'react'

function Header() {
  return (
    <div className="mx-auto w-10/12 py-5 flex justify-between sticky top-0 backdrop-blur-lg">
      <div className="flex gap-2">
        <img src="/images/logo.png" alt="Amen Jet" className="w-16 h-16" />
        <h1 className="self-center text-2xl">Amen Jet Medical Services</h1>
      </div>
      <ul className="flex gap-8 self-center">
        <li>Home</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Reviews</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header