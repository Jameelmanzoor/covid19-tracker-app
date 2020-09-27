import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    flexGrow: 1,
    margin: 0,
    padding: 0,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  formControl: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    margin: theme.spacing(1),
    minWidth: 120,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),

    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
}));

export default function NavBar({ country, setCountry }) {
  const [countries, setCountries] = useState([{}]);
  useEffect(() => {
    async function getCountriesData() {
      const response = await fetch('https://disease.sh/v3/covid-19/countries');
      let data = await response.json();
      setCountries(data);
    }
    getCountriesData();
  }, [])
  // console.log(countries);
  const classes = useStyles();
  // We have Pushed all the countries to a list 
  let countriesList = ['Global'];
  countries.map((count) => countriesList.push(count.country));
  // console.log(countriesList);

  const handleChange = (event) => {
    setCountry(event.target.value);

  };
  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h4" noWrap>
            COVID-19 Tracker App
          </Typography>
          <div>
            <FormControl className={classes.formControl}>
              <Select
                value={country}
                onChange={handleChange}
                displayEmpty
              >
                {countriesList.map((country, index) => <MenuItem key={index} value={country}>{country}</MenuItem>)}
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
