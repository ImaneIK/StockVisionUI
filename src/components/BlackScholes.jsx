import React, { useState } from "react";

const BlackScholes = ({strike_price, call, call_decision, put, put_decision,crr, callplotData, putplotData}) => {
 

// State to manage selected option
const [selectedOption, setSelectedOption] = useState('call'); // Default to 'call'

// Function to handle radio button change
const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};

return(
  <div className="w-full xl:w-2/3 animate-fade-in">
           { crr ? ( 
           <div className='animate-fade-in flex flex-col gap-6 justify-between'>

<div className="text-center grid grid-cols-3 gap-4 px-4 py-2 z-60">
      <div className="bg-slate-100 rounded-2xl p-4 w-full ">
        <div className="rounded-2xl bg-white p-4">
          <div className="flex items-center">
            <span className="relative rounded-xl bg-purple-200 p-4">
              <svg
                width="40"
                fill="currentColor"
                height="40"
                className="absolute top-1/2 left-1/2 h-4 -translate-x-1/2 -translate-y-1/2 transform text-purple-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
              </svg>
            </span>
            <p className="text-md ml-2 text-black">Strike price</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="my-4 text-left text-4xl font-bold text-gray-700">
              {strike_price}
              <span className="text-sm"> $ </span>
            </p>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <div className="relative text-xs">
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  value="call"
                  checked={selectedOption === 'call'}
                  onChange={handleOptionChange}
                />
                <span className="peer-checked:border-blue-500 absolute right-1 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-4 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-blue-400 peer-checked:bg-blue-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2 pr-10"
                  htmlFor="radio_1"
                >
                  <div>
                    <span className="mt-2 font-semibold">Call</span>
                  </div>
                </label>
              </div>
              <div className="relative text-xs">
                <input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  value="put"
                  checked={selectedOption === 'put'}
                  onChange={handleOptionChange}
                />
                <span className="peer-checked:border-blue-500 absolute right-1 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-4 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-blue-400 peer-checked:bg-blue-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2 pr-10"
                  htmlFor="radio_2"
                >
                  <div>
                    <span className="mt-2 font-semibold">Put</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full rounded-lg bg-blue-600 py-2 text-white shadow md:py-8">
        <div className="absolute top-3 left-3 text-[2vh] inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="fill-blue-600 mr-2"
            stroke="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
          Call
        </div>
        <lord-icon
          src="https://cdn.lordicon.com/rmkahxvq.json"
          trigger="loop"
          delay="1000"
          colors="primary:#ffffff"
          style={{ width: '5vw', height: '5vw' }}
        ></lord-icon>
        <div className="mb-1 text-[5vh] font-semibold">{call}$</div>
        <div className="mb-1 text-[2vh] text-gray-100 px-4">{call_decision}</div>
      </div>

      <div className="relative w-full rounded-lg bg-blue-600 py-2 text-white shadow md:py-8">
        <div className="absolute top-3 left-3 text-[2vh] inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="fill-blue-600 mr-2"
            stroke="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
          Put
        </div>
        <lord-icon
          src="https://cdn.lordicon.com/dwoxxgps.json"
          trigger="loop"
          delay="1000"
          colors="primary:#ffffff"
          style={{ width: '5vw', height: '5vw' }}
        ></lord-icon>
        <div className="mb-1 text-[5vh] font-semibold">{put}$</div>
        <div className="mb-1 text-[2vh] text-gray-100 px-4">{put_decision}</div>
      </div>

      
    </div>
{  callplotData && putplotData ? (
    <div className=" w-full  mx-auto">
      
        {/* Conditional rendering based on selected option */}
        {selectedOption === 'call' && callplotData && (
          <div className="mx-auto w-[100vh] ">
           
           <img  className="h-[60vh] w-[100vw] -mt-8" src={`data:image/png;base64,${callplotData}`} alt="Call Option Plot" />
           </div>
        ) }


        {selectedOption === 'put' && putplotData && (
          <div className="mx-auto w-[100vh]">
            
            <img className="h-[60vh] w-[100vw] -mt-8" src={`data:image/png;base64,${putplotData}`} alt="Call Option Plot" />

          </div>
        )}
      </div> ) : (
            
            <div class="mx-auto flex w-[80vh] flex-col items-center rounded-3xl border-4 bg-white px-6 py-8 text-center">
              <div class="mb-6 text-5xl fill-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"  viewBox="0 0 512 512"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>
                
               
              </div>
              <p class="mb-2 text-xl font-medium text-gray-600">Your Plots are not generated yet</p>
              <p class="text-gray-500">Make sure the CRR button is checked and try again.</p>
            </div>
            
        
        
        ) }

           </div>
          
           ) : (  
            // if crr is false
          <div>
             <div className=" text-center m-4 h-full xl:h-[95vh] flex flex-col gap-4 px-4 py-8  animate-fade-in">
              <div className="h-full xl:h-[30vh] p-6 bg-gray-100 flex flex-col justify-center rounded-lg">
                <p className="text-[5vh] font-medium ">Strike price: </p>
                <p className="text-[7vh] font-extrabold ">{strike_price}$</p>
              </div>

              <div className=" flex flex-col md:flex-row justify-between gap-4">
                <div class="relative mb-6 w-full flex-grow rounded-lg bg-blue-600 py-2 text-white shadow md:w-1/3 md:py-8">
                  
                  <div class="absolute top-3 left-3 text-[2vh] inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      class=" fill-blue-600 mr-2"
                      stroke="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                    Call
                  </div>
                  
                  <lord-icon
                    src="https://cdn.lordicon.com/rmkahxvq.json"
                    trigger="loop"
                    delay="1000"
                    colors="primary:#ffffff"
                    style={{ width: "10vw", height: "10vw" }}
                  ></lord-icon>

                  <div class="mb-1 text-[8vh] font-semibold">{call}$</div>
                  <div class="mb-1 text-[4vh] text-gray-100 px-4">{call_decision}</div>
                </div>

                <div class="relative mb-6 w-full flex-grow rounded-lg bg-blue-600 py-2 text-white shadow md:w-1/3 md:py-8">
                  <div class="absolute top-3 left-3 text-[2vh] inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      class=" fill-blue-600 mr-2"
                      stroke="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                    Put
                  </div>

                  <lord-icon
                    src="https://cdn.lordicon.com/dwoxxgps.json"
                    trigger="loop"
                    delay="1000"
                    colors="primary:#ffffff"
                    style={{ width: "10vw", height: "10vw" }}
                  ></lord-icon>

                  <div class="mb-1 text-[8vh] font-semibold">{put}$</div>
                  <div class="mb-1 text-[4vh] text-gray-100 px-4">{put_decision}</div>
                </div>
              </div>
            </div>
          </div>
          )}
          </div>
)}
  export default BlackScholes;