import React from "react";
import Image from "next/image";
const aboutImg1 =
  "https://content.app-sources.com/s/4918412886422484/thumbnails/640x480/Images/A51I1248-6028879.jpg";
const aboutImg2 =
  "https://content.app-sources.com/s/4918412886422484/thumbnails/640x480/Images/A51I1241-6028971.jpg";
const aboutImg3 =
  "https://content.app-sources.com/s/4918412886422484/thumbnails/640x480/Images/A51I1334-5101601.jpg";

const About = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              VITAMIN C
            </div>
            <h1 className="h2 mb-4 capitalize">
              VITAMIN C A miracle of nature!
            </h1>
            <p className="text-xl text-gray-400">
              One of the most important vitamins in our existence is Vitamin C,
              and unfortunately, it is not naturally produced by the human body.
            </p>
          </div>

          <div className="about_main flex justify-center lg:justify-between gap-10 lg:gap-30 xl:gap-28 flex-wrap lg:flex-nowrap">
            <div className="left flex flex-col gap-2">
              <div className="flex gap-2">
                <Image
                  className=" grid-cols-6 inline-block max-w-[210px] sm:max-w-full mx-auto md:max-w-none h-auto w-auto"
                  src={aboutImg1}
                  width={237}
                  height={95}
                  alt="Features 01"
                />
                <Image
                  className="grid-cols-6 inline-block max-w-[210px] sm:max-w-full mx-auto md:max-w-none h-auto w-auto"
                  src={aboutImg2}
                  width={237}
                  height={105}
                  alt="Features 01"
                />
              </div>
              <Image
                className="grid-cols-12 inline-block max-w-full mx-auto h-auto"
                src={aboutImg3}
                width={700}
                height={555}
                alt="Features 01"
              />
            </div>
            <div className="right grid-cols-12">
              <h2 className="capitalize font-semibold text-3xl mb-3">
                Some thing about us
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                <span className="mb-3 inline-block">
                  We, the people in the picture, regardless of our age, after
                  discovering the 100% natural and vegan liquid Vitamin C, we
                  managed to easily overcome all the issues related to
                  coronavirus and other conditions caused by sudden temperature
                  changes.
                </span>{" "}
                <span className="mb-3 inline-block">
                  From our own experience, we can share with you that we have
                  gained strong health, reduced stress, fatigue, and
                  nervousness.
                </span>{" "}
                We warmly recommend that you take the Vitamin C deficiency test
                and carefully read the information about the 100% natural and
                vegan liquid Vitamin C.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="m-auto lg:text-left text-center"
              >
                <a
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 "
                  href="#0"
                >
                  Take the test & Receive my bonuses!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
