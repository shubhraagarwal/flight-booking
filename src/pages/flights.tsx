import Navbar from "@/components/Navbar";
import FlightSearchInput from "../components/FlightsPage/FlightSearchInput";
import FlightInfo from "@/components/FlightsPage/FlightInfo";
import Footer from "@/components/Footer";
import FlightsCart from "@/components/FlightsCart";
import Link from "next/link";
import { useRouter } from "next/router";
import { FlightsQueryParams } from "types";

export default function FlightsPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col lg:min-h-screen">
      <Navbar />
      <section className="mb-20 flex flex-row items-center justify-evenly sm:w-screen">
        <div className="">
          <div className="my-4 flex justify-end sm:justify-center">
            <Link href="/passengerInfo">
              <button className="rounded-md bg-[#007CFF] p-4 text-white md:mr-4">
                Passenger Information
              </button>
            </Link>
          </div>
          <div className="flex justify-start sm:justify-center flex-row gap-2 lg:ml-4">
            <select name="" id="" className="rounded-lg border-2 p-2">
              <option value="Min Price" selected disabled>
                Min Price
              </option>
            </select>
            <select name="" id="" className="rounded-lg border-2 p-2">
              <option value="Seat class" selected disabled>
                Seat class
              </option>
            </select>
          </div>

          <div className="pb-12 pt-4">
            <FlightSearchInput
              queryParams={router.query as FlightsQueryParams}
            />
          </div>
          <div className="flex flex-row gap-6 items-center sm:mt-10">
            <div className="border-gray rounded-lg border-2 border-solid p-4 flex overflow-y-scroll">
              <FlightInfo />
            </div>
            <div className="sm:hidden">
              <FlightsCart />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
