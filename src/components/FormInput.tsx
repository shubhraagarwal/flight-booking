import { useRouter } from "next/router";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { FlightData } from "types";
import AirportSearch from "./AirportSearch";
import { flightSearchSchema } from "./FormValidation";
import { createStyles, CSSObject } from '@mantine/core';

//put styles here for creating em
const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    // outline: "1px solid black"
  }
}));

function FormInput() {
  const router = useRouter();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [showPassengerCountModal, setShowPassengerCountModal] =
    useState<boolean>(false);
  const [adultCount, setAdultCount] = useState<number>(1);
  const [childrenCount, setChilrenCount] = useState<number>(0);

  async function handleFlightsNavigation() {
    const validation = {
      fromWhere: fromLocation,
      toWhere: toLocation,
    };
    const isValid = await flightSearchSchema.isValid(validation);
    if (isValid) {
      const flightData: FlightData = {
        from: fromLocation,
        to: toLocation,
        adults: adultCount,
        children: childrenCount,
        departureDate: departureDate?.toString(),
        returnDate: returnDate?.toString(),
      };
      localStorage.setItem("flightData", JSON.stringify(flightData));
      localStorage.setItem("adultCount", adultCount.toString());
      localStorage.setItem("childrenCount", childrenCount.toString());
      router.push({ pathname: "/flights" });
    } else {
      console.log("Please enter all fields correctly");
    }
  }

  const startDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

//for creating style
const {classes} = useStyles()


//for sx prop
const styles: CSSObject = {
  border: '1px solid transparent',
  color: '#999',

  '&:hover': {
    backgroundColor: '#eee',
  },
}

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
          <div className=" flex items-center justify-center gap-2 rounded-md bg-white py-[1px] xl:flex-wrap xl:justify-center xl:gap-2 xl:bg-transparent">
            <AirportSearch
              placeholder="From Where?"
              setLocation={setFromLocation}
            />
            <AirportSearch
              placeholder="To Where?"
              setLocation={setToLocation}
            />

            <div className="flex gap-2">
              <DatePicker
                className={classes.wrapper}
                minDate={startDate}
                placeholder="Departure date"
                value={departureDate}
                onChange={(date) => setDepartureDate(date || new Date())}
              />
              <DatePicker
                minDate={!departureDate ? startDate : departureDate}
                className=" focus:outline-0"
                placeholder="Return date"
                value={returnDate}
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
