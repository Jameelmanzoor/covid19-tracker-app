import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';

const useStyle = makeStyles(() => ({
  chartContainer: {
    maxWidth: 1200,
    margin: '0 auto',
    marginTop: 50,
  },
  heading: {
    margin: '0 auto',
    maxWidth: 600,
    textAlign: 'center'
  }
}
));

export default function RecoveredChart({ dataThirtyDays }) {
  if (dataThirtyDays) {
    var { cases, deaths, recovered } = dataThirtyDays;
    if (recovered) {
      var casesKeys = Object.keys(recovered);
      var casesValues = Object.values(recovered);

      // Created A new array that calculates Daily new recovered cases 
      var todayRecovered = casesValues.flatMap((val, ind) => ind === 0 ? [] : Math.abs((val - casesValues[ind - 1])));
    }
  }


  const classes = useStyle();
  return (
    todayRecovered ? (<div className={classes.chartContainer}>
      <Typography className={classes.heading}>COVID-19 | Last 30 Days Daily Recovered Cases</Typography>
      <Bar data={{
        labels: casesKeys.slice(1),
        datasets: [
          {
            label: 'Recovered',
            backgroundColor: 'rgba(2,30,7, 0.6)',
            borderColor: 'rgba(2,30,7,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(2,30,7,0.8)',
            hoverBorderColor: 'rgba(2,30,7,1)',
            data: todayRecovered
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