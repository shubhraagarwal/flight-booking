import Navbar from "@/components/Navbar";
import FlightSearchInput from "../components/FlightsPage/FlightSearchInput";
import FlightInfo from "@/components/FlightsPage/FlightInfo";
import Footer from "@/components/Footer";
import FlightsCart from "@/components/FlightsCart";
import Link from "next/link";
import { FlightData } from "types";
import { useEffect, useState } from "react";
import { trpc } from "@/utils/trpc";
import { z } from "zod";
import { flightSearchSchema } from "@/server/trpc/router/flights";

export default function FlightsPage() {
  const [flightData, setFlightData] = useState<FlightData | null>(null);
  // const { data } = trpc.flights.search.useQuery(
  //   flightData as z.infer<typeof flightSearchSchema>
  // );

  // console.log({ flightData });

  useEffect(() => {
    const lcData = localStorage.getItem("flightData");
    if (lcData) setFlightData(JSON.parse(lcData));
  }, []);

  // console.log({ data });
  return (
    <main className="flex flex-col lg:min-h-screen">
      <Navbar />
      <section className="mb-20 flex flex-row items-center justify-evenly sm:w-screen">
        <div className="">
          <div className="my-4 flex justify-end sm:my-4 sm:justify-center">
            <Link href="/passengerInfo">
              <button className="rounded-md bg-[#007CFF] p-4 text-white">
                Passenger Information
              </button>
            </Link>
          </div>
          <div className="flex flex-row justify-center gap-2 sm:ml-4">
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
            {flightData && (
              <FlightSearchInput
                flightData={flightData}
                setFlightData={setFlightData}
              />
            )}
          </div>
          <div className="flex flex-row items-center gap-6 sm:mt-10">
            <div className="border-gray flex overflow-y-scroll rounded-lg border-2 border-solid p-4">
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
