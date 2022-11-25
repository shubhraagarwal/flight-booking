import { useRef, useState } from "react";
// import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormInput() {
  // const [value, setValue] = useState<DateRangePickerValue>([
  //   new Date(2021, 11, 1),
  //   new Date(2021, 11, 5),
  // ]);

  // const Dateref = useRef();
  const [startDate, setStartDate] = useState(new Date());
  

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
            <select
              name="From where?"
              id=""
              className="align-center broder-solid h-12 w-[242px] rounded-l-md border-r-2 border-black p-2"
            >
              <option value="" disabled selected>
                From Where?
              </option>
            </select>

            <select
              name="From where?"
              id=""
              className="align-center broder-solid h-12 w-[242px] rounded-l-md border-r-2 border-black p-2"
            >
              <option value="" disabled selected>
                From Where?
              </option>
            </select>

            {/* <input
              type="date"
              className="align-center broder-solid h-12 w-[242px] rounded-l-md border-r-2 border-black p-2"
            /> */}
            <div className="w-[242px]">
              <label htmlFor="">
                <input type="radio" name="trip-type" id="" /> Round Trip
              </label>
              <label htmlFor="">
                <input type="radio" name="trip-type" id="" /> One Way
              </label>

            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>

              {/* <DateRangePicker
                ref={Dateref}
                placeholder="Pick dates range"
                value={value}
                onChange={setValue}
              /> */}
            </div>
            <button className="align-center h-12 w-[240px] rounded-l-md p-2">
              1 Adult
            </button>

            <button className="align-center h-12 w-[240px] rounded-r-md bg-[#007CFF] p-2 text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormInput;
