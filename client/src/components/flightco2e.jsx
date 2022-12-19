import { useEffect, useState } from 'react';
import axios from 'axios';

function FlightCo2e({ state }) {
  const {
    flightDistance,
    setFlightDistance,
    distanceUnit,
    setDistanceUnit,
    co2e,
    setCo2e,
    co2eUnit,
    setCo2eUnit,
    countIcon,
    setCountIcon,
    visualUnit,
    setVisualUnit,
  } = state;

  const metricEqv = {
    oil: 0.0023,
    trees: 0.017,
  };

  const ImperialEqv = {
    oil: 0.0011,
    trees: 0.008,
  };

  const getFlightCo2e = async (distance, unit) => {
    const { data } = await axios.get(`/getFlightCo2e`, { params: { distance: distance, unit: unit } });
    console.log(data);
    const dataValue = data.value.toFixed(2);
    setCo2e(dataValue);
    setCo2eUnit(data.unit);
    if (unit === 'km') {
      console.log(dataValue * metricEqv[visualUnit]);
      setCountIcon((dataValue * metricEqv[visualUnit]).toFixed(1));
    } else {
      setCountIcon((dataValue * ImperialEqv[visualUnit]).toFixed(1));
    }
  };

  useEffect(() => {
    getFlightCo2e(flightDistance, distanceUnit);
  }, [flightDistance, distanceUnit, visualUnit]);

  return (
    <div className='pt-10 flex flex-wrap'>
      <label for='flightDistance' className="text-left font-['Arima'] text-4xl leading-snug text-gray-200">
        Well, how far are you flying?
      </label>
      <input
        className="appearance-none bg-transparent border-b border-gray-200 font-['Arima'] text-4xl text-gray-200 w-1/3 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type='number'
        name='flightDistance'
        onChange={(event) => {
          setFlightDistance(parseInt(event.target.value));
        }}
      />
      <select
        className="block appearance-none  w-1/4 bg-transparent border-b border-gray-200 hover:border-gray-200 px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline font-['Arima'] text-4xl text-gray-200"
        name='unit'
        id='distance-unit-select'
        onChange={(event) => {
          setDistanceUnit(event.target.value);
        }}>
        <option value='km'>Km</option>
        <option value='miles'>Miles</option>
      </select>
      <h1 className="pt-12 font-['Arima'] text-4xl text-gray-200">.</h1>
      <div className='w-full flex flex-wrap'>
        <h1 className="text-left pt-12 font-['Arima'] text-4xl text-gray-200">How would you like to visual it?</h1>
        <select
          className="block w-3/5 appearance-none bg-transparent border-b border-gray-200 hover:border-gray-200 pt-10 pr-8 leading-tight focus:outline-none focus:shadow-outline font-['Arima'] text-4xl text-gray-200"
          name='unit'
          id='distance-unit-select'
          onChange={(event) => {
            setVisualUnit(event.target.value);
          }}>
          <option value='oil'>Barrels of Oil</option>
          <option value='trees'>Trees To Offset</option>
        </select>
      </div>
    </div>
  );
}

export default FlightCo2e;
