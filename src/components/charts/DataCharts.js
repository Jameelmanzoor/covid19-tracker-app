import React, { useEffect, useState } from 'react';
import CasesChart from './CasesChart';
import DeathsChart from './DeathsChart';
import TimelineCharts from './TimelineChart';
import RecoveredChart from './RecoveredChart';
import DataTable from './DataTable';
import { Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  mainGrid: {
    maxWidth: 1200,
    margin: '0 auto',
  }
})
export const DataCharts = ({ country }) => {
  const [historicalData, setHistoricalData] = useState({});
  const [barData, setBarData] = useState({});
  const [countriesData, setCountriesData] = useState([]);
  const classes = useStyles();

  let url = (!country || country === 'Global') ? 'https://disease.sh/v3/covid-19/historical/all?lastdays=all' :
    `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`;
  let dataUrl = (!country || country === 'Global') ? 'https://disease.sh/v3/covid-19/historical/all?lastdays=31' :
    `https://disease.sh/v3/covid-19/historical/${country}?lastdays=31`;

  // Get timeline data for all the days 
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      (!country) ? setHistoricalData(data) : setHistoricalData(data.timeline);;

    }
    getData();

  }, [url, country])

  // Get timeline data for all the 31 Days
  useEffect(() => {
    async function getData() {
      const response = await fetch(dataUrl);
      const data = await response.json();
      (!country) ? setBarData(data) : setBarData(data.timeline);

    }
    getData();

  }, [dataUrl, country])

  // Get Summary of cases of all the countries
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://disease.sh/v3/covid-19/countries');
      const data = await response.json();
      setCountriesData(data);
    }
    getData();
  }, [])

  return (
    <div>
      <TimelineCharts historicalData={historicalData} />
      <Grid container spacing={3}  className={classes.mainGrid}>
        <Grid item xs={12} sm={6}>
          <CasesChart dataThirtyDays={barData} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DeathsChart dataThirtyDays={barData} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RecoveredChart dataThirtyDays={barData} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DataTable countriesData={countriesData} />
        </Grid>
      </Grid>
    </div>
  )
}