import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";
import BlackScholes from "./components/BlackScholes";
import MonteCarlo from "./components/MonteCarlo";
import Loader from "./components/Loader";
import MonteCarloForm from "./components/MonteCarloForm";
import BlackScholesForm from "./components/BlackScholesForm";
import Toggle from "./components/Toggle";
import VasicekForm from "./components/VasicekForm";
import BinomialandTrinomialForm from "./components/binomial_&_trinomialForm";
import BinomialandTrinomial from "./components/BinomalandTrinomial";
// import BinomialandTrinomial from "./components/BinomalandTrinomial";

function App() {
  const [selectedModel, setSelectedModel] = useState("MonteCarlo");
  const [ticker, setTicker] = useState("");
  const [monteCarloResult, setmonteCarloResult] = useState("");
  const [binomialandtrinomialResult, setbinomialandtrinomialResult] = useState(false);

  const [blackScholesResult, setblackScholesResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [strike_price, setStrikePrice] = useState("");
  const [days, setDays] = useState(null);
  const [expectedValue, setExpectedValue] = useState(null);
  const [returnPercentage, setReturnPercentage] = useState(null);
  const [probabilityOfBreakeven, setProbabilityOfBreakeven] = useState(null);
  const [path1, setPath1] = useState("");
  const [path2, setPath2] = useState("");
  const [strike, setStrike] = useState(null);
  const [call, setCall] = useState(null);
  const [put, setPut] = useState(null);
  const [call_decision, setCallDecision] = useState(null);
  const [put_decision, setPutDecision] = useState(null);
  const [volatility, setVolatility] = useState(null);
  const [interest_rate, setInterestRate] = useState(null);
  const [period, setPeriod] = useState(null);
  const [divedend, setDivedend] = useState(null);

  

  const [vasicek_volatility, setVasicekVolatility] = useState(null);
  const [initial_short_rate, setInitialShortRate] = useState(null);
  const [time_horizon, setTimeHorizon] = useState(null);
  const [mean_reversion_speed, setMeanReversionSpeed] = useState(null);
  const [long_term_mean, setLongTermMean] = useState(null);
  const [number_of_paths, setNumberOfPaths] = useState(null);
  const [number_of_steps, setNumberOfSteps] = useState(null);
  const [vasicekResult, setVasicekResult] = useState("");
  const [callplotData, setCallPlotData] = useState(null); 
  const [putplotData, setPutPlotData] = useState(null);
  const [crr, setCRR] = useState(false);
  const [, setVasicekPlot] = useState("");

  const [time, setTime] = useState(null);
  const [binomial_plot, setBinomialPlotData] = useState(null);
  const [trinomial_plot, setTrinomialPlotData] = useState(null);
  const [method_type, setMethodType] = useState(true);
  const [option_type, setOptionType] = useState("call");





  const handleModelChange = (value) => {
    setSelectedModel(value);
  };


  const handleBinomialandTrinomialSubmit = async (e) => {
    e.preventDefault();

    // Show loader while waiting for the response
    setLoading(true);
    try {
        const response = await axios.post("http://localhost:8000/", {
            model: selectedModel,
            ticker: ticker,
            strike: strike,
            time: time,
            interest_rate: interest_rate,
            number_of_steps: number_of_steps,
            start_date: start_date,
            end_date: end_date,
            option_type: option_type,
            method_type: method_type,
        });

        console.log(
          selectedModel,
          ticker,
          strike,
          time,
          interest_rate,
          number_of_steps,
          start_date,
          end_date,
          option_type,
          method_type);

        console.log("after sending request");
        console.log("result:", response.data);

        
        setBinomialPlotData(response.data.result.binomial_tree_plot); 
        setTrinomialPlotData(response.data.result.trinomial_tree_plot); 

        setbinomialandtrinomialResult(true); 

        console.log(response.data.result.binomial_tree_plot)

    } catch (error) {
        console.error("Response data:", error.response?.data);
    } finally {
        // Hide loader after response (whether success or error)
        setLoading(false);
    }
};


  const handleBlackScholesSubmit = async (e) => {
    e.preventDefault();

    // Show loader while waiting for the response
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/", {
        model: selectedModel,
        ticker: ticker,
        volatility: volatility,
        strike: strike,
        period: period,
        interest_rate: interest_rate,
        start_date: start_date,
        end_date: end_date,
        divedend:divedend,
        crr:crr
      });

      console.log("after sending request");

      const blackScholesResult = response.data.result;
      console.log("result:", blackScholesResult);

      setblackScholesResult(blackScholesResult);
      setStrikePrice(blackScholesResult.strike_price);
      setCall(blackScholesResult.call);
      setPut(blackScholesResult.put);
      setCallDecision(blackScholesResult.call_decision);
      setPutDecision(blackScholesResult.put_decision);


      setCallPlotData(blackScholesResult.crr_call_plot_data);
      setPutPlotData(blackScholesResult.crr_put_plot_data);
    } catch (error) {
      console.error("Response data:", error.response.data);
    } finally {
      // Hide loader after response (whether success or error)
      setLoading(false);
    }
  };

  const handleMonteCarloSubmit = async (e) => {
    e.preventDefault();

    // Show loader while waiting for the response
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/", {
        ticker: ticker,
        model: selectedModel,
        start_date: start_date,
        end_date: end_date,
      });

      const monteCarloResult = response.data.result;

      setmonteCarloResult(monteCarloResult);
      setDays(monteCarloResult.Days);
      setExpectedValue(monteCarloResult.ExpectedValue);
      setReturnPercentage(monteCarloResult.Return);
      setProbabilityOfBreakeven(monteCarloResult.ProbabilityOfBreakeven);
      setTicker(ticker);
      setPath1(`data:image/png;base64,${monteCarloResult.path1}`);
      setPath2(`data:image/png;base64,${monteCarloResult.path2}`);
    } catch (error) {
      console.error("Error processing data:", error);
    } finally {
      // Hide loader after response (whether success or error)
      setLoading(false);
    }
  };

  const handleVasicekSubmit = async (e) => {
    e.preventDefault();

    // Show loader while waiting for the response
    setLoading(true);

    

    try {
      const response = await axios.post("http://localhost:8000/", {
        model: selectedModel,
        vasicek_volatility: vasicek_volatility,
        initial_short_rate: initial_short_rate,
        time_horizon: time_horizon,
        mean_reversion_speed: mean_reversion_speed,
        long_term_mean: long_term_mean,
        number_of_paths: number_of_paths,
        number_of_steps: number_of_steps,
      });

      console.log("selectedModel:", selectedModel);

      console.log("after sending request");

      const vasicekResult = response.data.result;

      console.log("result:", response);

      setVasicekResult(vasicekResult);
      setVasicekPlot(vasicekResult.plot); 

   
    } catch (error) {
      console.error("Response data:", error);
    } finally {
      // Hide loader after response (whether success or error)
      setLoading(false);
    }
  };

  return (
    <div>
      {/* forms */}
      <div className=" mx-auto flex xl:h-[90vh] flex-col xl:flex-row ">
        <div className="w-full xl:w-1/3 bg-blue-700 h-full  xl:h-[100vh] text-white overflow-y-auto">
          {/* toggle to choose between the two algos */}
          <Toggle
            selectedModel={selectedModel}
            handleModelChange={handleModelChange}
          ></Toggle>

          {/* black scholes form */}
          <div
            className={` ${
              selectedModel === "BlackScholes" ? "block " : "hidden"
            }`}
          >
            <BlackScholesForm
              handleBlackScholesSubmit={handleBlackScholesSubmit}
              ticker={ticker}
              setTicker={setTicker}
              volatility={volatility}
              setVolatility={setVolatility}
              period={period}
              setPeriod={setPeriod}
              strike={strike}
              setStrike={setStrike}
              interest_rate={interest_rate}
              setInterestRate={setInterestRate}
              start_date={start_date}
              setStartDate={setStartDate}
              end_date={end_date}
              setEndDate={setEndDate}
              divedend={divedend}
              setDivedend={setDivedend}
              crr={crr}
              setCRR={setCRR}
            ></BlackScholesForm>
          </div>

          {/* monte carlo form*/}
          <div
            className={` ${
              selectedModel === "MonteCarlo" ? "block" : "hidden"
            }`}
          >
            <MonteCarloForm
              ticker={ticker}
              setTicker={setTicker}
              setStartDate={setStartDate}
              start_date={start_date}
              end_date={end_date}
              setEndDate={setEndDate}
              handleMonteCarloSubmit={handleMonteCarloSubmit}
            ></MonteCarloForm>
          </div>

            {/* vasicek form*/}
          <div
            className={` ${
              selectedModel === "vasicek" ? "block" : "hidden"
            }`}
          >
            <VasicekForm
              vasicek_volatility={vasicek_volatility}
              setVasicekVolatility={setVasicekVolatility}

              initial_short_rate={initial_short_rate}
              setInitialShortRate={setInitialShortRate}
              
              time_horizon={time_horizon}
              setTimeHorizon={setTimeHorizon}

              mean_reversion_speed={mean_reversion_speed}
              setMeanReversionSpeed={setMeanReversionSpeed}

              number_of_steps={number_of_steps}
              setNumberOfSteps={setNumberOfSteps}

              long_term_mean={long_term_mean}
              setLongTermMean={setLongTermMean}

              number_of_paths={number_of_paths}
              setNumberOfPaths={setNumberOfPaths}

              handleVasicekSubmit={handleVasicekSubmit}
            ></VasicekForm>
          </div>

          {/* binomial_&_trinomial form */}
          <div
            className={` ${
              selectedModel === "binomial_and_trinomial" ? "block " : "hidden"
            }`}
          >
            <BinomialandTrinomialForm
              end_date={end_date}
              handleBinomialandTrinomialSubmit={handleBinomialandTrinomialSubmit}
              interest_rate={interest_rate}
              number_of_steps={number_of_steps}
              setEndDate={setEndDate}
              setInterestRate={setInterestRate}
              setNumberOfSteps={setNumberOfSteps}
              setStartDate={setStartDate}
              setStrike={setStrike}
              setTicker={setTicker}
              setTime={setTime}
              start_date={start_date}
              strike={strike}
              ticker={ticker}
              time={time}
              method_type={method_type}
              option_type={option_type}
              setMethodType={setMethodType}
              setOptionType={setOptionType}
              
            ></BinomialandTrinomialForm>
          </div>
        </div>

        {/* Loader */}
{loading && <Loader />}

{/* Hero Component for when no results are displayed */}
{/* {!loading && !monteCarloResult && !blackScholesResult && !vasicekResult && !binomialandtrinomialResult && <Hero />} */}

{/* Monte Carlo results */}
{!loading && selectedModel === "MonteCarlo" && monteCarloResult ? (
    <MonteCarlo
        days={days}
        ticker={ticker}
        probabilityOfBreakeven={probabilityOfBreakeven}
        returnPercentage={returnPercentage}
        expectedValue={expectedValue}
        monteCarloResult={monteCarloResult}
        path1={path1}
        path2={path2}
    />
  ) : (
    // Show the Hero component if the selected model is Vasicek and no result is available
    !loading && selectedModel === "MonteCarlo" && !monteCarloResult && <Hero />
)}

{/* Black Scholes results */}
{!loading && selectedModel === "BlackScholes" && blackScholesResult ?  (
    <BlackScholes
        strike_price={strike_price}
        call={call}
        put={put}
        call_decision={call_decision}
        put_decision={put_decision}
        callplotData={callplotData}
        putplotData={putplotData}
        crr={crr}
    />
  ) : (
    // Show the Hero component if the selected model is Vasicek and no result is available
    !loading && selectedModel === "BlackScholes" && <Hero />
)}

{/* Vasicek results */}
{!loading && selectedModel === "vasicek" && vasicekResult ? (
    <div className="w-full h-full xl:h-screen xl:w-2/3 text-slate-600 m-auto p-2">
        <div className="grid grid-cols-3 gap-4 justify-between text-center py-4 mx-auto">
            <div className="bg-white overflow-hidden shadow sm:rounded-lg py-3 flex flex-col justify-center">
                <dl>
                    <dt className="text-[3vh] font-medium text-black">Mean reversion speed</dt>
                    <dd className="mt-1 text-[5vh] font-semibold text-blue-600">
                        {vasicekResult.a_est}
                    </dd>
                </dl>
            </div>
            <div className="bg-white overflow-hidden shadow sm:rounded-lg py-3 flex flex-col justify-center">
                <dl>
                    <dt className="text-[3vh] font-medium text-black">Long-term mean</dt>
                    <dd className="mt-1 text-[5vh] font-semibold text-blue-600">
                        {vasicekResult.b_est}
                    </dd>
                </dl>
            </div>
            <div className="bg-white overflow-hidden shadow sm:rounded-lg py-3 flex flex-col justify-center">
                <dl>
                    <dt className="text-[3vh] font-medium text-black">Volatility</dt>
                    <dd className="mt-1 text-[5vh] font-semibold text-blue-600">
                        {vasicekResult.sigma_est}
                    </dd>
                </dl>
            </div>
        </div>

        {/* Render the plot if available */}
        {vasicekResult.plot && (
            <div>
                <img src={`data:image/png;base64, ${vasicekResult.plot}`} alt="Vasicek Simulation Plot" />
            </div>
        )}
    </div>
) : (
    // Show the Hero component if the selected model is Vasicek and no result is available
    !loading && selectedModel === "vasicek" && !vasicekResult && <Hero />
)}

{/* Binomial and Trinomial results */}
{!loading && selectedModel === "binomial_and_trinomial" && binomialandtrinomialResult ? (
    <div className="w-full xl:w-2/3">
        <BinomialandTrinomial binomial_plot={binomial_plot} trinomial_plot={trinomial_plot} />
    </div>
) : (
    // Show the Hero component if the selected model is Binomial and Trinomial and no result is available
    !loading && selectedModel === "binomial_and_trinomial" && !binomialandtrinomialResult && <Hero />
)}




      </div>
    </div>
  );
}
export default App;
