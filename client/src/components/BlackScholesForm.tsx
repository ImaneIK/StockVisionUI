import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Calculator } from "lucide-react";

interface BlackScholesFormProps {
  handleBlackScholesSubmit: (e: React.FormEvent) => void;
  ticker: string;
  setTicker: (value: string) => void;
  volatility: string;
  setVolatility: (value: string) => void;
  period: string;
  setPeriod: (value: string) => void;
  strike: string;
  setStrike: (value: string) => void;
  interest_rate: string;
  setInterestRate: (value: string) => void;
  start_date: string;
  setStartDate: (value: string) => void;
  end_date: string;
  setEndDate: (value: string) => void;
  divedend: string;
  setDivedend: (value: string) => void;
  crr: boolean;
  setCRR: (value: boolean) => void;
}

export default function BlackScholesForm({
  handleBlackScholesSubmit, 
  ticker, setTicker, 
  volatility, setVolatility, 
  period, setPeriod, 
  strike, setStrike, 
  interest_rate, setInterestRate, 
  start_date, setStartDate, 
  end_date, setEndDate, 
  divedend, setDivedend, 
  crr, setCRR
}: BlackScholesFormProps) {

  return (
    <Card className="w-full max-w-4xl mx-auto glass-card border-white/10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
          Black-Scholes-Merton Model
        </CardTitle>
        <CardDescription className="text-gray-400">
          Calculate theoretical option prices for European call and put options.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleBlackScholesSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="space-y-2">
              <Label htmlFor="ticker">Ticker Symbol</Label>
              <Input
                id="ticker"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                placeholder="e.g. SPY"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="volatility">Volatility (σ)</Label>
              <Input
                id="volatility"
                value={volatility}
                onChange={(e) => setVolatility(e.target.value)}
                placeholder="e.g. 0.2"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="period">Period (T in years)</Label>
              <Input
                id="period"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                placeholder="e.g. 1"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="strike">Strike Price (K)</Label>
              <Input
                id="strike"
                value={strike}
                onChange={(e) => setStrike(e.target.value)}
                placeholder="e.g. 100"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="divedend">Dividend Yield (q)</Label>
              <Input
                id="divedend"
                value={divedend}
                onChange={(e) => setDivedend(e.target.value)}
                placeholder="e.g. 0.0"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest_rate">Risk-free Rate (r)</Label>
              <Input
                id="interest_rate"
                value={interest_rate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="e.g. 0.05"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="start_date">Start Date</Label>
              <Input
                id="start_date"
                type="date"
                value={start_date}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-black/20 border-white/10 [color-scheme:dark]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="end_date">End Date</Label>
              <Input
                id="end_date"
                type="date"
                value={end_date}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-black/20 border-white/10 [color-scheme:dark]"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/5">
            <Switch 
              checked={crr} 
              onCheckedChange={setCRR}
              id="crr-mode"
            />
            <Label htmlFor="crr-mode" className="font-medium cursor-pointer">
              Calculate CRR (Cox-Ross-Rubinstein) and Generate Graph
            </Label>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 h-11"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Calculate Option Prices
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
