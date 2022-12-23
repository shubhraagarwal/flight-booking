import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FlightData } from "types";
import AirportSearch from "./AirportSearch";
import { flightSearchSchema } from "./FormValidation";
// import PassengerInfoForm from "./PassengerDetails/PassengerInfoForm";
import { AdultCountContext } from "@/pages/_app";

function FormInput() {
  const router = useRouter();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [roundTrip, setRoundTrip] = useState(false);
  const [showPassengerCountModal, setShowPassengerCountModal] =
    useState<boolean>(false);
  const [adultCount, setAdultCount] = useState<number>(1);
  const [childrenCount, setChilrenCount] = useState<number>(0);

  function handleFlightsNavigation() {
    const flightData: FlightData = {
      from: fromLocation,
      to: toLocation,
      adults: adultCount,
      children: childrenCount,
      departureDate: departureDate?.toString(),
      returnDate: returnDate?.toString(),
      roundTrip: String(roundTrip),
    };
    localStorage.setItem("flightData", JSON.stringify(flightData));
    router.push({ pathname: "/flights" });
  }

    if (isValid) {
      const query: FlightsQueryParams = {
        from: fromLocation,
        to: toLocation,
        adults: adultCount,
        children: childrenCount,
        departureDate: departureDate?.toString(),
        returnDate: returnDate?.toString(),
        roundTrip: String(roundTrip),
      };
      router.push({ pathname: "/flights", query });
    } else {
      console.log("Please enter all fields correctly");
    }
  }

  const startDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  const AdultContext = useContext(AdultCountContext);
  AdultContext.setGlobalAdultCount(adultCount);
  console.log(AdultContext.GlobalAdultCount);

  return (
    <section
      className="flex h-screen w-screen flex-col items-center
    justify-center bg-[url('/images/flightbg.png')] bg-cover bg-center"
    >
      <div className="flex flex-col justify-center">
        <div className="mb-10">
          <h1 className="ml-4 flex flex-col font-['ubuntu'] text-5xl leading-relaxed text-white">
            Let the journey
            <span> begin....</span>
          </h1>
        </div>
        <div className="flex items-center justify-center rounded-md bg-[#041950] p-10 xl:w-[96vw] md:bg-transparent">
          <div className=" flex items-center justify-center rounded-md bg-white py-[1px] xl:flex-wrap xl:justify-center xl:gap-2 xl:bg-transparent">
            <AirportSearch
              placeholder="From Where?"
              setLocation={setFromLocation}
            />
            <AirportSearch
              placeholder="To Where?"
              setLocation={setToLocation}
            />

            <div className="flex">
              <DatePicker
                dateFormat="dd/MM/yyyy"

                className="w-[135px] border-r-2 p-2 focus:outline-0"
                minDate={startDate}
                placeholderText="Departure date"
                selected={departureDate}
                onChange={(date) => setDepartureDate(date || new Date())}
              />
              <DatePicker
                dateFormat="dd/MM/yyyy"
                minDate={!departureDate ? startDate : departureDate}
                className="w-[135px] border-r-2 p-2 focus:outline-0"
                placeholderText="Return date"
                selected={returnDate}
                onChange={(date) => setReturnDate(date || new Date())}
              />
            </div>
            <div className="bg-white md:rounded">
              <button
                onClick={() => {
                  setShowPassengerCountModal(!showPassengerCountModal);
                }}
                className="align-center w-[240px] rounded-l-md p-2 md:w-auto md:py-2 md:px-6"
              >
                {adultCount} Adult {childrenCount} Children
              </button>

              <div
                className={
                  !showPassengerCountModal
                    ? "hidden"
                    : "absolute ml-8 flex h-16 w-[200px] flex-col justify-around bg-white"
                }
              >
                <div className="relative flex w-[200px] flex-row justify-around">
                  <button
                    onClick={() => {
                      adultCount > 1
                        ? setAdultCount((count) => count - 1)
                        : null;
                    }}
                  >
                    <svg
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M5 11h14v2H5z" />
                    </svg>
                  </button>
                  <p>Adult</p>
                  <button
                    onClick={() => {
                      setAdultCount((count) => count + 1);
                    }}
                  >
                    <svg
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                    </svg>
                  </button>
                </div>
                <div className="relative flex w-[200px] flex-row justify-around">
                  <button
                    onClick={() => {
                      childrenCount > 0
                        ? setChilrenCount((count) => count - 1)
                        : null;
                    }}
                  >
                    <svg
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M5 11h14v2H5z" />
                    </svg>
                  </button>

                  <p>Children</p>

                  <button
                    onClick={() => {
                      setChilrenCount((count) => count + 1);
                    }}
                  >
                    {" "}
                    <svg
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <button
              className="align-center mr-[1px] h-12 w-[240px] rounded-r-md bg-[#007CFF] p-2 font-['Nunito_Sans'] text-white xl:h-auto md:w-auto md:rounded md:px-10 md:py-2"
              onClick={handleFlightsNavigation}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormInput;
