import FlightsCart from "@/components/FlightsCart";
import Navbar from "@/components/Navbar";
import LuggageInfo from "@/components/PassengerDetails/LuggageInfo";
import PassengerInfoForm from "@/components/PassengerDetails/PassengerInfoForm";
import Footer from "../components/Footer";

function passengerInfo() {
  return (
    <>
      <Navbar />

      <main className="mx-10">
        <section className="flex flex-row items-center justify-between">
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold">Passenger information</h1>
              <p className="max-w-prose">
                Enter the required information for each traveler and be sure
                that it exactly matches the government-issued ID presented at
                the airport.
              </p>
            </div>
            <div>
              <PassengerInfoForm />
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
                  Select seats
                </button>
              </div>
            </div>
          </section>
        </section>

        <section>
          <LuggageInfo />
        </section>

        <div className="mb-10 flex flex-row gap-4">
          <button className="rounded-md border-2 p-4 text-black">
            Save and close
          </button>
          <button className="rounded-md bg-[#007CFF] p-4 text-white">
            Select seats
          </button>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default passengerInfo;
