import "remixicon/fonts/remixicon.css";

function PaymentMethods() {
  return (
    <section className="mt-6">
      <div className="flex flex-col gap-4 mt-10">
        <h3 className="font-semibold text-lg">Credit card details</h3>
        <label htmlFor="" className="flex flex-row gap-2">
          <input type="radio" name="" id="" />
          Billing address is same as Passenger 1
        </label>
        <div className="flex flex-col gap-4">
          <input className="rounded-md border-2 p-2" type="text" placeholder="Name" />
          <input className="rounded-md border-2 p-2" type="text" placeholder="A/c number" name="" id="" />
          <div className="flex flex-row">
            <input className="rounded-md border-2 p-2" type="text" placeholder="Date" name="" id="" />
            <input className="rounded-md border-2 p-2" type="text" placeholder="CVV" name="" id="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentMethods;
