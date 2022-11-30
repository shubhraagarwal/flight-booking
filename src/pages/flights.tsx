import Navbar from "@/components/Navbar";
import FlightSearchInput from "../components/FlightsPage/FlightSearchInput";
import FlightInfo from "@/components/FlightsPage/FlightInfo";
import Footer from "@/components/Footer";
import FlightsCart from "@/components/FlightsCart";
import Link from "next/link";

export default function FlightsPage() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <section className="flex flex-row items-center justify-evenly mb-20">
        <div className="">
          <div className="flex justify-end my-4">
            <Link href="/passengerInfo"><button className="rounded-md bg-[#007CFF] p-4 text-white">Passenger Information</button></Link>
          </div>
          <div className="flex flex-row gap-2">
            <select name="" id="" className="border-2 p-2 rounded-lg">
              <option value="Min Price" selected disabled>
                Min Price
              </option>
            </select>
            <select name="" id="" className="border-2 p-2 rounded-lg">
              <option value="Seat class" selected disabled>
                Seat class
              </option>
            </select>
          </div>

          <div className="py-12">
            <FlightSearchInput />
          </div>

          <div className="border-gray rounded-lg border-2 border-solid p-4">
            <FlightInfo />
          </div>
        </div>

        <section>
          <FlightsCart/>
        </section>
      </section>

      <Footer/>
    </main>
  );
}
