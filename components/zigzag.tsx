import Image from "next/image";

const FeatImage01 =
  "https://content.app-sources.com/s/33552877706908186/thumbnails/640x480/Images/Vita_C_-_ENG_-_PNG4-9661581.png";
const FeatImage02 =
  "https://content.app-sources.com/s/21823252168259383/thumbnails/640x480/Images/masina-0977068.jpg";
const FeatImage03 =
  "https://content.app-sources.com/s/33552877706908186/thumbnails/640x480/Images/image_2023-03-24_150557629-9663156.png";

const FeatImage04 =
  "https://content.app-sources.com/s/33552877706908186/thumbnails/640x480/Images/Vita_C_-_ENG_-_PNG15-9665962.jpg";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              DISCOVER
            </div>
            <h1 className="h2 mb-4 capitalize">
              Discover your bonuses with us!
            </h1>
            <p className="text-xl text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              blanditiis quod eius cupiditate fugit, molestias reprehenderit?
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Exceptional Bonus!
                  </div>
                  <h3 className="h3 mb-3 capitalize">
                    How to easily start a top-notch online business.
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    You will get FREE information on the easiest and most
                    accessible method to elegantly manage your online business
                    that can triple your initial investment and support your
                    future projects related to your desires for a decent life.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <p>
                        Bonus Value:{" "}
                        <span className="text-purple-600 font-bold">600 €</span>
                      </p>
                    </li>
                    <li className="flex items-center mb-2">
                      <span>
                        Your Price:{" "}
                        <span className="text-purple-600 font-bold">0 €</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Discover for FREE
                  </div>
                  <h3 className="h3 mb-3 capitalize">
                    How to access a new car through international leasing!
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    <span className="text-slate-500 font-bold">
                      BEWARE, THE INFORMATION IS REAL!!!
                    </span>{" "}
                    <br /> You will learn how to become a partner of the{" "}
                    <span className="text-slate-500 font-bold">OZ Team</span>,
                    under whose guidance you will have access to the car
                    program, to obtain a new car through international leasing
                    with zero costs, within a maximum of 6 months!
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <p>
                        Bonus Value:{" "}
                        <span className="text-purple-600 font-bold">
                          Up to 50.000 €
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mb-2">
                      <span>
                        Your Price:{" "}
                        <span className="text-purple-600 font-bold">0 €</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Business Bonus.
                  </div>
                  <h3 className="h3 mb-3 capitalize">
                    A selection of 5 audio books from the '100 laws of success'
                    - Brian Tracy
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    You will get a series of 5 extraordinary audio books,
                    carefully selected for you, which you can listen to anytime,
                    online, in the form of audio files
                  </p>
                  <p className="text-xl text-gray-400 mb-4">
                    "To be successful, you have to find something to hold on to,
                    something that motivates you, that inspires you."
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <p>
                        Bonus Value:{" "}
                        <span className="text-purple-600 font-bold">60 €</span>
                      </p>
                    </li>
                    <li className="flex items-center mb-2">
                      <span>
                        Your Price:{" "}
                        <span className="text-purple-600 font-bold">0 €</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage04}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Additional Bonus:
                  </div>
                  <h3 className="h3 mb-3 capitalize">Surprise contest!</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    You will be directed and taught how to participate in the
                    contest where you will have the chance to win surprise
                    prizes!
                  </p>
                  <p className="text-xl text-gray-400 mb-4">
                    Everyone who enters our contest will not leave empty-handed.
                    We have surprises for everyone!
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <p>
                        Bonus Value:{" "}
                        <span className="text-purple-600 font-bold">
                          {" "}
                          400 €
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mb-2">
                      <span>
                        Your Price:{" "}
                        <span className="text-purple-600 font-bold">0 €</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="400" className="mx-4 m-auto text-center">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Take the test & Receive my bonuses!</a>
              </div>

              <div className="w-full h-[1px] bg-gray-700 mt-16"></div>

    </section>
  );
}
