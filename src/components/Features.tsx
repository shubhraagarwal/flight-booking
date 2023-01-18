/* eslint-disable @next/next/no-img-element */
function Features() {
  return (
    <section className="flex w-screen flex-row justify-around md:mt-8 md:flex-col md:items-center md:gap-8">
      <div className="flex h-screen flex-col justify-center gap-4 md:h-auto">
        <div className="flex flex-row justify-evenly gap-4 md:flex-col">
          <div className="flex w-fit flex-col justify-center p-8 leading-relaxed shadow-xl">
            <img
              src="/images/featuresCardCar.png"
              width={44}
              height={44}
              alt=""
              className="mb-4"
            ></img>

            <h3 className="mb-4 text-xl font-bold">
              Thousands of happy travellers
            </h3>
            <div className="max-w-[30ch]">
              <p>
                Join the other customers in the best flight experience ever.
              </p>
            </div>
          </div>

          <div className="flex w-fit flex-col justify-center p-8 leading-relaxed shadow-xl">
            <img
              src="/images/featuresCardCard.png"
              width={44}
              height={44}
              alt=""
              className="mb-4"
            ></img>

            <h3 className="mb-4 text-xl font-bold">Refundable Bookings</h3>
            <div className="max-w-[30ch]">
              <p>
                Apply for a refund if you cancel due to an unforeseen event.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-evenly gap-4 md:flex-col">
          <div className="flex w-fit flex-col justify-center p-8 leading-relaxed shadow-xl">
            <img
              src="/images/featuresCardVolcano.png"
              width={44}
              height={44}
              alt=""
              className="mb-4"
            ></img>

            <h3 className="mb-4 text-xl font-bold">Lost Baggage Protection</h3>
            <div className="max-w-[30ch]">
              <p>
                Give yourself the peace of mind that your checked in bag will be
                protected for the trip.
              </p>
            </div>
          </div>

          <div className="flex w-fit flex-col justify-center p-8 leading-relaxed shadow-xl">
            <img
              src="/images/featuresCardGuide.png"
              width={44}
              height={44}
              alt=""
              className="mb-4"
            ></img>

            <h3 className="mb-4 text-xl font-bold">24/7 Customer Support</h3>
            <div className="max-w-[30ch]">
              <p>Happy to help our customers with queries round the clock.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-evenly md:p-4">
        <img src="./images/girlFlightSVG.png" alt="" />
      </div>
    </section>
  );
}

export default Features;
