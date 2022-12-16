import React, { useEffect, useState, Suspense, useRef } from 'react';
import IdeoLogo from '../assets/ideo-logo.svg'
import { ArrowDown, ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import Pictograms from '../assets/data-vis-1.png';
import Blast from '../assets/data-vis-2.png';
import Wrap from '../assets/data-vis-3.png';
import IdealPrac from '../assets/data-vis-4.png';
import Isotype from '../assets/data-vis-5.png';
import NYTClimate from '../assets/data-vis-6.png';
import Equivalent from '../assets/data-vis-7.png';



function InteractiveDataVis(){
    // const contentRef = useRef(null)
    // const scrollToContent = () => contentRef.current.scrollIntoView({ behavior: 'smooth' })

    return(
        <>
            <main className = "h-[1300px] m-36"> 
                <Link className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl" to="/home">
                    <ArrowLeft size={28} className="px-0"/>&nbsp;Back
                </Link>
                <Fade bottom>
                    <p className= "text-left font-['Arima'] text-8xl leading-snug mt-10">
                        Interactive Data Visualization
                    </p>
                    <p className= "text-left font-['Arima'] text-2xl leading-relaxed mt-10 mb-20 w-1/2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </Fade>
                <hr></hr>
                <Fade bottom>
                    <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed rotate-180 mt-10 mb-20 w-1/2">
                        INSPIRATIONAL & SECONDARY RESEARCH 
                    </p>
                    <div className="relative" style={{height: "800px"}}>
                        <Fade left>
                            <img src={Pictograms} alt="Coal Balls" className="absolute top-0 left-96 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                            <img src={Blast} alt="Coal Balls" className="absolute top-12 left-10 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                            <img src={Wrap} alt="Coal Balls" className="absolute top-0 right-96 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                            <img src={IdealPrac} alt="Coal Balls" className="absolute top-52 left-72 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                         </Fade>
                         <Fade right>
                            <img src={Isotype} alt="Coal Balls" className="absolute top-20 right-40 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                            <img src={NYTClimate} alt="Coal Balls" className="absolute top-72 right-4 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                            <img src={Equivalent} alt="Coal Balls" className="absolute top-72 rounded-xl drop-shadow-xl" style={{width: "280px", right: "30rem"}}/>
                        </Fade>
                    </div>
                </Fade>
            </main> 
            <div className="p-36 bg-violet-100">
                <Fade bottom>
                    <div className="px-10">
                        <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-10 w-1/2">
                            PROVOCATION
                        </p>
                        <p className= "text-left font-['Arima'] text-6xl leading-normal mb-20">
                            Carbon Footprint Drawing Tool. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>      
                </Fade>
            </div>
            <div className="p-36 bg-indigo-200">
                <Fade bottom>
                    <div className="px-10">
                        <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-10 w-1/2">
                            PROVOCATION #2
                        </p>
                        <p className= "text-left font-['Arima'] text-6xl leading-normal mb-20">
                            Scenario Simulations. Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit 
                        </p>
                    </div>      
                </Fade>
            </div>
            <div className="p-36">
                <Fade bottom>
                    <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed rotate-180 mt-10 mb-20 w-1/2">
                        WHAT TO CONSIDER
                    </p>
                </Fade>
            </div>
        </>
    );
}

export default InteractiveDataVis
