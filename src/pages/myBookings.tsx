import Navbar from "@/components/Navbar";
import { useState } from "react";

function MyBookings() {
    const [emailInput, setEmailInput] = useState("")
    const [lastName, setLastName] = useState("")
    const [PNR, setPNR] = useState<any>()
  return (
    <>
      <Navbar />

      <div className="w-screen h-[calc(100vh-120px)] flex items-center justify-center">
        <form action="" className="flex flex-col items-center justify-center gap-8">
          <div className="flex gap-2 flex-wrap items-center">
            <input
              className="rounded-md border-2 p-2 sm:w-[135px]"
              type="text"
              name=""
              id=""
              value={emailInput}
              onChange={(e)=>{setEmailInput(e.target.value)}}
              placeholder="Email"
            />
            <p>OR</p>
            <input
              className="rounded-md border-2 p-2 sm:w-[135px]"
              type="text"
              name=""
              id=""
              value={lastName}
              onChange={(e)=>{
                setLastName(e.target.value)
              }}
              placeholder="Last Name"
            />
        </div>
            <input
              className="rounded-md border-2 p-2 sm:w-[135px]"
              type="text"
              name=""
              id=""
              value={PNR}
              onChange={(e)=>{
                setPNR(e.target.value)
              }}
              placeholder="PNR no."
            />
          <button type="submit" className="rounded bg-[#007CFF] p-4 text-white">
            Search my flight
          </button>
        </form>
      </div>
    </>
  );
}

export default MyBookings;
