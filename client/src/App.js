import { useEffect, useState } from 'react';
import axios from 'axios';
import IconArray from './components/IconArray';
import './App.css';
import FlightCo2e from './components/flightco2e';

function App() {
  const getData = async () => {
    const { data } = await axios.get(`/getThings`);
    console.log(data);
  };

  const [numCols, setNumCols] = useState(10);
  const [numRows, setNumRows] = useState(10);
  const [pct, setPct] = useState(50);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>
      <header className='text-3xl font-bold underline'>
        <p>IDEO website for Label Maker</p>
      </header>
      <hr></hr>
      <FlightCo2e />
      <input
        type='range'
        min={5}
        max={20}
        onChange={(event) => {
          setNumCols(parseInt(event.target.value));
        }}
      />
      <input
        type='range'
        min={5}
        max={20}
        onChange={(event) => {
          setNumRows(parseInt(event.target.value));
        }}
      />
      <input
        type='range'
        min={0}
        max={100}
        onChange={(event) => {
          setPct(parseInt(event.target.value));
        }}
      />
      <div>{numCols * numRows}</div>
      <div className='mt-20' style={{ width: '600px', height: '600px' }}>
        <IconArray numCols={numCols} numRows={numRows} pct={pct}></IconArray>
      </div>
    </div>
  );
}

export default App;
