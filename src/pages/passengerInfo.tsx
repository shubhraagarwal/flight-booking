import FlightsCart from "@/components/FlightsCart";
import Navbar from "@/components/Navbar";
import LuggageInfo from "@/components/PassengerDetails/LuggageInfo";
import PassengerInfoForm from "@/components/PassengerDetails/PassengerInfoForm";
import { useLocalStorage } from "@mantine/hooks";
import Footer from "../components/Footer";

function PassengerInfo() {
  const [adultCount, setAdultCount] = useLocalStorage({
    key: "adultCount",
    defaultValue: 1,
  });
  const [childrenCount, setChildrenCount] = useLocalStorage({
    key: "childrenCount",
    defaultValue: 0,
  });

  return (
    <main className="">
      <Navbar />

      <main className="mx-10 my-16 sm:mx-6 sm:my-0">
        <section className="flex flex-row   items-center justify-between lg:flex-col lg:items-center lg:justify-center lg:gap-4">
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 sm:items-center sm:justify-center">
              <h1 className="font-semibold text-[#007DFE]">
                Passenger information
              </h1>
              <p className="max-w-prose sm:text-left">
                Enter the required information for each traveler and be sure
                that it exactly matches the government-issued ID presented at
                the airport.
              </p>
            </div>
            <div className="">
              {[...new Array(adultCount)].map((a, i) => (
                <PassengerInfoForm
                  adultCount={adultCount}
                  key={a}
                  index={i + 1}
                />
              ))}
            </div>
          </section>
          <section className="">
            <FlightsCart />
            <div className="mr-2 flex flex-col items-end justify-end gap-4">
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

        <section className="lg:hidden">
          <LuggageInfo />
        </section>

        <div className="flex flex-row gap-4 lg:hidden">
          <button className="rounded-md border-2 p-4 text-black">
            Save and close
          </button>
          <button className="rounded-md bg-[#007CFF] p-4 text-white">
            Select seats
          </button>
        </div>
      </main>
      <footer className="mt-10">
        <Footer />
      </footer>
    </main>
  );
}

export default PassengerInfo;
