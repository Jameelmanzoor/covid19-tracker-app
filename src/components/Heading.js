import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  heading: {
    margin: '0 auto',
    maxWidth: 600,
    marginTop: 80,
    marginBottom: 20,
    textAlign: 'center'
  }
}))

export const Heading = ({ country }) => {
  const classes = useStyles();
  return (
    (!country) ? < Typography variant='h4' className={classes.heading} > COVID-19 Situation All Over the
      World</Typography> : <Typography variant='h4' className={classes.heading}> COVID-19 Situation in {country}</Typography>
  )
}
