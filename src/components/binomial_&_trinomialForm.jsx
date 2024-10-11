

const BinomialandTrinomialForm = (
    {
        handleBinomialandTrinomialSubmit, ticker, setTicker, time,
        setTime, strike, setStrike, interest_rate,
        setInterestRate, start_date, setStartDate, end_date, setEndDate, 
        number_of_steps, setNumberOfSteps, method_type, setMethodType, option_type, setOptionType    }
) =>
{  
    
   

    const handleMethodTypeChange = (e) => {
        setMethodType(e.target.checked);
    };

    const handleOptionType = (event) => {
        setOptionType(event.target.id);
    };
    
  return (

        <div className="px-2  md:px-8 py-4 flex flex-col justify-center  h-full text-[2vh]">
                  <h2 className="block mb-2 text-[4vh] font-bold text-center xl:text-left">
                   binomial & trinomial
                  </h2>
                  <p className="block mb-2 text-[2vh] text-center xl:text-left ">
                    Fill in the feilds below to run a simulation
                  </p>
                  {/* <a href="#" className="mb-10 block font-bold text-white-600">Have an account</a> */}
    
                  <form className="mt-4 form grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 xl:h-[50vh]" onSubmit={handleBinomialandTrinomialSubmit}>
                                        
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


                        {/* Time to expiration in years */}
                      <div className="mb-3 w-full ">
                        <label className="font-semibold text-white-600 py-2">
                            Time to expiration in years <abbr title="required">*</abbr>
                        </label>
                        <input
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          placeholder="Time to expiration in years"
                          className="block lg:h-[7vh]  w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                          name="time"
                          id="time"
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



             


                      {/* Number of steps */}
                      <div className="mb-3 w-full ">
                        <label className="font-semibold text-white-600 py-2">
                        Number of steps <abbr title="required">*</abbr>
                        </label>
                        <input
                          value={number_of_steps}
                          onChange={(e) => setNumberOfSteps(e.target.value)}
                          placeholder="number of steps"
                          className="block lg:h-[7vh] w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                          name="down_factor"
                          id="number_of_steps"
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


                    
                    


                 {/* american or european */}
                 <div className="flex  w-full flex-col sm:flex-row  items-center gap-4 ">
                 
                  <div class="relative flex w-full  xl:h-[7vh]  items-center justify-center rounded-xl bg-blue-50 px-4 py-3 font-medium text-blue-700">
                  <input
      type="checkbox"
      id="methodType"
      checked={method_type}
      onChange={handleMethodTypeChange}
      className="peer hidden"
    />

    {/* Label (Clickable and with styles based on checkbox state) */}
    <label
      htmlFor="methodType"
      className={`${
        method_type
          ? "border-blue-400 bg-blue-200"
          : "border-transparent bg-blue-50"
      } absolute top-0 h-full w-full cursor-pointer rounded-xl border`}
    ></label>

    {/* Checkbox circle that changes with peer-checked */}
    <div className="peer-checked:border-transparent peer-checked:bg-blue-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-blue-300 bg-blue-200 ring-blue-400 ring-offset-2"></div>

    {/* Text changes based on state */}
    <span className="pointer-events-none z-10 text-[2.5vh]">
      {method_type ? "American" : "European"}
    </span> </div>
                 
                </div>

                {/* call or put */}
                <div className="flex  w-full flex-col sm:flex-row  items-center gap-4 ">
                 
                 <div class="relative flex w-full  xl:h-[7vh]  items-center justify-center rounded-xl bg-blue-50 px-4 py-3 font-medium text-blue-700">
                   <input
                     className="peer hidden"
                     type="radio"
                     name="call"
                     id="call"
                     checked={option_type === "call"}
                     onChange={handleOptionType}
                   />
                   <label
                     className={`${
                       option_type === "call"
                         ? "border-blue-400 bg-black-200"
                         : "border-transparent bg-blue-50"
                     } absolute top-0 h-full w-full cursor-pointer rounded-xl border`}
                     htmlFor="call"
                     for="call"
                   >
                     {" "}
                   </label>
                   <div class="peer-checked:border-transparent peer-checked:bg-blue-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-blue-300 bg-blue-200 ring-blue-400 ring-offset-2"></div>
                   <span class="pointer-events-none z-10 text-[2.5vh]">Call</span>
                 </div>
                 
                 <div class="relative flex w-full xl:h-[7vh] items-center justify-center rounded-xl bg-blue-50 px-4 py-3 font-medium text-blue-700">
                   <input
                     class="peer hidden"
                     type="radio"
                     name="put"
                     id="put"
                     checked={option_type === "put"}
                       onChange={handleOptionType}
                   />
                   <label
                     className={`${
                       option_type === "put"
                         ? "border-blue-400 bg-blue-200"
                         : "border-transparent bg-blue-50"
                     } absolute top-0 h-full w-full cursor-pointer rounded-xl border`}
                     htmlFor="put"
                     for="put"
                   >
                     {" "}
                   </label>
                   <div class="peer-checked:border-transparent peer-checked:bg-blue-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-blue-300 bg-blue-200 ring-blue-400 ring-offset-2"></div>
                   <span class="pointer-events-none z-10 text-[2.5vh]">Put</span>
                 </div>
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

export default BinomialandTrinomialForm;
