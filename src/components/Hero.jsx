import React from "react";
function Hero() {
  return (
<section
            className="h-[100vh] w-2/3 flex items-center bg-white bg-contain bg-center bg-no-repeat py-16 text-center font-medium text-gray-700 md:py-auto h-full"
            style={{
              backgroundImage:
                'url("https://sandbox.elemisthemes.com/assets/img/map.png")',
            }}
          >
            <div className="mx-auto w-full py-0 text-gray-700 md:py-24">
              <div className="flex justify-center text-center">
                <div className=" w-[50vw]  text-gray-700  ">
                  <h2 className="mt-0 mb-3 font-bold tracking-normal text-gray-800 text-[7vh]">
                    Option Pricing Tool
                  </h2>
                  <p className="mt-0 mb-5 text-[2.5vh] md:px-24 lg:px-3">
                    This tool is tailored for European options, which can only
                    be exercised at the expiration date. Future options will be integrated soon.
                  </p>
                </div>
              </div>
            </div>
          </section>
  );
}

export default Hero;
