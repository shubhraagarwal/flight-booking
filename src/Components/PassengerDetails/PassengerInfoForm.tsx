function PassengerInfoForm() {
  return (
    <form className="">
      <div className="flex flex-col gap-4">
        <h2 className="font-medium">Passenger 1 Adult</h2>
        <div className="flex gap-2">
          <input
            className="rounded-md border-2 p-2"
            type="text"
            placeholder="First Name"
            name=""
            id=""
          />
          <input
            className="rounded-md border-2 p-2"
            placeholder="Middle"
            type="text"
            name=""
            id=""
          />
          <input
            className="rounded-md border-2 p-2"
            placeholder="Knowles"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex gap-2">
          <input
            className="rounded-md border-2 p-2"
            placeholder="Suffix"
            type="text"
            name=""
            id=""
          />
          <input
            className="rounded-md border-2 p-2"
            placeholder="Date of Birth"
            type="date"
            name=""
            id=""
          />
        </div>
        <div className="flex gap-2">
          <input
            placeholder="Enter your Email"
            className="rounded-md border-2 p-2"
            type="text"
            name=""
            id=""
          />
          <input
            placeholder="ID-Card Number"
            className="rounded-md border-2 p-2"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex gap-2">
          <input
            placeholder="Address"
            className="rounded-md border-2 p-2"
            type="text"
            name=""
            id=""
          />
          <input
            placeholder="Mobile Number"
            className="rounded-md border-2 p-2"
            type="text"
            name=""
            id=""
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
          />
          Same as Passenger 1
        </label>
        <div className="flex gap-2">
          <input
            placeholder="Name"
            className="rounded-md border-2 p-2"
            type="text"
            name=""
            id=""
          />
          <input
            placeholder="Knowles"
            className="rounded-md border-2 p-2"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex gap-2">
          <input
            placeholder="Email Address"
            className="rounded-md border-2 p-2"
            type="text"
            name=""
            id=""
          />
          <input
            placeholder="Mobile Numbers"
            className="rounded-md border-2 p-2"
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
