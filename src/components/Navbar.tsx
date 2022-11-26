function Navbar() {
  return (
    <nav className="h-[100px] w-screen font-['Nunito_Sans']">
        <div className="h-[100px] flex flex-row items-center justify-end gap-5 pr-5">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Contact Us</span>
          <span className="cursor-pointer">About Us</span>
          <button>Sign in</button>
          <button className="rounded-md bg-[#007CFF] p-2 text-white">
            Sign up
          </button>
        </div>
      </nav>
  )
}

export default Navbar