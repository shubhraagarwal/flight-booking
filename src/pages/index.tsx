import FormInput from "../Components/FormInput";
import Features from "../Components/Features";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <nav className="h-[100px] w-screen font-['Nunito_Sans']">
        <div className="flex flex-row items-center justify-end gap-5 p-5">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Contact Us</span>
          <span className="cursor-pointer">About Us</span>
          <button>Sign in</button>
          <button className="rounded-md bg-[#007CFF] p-2 text-white">
            Sign up
          </button>
        </div>
      </nav>

      <FormInput/>
      <Features/>
    </main>
  );
}
