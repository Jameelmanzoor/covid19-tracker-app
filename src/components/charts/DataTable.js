import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { Compare } from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    overflowY: 'scroll',
    margin: '0 auto',
    maxHeight: 360,
  },
  heading: {
    margin: '0 auto',
    maxWidth: 600,
    textAlign: 'center',
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  }
}))(TableCell);

function createData(countryName, cases, todayCases, deaths, todayDeaths, recovered, todayRecovered) {
  return { countryName, cases, todayCases, deaths, todayDeaths, recovered, todayRecovered };
}

function compareCases(a, b) {
  // b should come before a in the sorted order
  if (a.cases < b.cases) {
    return 1;
    // b should come after a in the sorted order
  } else if (a.cases > b.cases) {
    return -1;
    // a and b are the same
  } else {
    return 0;
  }
}

export default function DataTable({ countriesData }) {
  if (countriesData) {
    const mododifiedData = [...countriesData].sort(compareCases);
    var rows = mododifiedData.map((item, index) => createData(item.country,
      item.cases, item.todayCases, item.deaths, item.todayDeaths, item.recovered, item.todayRecovered));
  }
  const classes = useStyles();

  return (
    rows ? (
      <>
        <Typography className={classes.heading}>COVID-19 | Worldwide Cases</Typography>
        <TableContainer component={Paper} className={classes.container}>
          <Table stickyHeader className={classes.table} size="small" aria-label="a dense table">
            <TableHead >
              <TableRow>
                <StyledTableCell align="left" >Country</StyledTableCell>
                <StyledTableCell align="left">Cases</StyledTableCell>
                <StyledTableCell align="left">Today Cases</StyledTableCell>
                <StyledTableCell align="left">Deaths</StyledTableCell>
                <StyledTableCell align="left">Today Deaths</StyledTableCell>
                <StyledTableCell align="left">Recoverd</StyledTableCell>
                <StyledTableCell align="left">Today Recoverd</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                rows.map((row) => (
                  <TableRow key={row.countryName}>
                    <TableCell component="th" scope="row">
                      {row.countryName}
                    </TableCell>

                    <TableCell align="left">{row.cases}</TableCell>
                    <TableCell align='left'>{row.todayCases}</TableCell>
                    <TableCell align="left">{row.deaths}</TableCell>
                    <TableCell align="left">{row.todayDeaths}</TableCell>
                    <TableCell align="left">{row.recovered}</TableCell>
                    <TableCell align="left">{row.todayRecovered}</TableCell>
                  </TableRow>

                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>) : null
  );

}
