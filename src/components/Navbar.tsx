/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="flex h-[120px] w-screen flex-row items-center justify-between pr-8 font-['Nunito_Sans'] lg:h-auto lg:flex-col-reverse lg:justify-center lg:px-0">
      <div className="lg:ml-8">
        <Link href={"/"}>
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="hidden p-4 lg:flex lg:w-screen lg:justify-end">
          <svg
            onClick={() => {
              setShowNav(!showNav);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
          </svg>
        </div>
        <div
          className={`flex h-auto flex-row items-center justify-end gap-5 pr-5 lg:z-10 lg:h-auto lg:w-screen lg:flex-col lg:justify-start lg:bg-white lg:${
            showNav ? "flex" : "hidden"
          }`}
        >
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Contact Us</span>
          <span className="cursor-pointer">About Us</span>
          <Link href="/myBookings">
            <button className="rounded bg-[#007CFF] p-4 text-white">
              My Bookings
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
