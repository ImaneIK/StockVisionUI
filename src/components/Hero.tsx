import { Play, ArrowRight, ChevronDown, Triangle, Sparkles, Coins, Cpu } from 'lucide-react';

function Hero() {
  return (
    <div className="z-90">



      <div className="relative z-10">
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <button className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-xs md:text-sm transition-colors border border-gray-700/50">
            <Sparkles className="w-4 h-4" />
            Advanced Financial Modeling
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>



        <div className="hidden md:block md:absolute top-32 left-24">
          <svg className="absolute -right-12 top-4" width="300" height="120" viewBox="0 0 300 120">
            {/* Arch curving from bottom left */}
            <path
              d="M 0 100 Q 40 60 80 50"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Line continuing through and past the icon */}
            <path
              d="M 80 50 L 250 50"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
              <Triangle className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-medium">Monte Carlo</div>
              <div className="text-gray-500 text-sm">Simulation</div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute top-32 right-24">
          <svg className="absolute -left-12 top-4" width="300" height="120" viewBox="0 0 300 120">
            {/* Arch curving from bottom right */}
            <path
              d="M 300 100 Q 260 60 220 50"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Line continuing through and past the icon */}
            <path
              d="M 220 50 L 50 50"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-medium">Black-Scholes</div>
              <div className="text-gray-500 text-sm">Option Pricing</div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:absolute top-1/2 left-20 -translate-y-1/2">
          <svg className="absolute -right-8 top-8" width="300" height="120" viewBox="0 0 300 120">
            {/* Arch curving from bottom left */}
            <path
              d="M 0 100 Q 40 60 80 50"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              fill="none"
            />
            {/* Line continuing through and past the icon */}
            <path
              d="M 80 50 L 250 50"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
              <Coins className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-medium">Vasicek</div>
              <div className="text-gray-500 text-sm">Interest Rate Model</div>
            </div>
          </div>
        </div>

        <div className="hidden md:blockabsolute bottom-2/3 md:top-1/2 right-20 md:-translate-y-1/2">
          <svg className="absolute top-4" width="300" height="120" viewBox="0 0 300 120">
            {/* Arch curving from bottom right */}
            <path
              d="M 300 100 Q 260 60 220 50"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              fill="none"
            />
            {/* Line continuing through and past the icon */}
            <path
              d="M 220 50 L 50 50"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-medium">Binomial & Trinomial</div>
              <div className="text-gray-500 text-sm">Tree-based Models</div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-35 md:pt-60">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              StockVision{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                AI
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Professional-grade option pricing and risk analysis tools.
              Simulate markets with Monte Carlo, Black-Scholes, and Vasicek models.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button onClick={() => {
                const appSection = document.getElementById('app');
                if (appSection) {
                  appSection.scrollIntoView({ behavior: 'smooth' });
                }
              }} className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-500 transition-colors flex items-center gap-2 cursor-pointer">
                Start Analysis
              </button>
              <button className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors border border-gray-700 flex items-center gap-2">
                Learn Methodologies
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="my-12 md:mt-32 flex justify-center">
            <div className="relative h-64 w-64"> {/* added width for better centering */}
              {/* Center line */}
              <div
                className="absolute left-1/2 top-0 w-px h-64 bg-gradient-to-b from-transparent via-white/30 via-30% to-transparent animate-flow-glow1"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, transparent 0%, white 20%, transparent 60%, transparent 100%)',
                  backgroundSize: '100% 300%', // extra height = seamless loop
                }}
              />

              {/* Left branch 1 */}
              <div
                className="absolute left-1/2 top-16 w-px h-48 -translate-x-8 animate-flow-glow2"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, transparent 0%, white 20%, transparent 60%, transparent 100%)',
                  backgroundSize: '100% 300%',
                }}
              />

              {/* Right branch 1 */}
              <div
                className="absolute left-1/2 top-16 w-px h-48 translate-x-8 animate-flow-glow3"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, transparent 0%, white 20%, transparent 60%, transparent 100%)',
                  backgroundSize: '100% 300%',
                }}
              />

              {/* Left branch 2 */}
              <div
                className="absolute left-1/2 top-32 w-px h-32 -translate-x-16 animate-flow-glow4"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, transparent 0%, white 25%, transparent 65%, transparent 100%)',
                  backgroundSize: '100% 300%',
                }}
              />

              {/* Right branch 2 */}
              <div
                className="absolute left-1/2 top-32 w-px h-32 translate-x-16 animate-flow-glow5"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, transparent 0%, white 25%, transparent 65%, transparent 100%)',
                  backgroundSize: '100% 300%',
                }}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 flex items-center gap-2 text-gray-400">
          <div className="w-8 h-8 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700/50">
            <ChevronDown className="w-4 h-4" />
          </div>
          <span className="text-sm">02/03 · Scroll down</span>
        </div>

        <div className="absolute bottom-8 right-8">
          <div className="text-right">
            <div className="text-gray-400 text-sm mb-1">DeFi horizons</div>
            <div className="w-8 h-0.5 bg-gray-600 ml-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
