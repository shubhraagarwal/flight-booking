import { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AirportSearch from "./AirportSearch";
function FormInput() {
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [roundTrip, setRoundTrip] = useState<boolean>();
  const [showPassengerCountModal, setShowPassengerCountModal] =
    useState<boolean>(false);
  const [adultCount, setAdultCount] = useState<number>(1);
  const [childrenCount, setChilrenCount] = useState<number>(0);

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
    <section className="flex h-screen w-screen flex-col justify-center bg-[url('/images/flightbg.png')] bg-cover bg-center">
      <div className="ml-36 mb-10 max-w-[40ch]">
        <h1 className="font-['ubuntu'] text-5xl leading-relaxed text-white">
          Let the journey begin....
        </h1>
      </div>

      <div className="flex w-[99vw] justify-center">
        <div className="flex h-[200px] w-[1200px] items-center justify-center rounded-md bg-[#041950]">
          <div className="flex h-[50px] w-[1100px] items-center rounded-md bg-white">
            <AirportSearch placeholder="From Where?" />
            <AirportSearch placeholder="To Where?" />

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
                      adultCount > 1 ? setAdultCount(adultCount - 1) : "";
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
                      setAdultCount(adultCount + 1);
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
                      setChilrenCount(childrenCount - 1);
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
                      setChilrenCount(childrenCount + 1);
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

            <button className="align-center mr-[1px] h-12 w-[240px] rounded-r-md bg-[#007CFF] p-2 text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormInput;
