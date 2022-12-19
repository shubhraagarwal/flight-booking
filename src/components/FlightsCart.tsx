function FlightsCart() {
  return (
    <div className="flex w-[25vw] flex-col justify-center gap-4 lg:w-screen lg:px-2">
      <div className="flex flex-row items-center justify-around rounded-lg border-2 py-4 lg:px-8 lg:gap-4">
        <div>
          <img src="/images/flightLogo.png" alt="" />
          <p>FIG4312</p>
        </div>
        <div>
          <p>16h 23M</p>
          <p>7:00AM - 4:15PM</p>
          <p>2h 45m in HNL</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around rounded-lg border-2 py-4 lg:px-8 lg:gap-4">
        <div>
          <img src="/images/flightLogo.png" alt="" />
          <p>FIG4312</p>
        </div>
        <div>
          <p>16h 23M</p>
          <p>7:00AM - 4:15PM</p>
          <p>2h 45m in HNL</p>
        </div>
      </div>
    </div>
  );
}

export default FlightsCart;
