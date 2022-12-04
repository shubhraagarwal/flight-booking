import FlightSummary from "@/components/ConfirmationPage/FlightSummary";
import PriceBreakdown from "@/components/ConfirmationPage/PriceBreakdown";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function confirmation() {
  return (
    <main>
      <Navbar />
      <section className="ml-10 mt-10">
        <h2 className="text-[#027EFE] text-2xl font-semibold mb-4">Congratulation, Sophia!</h2>

        <h3 className="font-semibold mb-2">Confirmation number: #381029404387</h3>
        <p className="max-w-prose">
          Thank you for booking your travel with Tripma! Below is a summary of
          your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your
          booking confirmation to your email address. You can also find this
          page again in My trips.
        </p>
        <section>
          <FlightSummary />
        </section>
        <section>
          <PriceBreakdown />
        </section>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default confirmation;
