import React, { useState } from 'react';
import './App.css';
import DataCards from './components/DataCards';
import NavBar from './components/NavBar';

function App() {
  const [country, setCountry] = useState('');
  return (
    <>
      <NavBar country={country} setCountry={setCountry} />
      <DataCards country={country} />
    </>
  );
}

export default App;
