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
    <main className="flex flex-col">
      <Navbar />
      <section className="mb-20 flex flex-row items-center justify-evenly">
        <div className="">
          <div className="my-4 flex justify-end">
            <Link href="/passengerInfo">
              <button className="rounded-md bg-[#007CFF] p-4 text-white">
                Passenger Information
              </button>
            </Link>
          </div>
          <div className="flex flex-row gap-2">
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

          <div className="py-12">
            <FlightSearchInput
              queryParams={router.query as FlightsQueryParams}
            />
          </div>

          <div className="border-gray rounded-lg border-2 border-solid p-4">
            <FlightInfo />
          </div>
        </div>

        <section>
          <FlightsCart />
        </section>
      </section>

      <Footer />
    </main>
  );
}
