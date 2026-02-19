import React, { useState } from "react";
import axios from "axios";
import Plot from "react-plotly.js";
import { Loader2, TrendingUp } from "lucide-react";
import Hero from "@/components/Hero";
import Toggle from "@/components/Toggle";
import MonteCarloForm from "@/components/MonteCarloForm";
import BlackScholesForm from "@/components/BlackScholesForm";
import VasicekForm from "@/components/VasicekForm";
import BinomialandTrinomialForm from "@/components/BinomialandTrinomialForm";
import YieldCurveVisualization from "@/components/YieldCurveVisualization";
import heroImage from "@assets/generated_images/futuristic_financial_dashboard_background_with_neon_data_lines.png";

// Import UI components for Results section
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function App() {
  const [selectedModel, setSelectedModel] = useState("MonteCarlo");
  const [ticker, setTicker] = useState("");
  const [monteCarloResult, setmonteCarloResult] = useState<any>("");
  const [binomialandtrinomialResult, setbinomialandtrinomialResult] = useState(false);
  const [ycResult, setYCResult] = useState<any>("");

  const [blackScholesResult, setblackScholesResult] = useState<any>("");
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
  const [strike, setStrike] = useState<any>("");
  const [call, setCall] = useState(null);
  const [put, setPut] = useState(null);
  const [call_decision, setCallDecision] = useState(null);
  const [put_decision, setPutDecision] = useState(null);
  const [volatility, setVolatility] = useState<any>("");
  const [interest_rate, setInterestRate] = useState<any>("");
  const [period, setPeriod] = useState<any>("");
  const [divedend, setDivedend] = useState<any>("");

  const [vasicek_volatility, setVasicekVolatility] = useState<any>("");
  const [initial_short_rate, setInitialShortRate] = useState<any>("");
  const [time_horizon, setTimeHorizon] = useState<any>("");
  const [mean_reversion_speed, setMeanReversionSpeed] = useState<any>("");
  const [long_term_mean, setLongTermMean] = useState<any>("");
  const [number_of_paths, setNumberOfPaths] = useState<any>("");
  const [number_of_steps, setNumberOfSteps] = useState<any>("");
  const [vasicekResult, setVasicekResult] = useState<any>("");
  const [callplotData, setCallPlotData] = useState(null);
  const [putplotData, setPutPlotData] = useState(null);
  const [crr, setCRR] = useState(false);
  const [vasicekPlot, setVasicekPlot] = useState<any>("");

  const [time, setTime] = useState<any>("");
  const [binomial_plot, setBinomialPlotData] = useState(null);
  const [trinomial_plot, setTrinomialPlotData] = useState(null);
  const [method_type, setMethodType] = useState(true);
  const [option_type, setOptionType] = useState("call");

  const handleModelChange = (value: string) => {
    setSelectedModel(value);
    // Clear results on model change for cleaner UI
    setmonteCarloResult("");
    setblackScholesResult("");
    setVasicekResult("");
    setbinomialandtrinomialResult(false);
  };

  const handleBinomialandTrinomialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.REACT_APP_API_URL || "https://stockvision-9lfd.onrender.com",
        {
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
        }
      );
      setBinomialPlotData(response.data.result.binomial_tree_plot);
      setTrinomialPlotData(response.data.result.trinomial_tree_plot);
      setbinomialandtrinomialResult(true);
    } catch (error) {
      console.error("Response data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBlackScholesSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try { 
      const response = await axios.post(
        import.meta.env.REACT_APP_API_URL || "https://stockvision-9lfd.onrender.com",
        {
          model: selectedModel,
          ticker: ticker,
          volatility: volatility,
          strike: strike,
          period: period,
          interest_rate: interest_rate,
          start_date: start_date,
          end_date: end_date,
          divedend: divedend,
          crr: crr,
        }
      );
      const result = response.data.result;
      setblackScholesResult(result);
      setStrikePrice(result.strike_price);
      setCall(result.call);
      setPut(result.put);
      setCallDecision(result.call_decision);
      setPutDecision(result.put_decision);
      setCallPlotData(result.crr_call_plot_data);
      setPutPlotData(result.crr_put_plot_data);
    } catch (error: any) {
      console.error("Response data:", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleMonteCarloSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.REACT_APP_API_URL || "https://stockvision-9lfd.onrender.com",
        {
          ticker: ticker,
          model: selectedModel,
          start_date: start_date,
          end_date: end_date,
        }
      );
      const result = response.data.result;
      setmonteCarloResult(result);
      setDays(result.Days);
      setExpectedValue(result.ExpectedValue);
      setReturnPercentage(result.Return);
      setProbabilityOfBreakeven(result.ProbabilityOfBreakeven);
      setPath1(`data:image/png;base64,${result.path1}`);
      setPath2(`data:image/png;base64,${result.path2}`);
    } catch (error) {
      console.error("Error processing data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleVasicekSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.REACT_APP_API_URL || "https://stockvision-9lfd.onrender.com",
        {
          model: selectedModel,
          vasicek_volatility: vasicek_volatility,
          initial_short_rate: initial_short_rate,
          time_horizon: time_horizon,
          mean_reversion_speed: mean_reversion_speed,
          long_term_mean: long_term_mean,
          number_of_paths: number_of_paths,
          number_of_steps: number_of_steps,
        }
      );
      const result = response.data.result;
      setVasicekResult(result);
      setVasicekPlot(result?.plot);
      // console.log("Vasicek response:", response.data.result.plot);
    } catch (error) {
      console.error("Response data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen bg-black overflow-hidden">


      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-emerald-950/20"></div>


      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          style={{
            width: '140%',                // slightly oversized → better coverage when rotating
            height: '140%',
            backgroundSize: 'contain',    // or 'cover' — 'contain' often looks nicer for blobs
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22b%22 gradientTransform=%22rotate(-45 .5 .5)%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23b6bdc0%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%23f2f4f3%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M845.5 643.5Q842 787 708.5 856t-262 14Q318 815 251 715T141 484.5Q98 354 186.5 232T418 131.5Q561 153 717 170t144 173.5q-12 156.5-15.5 300Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M845.5 643.5Q842 787 708.5 856t-262 14Q318 815 251 715T141 484.5Q98 354 186.5 232T418 131.5Q561 153 717 170t144 173.5q-12 156.5-15.5 300Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
            transformOrigin: 'center center',
          }}
          className="
      absolute 
      -top-4/7 left-1/6
      blur-3xl 
      animate-slow-rotate
    "
        />
      </div>


      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          style={{
            width: '140%',                // slightly oversized → better coverage when rotating
            height: '140%',
            backgroundSize: 'contain',    // or 'cover' — 'contain' often looks nicer for blobs
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22b%22 gradientTransform=%22rotate(-45 .5 .5)%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23b6bdc0%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%23f2f4f3%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M845.5 643.5Q842 787 708.5 856t-262 14Q318 815 251 715T141 484.5Q98 354 186.5 232T418 131.5Q561 153 717 170t144 173.5q-12 156.5-15.5 300Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M845.5 643.5Q842 787 708.5 856t-262 14Q318 815 251 715T141 484.5Q98 354 186.5 232T418 131.5Q561 153 717 170t144 173.5q-12 156.5-15.5 300Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
            transformOrigin: 'center center',
          }}
          className="
      absolute 
      -bottom-6/7 right-1/3 
      blur-3xl 
      animate-slow-rotate
    "
        />
      </div>


      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gray-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-600/10 rounded-full blur-xl"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/20 via-slate-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

<div className="overflow-auto h-full w-full">

<Hero />
      <main className="container mx-auto pb-20 h-screen" id="app">
        <Toggle selectedModel={selectedModel} handleModelChange={handleModelChange} />

        <div className="mt-8 px-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Input Forms */}
            <div className="xl:col-span-1 ">
              {selectedModel === "MonteCarlo" && (
                <MonteCarloForm
                  ticker={ticker} setTicker={setTicker}
                  setStartDate={setStartDate} start_date={start_date}
                  end_date={end_date} setEndDate={setEndDate}
                  handleMonteCarloSubmit={handleMonteCarloSubmit}
                />
              )}
              {selectedModel === "BlackScholes" && (
                <BlackScholesForm
                  handleBlackScholesSubmit={handleBlackScholesSubmit}
                  ticker={ticker} setTicker={setTicker}
                  volatility={volatility} setVolatility={setVolatility}
                  period={period} setPeriod={setPeriod}
                  strike={strike} setStrike={setStrike}
                  interest_rate={interest_rate} setInterestRate={setInterestRate}
                  start_date={start_date} setStartDate={setStartDate}
                  end_date={end_date} setEndDate={setEndDate}
                  divedend={divedend} setDivedend={setDivedend}
                  crr={crr} setCRR={setCRR}
                />
              )}
              {selectedModel === "vasicek" && (
                <VasicekForm
                  vasicek_volatility={vasicek_volatility} setVasicekVolatility={setVasicekVolatility}
                  initial_short_rate={initial_short_rate} setInitialShortRate={setInitialShortRate}
                  time_horizon={time_horizon} setTimeHorizon={setTimeHorizon}
                  mean_reversion_speed={mean_reversion_speed} setMeanReversionSpeed={setMeanReversionSpeed}
                  number_of_steps={number_of_steps} setNumberOfSteps={setNumberOfSteps}
                  long_term_mean={long_term_mean} setLongTermMean={setLongTermMean}
                  number_of_paths={number_of_paths} setNumberOfPaths={setNumberOfPaths}
                  handleVasicekSubmit={handleVasicekSubmit}
                />
              )}
              {selectedModel === "binomial_and_trinomial" && (
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
                />
              )}
              {selectedModel === "YC" && (
                <div className="glass-card p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4">Yield Curve Analysis</h3>
                  <p className="text-gray-400 mb-6">
                    Adjust the parameters in the visualization to explore Nelson-Siegel-Svensson yield curve modeling.
                  </p>
                </div>
              )}
            </div>

            {/* Results Section */}
            <div className="xl:col-span-2 h-full">
              {loading && (
                <div className="flex items-center justify-center h-96 glass-card rounded-xl">
                  <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                    <p className="text-lg font-medium">Running Simulation...</p>
                    <p className="text-sm text-gray-400">This may take a moment</p>
                  </div>
                </div>
              )}

              {!loading && (
                <div className="space-y-6">
                  {selectedModel === "YC" && <YieldCurveVisualization />}

                  {selectedModel === "MonteCarlo" && monteCarloResult && (
                    <Card className="glass-card border-white/10">
                      <CardHeader>
                        <CardTitle>Simulation Results</CardTitle>
                        <CardDescription>Monte Carlo analysis for {ticker}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                          <div className="p-4 bg-black/20 rounded-lg border border-white/5">
                            <p className="text-sm text-gray-400">Expected Value</p>
                            <p className="text-2xl font-bold font-mono text-gray-100">{expectedValue}</p>
                          </div>
                          <div className="p-4 bg-black/20 rounded-lg border border-white/5">
                            <p className="text-sm text-gray-400">Return</p>
                            <p className="text-2xl font-bold font-mono text-gray-100">{returnPercentage}%</p>
                          </div>
                          <div className="p-4 bg-black/20 rounded-lg border border-white/5">
                            <p className="text-sm text-gray-400">Days</p>
                            <p className="text-2xl font-bold font-mono">{days}</p>
                          </div>
                          <div className="p-4 bg-black/20 rounded-lg border border-white/5">
                            <p className="text-sm text-gray-400">Breakeven Prob.</p>
                            <p className="text-2xl font-bold font-mono">{probabilityOfBreakeven}%</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          <div className="rounded-xl overflow-hidden border border-white/10">
                            <img src={path1} alt="Simulation Path 1" className="w-full h-auto" />
                          </div>
                          <div className="rounded-xl overflow-hidden border border-white/10">
                            <img src={path2} alt="Simulation Path 2" className="w-full h-auto" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {selectedModel === "BlackScholes" && blackScholesResult && (
                    <Card className="glass-card border-white/10">
                      <CardHeader>
                        <CardTitle>Option Pricing Results</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="p-6 bg-black/20 rounded-lg border border-white/5 text-center">
                            <p className="text-sm text-gray-400 mb-2">Call Option</p>
                            <p className="text-3xl font-bold font-mono text-gray-100 mb-2">{call}</p>
                            <div className="inline-block px-3 py-1 bg-gray-200/10 text-gray-100 rounded-full text-xs font-medium uppercase border border-gray-500/20">
                              {call_decision}
                            </div>
                          </div>
                          <div className="p-6 bg-black/20 rounded-lg border border-white/5 text-center">
                            <p className="text-sm text-gray-400 mb-2">Put Option</p>
                            <p className="text-3xl font-bold font-mono text-red-400 mb-2">{put}</p>
                            <div className="inline-block px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-xs font-medium uppercase border border-red-500/20">
                              {put_decision}
                            </div>
                          </div>
                        </div>

                        {crr && (
                          <div className="space-y-8">
                            {callplotData && (
                              <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                                <h4 className="text-lg font-medium mb-4">CRR Call Plot</h4>
                             
<div className="bg-black/20 p-4 rounded-xl border border-white/5">
                            <img
                              src={`data:image/png;base64,${callplotData}`}
                              alt="CRR Call Plot"
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>

                              </div>
                            )}
                            {putplotData && (
                              <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                                <h4 className="text-lg font-medium mb-4">CRR Put Plot</h4>
                                {/* <Plot
                                  data={JSON.parse(putplotData).data}
                                  layout={{
                                    ...JSON.parse(putplotData).layout,
                                    paper_bgcolor: 'rgba(0,0,0,0)',
                                    plot_bgcolor: 'rgba(0,0,0,0)',
                                    font: { color: '#fff' },
                                    autosize: true
                                  }}
                                  useResizeHandler={true}
                                  style={{ width: "100%", height: "400px" }}
                                /> */}
                                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                            <img
                              src={`data:image/png;base64,${putplotData}`}
                              alt="CRR Put Plot"
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                              </div>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {selectedModel === "vasicek" && vasicekResult && (
                    <Card className="glass-card border-white/10">
                      <CardHeader>
                        <CardTitle>Interest Rate Simulation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {vasicekPlot && (
                          <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                            <img
                              src={`data:image/png;base64,${vasicekPlot}`}
                              alt="Vasicek Simulation"
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {selectedModel === "binomial_and_trinomial" && binomialandtrinomialResult && (
                    <Card className="glass-card border-white/10">
                      <CardHeader>
                        <CardTitle>Tree Models</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-8">
                        {binomial_plot && (
                          <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                            <h4 className="text-lg font-medium mb-4">Binomial Tree</h4>
                            <img
                              src={`data:image/png;base64,${binomial_plot}`}
                              alt="Binomial Tree Simulation"
                              style={{ width: "100%", height: "auto" }}
                            />
                            
                          </div>
                        )}
                        {trinomial_plot && (
                          <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                            <h4 className="text-lg font-medium mb-4">Trinomial Tree</h4>
                            <img
                              src={`data:image/png;base64,${trinomial_plot}`}
                              alt="Trinomial Simulation"
                              style={{ width: "100%", height: "auto" }}
                            />
                            
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {!loading && !monteCarloResult && !blackScholesResult && !vasicekResult && !binomialandtrinomialResult && selectedModel !== "YC" && (
                    <div className="flex flex-col items-center justify-center h-64 glass-card rounded-xl text-center p-8 h-full">
                      <div className="bg-white/5 p-4 rounded-full mb-4">
                        <TrendingUp className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">Ready to Simulate</h3>
                      <p className="text-gray-400 max-w-md">
                        Fill out the parameters in the form to the left and click "Start Simulation" to see the results here.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

</div>
      
    </div>
  );
}

export default App;
