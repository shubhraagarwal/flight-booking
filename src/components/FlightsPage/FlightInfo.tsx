import { Flight } from "types";

function FlightInfo({ flights }: { flights: Flight[] }) {
  return (
    <section className="max-h-[50vh] w-[60vw] sm:w-[90vw]">
      <FlightInfoCard flights={flights} />
    </section>
  );
}

function FlightInfoCard({ flights }: { flights: Flight[] }) {
  console.log(flights);
  return (
    <>
      {flights.length !== 0 ? (
        flights.map((flight) => (
          <div
            key={flight.id}
            className="flex flex-row items-center justify-between py-4"
          >
            <div className="">
              <img src="/images/flightLogo.png" alt="" />
            </div>
            <div className="flex flex-col justify-around gap-4 text-left">
              <p>{flight.itineraries[0]?.duration}</p> <p>Hawaiian Airlines</p>
            </div>
            <div className="flex flex-col justify-around gap-4 text-left">
              <p>7:00AM - 4:15PM</p> <p>Value</p>
            </div>
            {flight.itineraries[0] && (
              <div className="flex flex-col justify-around gap-4 text-right">
                <p>{flight.itineraries[0]?.segments.length - 1} stop</p>{" "}
                <p>2h 45m in HNL</p>
              </div>
            )}
            <div className="flex flex-col justify-around gap-4 text-right">
              <p>${flight.travelerPricings[0]?.price.total}</p>{" "}
              <p>single trip</p>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>No Flights Found</p>
        </div>
      )}
      <hr />
    </>
  );
}

export default FlightInfo;
