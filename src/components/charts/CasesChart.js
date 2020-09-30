import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';

const useStyle = makeStyles(() => ({
  
  heading: {
    margin: '0 auto',
    maxWidth: 600,
    textAlign: 'center'
  }
}
));

export default function CasesChart({ dataThirtyDays }) {
  if (dataThirtyDays) {
    var { cases, deaths, recovered } = dataThirtyDays;
    if (cases) {
      var casesKeys = Object.keys(cases);
      var casesValues = Object.values(cases);
      console.log('CasesKeys', casesKeys);

      // Created A new array that calculates Daily new cases 
      var todayCases = casesValues.flatMap((val, ind) => ind === 0 ? [] : (val - casesValues[ind - 1]));
    }
  }



  const classes = useStyle();
  return (
    todayCases ? (<div className={classes.chartContainer}>
      <Typography className={classes.heading}>COVID-19 | Last 30 Days Daily Cases</Typography>
      <Bar data={{
        labels: casesKeys.slice(1),
        datasets: [
          {
            label: 'Confirmed Cases',
            backgroundColor: 'rgba(56, 209, 186,0.2)',
            borderColor: 'rgba(56, 209, 186,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(56, 209, 186,0.4)',
            hoverBorderColor: 'rgba(56, 209, 186,1)',
            data: todayCases
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