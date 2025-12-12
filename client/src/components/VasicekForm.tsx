import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

interface VasicekFormProps {
  handleVasicekSubmit: (e: React.FormEvent) => void;
  initial_short_rate: string;
  setInitialShortRate: (value: string) => void;
  mean_reversion_speed: string;
  setMeanReversionSpeed: (value: string) => void;
  long_term_mean: string;
  setLongTermMean: (value: string) => void;
  vasicek_volatility: string;
  setVasicekVolatility: (value: string) => void;
  time_horizon: string;
  setTimeHorizon: (value: string) => void;
  number_of_steps: string;
  setNumberOfSteps: (value: string) => void;
  number_of_paths: string;
  setNumberOfPaths: (value: string) => void;
}

export default function VasicekForm({
  handleVasicekSubmit,
  initial_short_rate, setInitialShortRate,
  mean_reversion_speed, setMeanReversionSpeed,
  long_term_mean, setLongTermMean,
  vasicek_volatility, setVasicekVolatility,
  time_horizon, setTimeHorizon,
  number_of_steps, setNumberOfSteps,
  number_of_paths, setNumberOfPaths
}: VasicekFormProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto glass-card border-white/10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
          Vasicek Model
        </CardTitle>
        <CardDescription className="text-gray-400">
          Simulate interest rate paths using the Vasicek mean-reverting model.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleVasicekSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="space-y-2">
              <Label htmlFor="initial_short_rate">Initial Short Rate (r₀)</Label>
              <Input
                id="initial_short_rate"
                value={initial_short_rate}
                onChange={(e) => setInitialShortRate(e.target.value)}
                placeholder="e.g. 0.05"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mean_reversion_speed">Mean Reversion Speed (a)</Label>
              <Input
                id="mean_reversion_speed"
                value={mean_reversion_speed}
                onChange={(e) => setMeanReversionSpeed(e.target.value)}
                placeholder="e.g. 0.1"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="long_term_mean">Long-term Mean (b)</Label>
              <Input
                id="long_term_mean"
                value={long_term_mean}
                onChange={(e) => setLongTermMean(e.target.value)}
                placeholder="e.g. 0.05"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vasicek_volatility">Volatility (σ)</Label>
              <Input
                id="vasicek_volatility"
                value={vasicek_volatility}
                onChange={(e) => setVasicekVolatility(e.target.value)}
                placeholder="e.g. 0.02"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time_horizon">Time Horizon (T)</Label>
              <Input
                id="time_horizon"
                value={time_horizon}
                onChange={(e) => setTimeHorizon(e.target.value)}
                placeholder="e.g. 10"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="number_of_steps">Number of Steps</Label>
              <Input
                id="number_of_steps"
                value={number_of_steps}
                onChange={(e) => setNumberOfSteps(e.target.value)}
                placeholder="e.g. 1000"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="number_of_paths">Number of Paths</Label>
              <Input
                id="number_of_paths"
                value={number_of_paths}
                onChange={(e) => setNumberOfPaths(e.target.value)}
                placeholder="e.g. 100"
                className="bg-black/20 border-white/10"
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 h-11"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Simulate Interest Rates
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
