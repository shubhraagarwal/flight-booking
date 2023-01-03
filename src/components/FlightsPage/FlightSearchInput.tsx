import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FlightData } from "types";
import AirportSearch from "../AirportSearch";

function FlightSearchInput({
  flightData,
  setFlightData,
}: {
  flightData: FlightData | null;
  setFlightData: (fd: FlightData) => void;
}) {
  const [fromLocation, setFromLocation] = useState(flightData?.from || "");
  const [toLocation, setToLocation] = useState(flightData?.to || "");
  const [departureDate, setDepartureDate] = useState<Date | null>(
    flightData?.departureDate ? new Date(flightData?.departureDate) : null
  );
  const [returnDate, setReturnDate] = useState<Date | null>(
    flightData?.returnDate ? new Date(flightData?.returnDate) : null
  );
  const [showPassengerCountModal, setShowPassengerCountModal] = useState(false);
  const [adultCountFlightsPage, setadultCountFlightsPage] = useState(
    flightData?.adults || 1
  );
  const [childrenCountFlightsPage, setchildrenCountFlightsPage] = useState(
    flightData?.children || 0
  );

  // useEffect(() => {
  //   console.log("dep date changed");
  //   console.log(flightData);
  // }, [departureDate]);

  useEffect(() => {
    setFlightData({
      ...flightData,
      from: fromLocation,
      to: toLocation,
      adults: adultCountFlightsPage,
      children: childrenCountFlightsPage,
      departureDate: departureDate?.toString(),
      returnDate: returnDate?.toString(),
    });
    localStorage.setItem("adultCount", adultCountFlightsPage.toString());
    localStorage.setItem("childrenCount", childrenCountFlightsPage.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    fromLocation,
    toLocation,
    adultCountFlightsPage,
    childrenCountFlightsPage,
    departureDate,
    returnDate,
  ]);

  useEffect(() => {
    localStorage.setItem("flightData", JSON.stringify(flightData));
  }, [flightData]);

  // function tripType(e: ChangeEvent<HTMLInputElement>) {
  //   if (e.target.value === "roundTripType") {
  //     setRoundTrip(true);
  //   } else if (e.target.value === "oneWayTripType") {
  //     setRoundTrip(false);
  //   }
  // }
  const startDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

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
          dateFormat="yyyy/MM/dd"
          className="w-[135px] border-2 p-2 focus:outline-0"
          minDate={startDate}
          placeholderText="Departure date"
          selected={departureDate}
          onChange={(date) => setDepartureDate(date || new Date())}
        />
        <DatePicker
          dateFormat="yyyy/MM/dd"
          minDate={!departureDate ? startDate : departureDate}
          className="w-[135px] border-2 p-2 focus:outline-0"
          placeholderText="Return date"
          selected={returnDate}
          onChange={(date) => setReturnDate(date || new Date())}
        />
      </div>
      <div className="border-2">
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

      <button className="align-center mr-[1px] w-[120px] rounded-r-md border-2 border-transparent bg-[#007CFF] p-2 text-white xl:h-auto md:hidden">
        Search
      </button>
    </div>
  );
}

export default FlightSearchInput;
