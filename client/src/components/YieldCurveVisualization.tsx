import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const YieldCurveVisualization = () => {
  const [beta0, setBeta0] = useState(0.05);
  const [beta1, setBeta1] = useState(-0.02);
  const [beta2, setBeta2] = useState(0.02);
  const [beta3, setBeta3] = useState(0.01);
  const [tau1, setTau1] = useState(2);
  const [tau2, setTau2] = useState(0.5);

  const tauValues = [1 / 12, 3 / 12, 6 / 12, 1, 2, 3, 5, 7, 10, 20, 30];

  const calculateYield = (tau: number) => {
    const term1 = (1 - Math.exp(-tau / tau1)) / (tau / tau1);
    const term2 = term1 - Math.exp(-tau / tau1);
    const term3 = (1 - Math.exp(-tau / tau2)) / (tau / tau2);
    const term4 = term3 - Math.exp(-tau / tau2);
    return beta0 + beta1 * term1 + beta2 * term2 + beta3 * term4;
  };

  const data = tauValues.map((tau) => ({
    maturity: tau,
    yield: calculateYield(tau),
    label: tau < 1 ? `${Math.round(tau * 12)}m` : `${tau}y`,
  }));

  const formatTooltip = (value: number) => {
    return `${(value * 100).toFixed(2)}%`;
  };

  return (
    <Card className="w-full glass-card border-white/10 mt-8">
      <CardHeader>
        <CardTitle>Interactive Nelson-Siegel-Svensson Yield Curve</CardTitle>
        <CardDescription>Adjust parameters to visualize the yield curve shape.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="h-[400px] w-full bg-black/20 rounded-xl p-4 border border-white/5">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="label" 
                stroke="#888888" 
                label={{ value: 'Maturity', position: 'bottom', offset: 0, fill: '#888888' }} 
              />
              <YAxis
                tickFormatter={(value) => `${(value * 100).toFixed(1)}%`}
                stroke="#888888"
                label={{ value: 'Yield', angle: -90, position: 'insideLeft', fill: '#888888' }}
              />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(23, 23, 23, 0.9)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                formatter={formatTooltip}
                labelFormatter={(label) => `Maturity: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="yield"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label>β₀ (Level)</Label>
                <span className="text-sm font-mono text-primary">{(beta0 * 100).toFixed(2)}%</span>
              </div>
              <Slider
                value={[beta0 * 100]}
                onValueChange={(val) => setBeta0(val[0] / 100)}
                max={10}
                min={0}
                step={0.1}
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label>β₁ (Slope)</Label>
                <span className="text-sm font-mono text-primary">{(beta1 * 100).toFixed(2)}%</span>
              </div>
              <Slider
                value={[beta1 * 100]}
                onValueChange={(val) => setBeta1(val[0] / 100)}
                max={5}
                min={-5}
                step={0.1}
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label>β₂ (Curvature)</Label>
                <span className="text-sm font-mono text-primary">{(beta2 * 100).toFixed(2)}%</span>
              </div>
              <Slider
                value={[beta2 * 100]}
                onValueChange={(val) => setBeta2(val[0] / 100)}
                max={5}
                min={-5}
                step={0.1}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label>β₃ (Second Curvature)</Label>
                <span className="text-sm font-mono text-primary">{(beta3 * 100).toFixed(2)}%</span>
              </div>
              <Slider
                value={[beta3 * 100]}
                onValueChange={(val) => setBeta3(val[0] / 100)}
                max={5}
                min={-5}
                step={0.1}
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label>τ₁ (First Decay)</Label>
                <span className="text-sm font-mono text-primary">{tau1.toFixed(2)}</span>
              </div>
              <Slider
                value={[tau1]}
                onValueChange={(val) => setTau1(val[0])}
                max={5}
                min={0.1}
                step={0.1}
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label>τ₂ (Second Decay)</Label>
                <span className="text-sm font-mono text-primary">{tau2.toFixed(2)}</span>
              </div>
              <Slider
                value={[tau2]}
                onValueChange={(val) => setTau2(val[0])}
                max={5}
                min={0.1}
                step={0.1}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default YieldCurveVisualization;
