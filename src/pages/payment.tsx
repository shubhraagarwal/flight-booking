import FlightsCart from "@/components/FlightsCart";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51MLrR4SFl9S1X9H1UIL3hvII1jb4nRmNGn6M6i1vHhFChX1xtjImkZt7jp98CXL9jpKezSl0HytepVv4OoCZLe6q00oJcKpgbn"
);

const key = "sk_test_51MLrR4SFl9S1X9H1mH4o4ZYPMoDiJqTz90Z4SpJ6eVMJv3LUMRGQRtMVPXyDZIHk4QpPdciWlvJRkTbvLOcvAN8v00fU1uPrfp"

function payment() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: key,
  };

  return (
    <>
      <Navbar />
      <Elements stripe={stripePromise} options={options}>
        <main className="mx-10">
          <section className="flex flex-row items-center justify-between sm:hidden">
            <section className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-[#007DFE]">Payment method</h1>
                <p className="max-w-prose">
                  Select a payment method below. Tripma processes your payment
                  securely with end-to-end encryption.
                </p>
              </div>

              <div>
                <input type="text" name="" id="" />
              </div>
            </section>
            <section className="">
              <FlightsCart />
              <div className="flex flex-col items-end justify-end gap-4">
                <div className="mt-2 flex flex-col text-right">
                  <p>Subtotal: $503</p>
                  <p>Taxes and Fees $121</p>
                  <p>Total $624</p>
                </div>
                <div>
                  <PaymentElement/>
                  <button className="rounded-md bg-[#007CFF] p-4 text-white">
                    Confirm & Pay
                  </button>
                </div>
              </div>
            </section>
          </section>
          <footer className="-ml-10 mt-20">
            <Footer />
          </footer>
        </main>
      </Elements>
    </>
  );
}

export default payment;
