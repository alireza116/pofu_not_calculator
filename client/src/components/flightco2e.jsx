import { useEffect, useState } from 'react';
import axios from 'axios';

function FlightCo2e() {
  const getFlightCo2e = async (distance, unit) => {
    const { data } = await axios.get(`/getFlightCo2e`, { params: { distance: distance, unit: unit } });
    console.log(data);
    setCo2e(data.value.toFixed(2));
    setCo2eUnit(data.unit);
  };

  const [flightDistance, setFlightDistance] = useState(0);
  const [distanceUnit, setDistanceUnit] = useState('km');
  const [co2e, setCo2e] = useState(0);
  const [co2eUnit, setCo2eUnit] = useState(0);

  useEffect(() => {
    getFlightCo2e(flightDistance, distanceUnit);
  }, [flightDistance, distanceUnit]);

  return (
    <div>
      <label for='flightDistance'>Flight Distance </label>
      <input
        className='border-2'
        type='number'
        name='flightDistance'
        onChange={(event) => {
          setFlightDistance(parseInt(event.target.value));
        }}
      />
      <select
        name='unit'
        id='distance-unit-select'
        onChange={(event) => {
          setDistanceUnit(event.target.value);
        }}>
        <option value='km'>Km</option>
        <option value='miles'>Miles</option>
      </select>
      <div className='font-bold'>
        {co2e} {co2eUnit} Co2 per passenger
      </div>
    </div>
  );
}

export default FlightCo2e;
