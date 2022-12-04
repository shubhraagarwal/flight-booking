import FlightsCart from "@/components/FlightsCart";
import Navbar from "@/components/Navbar";
import PaymentMethods from "@/components/PaymentGateway/PaymentMethods";
import AccountCreation from "@/components/PaymentGateway/AccountCreation";
import Footer from "@/components/Footer";

function payment() {
  return (
    <>
      <Navbar />

      <main className="mx-10">
        <section className="flex flex-row items-center justify-between">
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-[#007DFE]">Payment method</h1>
              <p className="max-w-prose">
                Select a payment method below. Tripma processes your payment
                securely with end-to-end encryption.
              </p>
            </div>
            <div>
              <PaymentMethods/>
            </div>
          </section>
          <section>
            <FlightsCart />
            <div className="flex flex-col items-end justify-end gap-4">
              <div className="mt-2 flex flex-col text-right">
                <p>Subtotal: $503</p>
                <p>Taxes and Fees $121</p>
                <p>Total $624</p>
              </div>
              <div>
                <button className="rounded-md bg-[#007CFF] p-4 text-white">
                  Confirm & Pay
                </button>
              </div>
            </div>
          </section>
        </section>

        <section className="mt-10">
          <AccountCreation/>
        </section>

        <footer className="-ml-10 mt-20">
          <Footer/>
        </footer>
      </main>
    </>
  );
}

export default payment;
