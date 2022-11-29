import Navbar from "@/components/Navbar";
import FlightSearchInput from "../components/FlightsPage/FlightSearchInput";
import FlightInfo from "@/components/FlightsPage/FlightInfo";
import Footer from "@/components/Footer";

export default function FlightsPage() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <section className="flex flex-row items-center justify-evenly mb-20">
        <div className="">
          <div className="flex justify-end my-4">
            <button className="rounded-md bg-[#007CFF] p-4 text-white">Passenger Information</button>
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
          <div className="flex w-[25vw] flex-col justify-center">
            <div className="flex flex-row items-center justify-around rounded-lg border-2 py-4">
              <div>
                <img src="/images/flightLogo.png" alt="" />
                <p>FIG4312</p>
              </div>
              <div>
                <p>16h 23M</p>
                <p>7:00AM - 4:15PM</p>
                <p>2h 45m in HNL</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-around rounded-lg border-2 py-4">
              <div>
                <img src="/images/flightLogo.png" alt="" />
                <p>FIG4312</p>
              </div>
              <div>
                <p>16h 23M</p>
                <p>7:00AM - 4:15PM</p>
                <p>2h 45m in HNL</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer/>
    </main>
  );
}
