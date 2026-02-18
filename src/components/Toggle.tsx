import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Activity, BarChart2, GitBranch, LineChart, Sigma } from "lucide-react";

interface ToggleProps {
  selectedModel: string;
  handleModelChange: (value: string) => void;
}

export default function Toggle({ selectedModel, handleModelChange }: ToggleProps) {
  return (
    <div className="w-full py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <Tabs 
          value={selectedModel} 
          onValueChange={handleModelChange}
          className="w-full"
        >
          <TabsList className="w-full h-auto flex flex-wrap justify-center gap-2 bg-transparent p-0">
            <TabsTrigger 
              value="MonteCarlo" 
              className="flex-1 min-w-[120px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg border border-border/50 bg-card/50 backdrop-blur-sm h-12 rounded-xl transition-all hover:bg-card hover:border-primary/50"
            >
              <Activity className="w-4 h-4 mr-2" />
              Monte Carlo
            </TabsTrigger>
            
            <TabsTrigger 
              value="BlackScholes" 
              className="flex-1 min-w-[120px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg border border-border/50 bg-card/50 backdrop-blur-sm h-12 rounded-xl transition-all hover:bg-card hover:border-primary/50"
            >
              <Sigma className="w-4 h-4 mr-2" />
              Black Scholes
            </TabsTrigger>
            
            <TabsTrigger 
              value="vasicek" 
              className="flex-1 min-w-[120px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg border border-border/50 bg-card/50 backdrop-blur-sm h-12 rounded-xl transition-all hover:bg-card hover:border-primary/50"
            >
              <LineChart className="w-4 h-4 mr-2" />
              Vasicek
            </TabsTrigger>
            
            <TabsTrigger 
              value="binomial_and_trinomial" 
              className="flex-1 min-w-[120px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg border border-border/50 bg-card/50 backdrop-blur-sm h-12 rounded-xl transition-all hover:bg-card hover:border-primary/50"
            >
              <GitBranch className="w-4 h-4 mr-2" />
              B & T Trees
            </TabsTrigger>
            
            <TabsTrigger 
              value="YC" 
              className="flex-1 min-w-[120px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg border border-border/50 bg-card/50 backdrop-blur-sm h-12 rounded-xl transition-all hover:bg-card hover:border-primary/50"
            >
              <BarChart2 className="w-4 h-4 mr-2" />
              Yield Curve
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
