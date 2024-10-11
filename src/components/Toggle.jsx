const Toggle = ({ selectedModel,handleModelChange}) => {
    return(
        <nav className="flex flex-nowrap w-full text-center">
            <button
              className={`bg-blue-700 inline-flex w-full items-center h-10 xl:h-[8vh] px-4 -mb-px text-[2.5vh] text-center whitespace-nowrap inline-flex py-2 px-3  font-medium transition-all duration-50 ease-in-out ${
                selectedModel === "MonteCarlo"
                  ? "  text-white rounded-tr-lg border-t border-r decoration-white"
                  : "   text-white border-b decoration-white"
              } whitespace-nowrap `}
              onClick={() => handleModelChange("MonteCarlo")}
            >
              {" "}
              Monte Carlo{" "}
            </button>

            <button
              className={` bg-blue-700 inline-flex w-full items-center h-10 xl:h-[8vh] px-4 -mb-px text-[2.5vh] text-center whitespace-nowrap inline-flex py-2 px-3  font-medium transition-all duration-50 ease-in-out ${
                selectedModel === "BlackScholes"
                  ? " text-white  rounded-tl-lg rounded-tr-lg border-t border-l border-r decoration-white "
                  : "   text-white border-b decoration-white"
              } whitespace-nowrap cursor-base `}
              onClick={() => handleModelChange("BlackScholes")}
            >
              {" "}
              Black Scholes{" "}
            </button>


            <button
              className={`bg-blue-700 inline-flex w-full items-center h-10 xl:h-[8vh] px-4 -mb-px text-[2.5vh] text-center whitespace-nowrap inline-flex py-2 px-3  font-medium transition-all duration-50 ease-in-out ${
                selectedModel === "vasicek"
                  ? "  text-white rounded-t-lg border-t border-l border-r decoration-white"
                  : "   text-white border-b decoration-white"
              } whitespace-nowrap `}
              onClick={() => handleModelChange("vasicek")}
            >
              {" "}
              Vasicek{" "}
            </button>


            <button
              className={`bg-blue-700 inline-flex w-full items-center h-10 xl:h-[8vh] px-4 -mb-px text-[2.5vh]  text-center inline-flex py-2 px-3 font-medium transition-all duration-50 ease-in-out ${
                selectedModel === "binomial_and_trinomial"
                  ? "  text-white rounded-tl-lg border-t border-l border-r decoration-white"
                  : "   text-white border-b decoration-white"
              } whitespace-nowrap `}
              onClick={() => handleModelChange("binomial_and_trinomial")}
            >
              {" "}
              B&T{" "}
            </button>
          </nav>
    );
}

export default Toggle;