import React, { useEffect, useState } from 'react';
import LineCharts from './LineChart';



export const DataCharts = () => {
  const [historicalData, setHistoricalData] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://disease.sh/v3/covid-19/historical/Afghanistan?lastdays=all');
      const data = await response.json();
      setHistoricalData(data.timeline);
    }
    getData();

  }, [])
  console.log(historicalData);
  return (
    <div>
      <LineCharts historicalData={historicalData} />
    </div>
  )
}