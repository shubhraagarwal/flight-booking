/* eslint-disable @next/next/no-img-element */

function FlightSummary() {
  return (
    <main className="flex flex-row items-center justify-between mt-10">
      <section className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Flight Summary</h3>
          <p>Departing Febuary 25th, 2021</p>
        </div>
        <div>
          <div className="flex h-20 gap-8 flex-row rounded-md items-center justify-between border-2 p-4">
            <div className="">
              <img src="/images/flightLogo.png" alt="" />
            </div>
            <div className="flex h-24 flex-col justify-around text-left">
              <p className="text-black">16h 23M</p> <p>Hawaiian Airlines</p>
            </div>
            <div className="flex h-24 flex-col justify-around text-left">
              <p className="text-black">7:00AM - 4:15PM</p> <p>Value</p>
            </div>
            <div className="flex h-24 flex-col justify-around text-right">
              <p className="text-black">1 stop</p> <p>2h 45m in HNL</p>
            </div>
            <div className="flex h-24 flex-col justify-around text-right">
              <p className="text-black">Rs. 5894</p> <p>single trip</p>
            </div>
          </div>

          <div>
            <p>Seat 9F (economy, window), 1 checked bag</p>
          </div>
        </div>


      </section>
    </main>
  );
}

export default FlightSummary;
