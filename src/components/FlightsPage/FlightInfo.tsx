/* eslint-disable @next/next/no-img-element */

import { Flight } from "types";
import { useContext } from "react";
import { connectingFlightContext } from "@/pages/_app";
import FlightsCart from "../FlightsCart";

function FlightInfo({ flights, x }: { flights: Flight[], x:number }) {
  console.log(flights);
  console.log(x)
  return (
    <main className="flex flex-row items-center gap-20">
      <section className="border-gray flex max-h-[50vh] w-[60vw] flex-col overflow-y-scroll rounded-lg border-2 border-solid p-4 sm:w-[90vw]">
        <FlightInfoCard flights={flights} y={x}/>
      </section>
      <div className="sm:hidden">
        <FlightsCart />
      </div>
    </main>
  );
}

function FlightInfoCard({ flights, y }: { flights: Flight[], y:number }) {
  const connectingFlights = useContext(connectingFlightContext);
  console.log(y)
  return (
    <>
      {flights?.length !== 0 ? (
        flights?.map((flight) => (
          <div
            onClick={() => {
              connectingFlights.setconnectingFlightData(
                flight.itineraries[y]?.segments
              );
            }}
            key={flight.id}
            className="flex flex-row items-center justify-between py-4"
          >
            <div className="">
              <img src="/images/flightLogo.png" alt="" />
            </div>
            <div className="flex flex-col justify-around gap-4 text-left">
              <p>{flight.itineraries[y]?.duration.slice(2)}</p>{" "}
              <p>Hawaiian Airlines</p>
            </div>
            <div className="flex flex-col justify-around gap-4 text-left">
              <p>
                {flight.itineraries[y]?.segments[0]?.departure.at
                  .toString()
                  .slice(11, 16) +
                  " - " +
                  flight.itineraries[y]?.segments[
                    flight.itineraries[y]!.segments.length - 1
                  ]?.arrival.at
                    .toString()
                    .slice(11, 16)}
              </p>
            </div>
            {flight.itineraries[y] && (
              <div className="flex flex-col justify-around gap-4 text-right">
                <p>{flight.itineraries[y]!.segments.length - 1} stop</p>
              </div>
            )}
            <div className="flex flex-col justify-around gap-4 text-right">
              <p>${flight.travelerPricings[0]?.price.total}</p>{" "}
              <p>Single trip</p>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <div>
          <p>No Flights Found</p>
        </div>
      )}
    </>
  );
}

export default FlightInfo;
