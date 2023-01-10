/* eslint-disable @next/next/no-img-element */

function PriceBreakdown() {
  return (
    <section className="mt-10 flex flex-row items-center justify-between mb-20">
      <div className="flex flex-col gap-2 w-12/12">
        <div className="w-12/12">
          <h3 className="mb-4 text-lg font-semibold">Price breakdown </h3>
          <div className="flex flex-row justify-between">
            <p>Departing Flight</p>
            <p>$251.50</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Arriving Flight</p>
            <p>$251.50</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Baggage fees</p>
            <p>$0</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Seat upgrade (business)</p>
            <p>$199</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Subtotal</p>
            <p>$702</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Taxes (9.4%)</p>
            <p>$66</p>
          </div>

          <div className="flex flex-row justify-between">
            <p>Amount paid</p>
            <p>$768</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="mb-2 text-lg font-semibold">Payment method</h3>
          <img src="./images/credit-card.png" alt="" />
        </div>
      </div>

      <div className="mr-10">
        <img src="./images/girlFlightSVG.png" alt="" />
      </div>
    </section>
  );
}

export default PriceBreakdown;
