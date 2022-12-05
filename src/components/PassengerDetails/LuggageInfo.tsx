import { useState } from "react";

function LuggageInfo() {
  const [bagCount, setBagCount] = useState(0);
  return (
    <section className="-mt-14 flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Bag Information</h2>
          <p className="max-w-prose">
            Each passenger is allowed one free carry-on bag and one personal
            item. First checked bag for each passenger is also free. Second bag
            check fees are waived for loyalty program members. See the
            <a href=""> full bag policy.</a>
          </p>
        </div>

        <div className="jsutify-center mt-10 flex flex-row items-center gap-10">
          <div>
            <h3 className="font-semibold">Passenger 1</h3>
            <p>Sophia Knowles</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-semibold">Checked Bags</h3>
            <div className="flex flex-row gap-4">
              <button
                onClick={() => {
                  bagCount > 0 ? setBagCount(bagCount - 1) : "";
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
              <p>{bagCount}</p>

              <button
                onClick={() => {
                  setBagCount(bagCount + 1);
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
          </div>
        </div>
      </div>
      <div>
        <img src="/images/Luggage.png" alt="" />
      </div>
    </section>
  );
}

export default LuggageInfo;
