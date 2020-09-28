// This show  All over the World Corona Data

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'space-around',
    letterSpacing: '1px',
    alignItems: 'center',
    height: 100,
    borderRadius: 10
  },
  title: {
    color: 'blue',
    textTransform: 'capitalize',
    marginBottom: 0,
    paddingBottom: 0,
  },

  data: {
    marginTop: '0.2rem',
    paddingTop: 0,
  },
  confirmed: {
    backgroundColor: '#e1f7f4',
  },
  todayCases: {
    backgroundColor: '#b4d4cf',
    padding: 5,
    borderRadius: 8
  },
  deaths: {
    backgroundColor: '#ffcccb'
  },
  todayDeaths: {
    backgroundColor: '#e32c22',
    padding: 5,
    borderRadius: 8
  },
  recovered: {
    backgroundColor: '#acff80'
  },
  todayRecovered: {
    backgroundColor: '#72ab54',
    padding: 5,
    borderRadius: 8
  },
  active: {
    backgroundColor: '#fabc6b'
  },
  todayActive: {
    backgroundColor: '#e39322',
    padding: 5,
    borderRadius: 8
  }
}));

export default function DataCards({country}) {
  const [globalData, setGlobalData] = useState({});

  let url = (!country || country==='Global')?'https://disease.sh/v3/covid-19/all':`https://disease.sh/v3/covid-19/countries/${country}`;
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      let data = await response.json();
      setGlobalData(data);
    }
    getData();
  },[url])
  console.log('Data', globalData);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={`${classes.paper} ${classes.confirmed}`} elevation={3}>
            <div>
              <Typography className={classes.title} variant='h6'>Confirmed Cases</Typography>
              <Typography className={classes.data} variant='h6'>{globalData.cases}</Typography>
            </div>
            <div className={classes.containerTwo}>
              <Tooltip title='Today Confirmed Cases'>
                <Typography className={`${classes.data} ${classes.todayCases}`}> +{globalData.todayCases}</Typography>
              </Tooltip>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Paper className={`${classes.paper} ${classes.deaths}`} elevation={3}>
            <div>
              <Typography className={classes.title} variant='h6'>Total Deaths</Typography>
              <Typography className={classes.data} variant='h6'>{globalData.deaths}</Typography>
            </div>
            <div className={classes.containerTwo}>
              <Tooltip title='Today Deaths'>
                <Typography className={`${classes.data} ${classes.todayDeaths}`}> +{globalData.todayDeaths}</Typography>
              </Tooltip>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Paper className={`${classes.paper} ${classes.recovered}`} elevation={3}>
            <div>
              <Typography className={classes.title} variant='h6'>Recovered</Typography>
              <Typography className={classes.data} variant='h6'>{globalData.recovered}</Typography>
            </div>
            <div className={classes.containerTwo}>
              <Tooltip title='Today Recoverd Cases'>
                <Typography className={`${classes.data} ${classes.todayRecovered}`}> +{globalData.todayRecovered}</Typography>
              </Tooltip>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Paper className={`${classes.paper} ${classes.active}`} elevation={3}>
            <div>
              <Typography className={classes.title} variant='h6'>Active Cases</Typography>
              <Typography className={classes.data} variant='h6'>{globalData.active}</Typography>
            </div>
            <div className={classes.containerTwo}>
              <Tooltip title='Today New Active Cases'>
                <Typography className={`${classes.data} ${classes.todayActive}`}> 
                +{Math.abs(globalData.todayCases - globalData.todayDeaths - globalData.todayRecovered)}</Typography>
              </Tooltip>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
