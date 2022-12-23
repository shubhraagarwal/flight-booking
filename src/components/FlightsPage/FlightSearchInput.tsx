import { ChangeEvent, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FlightData } from "types";
import AirportSearch from "../AirportSearch";

function FlightSearchInput({ flightData }: { flightData: FlightData }) {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [roundTrip, setRoundTrip] = useState(true);
  const [showPassengerCountModal, setShowPassengerCountModal] = useState(false);
  const [adultCountFlightsPage, setadultCountFlightsPage] = useState(1);
  const [childrenCountFlightsPage, setchildrenCountFlightsPage] = useState(0);

  useEffect(() => {
    console.log(flightData);
    setFromLocation(flightData.from);
    setToLocation(flightData.to);
    setadultCountFlightsPage(flightData.adults);
    setchildrenCountFlightsPage(flightData.children);
    setDepartureDate(
      flightData.departureDate ? new Date(flightData.departureDate) : null
    );
    setReturnDate(
      flightData.returnDate ? new Date(flightData.returnDate) : null
    );
  }, [flightData, fromLocation, toLocation]);

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
    <div className="flex h-[50px] w-[65vw] items-center rounded-md bg-white lg:mb-4 lg:w-screen lg:flex-wrap lg:justify-center lg:gap-2">
      <div className={`flex w-[25vw] flex-row lg:w-auto lg:gap-2`}>
        <AirportSearch
          placeholder="From Where?"
          setLocation={setFromLocation}
          location={fromLocation}
        />
        <AirportSearch
          placeholder="To Where?"
          setLocation={setToLocation}
          location={toLocation}
        />
      </div>

      <div className="flex items-center lg:gap-2">
        <DatePicker
          dateFormat="dd/MM/yyyy"
          className={
            !roundTrip
              ? "w-44 border-2 py-2 px-2 focus:outline-0 md:rounded "
              : "w-[135px] border-2 p-2 focus:outline-0"
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
            !roundTrip ? "hidden" : "w-[135px] border-2 p-2 focus:outline-0"
          }
          placeholderText="Return date"
          selected={returnDate}
          onChange={(date) => setReturnDate(date || new Date())}
        />
      </div>
      <div className="lg:border-2">
        <button
          onClick={() => {
            setShowPassengerCountModal(!showPassengerCountModal);
          }}
          className="align-center w-[180px] justify-center rounded-l-md p-2"
        >
          {adultCountFlightsPage} Adult {childrenCountFlightsPage} Children
        </button>

        <div
          className={
            !showPassengerCountModal
              ? "hidden"
              : "absolute ml-8 flex flex-col justify-around bg-white lg:-ml-4"
          }
        >
          <div className="relative flex  flex-row justify-around">
            <button
              onClick={() => {
                adultCountFlightsPage > 1
                  ? setadultCountFlightsPage(adultCountFlightsPage - 1)
                  : "";
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
                setadultCountFlightsPage(adultCountFlightsPage + 1);
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
                setchildrenCountFlightsPage(childrenCountFlightsPage - 1);
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
                setchildrenCountFlightsPage(childrenCountFlightsPage + 1);
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

      <button className="align-center mr-[1px] h-12 w-[120px] rounded-r-md bg-[#007CFF] p-2 text-white xl:h-auto md:hidden">
        Search
      </button>
    </div>
  );
}

export default FlightSearchInput;
