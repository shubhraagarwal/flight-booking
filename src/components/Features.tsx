/* eslint-disable @next/next/no-img-element */
function Features() {
  return (
    <section className="flex h-screen w-screen flex-row justify-evenly">
      <div className="flex h-screen flex-col justify-center">
        <div className="flex flex-row justify-evenly">
          <div className="flex h-72 w-72 flex-col justify-center p-8 leading-relaxed shadow-lg">
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

          <div className="flex h-72 w-72 flex-col justify-center p-8 leading-relaxed shadow-lg">
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

        <div className="flex flex-row justify-evenly">
          <div className="flex h-72 w-72 flex-col justify-center p-8 leading-relaxed shadow-lg">
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

          <div className="flex h-72 w-72 flex-col justify-center p-8 leading-relaxed shadow-lg">
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

      <div className="flex h-screen items-center justify-evenly">
        <img src="./images/girlFlightSVG.png" alt="" />
      </div>
    </section>
  );
}

export default Features;
