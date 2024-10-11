import React, { useState } from 'react';

const BinomialandTrinomial = ({binomial_plot, trinomial_plot}) => {
  const [activeCarousel, setActiveCarousel] = useState(1);


  const downloadBase64File = (base64Data, filename) => {
    const link = document.createElement('a');
    link.href = `data:image/png;base64,${base64Data}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

return(

<div className="h-[100vh]  relative">
      <div className="w-[100vh] mx-auto" style={{ scrollSnapType: 'x mandatory' }}>
        {/* First Carousel Slide */}
        <div className="">
          <input
            className="sr-only peer"
            type="radio"
            name="carousel"
            id="carousel-1"
            checked={activeCarousel === 1}
            onChange={() => setActiveCarousel(1)}
          />
          <div
            className={`w-[100vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 ${
              activeCarousel === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              className="rounded-t-lg "
              src={`data:image/png;base64,${binomial_plot}`}
              alt=""
            />
            <div className="p-4 px-8 flex justify-between items-center gap-6">
              <div>
              <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl tracking-tight">
              Cox-Ross-Rubinstein Binomial Model
              </h1>
              <p className="hover:cursor-pointer  py-3 text-gray-600 text-xs leading-4">
              This plot represents the pricing dynamics of options over multiple time steps, showcasing how the underlying asset evolves through discrete intervals using the binomial tree method.
              </p>
              </div>
              
              <button
                    className=" bg-gray-100 text-white p-2 rounded"
                    onClick={() => downloadBase64File(binomial_plot, `${'binomail_tree'}.png`)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-gray-400 h-[3vh] w-[3vh]' viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                </button>
            </div>
            <div className="absolute top-1 w-full flex z-20">
              <label
                onClick={() => setActiveCarousel(2)}
                className="inline-block text-indigo-600 cursor-pointer -translate-x-3 bg-white rounded-full shadow-md active:translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <label
                onClick={() => setActiveCarousel(2)}
                className="inline-block text-indigo-600 cursor-pointer translate-x-1 bg-white rounded-full shadow-md active:translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>


        {/* SECOND */}
        <div className="">
          <input
            className="sr-only peer"
            type="radio"
            name="carousel"
            id="carousel-1"
            checked={activeCarousel === 2}
            onChange={() => setActiveCarousel(2)}
          />
          <div
            className={`w-[100vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 ${
              activeCarousel === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              className="rounded-t-lg "
              src={`data:image/png;base64,${trinomial_plot}`}
              alt=""
            />
            <div className="p-4 px-8 flex justify-between items-center gap-6">
              <div>
              <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl tracking-tight">
              Trinomial Tree Model
              </h1>
              <p className="hover:cursor-pointer  py-3 text-gray-600 text-xs leading-4">
              This chart illustrates the evolution of an option's price over time, considering three possible price movements at each step—up, down, or stable—providing a more granular view compared to the binomial model.
              </p>
              </div>
              
              <button
                    className=" bg-gray-100 text-white p-2 rounded"
                    onClick={() => downloadBase64File(trinomial_plot, `${'trinomial_tree'}.png`)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-gray-400 h-[3vh] w-[3vh]' viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                </button>
            </div>
            <div className="absolute top-1 w-full flex  z-20">
              <label
                onClick={() => setActiveCarousel(1)}
                className="inline-block text-indigo-600 cursor-pointer -translate-x-3 bg-white rounded-full shadow-md active:translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <label
                onClick={() => setActiveCarousel(1)}
                className="inline-block text-indigo-600 cursor-pointer translate-x-1 bg-white rounded-full shadow-md active:translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>

       
      </div>
    </div>
      
      
)

}
  export default BinomialandTrinomial;



