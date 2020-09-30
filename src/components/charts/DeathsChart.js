import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

const useStyle = makeStyles(() => ({
  heading: {
    margin: '0 auto',
    maxWidth: 600,
    textAlign: 'center'
  }
}
));

export default function DeathsChart({ dataThirtyDays }) {
  if (dataThirtyDays) {
    var { cases, deaths, recovered } = dataThirtyDays;
    if (deaths) {
      var casesKeys = Object.keys(deaths);
      var casesValues = Object.values(deaths);

      // Created A new array that calculates Daily new Deaths by Covid-19 
      var todayDeaths = casesValues.flatMap((val, ind) => ind === 0 ? [] : Math.abs((val - casesValues[ind - 1])));
    }
  }
  
  const classes = useStyle();
  return (
    todayDeaths ? (<div>
      <Typography className={classes.heading}>COVID-19 | Last 30 Days Fatal Cases</Typography>
      <Line data={{
        labels: casesKeys.slice(1),
        datasets: [
          {
            label: 'Fatal Cases',
            backgroundColor: 'transparent',
            borderColor: 'rgba(227, 44, 34,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'transparent',
            hoverBorderColor: 'rgba(227, 44, 34,1)',
            data: todayDeaths
          },
        ],
      }}
        width={20}
        height={200}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>) : null
  );
}