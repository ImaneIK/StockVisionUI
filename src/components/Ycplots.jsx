import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const Ycplots = ({ apiEndpoint }) => {
  const [plotData, setPlotData] = useState(null);

  useEffect(() => {
    axios.get(apiEndpoint).then((response) => {
      setPlotData(JSON.parse(response.data));
    });
  }, [apiEndpoint]);

  if (!plotData) return <div>Loading...</div>;

  return <Plot data={plotData.data} layout={plotData.layout} />;
};

export default Ycplots;
