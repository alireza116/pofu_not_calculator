import React, { useEffect, useState, Suspense, useRef } from 'react';
import IdeoLogo from '../assets/ideo-logo.svg';
import { ArrowLeft, Tag, Circle, DownloadSimple } from 'phosphor-react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import IconArrayByCount from '../components/IconArrayByCount';
import FlightCo2e from '../components/flightco2e';
import html2canvas from 'html2canvas';

function LabelMaker() {
  // const contentRef = useRef(null)
  // const scrollToContent = () => contentRef.current.scrollIntoView({ behavior: 'smooth' })
  const [countIcon, setCountIcon] = useState(0);
  const [iconSize, setIconSize] = useState(100);
  const [pct, setPct] = useState(100);
  const [labelHeight, setLabelHeight] = useState(0);
  const [labelWidth, setLabelWidth] = useState(0);
  const [physicalLabelHeight, setPhysicalLabelHeight]= useState(0);

  const [flightDistance, setFlightDistance] = useState(0);
  const [distanceUnit, setDistanceUnit] = useState('km');
  const [co2e, setCo2e] = useState(0);
  const [co2eUnit, setCo2eUnit] = useState('lb');
  const [visualUnit, setVisualUnit] = useState('oil');

  const ref = useRef(null)

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

  useEffect(() => {
    setLabelHeight(ref.current.clientHeight)
  },[flightDistance, visualUnit])

  useEffect(() => {
    setLabelWidth(ref.current.clientWidth)
  },[])

  useEffect(() => {
    setPhysicalLabelHeight(((labelHeight/labelWidth)*4).toFixed(2))
  },[labelHeight])

  const iconPath = {
    oil: '/images/oilbarrel.svg',
    trees: '/images/tree2.svg',
  };

  const bgColor = {
    oil: 'bg-amber-200',
    trees: 'bg-lime-200',
  };

  const fillColor = {
    oil: 'bg-amber-50',
    trees: 'bg-lime-50',
  };

  const getDescription = () => {
    switch (visualUnit) {
      case 'oil':
        return `Or is like burning ...`;
      case 'trees':
        return `Or can be offset by growing ...`;
      default:
        return '';
    }
  };

  const getEquivalence = () => {
    switch (visualUnit) {
      case 'oil':
        return `${countIcon} barrels of oil`;
      case 'trees':
        return `${countIcon} trees`;
      default:
        return '';
    }
  };

  const getExplanation = () => {
    switch (visualUnit) {
      case 'oil':
        return ``;
      case 'trees':
        return `~ for ten years ~`;
      default:
        return '';
    }
  };

  const handleDownloadLabel = async() => {
    const element = ref.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('carbon-label/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string'){
      link.href = data;
      link.download = 'carbon-label.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  }


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

          <h1 className="text-left font-['Arima'] text-2xl leading-snug mt-16 text-stone-500 italic">Make Your Carbon Labels for ...</h1>
          <div className="flex items-center">
            {/* <AirplaneTilt size={42} className="text-stone-400"/> */}
            <h1 className="text-left font-['Arima'] text-6xl leading-normal text-gray-200 italic">What if I flew there?</h1>
          </div>
          
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
        <div className='flex-1 overflow-y-scroll p-12'>
          <div className="flex pr-4">
            <Tag size={24} />
            <div className="flex text-left font-['Arima'] text-2xl leading-snug text-zinc-900 mx-3">
              <h1>Your carbon label</h1>
            </div>
            <div className="grow"></div>
            <DownloadSimple size={32} onClick={handleDownloadLabel} className="hover:cursor-pointer"/>
          </div>
          <div className="flex">
            <Tag size={24} color="white"/>
            <div className="flex text-left font-['Arima'] text-xl leading-snug text-zinc-900 mb-6 mx-3">
              <h1>W 4" x H {physicalLabelHeight}"</h1>
            </div>
          </div>
          <div className={`${bgColor[visualUnit]} flex-1 p-10 rounded-3xl`} ref={ref}>
            <div className="flex items-center">
              <Circle size={32} weight="fill" color="#ffffff" />
              <Circle size={32} weight="fill" className="mx-5" color="#ffffff"/>
              <div className="grow"></div>
              <div className="mx-5 font-['Arima'] text-stone-400 italic text-md">Print & Stick : Suitcase - Passport - Flight Pass</div>
              <Circle size={32} weight="fill" color="#ffffff"/>
            </div>
            <div className="divide-dotted divide-y-4 divide-zinc-700">
              <h1 className="text-left font-['Arima'] pt-4 text-md text-white opacity-0">
                Carbon Footprint : Flight Edition
              </h1>
              <div className="font-['Arima'] pt-2 mb-2">Carbon Footprint : Flight Edition</div>
              <div className="text-left font-['Arima'] px-6 py-8 text-2xl">
                <div className="flex items-center">
                  <div>
                    Flying 
                     <div className="mt-2">
                      <span className="font-bold text-5xl">{flightDistance}</span> {distanceUnit}
                    </div>
                  </div>
                  <div className="grow text-center text-5xl">=</div>
                  <div>
                      Co2 per passenger
                      <div className="mt-2">
                        <span className="font-bold text-5xl">{co2e} </span> 
                        <span className="text-2xl">{co2eUnit}</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="text-center font-['Arima'] py-10 text-4xl">
                <div className={`${fillColor[visualUnit]} py-10 rounded-3xl`}>
                  <div>{getDescription()}</div>
                  <div className="text-6xl mt-8 font-bold">
                    {getEquivalence()}&nbsp;
                    {/* <span className="text-4xl">{getExplanation()}</span> */}
                  </div>
                  <div className="font-bold mt-2">{getExplanation()}</div>
                </div>
              </div>
            </div>
            <IconArrayByCount
              count={countIcon}
              iconSize={iconSize}
              icon={iconPath[visualUnit]}
              pct={pct}
              showHighlightFirst={false}
              primaryColor='#202020'
              secondaryColor='#fafafa'>
            </IconArrayByCount>
            <div className="flex items-center">
              <Circle size={32} weight="fill" color="#ffffff" />
              <Circle size={32} weight="fill" className="grow" color="#ffffff"/>
              <div className="grow"></div>
              <div className="mx-5 font-['Arima']">POFU : NOT A CACULATOR <span className="font-bold">@ IDEO 2023</span></div>
              <Circle size={32} weight="fill" color="#ffffff"/>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default LabelMaker;
