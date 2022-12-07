import Link from "next/link";

function Navbar() {
  return (
    <nav className="h-[100px] flex flex-row justify-between items-center w-screen font-['Nunito_Sans']">
      <div>
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="flex h-[100px] flex-row items-center justify-end gap-5 pr-5">
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">Contact Us</span>
        <span className="cursor-pointer">About Us</span>
        <Link href="/auth/sign-in">
          <button>Sign in</button>
        </Link>
        <Link href="/auth/sign-up">
          <button className="rounded bg-[#007CFF] p-4 text-white">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
