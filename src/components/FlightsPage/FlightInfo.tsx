function FlightInfo() {
  return (
    <section className="w-[60vw]">
      <FlightInfoCard />
      <FlightInfoCard />
      <FlightInfoCard />
    </section>
  );
}

function FlightInfoCard() {
  return (
    <>
      <div className="flex h-24 flex-row items-center justify-between">
        <div className="">
          <img src="/images/flightLogo.png" alt="" />
        </div>
        <div className="flex h-24 flex-col justify-around text-left">
          <p>16h 23M</p> <p>Hawaiian Airlines</p>
        </div>
        <div className="flex h-24 flex-col justify-around text-left">
          <p>7:00AM - 4:15PM</p> <p>Value</p>
        </div>
        <div className="flex h-24 flex-col justify-around text-right">
          <p>1 stop</p> <p>2h 45m in HNL</p>
        </div>
        <div className="flex h-24 flex-col justify-around text-right">
          <p>Rs. 5894</p> <p>single trip</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default FlightInfo;
