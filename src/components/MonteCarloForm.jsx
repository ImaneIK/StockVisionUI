import React from 'react';

const MonteCarloForm = ({
  handleMonteCarloSubmit,
  ticker,
  setTicker,
  setStartDate,
  start_date,
  end_date,
  setEndDate,
}) => {
  return (
    <div className='xl:h-[90vh] w-full py-8 xl:py-2'>
      {/* leading text */}
      <div className="px-4 my-2">
        <p className="mb-2 font-bold md:leading-snug text-[5vh] ">
             Monte Carlo <br /> Simulation Form
        </p>
        <p className=" leading-relaxed text-gray-200 text-[2vh] ">
          Enter the stock symbol (e.g., AAPL for Apple, GOOGL for Alphabet) for
          which you want to perform the Monte Carlo simulation
        </p>
      </div>

      {/* the actual monte carlo form */}
      <form className="px-4 text-[2.5vh]" onSubmit={handleMonteCarloSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-1 w-full py-2 gap-2">
          {/* Ticker */}
          <div className="w-full ">
            <label className="font-semibold text-white-600 py-2">
              Ticker <abbr title="required">*</abbr>
            </label>
            <input
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
              placeholder="Ticker"
              className="block xl:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
              name="ticker"
              id="ticker"
              required
            />
          </div>
            {/* start date */}
          <div className=" w-full ">
            <label className="font-semibold text-white-600 py-2">
              start date
            </label>
            <input
              value={start_date}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="start date"
              className="block xl:h-[7vh] fill-white w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
              type="date"
              name="start_date"
              id="start_date"
              required
            />
          </div>
          {/* end date */}
          <div className=" w-full ">
            <label className="font-semibold text-white-600 py-2">end date</label>
            <input
              value={end_date}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="end date"
              className="block xl:h-[7vh] fill-white w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
              type="date"
              name="end_date"
              id="end_date"
              required
            />
          </div>

          {/* submit button */}
        <div className="mt-6 text-right md:space-x-3 md:block flex items-center">
          {/* <button
            type="reset"
            className="mb-2 md:mb-0 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white bg-transparent rounded-md hover:shadow-lg hover:bg-blue-100 "
          >
            Reset
          </button> */}

          <button
            type="submit"
            className=" w-full xl:h-[7vh] md:mb-0 bg-white px-5 py-2  shadow-sm font-medium tracking-wider hover:text-white text-blue-600 rounded-md hover:shadow-lg hover:bg-blue-500"
          >
            {" "}
            Start simulation{" "}
          </button>
        </div>
       
          
        </div>
        
        
      </form>
    </div>
  );
};

export default MonteCarloForm;
