// http://localhost:3000/flights?from=BOM+-+MUMBAI&to=PNY+-+PONDICHERRY&departureDate=Sat+Dec+24+2022+00%3A00%3A00+GMT%2B0530+%28India+Standard+Time%29&returnDate=&roundTrip=undefined
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FlightsQueryParams } from "types";
import AirportSearch from "./AirportSearch";

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
  }

  function tripType(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "roundTripType") {
      setRoundTrip(true);
    } else if (e.target.value === "oneWayTripType") {
      setRoundTrip(false);
    }
  }

  const startDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <section
      className="flex h-screen w-screen flex-col items-center
    justify-center bg-[url('/images/flightbg.png')] bg-cover bg-center"
    >
      <div className="flex flex-col justify-center">
        <div className="mb-10">
          <h1 className="flex flex-col font-['ubuntu'] text-5xl leading-relaxed text-white">
            Let the journey
            <span> begin....</span>
          </h1>
        </div>
        <div className="flex items-center justify-center rounded-md bg-[#041950] px-10 py-10">
          <div className="flex items-center rounded-md bg-white">
            <AirportSearch
              placeholder="From Where?"
              setLocation={setFromLocation}
            />
            <AirportSearch
              placeholder="To Where?"
              setLocation={setToLocation}
            />

            <div className="flex w-[242px]">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                className={
                  !roundTrip
                    ? "w-[240px] border-r-2 p-2 focus:outline-0"
                    : "w-[135px] border-r-2 p-2 focus:outline-0"
                }
                minDate={startDate}
                placeholderText="Departure date"
                selected={departureDate}
                onChange={(date) => setDepartureDate(date || new Date())}
                renderCustomHeader={({
                  date,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => {
                  return (
                    <div className="flex flex-col gap-2 p-[8px] font-[Ubuntu] text-sm">
                      <div className="flex flex-row items-center justify-evenly">
                        <label htmlFor="">
                          <input
                            type="radio"
                            name="trip-type"
                            id=""
                            value={"roundTripType"}
                            onChange={tripType}
                          />{" "}
                          Round Trip
                        </label>
                        <label htmlFor="">
                          <input
                            type="radio"
                            name="trip-type"
                            id=""
                            value={"oneWayTripType"}
                            onChange={tripType}
                          />{" "}
                          One Way
                        </label>
                      </div>

                      <div className="flex flex-row items-center justify-around text-base">
                        <button
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                        >
                          {"<"}
                        </button>
                        <div className="flex flex-row gap-4">
                          <p className="font-bold">{months[date.getMonth()]}</p>
                          <p className="font-bold">{date.getFullYear()}</p>
                        </div>
                        <button
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                        >
                          {">"}
                        </button>
                      </div>
                    </div>
                  );
                }}
              />
              <DatePicker
                dateFormat="dd/MM/yyyy"
                minDate={!departureDate ? startDate : departureDate}
                className={
                  !roundTrip
                    ? "hidden"
                    : "w-[135px] border-r-2 p-2 focus:outline-0"
                }
                placeholderText="Return date"
                selected={returnDate}
                onChange={(date) => setReturnDate(date || new Date())}
              />
            </div>
            <div>
              <button
                onClick={() => {
                  setShowPassengerCountModal(!showPassengerCountModal);
                }}
                className="align-center h-12 w-[240px] rounded-l-md p-2"
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
              className="align-center mr-[1px] h-12 w-[240px] rounded-r-md bg-[#007CFF] p-2 text-white"
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
