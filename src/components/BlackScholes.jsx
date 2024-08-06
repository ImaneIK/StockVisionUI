import React from 'react';

const BlackScholes = ({strike_price, call, call_decision, put, put_decision}) => {
 
return(
  <div className="w-full xl:w-2/3 ">
           
            <div className=" text-center m-4 h-full xl:h-[95vh] flex flex-col gap-4 px-4 py-8  ">
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
)

}
  export default BlackScholes;



