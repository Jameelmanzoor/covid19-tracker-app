// This show  All over the World Corona Data

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50,

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    color: 'blue',
    textTransform: 'capitalize',
  },
  box: {
    display: 'block',
    float: 'right',
    position: 'relative',
  }
}));

export default function GlobalStatistics() {
  const [globalData, setGlobalData] = useState({})
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://disease.sh/v3/covid-19/all');
      let data = await response.json();
      setGlobalData(data);
    }
    getData();
  }, [])
  console.log(globalData);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={3}>
            <h3 className={classes.title}>Confirmed Cases</h3>
            <h3>{globalData.cases}</h3>
            <h6>Today Cases</h6>
            <h6>{globalData.todayCases}</h6>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={3}>
            <h3 className={classes.title}>Total Deaths</h3>
            <h3>{globalData.deaths}</h3>
            <h6>Today Deaths</h6>
            <h6>{globalData.todayDeaths}</h6>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={3}>
            <h3 className={classes.title}>Recovered</h3>
            <h3>{globalData.recovered}</h3>
            <h6>Today Recovered</h6>
            <h6>{globalData.todayRecovered}</h6>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={3}>
            <h3 className={classes.title}>Active Cases</h3>
            <h3>{globalData.active}</h3>
            <h6>Critical Cases</h6>
            <h6>{globalData.critical}</h6>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
