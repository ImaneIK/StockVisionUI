import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { GitBranch } from "lucide-react";

interface BinomialandTrinomialFormProps {
  handleBinomialandTrinomialSubmit: (e: React.FormEvent) => void;
  ticker: string;
  setTicker: (value: string) => void;
  time: string;
  setTime: (value: string) => void;
  strike: string;
  setStrike: (value: string) => void;
  interest_rate: string;
  setInterestRate: (value: string) => void;
  start_date: string;
  setStartDate: (value: string) => void;
  end_date: string;
  setEndDate: (value: string) => void;
  number_of_steps: string;
  setNumberOfSteps: (value: string) => void;
  method_type: boolean;
  setMethodType: (value: boolean) => void;
  option_type: string;
  setOptionType: (value: string) => void;
}

export default function BinomialandTrinomialForm({
  handleBinomialandTrinomialSubmit,
  ticker, setTicker,
  time, setTime,
  strike, setStrike,
  interest_rate, setInterestRate,
  start_date, setStartDate,
  end_date, setEndDate,
  number_of_steps, setNumberOfSteps,
  method_type, setMethodType,
  option_type, setOptionType
}: BinomialandTrinomialFormProps) {
  
  return (
    <Card className="w-full max-w-4xl mx-auto glass-card border-white/10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
          Binomial & Trinomial Trees
        </CardTitle>
        <CardDescription className="text-gray-400">
          Price options using discrete-time lattice models.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleBinomialandTrinomialSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="space-y-2">
              <Label htmlFor="ticker">Ticker</Label>
              <Input
                id="ticker"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                placeholder="e.g. AAPL"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time to Expiration (Years)</Label>
              <Input
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="e.g. 1"
                className="bg-black/20 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="strike">Strike Price</Label>
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
              <Label htmlFor="interest_rate">Interest Rate</Label>
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
              <Label htmlFor="number_of_steps">Number of Steps</Label>
              <Input
                id="number_of_steps"
                value={number_of_steps}
                onChange={(e) => setNumberOfSteps(e.target.value)}
                placeholder="e.g. 50"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="space-y-0.5">
                <Label className="text-base">Exercise Style</Label>
                <div className="text-sm text-gray-400">
                  {method_type ? "American (Early Exercise)" : "European (Expiration Only)"}
                </div>
              </div>
              <Switch 
                checked={method_type}
                onCheckedChange={setMethodType}
              />
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <Label className="text-base mb-3 block">Option Type</Label>
              <RadioGroup 
                value={option_type} 
                onValueChange={setOptionType}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="call" id="call" />
                  <Label htmlFor="call" className="cursor-pointer">Call</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="put" id="put" />
                  <Label htmlFor="put" className="cursor-pointer">Put</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 h-11"
          >
            <GitBranch className="w-4 h-4 mr-2" />
            Build Trees & Calculate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
