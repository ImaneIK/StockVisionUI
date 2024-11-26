import React, { useState } from 'react';
import {
  Box,
  Typography,
  Slider,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const YieldCurveVisualization = () => {
  const [beta0, setBeta0] = useState(0.05);
  const [beta1, setBeta1] = useState(-0.02);
  const [beta2, setBeta2] = useState(0.02);
  const [beta3, setBeta3] = useState(0.01);
  const [tau1, setTau1] = useState(2);
  const [tau2, setTau2] = useState(0.5);

  const tauValues = [1 / 12, 3 / 12, 6 / 12, 1, 2, 3, 5, 7, 10, 20, 30];

  const calculateYield = (tau) => {
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

  const formatTooltip = (value, name) => {
    if (name === 'yield') {
      return `${(value * 100).toFixed(2)}%`;
    }
    return value;
  };

  return (
    <Card className='my-6'>
      <CardHeader title="Interactive Nelson-Siegel-Svensson Yield Curve" />
      <CardContent>
        <Box sx={{ height: 400, marginBottom: 4 }}>
          <ResponsiveContainer width="90%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="label" label={{ value: 'Maturity', position: 'bottom' }} />
              <YAxis
                tickFormatter={(value) => `${(value * 100).toFixed(1)}%`}
                label={{ value: 'Yield', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                formatter={formatTooltip}
                labelFormatter={(label) => `Maturity: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="yield"
                stroke="#ff7300"
                dot={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Box>
              <Typography gutterBottom>β₀ (Level): {(beta0 * 100).toFixed(2)}%</Typography>
              <Slider
                value={beta0 * 100}
                onChange={(e, value) => setBeta0(value / 100)}
                max={10}
                min={0}
                step={0.1}
                valueLabelDisplay="auto"
              />
            </Box>
            <Box>
              <Typography gutterBottom>β₁ (Slope): {(beta1 * 100).toFixed(2)}%</Typography>
              <Slider
                value={beta1 * 100}
                onChange={(e, value) => setBeta1(value / 100)}
                max={5}
                min={-5}
                step={0.1}
                valueLabelDisplay="auto"
              />
            </Box>
            <Box>
              <Typography gutterBottom>β₂ (Curvature): {(beta2 * 100).toFixed(2)}%</Typography>
              <Slider
                value={beta2 * 100}
                onChange={(e, value) => setBeta2(value / 100)}
                max={5}
                min={-5}
                step={0.1}
                valueLabelDisplay="auto"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography gutterBottom>β₃ (Second Curvature): {(beta3 * 100).toFixed(2)}%</Typography>
              <Slider
                value={beta3 * 100}
                onChange={(e, value) => setBeta3(value / 100)}
                max={5}
                min={-5}
                step={0.1}
                valueLabelDisplay="auto"
              />
            </Box>
            <Box>
              <Typography gutterBottom>τ₁ (First Decay): {tau1.toFixed(2)}</Typography>
              <Slider
                value={tau1}
                onChange={(e, value) => setTau1(value)}
                max={5}
                min={0.1}
                step={0.1}
                valueLabelDisplay="auto"
              />
            </Box>
            <Box>
              <Typography gutterBottom>τ₂ (Second Decay): {tau2.toFixed(2)}</Typography>
              <Slider
                value={tau2}
                onChange={(e, value) => setTau2(value)}
                max={5}
                min={0.1}
                step={0.1}
                valueLabelDisplay="auto"
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default YieldCurveVisualization;
