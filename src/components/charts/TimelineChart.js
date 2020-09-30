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

export default function TimelineChart({ historicalData }) {
  if(historicalData) {
  var {cases, deaths, recovered} = historicalData;
  }
  const classes = useStyle();
  return (
    cases ? (<div>
        <Typography className={classes.heading}>COVID-19 | Overview</Typography>
        <Line data={{
          labels: Object.keys(cases),
          datasets: [
            {
              label: 'Confirmed Cases',
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'transparent',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: Object.values(cases)
            },
            {
              label: 'Deaths by Covid-19',
              backgroundColor: 'transparent',
              borderColor: 'red',
              borderWidth: 1,
              hoverBackgroundColor: 'transparent',
              hoverBorderColor: 'rgba(255,150,132,1)',
              data: Object.values(deaths)
            },
            {
              label: 'Recovered Patients',
              backgroundColor: 'transparent',
              borderColor: 'green',
              borderWidth: 1,
              hoverBackgroundColor: 'transparent',
              hoverBorderColor: 'rgba(255,150,132,1)',
              data: Object.values(recovered)
            }
          ],
        }} />
    </div>) : null
  );
}