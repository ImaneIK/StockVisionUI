import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

interface MonteCarloFormProps {
  handleMonteCarloSubmit: (e: React.FormEvent) => void;
  ticker: string;
  setTicker: (value: string) => void;
  start_date: string;
  setStartDate: (value: string) => void;
  end_date: string;
  setEndDate: (value: string) => void;
}

export default function MonteCarloForm({
  handleMonteCarloSubmit,
  ticker,
  setTicker,
  setStartDate,
  start_date,
  end_date,
  setEndDate,
}: MonteCarloFormProps) {
  return (
    <Card className="w-full max-w-xl mx-auto glass-card border-white/10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
          Monte Carlo Simulation
        </CardTitle>
        <CardDescription className="text-gray-400">
          Predict future stock price probability distributions using random sampling.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleMonteCarloSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="ticker" className="text-gray-300">Stock Ticker Symbol</Label>
            <Input
              id="ticker"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
              placeholder="e.g. AAPL, GOOGL"
              className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 transition-colors"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start_date" className="text-gray-300">Start Date</Label>
              <Input
                id="start_date"
                type="date"
                value={start_date}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-black/20 border-white/10 text-white focus:border-primary/50 [color-scheme:dark]"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="end_date" className="text-gray-300">End Date</Label>
              <Input
                id="end_date"
                type="date"
                value={end_date}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-black/20 border-white/10 text-white focus:border-primary/50 [color-scheme:dark]"
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 h-11"
          >
            <PlayCircle className="w-4 h-4 mr-2" />
            Run Simulation
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
