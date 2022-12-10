/* eslint-disable @next/next/no-img-element */
function Features() {
  return (
    <section className="flex w-screen flex-row justify-around md:mt-8 md:gap-8 md:flex-col md:items-center">
      <div className="flex h-screen gap-4 flex-col justify-center md:h-auto">
        <div className="flex flex-row gap-4 justify-evenly md:flex-col">
          <div className="flex flex-col justify-center p-8 leading-relaxed shadow-xl w-fit">
            <img
              src="/images/featuresCardCar.png"
              width={44}
              height={44}
              alt=""
              className="mb-4"
            ></img>

            <h3 className="mb-4 text-xl font-bold">Lorem Ipsum</h3>
            <div className="max-w-[30ch]">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 leading-relaxed shadow-xl w-fit">
            <img
              src="/images/featuresCardVolcano.png"
              width={44}
              height={44}
              alt=""
              className="mb-4"
            ></img>

            <h3 className="mb-4 text-xl font-bold">Lorem Ipsum</h3>
            <div className="max-w-[30ch]">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-evenly gap-4 md:flex-col">
          <div className="flex flex-col w-fit justify-center p-8 leading-relaxed shadow-xl">
            <img
              src="/images/featuresCardCard.png"
              width={44}
              height={44}
              alt=""
              className="mb-4"
            ></img>

            <h3 className="mb-4 text-xl font-bold">Lorem Ipsum</h3>
            <div className="max-w-[30ch]">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 leading-relaxed shadow-xl w-fit">
            <img
              src="/images/featuresCardGuide.png"
              width={44}
              height={44}
              alt=""
              className="mb-4"
            ></img>

            <h3 className="mb-4 text-xl font-bold">Lorem Ipsum</h3>
            <div className="max-w-[30ch]">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
