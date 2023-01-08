import Navbar from "@/components/Navbar";
import FlightSearchInput from "../components/FlightsPage/FlightSearchInput";
import FlightInfo from "@/components/FlightsPage/FlightInfo";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FlightData } from "types";
import { useState } from "react";
import { trpc } from "@/utils/trpc";
import { z } from "zod";
import { flightSearchSchema } from "@/server/trpc/router/flights";


export default function FlightsPage() {
  const ISSERVER = typeof window === "undefined";
  const [flightData, setFlightData] = useState<FlightData | null>(
    !ISSERVER ? !localStorage.getItem("flightData")
      ? null
      : JSON.parse(localStorage.getItem("flightData")!)
  : {});
  const { data, isLoading } = trpc.flights.search.useQuery(
    flightData as z.infer<typeof flightSearchSchema>
  );

  // console.log({ flightData });

  console.log({ data });
  return (
    <main className="flex flex-col lg:min-h-screen">
      <Navbar />
      <section className="mb-20 flex flex-row items-center justify-evenly sm:w-screen">
        <div className="">
          <div className="my-4 flex justify-end sm:justify-center">
            <Link href={"/passengerInfo"}>
              <button className="rounded-md bg-[#007CFF] px-8 py-4 text-white md:mr-4">
                Next
              </button>
            </Link>
          </div>

          <div className="flex flex-row justify-start gap-2 lg:ml-4 sm:justify-center">
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
              flightData={flightData}
              setFlightData={setFlightData}
            />
          </div>
          <div className="flex flex-row items-center gap-6 sm:mt-10">
            <div className="">
              {isLoading ? (
                <div>Loading</div>
              ) : data ? (
                <FlightInfo flights={data.flights!} x={1}/>
              ) : (
                <div>No Flights right now</div>
              )}
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
