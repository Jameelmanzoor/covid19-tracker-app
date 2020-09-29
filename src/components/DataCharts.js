import React, { useEffect, useState } from 'react';
import BarCharts from './BarChart';
import DeathsChart from './DeathsChart';
import LineCharts from './LineChart';
import RecoveredChart from './RecoveredChart';



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
  

  const [barData, setBarData] = useState({});
  let dataUrl = (!country || country === 'Global')?'https://disease.sh/v3/covid-19/historical/all?lastdays=31':`https://disease.sh/v3/covid-19/historical/${country}?lastdays=31`;
  useEffect(() => {
    async function getData() {
      const response = await fetch(dataUrl);
      const data = await response.json();
      (!country)?setBarData(data):setBarData(data.timeline);
      
    }
    getData();

  }, [dataUrl, country])
  return (
    <div>
      <LineCharts historicalData={historicalData} />
      <BarCharts dataThirtyDays={barData}/>
      <DeathsChart dataThirtyDays={barData}/>
      <RecoveredChart dataThirtyDays={barData} />
    </div>
  )
}