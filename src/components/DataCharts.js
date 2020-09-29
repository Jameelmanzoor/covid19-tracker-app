import React, { useEffect, useState } from 'react';
import LineCharts from './LineChart';



export const DataCharts = ({country}) => {
  const [historicalData, setHistoricalData] = useState({});
  let url = (!country || country === 'Global')?'https://disease.sh/v3/covid-19/historical/all?lastdays=all':`https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`;
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      (!country)?setHistoricalData(data):setHistoricalData(data.timeline);;
      
    }
    getData();

  }, [url, country])
  console.log(historicalData);
  return (
    <div>
      <LineCharts historicalData={historicalData} />
    </div>
  )
}