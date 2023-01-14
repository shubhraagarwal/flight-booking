import { useState, useContext } from "react";
import { changeDetailsContext } from "@/pages/passengerInfo";

function PassengerInfoForm({
  index,
  adultCount,
}: {
  index: number;
  adultCount: number;
}) {
  const [emergencySame, setEmergencySame] = useState(false);

  const [PassengerDetails, setPassengerDetails] = useState<any>({
    firstName: "",
    middleName: "",
    knowles: "",
    sufflx: "",
    dateOfBirth: "",
    email: "",
    idCardNumber: "",
    address: "",
    mobileNumber: "",
  });
  
  console.log(PassengerDetails.dateOfBirth.getMonth())
  const [EmergencyPassengerDetails, setEmergencyPassengerDetails] =
    useState<any>({
      emergencyName: "",
      emergencyKnowles: "",
      emergencyEmail: "",
      emergencyMobileNumber: "",
    });

  const changeDetailsState = useContext(changeDetailsContext);

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
            value={PassengerDetails.firstName}
            onChange={(e) => {
              setPassengerDetails({
                ...PassengerDetails,
                firstName: e.target.value,
              });
            }}
          />
          <input
            className="rounded-md border-2 p-2 sm:w-[135px]"
            placeholder="Middle"
            type="text"
            name=""
            id=""
            value={PassengerDetails.middleName}
            onChange={(e) => {
              setPassengerDetails({
                ...PassengerDetails,
                middleName: e.target.value,
              });
            }}
          />
          <input
            className="rounded-md border-2 p-2 sm:w-[135px]"
            placeholder="Knowles"
            type="text"
            name=""
            id=""
            value={PassengerDetails.knowles}
            onChange={(e) => {
              setPassengerDetails({
                ...PassengerDetails,
                knowles: e.target.value,
              });
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
            value={PassengerDetails.sufflx}
            onChange={(e) => {
              setPassengerDetails({
                ...PassengerDetails,
                suffix: e.target.value,
              });
            }}
          />
          <input
            className="rounded-md border-2 p-2 sm:w-[135px]"
            placeholder="Date of Birth"
            type="date"
            name="Date of Birth"
            id=""
            value={PassengerDetails.dateOfBirth}
            onChange={(e) => {
              setPassengerDetails({
                ...PassengerDetails,
                dateOfBirth: e.target.valueAsDate,
              });
            }}
          />
        </div>
        <div className="flex gap-2">
          <input
            placeholder="Enter your Email"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="email"
            name=""
            id=""
            value={PassengerDetails.email}
            onChange={(e) => {
              setPassengerDetails({
                ...PassengerDetails,
                email: e.target.value,
              });
            }}
          />
          <input
            placeholder="ID-Card Number"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="number"
            value={PassengerDetails.idCardNumber}
            onChange={(e) => {
              setPassengerDetails({
                ...PassengerDetails,
                idCardNumber: e.target.valueAsNumber,
              });
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
            value={PassengerDetails.address}
            onChange={(e) => {
              setPassengerDetails({
                ...PassengerDetails,
                address: e.target.value,
              });
            }}
          />
          <input
            placeholder="Mobile Number"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="number"
            value={PassengerDetails.mobileNumber}
            onChange={(e) => {
              setPassengerDetails({
                ...PassengerDetails,
                mobileNumber: e.target.valueAsNumber,
              });
            }}
          />
        </div>
      </div>

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
            value={
              emergencySame
                ? PassengerDetails.firstName
                : EmergencyPassengerDetails.emergencyName
            }
            onChange={(e) => {
              setEmergencyPassengerDetails({
                ...EmergencyPassengerDetails,
                emergencyName: e.target.value,
              });
              setEmergencySame(false);
            }}
          />
          <input
            placeholder="Knowles"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="text"
            name=""
            id=""
            value={
              emergencySame
                ? PassengerDetails.knowles
                : EmergencyPassengerDetails.emergencyKnowles
            }
            onChange={(e) => {
              setEmergencyPassengerDetails({
                ...EmergencyPassengerDetails,
                emergencyKnowles: e.target.value,
              });
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
            value={
              emergencySame
                ? PassengerDetails.email
                : EmergencyPassengerDetails.emergencyEmail
            }
            onChange={(e) => {
              setEmergencyPassengerDetails({
                ...EmergencyPassengerDetails,
                emergencyEmail: e.target.value,
              });
              setEmergencySame(false);
            }}
          />
          <input
            placeholder="Mobile Numbers"
            className="rounded-md border-2 p-2 sm:w-[135px]"
            type="number"
            name=""
            id=""
            value={
              emergencySame
                ? PassengerDetails.mobileNumber
                : EmergencyPassengerDetails.emergencyMobileNumber
            }
            onChange={(e) => {
              setEmergencyPassengerDetails({
                ...EmergencyPassengerDetails,
                emergencyMobileNumber: e.target.valueAsNumber,
              });
              setEmergencySame(false);
            }}
          />
        </div>
      </div>
    </form>
  );
}

export default PassengerInfoForm;
