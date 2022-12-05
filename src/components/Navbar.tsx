function Navbar() {
  return (
    <nav className="h-[100px] w-screen font-['Nunito_Sans']">
      <div className="flex h-[100px] flex-row items-center justify-between pr-10">
        <div>
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="flex gap-4 items-center">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Contact Us</span>
          <span className="cursor-pointer">About Us</span>
          <button>Sign in</button>
          <button className="rounded-md bg-[#007CFF] p-2 text-white">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
