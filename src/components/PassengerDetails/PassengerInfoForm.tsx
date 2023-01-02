import { useState, useContext } from "react";
import { changeDetailsContext } from "@/pages/passengerInfo";

function PassengerInfoForm({
  index,
  adultCount,
}: {
  index: number;
  adultCount: number;
}) {
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [knowles, setKnowles] = useState<string>("");
  const [sufflx, setSufflx] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  const [email, setEmail] = useState<string>("");
  const [idCardNumber, setIdCardNumber] = useState<number>();
  const [address, setAddress] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<number>();

  const [emergencySame, setEmergencySame] = useState(false);

  const [emergencyName, setEmergencyName] = useState<string>("");
  const [emergencyKnowles, setEmergencyKnowles] = useState<string>("");
  const [emergencyEmail, setEmergencyEmail] = useState<string>("");
  const [emergencyMobileNumber, setEmergencyMobileNumber] = useState<number>();

  const [PassengerDetailState, setPassengerDetailState] = useState<any[]>([]);
  const changeDetailsState = useContext(changeDetailsContext)
  const PassengerDetailsArray = [];

  for (let i = 0; i < adultCount; i++) {
    PassengerDetailsArray.push({
      x: "",
      y: "",
    });
  }
  console.log(...PassengerDetailsArray);
  return (
    <form className="">
      <div className="flex flex-col gap-4">
        <h2 className="font-medium">Passenger {index} Adult</h2>
        <div className="flex gap-2 lg:flex-wrap">
          {}
          <input
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="text"
            placeholder="First Name"
            name=""
            id=""
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            className="rounded-md border-2 p-2 sm:w-[135px]"
            placeholder="Middle"
            type="text"
            name=""
            id=""
            value={middleName}
            onChange={(e) => {
              setMiddleName(e.target.value);
            }}
          />
          <input
            className="rounded-md border-2 p-2 sm:w-[135px]"
            placeholder="Knowles"
            type="text"
            name=""
            id=""
            value={knowles}
            onChange={(e) => {
              setKnowles(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-2">
          <input
            className="rounded-md border-2 p-2 sm:w-[135px]"
            placeholder="Suffix"
            type="text"
            name=""
            id=""
            value={sufflx}
            onChange={(e) => {
              setSufflx(e.target.value);
            }}
          />
          <input
            className="rounded-md border-2 p-2 sm:w-[135px]"
            placeholder="Date of Birth"
            type="date"
            name="Date of Birth"
            id=""
          />
        </div>
        <div className="flex gap-2">
          <input
            placeholder="Enter your Email"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="text"
            name=""
            id=""
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="ID-Card Number"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="number"
            value={idCardNumber}
            onChange={(e) => {
              setIdCardNumber(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="flex gap-2">
          <input
            placeholder="Address"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="text"
            name=""
            id=""
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <input
            placeholder="Mobile Number"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="number"
            value={mobileNumber}
            onChange={(e) => {
              setMobileNumber(e.target.valueAsNumber);
            }}
          />
        </div>
      </div>

      {PassengerDetailsArray.map((PassengerDetail, index) => (
        <div key={index}>
          <h3>Passenger {index + 2} Details</h3>
          <input
            type="text"
            name=""
            id=""
            className="rounded-md border-2 p-2 sm:w-[135px]"
            value={PassengerDetailState[index]?.x}
            onChange={(e) => {
              // PassengerDetail.x = e.target.value;
              setPassengerDetailState([...PassengerDetailState, {x: e.target.value, y: ""}]);
              console.log(PassengerDetailState);
            }}
          />
          <input
            type="text"
            name=""
            id=""
            className="rounded-md border-2 p-2 sm:w-[135px]"
            value={PassengerDetailState[index]?.y}
            onChange={(e) => {
              // PassengerDetail.y = e.target.value;
              setPassengerDetailState([...PassengerDetailState, {x: "", y: e.target.value}]);
              console.log(PassengerDetailState);
            }}
          />
        </div>
      ))}

      <div className="flex flex-col gap-4">
        <h2 className="mt-8 font-medium">Emergency contact information</h2>
        <label htmlFor="">
          <input
            className="mr-2 rounded-md border-2"
            type="radio"
            name=""
            id=""
            checked={emergencySame}
            onChange={() => {
              setEmergencySame(!emergencySame);
            }}
          />
          Same as Passenger {index}
        </label>
        <div className="flex gap-2">
          <input
            placeholder="Name"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="text"
            name=""
            id=""
            value={emergencySame ? firstName : emergencyName}
            onChange={(e) => {
              setEmergencyName(e.target.value);
              setEmergencySame(false);
            }}
          />
          <input
            placeholder="Knowles"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="text"
            name=""
            id=""
            value={emergencySame ? knowles : emergencyKnowles}
            onChange={(e) => {
              setEmergencyKnowles(e.target.value);
              setEmergencySame(false);
            }}
          />
        </div>
        <div className="flex gap-2">
          <input
            placeholder="Email Address"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="text"
            name=""
            id=""
            value={emergencySame ? email : emergencyEmail}
            onChange={(e) => {
              setEmergencyEmail(e.target.value);
              setEmergencySame(false);
            }}
          />
          <input
            placeholder="Mobile Numbers"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
    </form>
  );
}

export default PassengerInfoForm;
