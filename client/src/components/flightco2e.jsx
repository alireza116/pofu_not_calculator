import { useEffect, useState } from "react";
import axios from "axios";
import { Ruler, HandEye } from "phosphor-react";

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

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

  const [startCity, setStartCity] = useState("");
  const [endCity, setEndCity] = useState("");
  const [numberOfFlights, setNumberOfFlights] = useState(1);
  const [osmFlightDistance, setOsmFlightDistance] = useState(null);

  const getDistance = async (unit) => {
    console.log("get distance");
    if (!startCity || !endCity) return;
    let startLoc = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${startCity}&format=json&limit=1`
    );
    let endLoc = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${endCity}&format=json&limit=1`
    );
    let startLocBest = startLoc.data[0];

    let endLocBest = endLoc.data[0];

    let distInKm = getDistanceFromLatLonInKm(
      parseFloat(startLocBest["lat"]),
      parseFloat(startLocBest["lon"]),
      parseFloat(endLocBest["lat"]),
      parseFloat(endLocBest["lon"])
    );

    // return (await unit) === "km" ? distInKm : distInKm * 0.621371;
    return distInKm;
  };

  const handleOSMFlightDistance = async () => {
    let distance = await getDistance(distanceUnit);
    setOsmFlightDistance(distance.toFixed(2));
    return distance;
  };

  const metricEqv = {
    oil: 0.0023,
    trees: 0.017,
  };

  const ImperialEqv = {
    oil: 0.0011,
    trees: 0.008,
  };

  const getFlightCo2e = async (distance, unit) => {
    const { data } = await axios.get(`/getFlightCo2e`, {
      params: {
        distance: distance,
        unit: unit,
      },
    });
    console.log(data);
    const dataValue = data.value.toFixed(2);
    setCo2e(dataValue);
    setCo2eUnit(data.unit);
    if (unit === "km") {
      console.log(dataValue * metricEqv[visualUnit]);
      setCountIcon((dataValue * metricEqv[visualUnit]).toFixed(1));
    } else {
      setCountIcon((dataValue * ImperialEqv[visualUnit]).toFixed(1));
    }
  };

  useEffect(() => {
    console.log("os flight distance", osmFlightDistance);
    let dist =
      distanceUnit === "km" ? osmFlightDistance : osmFlightDistance * 0.621371;
    dist = dist * numberOfFlights;
    setFlightDistance(dist);
  }, [osmFlightDistance, numberOfFlights, distanceUnit]);

  // useEffect(() => {
  //   let fd = flightDistance * numberOfFlights;
  //   console.log("flight distance", fd);
  //   setFlightDistance(flightDistance * numberOfFlights);
  // }, [numberOfFlights]);

  useEffect(() => {
    getFlightCo2e(flightDistance, distanceUnit);
  }, [flightDistance, visualUnit, distanceUnit]);

  // useEffect(() => {
  //   let calcDistance = async () => {
  //     let distance = await getDistance(distanceUnit);
  //     setFlightDistance(distance.toFixed(2));
  //   };
  //   calcDistance();
  // }, [distanceUnit]);

  return (
    <div className="flex flex-wrap">
      <div className="mx-0 px-0 mt-20 text-left">
        <div className="mx-0 px-0">
          <label
            for="startCity"
            className="text-left font-['Arima'] text-2xl leading-snug text-gray-200 mx-3"
          >
            Eter your origin and destination for a flight!
          </label>
          <div className="flex items-center ">
            <Ruler size={42} className="text-stone-400" />

            <label
              for="startCity"
              className="text-left font-['Arima'] text-2xl leading-snug text-gray-200 mx-3"
            >
              Where are you flying from?
            </label>
            <input
              className="appearance-none bg-transparent border-b border-gray-200 font-['Arima'] text-1xl text-gray-200 mr-3 px-2 h-auto leading-tight focus:outline-none pt-2 mb-2"
              type="text"
              name="startCity"
              onChange={(event) => {
                // setFlightDistance(parseInt(event.target.value));
                setStartCity(event.target.value);
                console.log(event.target.value);
              }}
            />
          </div>
          <div className="flex items-center">
            <Ruler size={42} className="text-stone-400" />
            <label
              for="endCity"
              className="text-left font-['Arima'] text-2xl leading-snug text-gray-200 mx-3"
            >
              Where are you flying to?
            </label>
            <input
              className="appearance-none bg-transparent border-b border-gray-200 font-['Arima'] text-1xl text-gray-200 mr-3 px-2 h-auto leading-tight focus:outline-none pt-2 mb-2"
              type="text"
              name="endCity"
              onChange={(event) => {
                // setFlightDistance(parseInt(event.target.value));
                setEndCity(event.target.value);
                console.log(event.target.value);
              }}
            />
          </div>

          <button
            onClick={handleOSMFlightDistance}
            type="button"
            className="mb-8 mt-8 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Set Origin and Destination!
          </button>
          <div className="flex items-center mb-14">
            <Ruler size={42} className="text-stone-400" />
            <label
              for="numberOfFlights"
              className="text-left font-['Arima'] text-2xl leading-snug text-gray-200 mx-3"
            >
              How many flights would you take?
            </label>
            <input
              className="appearance-none bg-transparent border-b border-gray-200 font-['Arima'] text-1xl text-gray-200 mr-3 px-2 h-auto leading-tight focus:outline-none pt-2 mb-2"
              type="number"
              name="numberOfFlights"
              value={numberOfFlights}
              onChange={(event) => {
                setNumberOfFlights(parseInt(event.target.value));
              }}
            />
          </div>
        </div>
        <div className="mx-0 px-0">
          <div className="flex">
            <Ruler size={42} className="text-stone-400" />
            <label
              for="startCity"
              className="text-left font-['Arima'] text-2xl leading-snug text-gray-200 mx-3"
            >
              {`${numberOfFlights} flights from ${
                startCity ? startCity : "START CITY"
              } to ${endCity ? endCity : "END CITY"}`}
            </label>
          </div>
        </div>
        <div className="flex">
          <input
            className="appearance-none bg-transparent border-b border-gray-200 font-['Arima'] text-2xl text-gray-200 w-1/3 mr-3 px-2 h-auto leading-tight focus:outline-none pt-10"
            type="number"
            name="flightDistance"
            value={flightDistance.toFixed(2)}
            disabled
            onChange={async (event) => {
              setFlightDistance(parseInt(event.target.value));
            }}
          />
          <select
            className="block appearance-none w-1/4 bg-transparent border-b border-gray-200 hover:border-gray-200 px-4 pt-10 leading-tight focus:outline-none focus:shadow-outline font-['Arima'] text-2xl text-gray-200"
            name="unit"
            id="distance-unit-select"
            onChange={(event) => {
              setDistanceUnit(event.target.value);
            }}
          >
            <option value="km">Km</option>
            <option value="miles">Miles</option>
          </select>
          <h1 className="pt-12 font-['Arima'] text-4xl text-gray-200">.</h1>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-14">
        <div className="flex">
          <HandEye size={42} className="text-stone-400" />
          <label
            for="flightDistance"
            className="text-left font-['Arima'] text-2xl leading-snug text-gray-200 mx-3"
          >
            How would you like to visualize it?
          </label>
        </div>
        <select
          className="block w-3/5 appearance-none bg-transparent border-b border-gray-200 hover:border-gray-200 pt-10 pr-8 leading-tight focus:outline-none focus:shadow-outline font-['Arima'] text-2xl text-gray-200"
          name="unit"
          id="distance-unit-select"
          onChange={(event) => {
            setVisualUnit(event.target.value);
          }}
        >
          <option value="oil" selected={visualUnit === "oil"}>
            Barrels of Oil
          </option>
          <option value="trees" selected={visualUnit === "trees"}>
            Trees To Offset
          </option>
        </select>
      </div>
    </div>
  );
}

export default FlightCo2e;
