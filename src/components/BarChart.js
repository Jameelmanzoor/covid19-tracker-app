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

export default function BarCharts({ dataThirtyDays }) {
  if(dataThirtyDays) {
  var {cases, deaths, recovered} = dataThirtyDays;
  if(cases) {
  var casesKeys = Object.keys(cases);
  var casesValues = Object.values(cases);
  console.log('CasesKeys', casesKeys);
  var todayCases = casesValues.flatMap((val, ind) => ind===0?[]:(val - casesValues[ind-1]));
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
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
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