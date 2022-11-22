import Image from "next/image";

function Features() {
  return (
    <section className="h-screen w-[98vw]">
      <div className="w-6/12 h-screen items-center justify-center">
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col justify-center p-8 h-72 w-72 shadow-lg leading-relaxed">
            <Image
              src="/images/featuresCardCar.png"
              width={44}
              height={44}
              alt=""
              className="mb-4"
            ></Image>

            <h3 className="text-xl font-bold mb-4">Lorem Ipsum</h3>
            <div className="max-w-[30ch]">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 h-72 w-72 shadow-lg leading-relaxed">
            <Image
              src="/images/featuresCardVolcano.png"
              width={44}
              height={44}
              alt=""
              className="mb-4"
            ></Image>

            <h3 className="text-xl font-bold mb-4">Lorem Ipsum</h3>
            <div className="max-w-[30ch]">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col justify-center p-8 h-72 w-72 shadow-lg leading-relaxed">
            <Image
              src="/images/featuresCardCard.png"
              width={44}
              height={44}
              alt=""
              className="mb-4"
            ></Image>

            <h3 className="text-xl font-bold mb-4">Lorem Ipsum</h3>
            <div className="max-w-[30ch]">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 h-72 w-72 shadow-lg leading-relaxed">
            <Image
              src="/images/featuresCardGuide.png"
              width={44}
              height={44}
              alt=""
              className="mb-4"
            ></Image>

            <h3 className="text-xl font-bold mb-4">Lorem Ipsum</h3>
            <div className="max-w-[30ch]">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
