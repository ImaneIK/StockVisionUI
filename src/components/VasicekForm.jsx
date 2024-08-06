const VasicekForm = (
  {
      handleVasicekSubmit, initial_short_rate, setInitialShortRate, mean_reversion_speed,
      setMeanReversionSpeed, long_term_mean, setLongTermMean, vasicek_volatility, setVasicekVolatility, time_horizon,
      setTimeHorizon, number_of_steps, setNumberOfSteps, setNumberOfPaths, number_of_paths
  }
) =>
{
  return (
// r0 = 0.02  # Initial short rate
// a = 0.5    # Mean reversion speed
// b = 0.03  # Long-term mean
// sigma = 0.01   # Volatility
// T = 10      # Time horizon
// num_steps = 10000  # Number of steps
// num_paths = 20   # Number of paths


      <div className="px-2 md:px-8 py-4 flex flex-col justify-center  h-full text-[2.5vh]">
                <h2 className="block mb-2 text-[5vh] font-bold text-center xl:text-left">
                 Vasicek form
                </h2>
                <p className="block mb-2 text-[2vh] text-center xl:text-left ">
                  Fill in the feilds below to run a simulation
                </p>
                {/* <a href="#" className="mb-10 block font-bold text-white-600">Have an account</a> */}
  
                <form className="mt-4 form grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 xl:h-[70vh]" onSubmit={handleVasicekSubmit}>
                                      
                                   
                  
                    {/* Initial short rate */}
                    <div className="mb-3 w-full ">
                      <label className="font-semibold text-white-600 py-2"> 
                      Initial short rate  
                      <abbr title="required">*</abbr>  
                      </label>
                      <input
                        value={initial_short_rate}   // important
                        onChange={(e) => setInitialShortRate(e.target.value)} // important
                        placeholder="initial_short_rate" // important
                        className="block lg:h-[7vh]  w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                        name="initial_short_rate" // important
                        id="initial_short_rate" // important
                        required
                      />
                    </div>




                      {/* mean_reversion_speed */}
                    <div className="mb-3 w-full ">
                      
                      <label className="font-semibold text-white-600 py-2">
                      Mean reversion speed <abbr title="required">*</abbr>
                      </label>
                      <input
                        value={mean_reversion_speed}
                        onChange={(e) => setMeanReversionSpeed(e.target.value)}
                        placeholder="mean_reversion_speed"
                        className="block lg:h-[7vh]  w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                        name="mean_reversion_speed"
                        id="mean_reversion_speed"
                        required
                      />
                    </div>
                
  
                 
                    {/* Long-term mean */}
                    <div className="mb-3 w-full ">
                      <label className="font-semibold text-white-600 py-2">
                      Long-term mean <abbr title="required">*</abbr>
                      </label>
                      <input
                        value={long_term_mean}
                        onChange={(e) => setLongTermMean(e.target.value)}
                        placeholder="Long-term mean"
                        className="block lg:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                        name="long_term_mean"
                        id="long_term_mean"
                        required
                      />
                    </div>

  
                    {/* Volatility */}
                    <div className="mb-3 w-full ">
                      <label className="font-semibold text-white-600 py-2">
                      Volatility <abbr title="required">*</abbr>
                      </label>
                      <input
                        value={vasicek_volatility}
                        onChange={(e) => setVasicekVolatility(e.target.value)}
                        placeholder="volatility"
                        className="block lg:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                        name="vasicek_volatility"
                        id="vasicek_volatility"
                        required
                      />
                    </div>
            
  
                  {/* Time horizon */}
                    <div className="mb-3 w-full ">
                      <label className="font-semibold text-white-600 py-2">
                      Time horizon <abbr title="required">*</abbr>
                      </label>
                      <input
                        value={time_horizon}
                        onChange={(e) => setTimeHorizon(e.target.value)}
                        placeholder="Time horizon"
                        className="block lg:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                        name="time_horizon"
                        id="time_horizon"
                        required
                      />
                    </div>

                    {/* Number of steps */}
                    <div className="mb-3 w-full ">
                      <label className="font-semibold text-white-600 py-2">
                      Number of steps <abbr title="required">*</abbr>
                      </label>
                      <input
                        value={number_of_steps}
                        onChange={(e) => setNumberOfSteps(e.target.value)}
                        placeholder="Number of steps"
                        className="block lg:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                        name="number_of_steps"
                        id="number_of_steps"
                        required
                      />
                    </div>


                    {/* Number of paths */}
                    <div className="mb-3 w-full ">
                      <label className="font-semibold text-white-600 py-2">
                      Number of paths <abbr title="required">*</abbr>
                      </label>
                      <input
                        value={number_of_paths}
                        onChange={(e) => setNumberOfPaths(e.target.value)}
                        placeholder="Number of paths"
                        className="block lg:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                        name="number_of_paths"
                        id="number_of_paths"
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
                      className="block lg:h-[7vh] w-full bg-white px-5 py-2 text-[2.5vh] shadow-sm font-medium tracking-wider  text-blue-600 rounded-md hover:shadow-lg hover:bg-blue-200"
                    >
                      
                      Start Simulation
                    </button>
                  </div>

                </form>
              </div>
  );
}

export default VasicekForm;
