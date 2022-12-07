function Footer() {
  return (
    <footer className="bg-[#007CFF] w-screen h-[200px] flex items-center">
        <div className="px-20">
            <img src="/images/footer-logo.png" className="text-3xl text-white"/>
            <div className="font-[Roboto] text-white pt-5 flex gap-5">
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