const BlackScholesForm = (
    {
        handleBlackScholesSubmit, ticker, setTicker, volatility,
        setVolatility, period, setPeriod, strike, setStrike, interest_rate,
        setInterestRate, start_date, setStartDate, end_date, setEndDate, divedend, setDivedend
    }
) =>
{
    return (

        <div className="px-2  md:px-8 py-4 flex flex-col justify-center  h-full text-[2vh]">
                  <h2 className="block mb-2 text-[4vh] font-bold text-center xl:text-left">
                   Black Scholes merton
                  </h2>
                  <p className="block mb-2 text-[2vh] text-center xl:text-left ">
                    Fill in the feilds below to run a simulation
                  </p>
                  {/* <a href="#" className="mb-10 block font-bold text-white-600">Have an account</a> */}
    
                  <form className="mt-4 form grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 xl:h-[50vh]" onSubmit={handleBlackScholesSubmit}>
                                        
                      {/* ticker */}
                      <div className="mb-3 w-full ">
                        <label className="font-semibold text-white-600 py-2">
                          Ticker <abbr title="required">*</abbr>
                        </label>
                        <input
                          value={ticker}
                          onChange={(e) => setTicker(e.target.value)}
                          placeholder="Ticker"
                          className="block lg:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                          name="ticker"
                          id="ticker"
                          required
                        />
                      </div>

    
                    
                    
                      {/* Volatility */}
                      <div className="mb-3 w-full ">
                        <label className="font-semibold text-white-600 py-2">
                          Volatility <abbr title="required">*</abbr>
                        </label>
                        <input
                          value={volatility}
                          onChange={(e) => setVolatility(e.target.value)}
                          placeholder="volatility"
                          className="block lg:h-[7vh]  w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                          name="volatility"
                          id="volatility"
                          required
                        />
                      </div>


                        {/* period */}
                      <div className="mb-3 w-full ">
                        <label className="font-semibold text-white-600 py-2">
                          period <abbr title="required">*</abbr>
                        </label>
                        <input
                          value={period}
                          onChange={(e) => setPeriod(e.target.value)}
                          placeholder="period"
                          className="block lg:h-[7vh]  w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                          name="period"
                          id="period"
                          required
                        />
                      </div>
                  
    
                   
                      {/* strike */}
                      <div className="mb-3 w-full ">
                        <label className="font-semibold text-white-600 py-2">
                          strike <abbr title="required">*</abbr>
                        </label>
                        <input
                          value={strike}
                          onChange={(e) => setStrike(e.target.value)}
                          placeholder="strike"
                          className="block lg:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                          name="strike"
                          id="strike"
                          required
                        />
                      </div>

                        {/* divedend */}
                        <div className="mb-3 w-full ">
                        <label className="font-semibold text-white-600 py-2">
                        divedend <abbr title="required">*</abbr>
                        </label>
                        <input
                          value={divedend}
                          onChange={(e) => setDivedend(e.target.value)}
                          placeholder="divedend"
                          className="block lg:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                          name="divedend"
                          id="divedend"
                          required
                        />
                      </div>
    
                      {/* interest_rate */}
                      <div className="mb-3 w-full ">
                        <label className="font-semibold text-white-600 py-2">
                          interest_rate <abbr title="required">*</abbr>
                        </label>
                        <input
                          value={interest_rate}
                          onChange={(e) => setInterestRate(e.target.value)}
                          placeholder="interest_rate"
                          className="block lg:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                          name="interest_rate"
                          id="interest_rate"
                          required
                        />
                      </div>
              
    
                    {/* start & end date */}
                      <div className="mb-3 w-full ">
                        <label className="font-semibold text-white-600 py-2">
                          start date <abbr title="required">*</abbr>
                        </label>
                        <input
                          value={start_date}
                          onChange={(e) => setStartDate(e.target.value)}
                          placeholder="start date"
                          className="block lg:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                          name="start_date"
                          type="date"
                          id="start_date"
                          required
                        />
                      </div>
    
                      <div className="mb-3 w-full ">
                        <label className="font-semibold text-white-600 py-2">
                          end date <abbr title="required">*</abbr>
                        </label>
                        <input
                          value={end_date}
                          onChange={(e) => setEndDate(e.target.value)}
                          placeholder="end date"
                          className="block lg:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                          name="end_date"
                          type="date"
                          id="end_date"
                          required
                        />
                      </div>
    
                    {/* buttons */}
                    <div className="flex mt-2 justify-center items-center text-right  ">
                      {/* <button
                        type="reset"
                        className="mb-2 md:mb-0 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white bg-transparent rounded-md hover:shadow-lg hover:bg-blue-800 "
                      >
                        {" "}
                        Reset{" "}
                      </button> */}
                      <button
                        type="submit"
                        className="block lg:h-[7vh] w-full bg-white px-5 py-2 text-[2vh] shadow-sm font-medium tracking-wider  text-blue-600 rounded-md hover:shadow-lg hover:bg-blue-200"
                      >
                        
                        Start Simulation
                      </button>
                    </div>

                  </form>
                </div>
    );
}

export default BlackScholesForm;
