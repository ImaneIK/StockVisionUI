import React from 'react';

function Loader() {

  return (

<div className="h-[100vh] w-2/3 px-4 flex flex-col gap-1 justify-center ">
            <div className=" h-1/2 grid grid-cols-2 gap-2  sm:py-4 ">
              <div className="rounded-md h-full w-full flex flex-col gap-3 p-8 bg-blue-400 animate-pulse">
                <div className="h-[12vh] w-[12vh] bg-blue-300 rounded-full"></div>
                <div className="h-[2vh] w-full bg-blue-300 "></div>
                <div className="h-[2vh] w-[20vw] bg-blue-300 "></div>
                <div className="h-[2vh] w-[15vw] bg-blue-300 "></div>
              </div>

              <div className=" h-full grid grid-cols-2 gap-2 justify-center  animate-pulse">
                <div className=" bg-gray-300 animate-pulse rounded-xl "></div>
                <div className=" bg-gray-300 animate-pulse rounded-xl "></div>
                <div className="bg-gray-300 animate-pulse rounded-xl "></div>
                <div className=" bg-gray-300 animate-pulse rounded-xl "></div>
              </div>
            </div>

            <div className="mb-6 h-full  flex justify-center items-center bg-gray-200 animate-pulse sm:rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[20vh] w-[20vw] fill-gray-300"
                viewBox="0 0 512 512"
              >
                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
              </svg>
            </div>
          </div>

  );

}

export default Loader;