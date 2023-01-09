/* eslint-disable @next/next/no-img-element */

function Footer() {
  return (
    <footer className=" bg-[#007CFF] w-screen h-[200px] flex items-center">
        <div className="w-screen px-10 md:px-0 flex items-start flex-col md:flex-row-reverse md:justify-around md:items:center">
            <img src="/images/footer-logo.png" alt="Logo"/>
            <div className="font-[Roboto] text-white flex gap-5 md:flex-col md:gap-0">
                <span>About Us</span>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
                <span>Refund Policy</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer