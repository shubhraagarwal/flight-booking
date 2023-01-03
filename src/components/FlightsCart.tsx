import { connectingFlightContext } from "@/pages/_app";
import { useContext } from "react";

function FlightsCart() {
  const connectingFlights = useContext(connectingFlightContext);
  const connectingFlightData = connectingFlights.connectingFlightData;

  function convertDate(date) {
    const convertedDate = new Date(date.replace("T", " ").replace(/-/g, "/"));
    return convertedDate;
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function convertMilliSec(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = seconds >= 30 ? minutes + 1 : minutes;
    minutes = minutes % 60;
    hours = hours % 24;

    return `${padTo2Digits(hours)}H ${padTo2Digits(minutes)}M`;
  }

  return (
    <main className="rounded-md border-2 border-b-0">
      {connectingFlightData ? (
        connectingFlightData.map((flight, index) => (
          <div
            key={index}
            className="flex w-[25vw] flex-col justify-center gap-4 lg:w-fit lg:px-2"
          >
            <div className="flex flex-row items-center justify-around rounded-lg py-4 lg:gap-4 lg:px-8">
              <div>
                <img src="/images/flightLogo.png" alt="" />
                <p>FIG4312</p>
              </div>
              <div>
                <p>
                  {flight.duration.includes("H")
                    ? flight.duration.slice(2).replace("H", "H ")
                    : flight.duration.slice(2)}
                </p>
                <p>
                  {flight.departure.at.slice(11, 16)} -{" "}
                  {flight.arrival.at.slice(11, 16)}
                </p>
                <p>
                  {index < connectingFlightData.length - 1
                    ? convertMilliSec(
                        convertDate(
                          connectingFlightData[index + 1].departure.at
                        ) - convertDate(connectingFlightData[index].arrival.at)
                      ) +
                      " in " +
                      flight.arrival.iataCode
                    : "You Landed"}
                </p>
              </div>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <div></div>
      )}
    </main>
  );
}

export default FlightsCart;
