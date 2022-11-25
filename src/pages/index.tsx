import Navbar from "../Components/Navbar";
import FormInput from "../Components/FormInput";
import Features from "../Components/Features";
import Footer from "../Components/Footer";


export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <Navbar/>
      <FormInput/>
      <Features/>
      <Footer/>
    </main>
  );
}
