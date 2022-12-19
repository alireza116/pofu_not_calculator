import React, { useEffect, useState, Suspense, useRef } from "react";
import IdeoLogo from "../assets/ideo-logo.svg";
import { ArrowDown, ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import IconArrayByCount from "../components/IconArrayByCount";
import FlightCo2e from "../components/flightco2e";

function LabelMaker() {
  // const contentRef = useRef(null)
  // const scrollToContent = () => contentRef.current.scrollIntoView({ behavior: 'smooth' })
  const [countIcon, setCountIcon] = useState(0);
  const [iconSize, setIconSize] = useState(100);
  const [pct, setPct] = useState(100);

  const [flightDistance, setFlightDistance] = useState(0);
  const [distanceUnit, setDistanceUnit] = useState("km");
  const [co2e, setCo2e] = useState(0);
  const [co2eUnit, setCo2eUnit] = useState(0);
  const [visualUnit, setVisualUnit] = useState("oil");

  const flightCalcState = {
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
  };

  const iconPath = {
    oil: "/images/oilbarrel.svg",
    trees: "/images/tree.svg",
  };

  const bgColor = {
    oil: "bg-yellow-400",
    trees: "bg-green-400",
  };

  const getDescription = () => {
    switch (visualUnit) {
      case "oil":
        return `Or is like burning ${countIcon} barrels of oil each!`;
      case "trees":
        return `Or can be offset by growing ${countIcon} trees for ten years!`;
      default:
        return "";
    }
  };

  return (
    <>
      <main className="h-screen flex">
        <div className="flex-1 bg-zinc-900 p-24">
          <Link
            className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl text-white hover:italic duration-300"
            to="/home"
          >
            <ArrowLeft size={28} className="px-0 text-white" />
            &nbsp;Back
          </Link>

          <h1 className="text-left font-['Arima'] text-4xl leading-snug mt-10 text-gray-200">
            What if I flew there?
          </h1>
          <FlightCo2e state={flightCalcState} />
          {/* <div>
            <label htmlFor='count' className='text-left block text-lg font-medium text-gray-200 '>
              How many icons?
            </label>
            <div className='mt-1'>
              <input
                type='number'
                name='count'
                id='email'
                className='block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 p-1'
                placeholder={countIcon}
                onChange={(event) => {
                  setCountIcon(parseInt(event.target.value));
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor='size' className='text-left block text-lg font-medium text-gray-200 '>
              What should be the icon size?
            </label>
            <div className='mt-1'>
              <input
                type='range'
                name='count'
                min={10}
                max={100}
                default={50}
                className='w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 p-1'
                placeholder={countIcon}
                onChange={(event) => {
                  setIconSize(parseInt(event.target.value));
                }}
              />
            </div>
          </div> */}
        </div>
        <div className="flex-1 overflow-y-scroll p-12">
          <div className={`${bgColor[visualUnit]} pt-20 flex-1 p-10`}>
            <h1 className="text-left font-['Arima'] ml-3 mb-8 text-4xl">
              Flying {flightDistance} {distanceUnit}
            </h1>
            <h1 className="text-left font-['Arima'] text-2xl leading-snug text-gray-400 ml-3">
              is {co2e} {co2eUnit} of Co2 per passenger
            </h1>
            <h1 className="text-left font-['Arima'] ml-3 mb-8 text-4xl">
              {getDescription()}
            </h1>
            <IconArrayByCount
              count={countIcon}
              iconSize={iconSize}
              icon={iconPath[visualUnit]}
              pct={pct}
              showHighlightFirst={false}
              primaryColor="#202020"
              secondaryColor="#fafafa"
            ></IconArrayByCount>
          </div>
        </div>
      </main>
    </>
  );
}

export default LabelMaker;
