import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(countryName, cases, deaths, recovered) {
  return { countryName, cases, deaths, recovered };
}

export default function DataTable({ countriesData }) {
  if (countriesData) {
    var rows = countriesData.map((item, index) => createData(item.country, item.cases, item.deaths, item.recovered));
    }
  const classes = useStyles();

  return (
    rows?(
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Cases</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">Recoverd</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row) => (
            <TableRow key={row.countryName}>
              <TableCell component="th" scope="row">
                {row.countryName}
              </TableCell>
              <TableCell align="right">{row.cases}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
              <TableCell align="right">{row.recovered}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>):null
  );
}
