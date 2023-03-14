/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

function Footer() {
  return (
    <footer className=" flex h-[200px] w-screen items-center bg-[#007CFF]">
      <div className="md:items:center flex w-screen flex-col items-start px-10 md:flex-row-reverse md:justify-around md:px-0">
        <img src="/images/footer-logo.png" alt="Logo" />
        <div className="flex gap-5 font-[Roboto] text-white md:flex-col md:gap-0">
          <Link href="/aboutUs">
            <span>About Us</span>
          </Link>
          <Link href="/privacyPolicy">
            <span>Privacy Policy</span>
          </Link>
          <Link href="/termsandconditions">
            <span>Terms & Conditions</span>
          </Link>
          <Link href="tel:+1(888)889-2208" className="text-white">
            <span>Call Us on +1-888-889-2208 </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
