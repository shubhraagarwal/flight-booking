function FlightInfo() {
  return (
    <section className="w-[60vw] sm:w-[90vw] max-h-[50vh]">
      <FlightInfoCard />
      <FlightInfoCard />
      <FlightInfoCard />
      <FlightInfoCard />
      <FlightInfoCard />
      <FlightInfoCard />
      <FlightInfoCard />
      <FlightInfoCard />
      <FlightInfoCard />
    </section>
  );
}

function FlightInfoCard() {
  return (
    <>
      <div className="flex flex-row items-center justify-between py-4">
        <div className="">
          <img src="/images/flightLogo.png" alt="" />
        </div>
        <div className="flex gap-4 flex-col justify-around text-left">
          <p>16h 23M</p> <p>Hawaiian Airlines</p>
        </div>
        <div className="flex gap-4 flex-col justify-around text-left">
          <p>7:00AM - 4:15PM</p> <p>Value</p>
        </div>
        <div className="flex gap-4 flex-col justify-around text-right">
          <p>1 stop</p> <p>2h 45m in HNL</p>
        </div>
        <div className="flex gap-4 flex-col justify-around text-right">
          <p>Rs. 5894</p> <p>single trip</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default FlightInfo;
