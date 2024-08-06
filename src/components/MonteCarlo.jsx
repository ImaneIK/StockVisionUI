import React, {useState} from 'react';

const MonteCarlo = (
        {ticker, days, 
        probabilityOfBreakeven, returnPercentage, expectedValue,
        monteCarloResult, path1, path2}
        ) => {


  const [selectedRadio, setSelectedRadio] = useState("radio1");

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <div className="w-full h-full xl:h-screen  xl:w-2/3 text-slate-600 m-auto p-2 ">
      
           <div>
            <div className=" h-full xl:h-[35vh] w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-1">
              <div className="  flex flex-col justify-between 2xl:justify-center 2xl:gap-4 px-4 py-4 rounded-xl  bg-blue-700">
                <div className="flex">
                 
                 
                  <div className=" flex h-[8vh] w-[8vh] items-center justify-center rounded-2xl bg-blue-100 text-blue-400 sm:mr-3 sm:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-[5vh] w-[5vh]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>

                  <div className="p-4">
                    <p className="mb-1 text-[5vh] font-black text-white">
                      Ticker: {ticker}
                    </p>
                    <p className=" text-[2.5vh] text-blue-100">Option: European</p>
                    <p className=" text-[2.5vh] text-blue-100">
                      Monte Carlo simulation
                    </p>
                  </div>
                </div>

                  {/* choose plot */}
                <div className="flex  w-full flex-col sm:flex-row  items-center gap-4 ">
                  <div class="relative flex w-full  xl:h-[7vh]  items-center justify-center rounded-xl bg-blue-50 px-4 py-3 font-medium text-blue-700">
                    <input
                      className="peer hidden"
                      type="radio"
                      name="radio"
                      id="radio1"
                      checked={selectedRadio === "radio1"}
                      onChange={handleRadioChange}
                    />
                    <label
                      className={`${
                        selectedRadio === "radio1"
                          ? "border-blue-400 bg-black-200"
                          : "border-transparent bg-blue-50"
                      } absolute top-0 h-full w-full cursor-pointer rounded-xl border`}
                      htmlFor="radio1"
                      for="radio1"
                    >
                      {" "}
                    </label>
                    <div class="peer-checked:border-transparent peer-checked:bg-blue-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-blue-300 bg-blue-200 ring-blue-400 ring-offset-2"></div>
                    <span class="pointer-events-none z-10 text-[2.5vh]">Histogram</span>
                  </div>
                  <div class="relative flex w-full xl:h-[7vh] items-center justify-center rounded-xl bg-blue-50 px-4 py-3 font-medium text-blue-700">
                    <input
                      class="peer hidden"
                      type="radio"
                      name="radio"
                      id="radio3"
                      checked={selectedRadio === "radio3"}
                        onChange={handleRadioChange}
                    />
                    <label
                      className={`${
                        selectedRadio === "radio3"
                          ? "border-blue-400 bg-blue-200"
                          : "border-transparent bg-blue-50"
                      } absolute top-0 h-full w-full cursor-pointer rounded-xl border`}
                      htmlFor="radio3"
                      for="radio3"
                    >
                      {" "}
                    </label>
                    <div class="peer-checked:border-transparent peer-checked:bg-blue-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-blue-300 bg-blue-200 ring-blue-400 ring-offset-2"></div>
                    <span class="pointer-events-none z-10 text-[2.5vh]">price/day</span>
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-4 justify-between text-center">
                <div className="bg-white overflow-hidden shadow sm:rounded-lg py-3 flex flex-col justify-center ">
                  <dl>
                    <dt className="text-[2vh] font-medium text-black ">Days</dt>
                    <dd className="mt-1 text-[5vh]  font-semibold text-blue-600">
                      {days}
                    </dd>
                  </dl>
                </div>

                <div className="bg-white overflow-hidden shadow sm:rounded-lg px-4 py-3 flex flex-col justify-center">
                  <dl>
                    <dt className="text-[2vh] font-medium text-black ">
                      Probability of Breakeven
                    </dt>
                    <dd className="mt-1 text-[5vh] font-semibold text-blue-600">
                      {probabilityOfBreakeven}%
                    </dd>
                  </dl>
                </div>

                <div className="bg-white overflow-hidden shadow sm:rounded-lg px-4 py-3 flex flex-col justify-center">
                  <dl>
                    <dt className="text-[2vh] font-medium text-black">
                      Return percentage
                    </dt>
                    <dd className="mt-1 text-[5vh] font-semibold text-blue-600">
                      {returnPercentage}%
                    </dd>
                  </dl>
                </div>

                <div className="bg-white overflow-hidden shadow sm:rounded-lg px-4 py-3 flex flex-col justify-center">
                  <dl>
                    <dt className="text-[2vh] font-medium text-black">
                      Expected value
                    </dt>
                    <dd className="mt-1 text-[5vh] font-semibold text-blue-600">
                      {expectedValue}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className={`  ${
            selectedRadio === "radio1"
              ? "block overflow-auto"
              : "hidden"
          }`}>
              <div
                className={`${
                  monteCarloResult !== "" ? "text-green-500" : "text-red-500"
                }`}
              >
                {path1 && (
                  <img
                    src={path1}
                    alt="Generated Graph"
                    className=" h-full md:h-[40vh] md:w-[100vw] xl:h-[60vh] xl:w-full"
                  />
                )}
              </div>
            </div>

            <div className={`${
            selectedRadio === "radio3"
              ? "block"
              : "hidden"
          }`}>
              <div
                className={`${
                  monteCarloResult !== "" ? "text-green-500" : "text-red-500"
                }`}
              >
                {path2 && (
                  <img
                    src={path2}
                    alt="Generated Graph"
                    className="h-full xl:h-[60vh] w-full"
                  />
                )}
              </div>
            </div>
            </div>
     
          </div>

  );

}

export default MonteCarlo;
