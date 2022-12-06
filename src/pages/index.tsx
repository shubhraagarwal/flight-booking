import Navbar from "../components/Navbar";
import FormInput from "../components/FormInput";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const session = useSession();
  return (
    <main className="flex flex-col items-center">
      {/* {session && <h1>Hello {session.data?.user?.name}</h1>} */}
      <Navbar />
      <FormInput />
      <Features />
      <Footer />
    </main>
  );
}
