import React, {useState } from 'react';
import './App.css';
import DataCards from './components/DataCards';
import {DataCharts} from './components/charts/DataCharts';
import { Heading } from './components/Heading';
import NavBar from './components/NavBar';

function App() {
  const [country, setCountry] = useState('');
  return (
    <>
      <NavBar country={country} setCountry={setCountry} />
      <Heading country={country}/>
      <DataCards country={country} />
      <DataCharts country={country} />
    </>
  );
}

export default App;
