import React, { useEffect, useState } from 'react';
import BarCharts from './BarChart';
import DeathsChart from './DeathsChart';
import LineCharts from './LineChart';
import RecoveredChart from './RecoveredChart';
import DataTable from './DataTable';



export const DataCharts = ({ country }) => {
  const [historicalData, setHistoricalData] = useState({});
  const [barData, setBarData] = useState({});
  const [countriesData, setcountriesData] = useState([]);

  let url = (!country || country === 'Global') ? 'https://disease.sh/v3/covid-19/historical/all?lastdays=all' :
    `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`;
  let dataUrl = (!country || country === 'Global') ? 'https://disease.sh/v3/covid-19/historical/all?lastdays=31' :
    `https://disease.sh/v3/covid-19/historical/${country}?lastdays=31`;


  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      (!country) ? setHistoricalData(data) : setHistoricalData(data.timeline);;

    }
    getData();

  }, [url, country])

  useEffect(() => {
    async function getData() {
      const response = await fetch(dataUrl);
      const data = await response.json();
      (!country) ? setBarData(data) : setBarData(data.timeline);

    }
    getData();

  }, [dataUrl, country])

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://disease.sh/v3/covid-19/countries');
      const data = response.json();
      setcountriesData(data)
    }
    getData()
  }, [])
  
  return (
    <div>
      <LineCharts historicalData={historicalData} />
      <BarCharts dataThirtyDays={barData} />
      <DeathsChart dataThirtyDays={barData} />
      <RecoveredChart dataThirtyDays={barData} />
      <DataTable countriesData={countriesData}/>
    </div>
  )
}