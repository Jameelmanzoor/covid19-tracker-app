import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

const useStyle = makeStyles(() => ({
  chartContainer: {
    maxWidth: 1200,
    margin: '0 auto',
    marginTop: 50
  }
}
));

export default function LineCharts({ historicalData }) {
  if(historicalData) {
  var {cases, deaths, recovered} = historicalData;
  }
  const classes = useStyle();
  return (
    cases ? (<div className={classes.chartContainer}>
        <Line data={{
          labels: Object.keys(cases),
          datasets: [
            {
              label: 'Confirmed Cases',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: Object.values(cases)
            },
            {
              label: 'Deaths by Covid-19',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'red',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,255,132,0.4)',
              hoverBorderColor: 'rgba(255,150,132,1)',
              data: Object.values(deaths)
            },
            {
              label: 'Recovered Patients',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'green',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,255,132,0.4)',
              hoverBorderColor: 'rgba(255,150,132,1)',
              data: Object.values(recovered)
            }
          ]
        }} />
    </div>) : null
  );
}