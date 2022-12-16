import React, { useEffect, useState, Suspense, useRef } from 'react';
import IdeoLogo from '../assets/ideo-logo.svg'
import { ArrowDown, ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import CoalBall from '../assets/coal-ball.gif';
import ElephantInRoom from '../assets/elephant-in-room.mp4';
import MusicRoom from '../assets/music-room.mp4';
import ParticleFields from '../assets/particle-fields.mp4';
import WhereWaldo from '../assets/where-is-waldo.mp4';

function PersuasiveGame(){
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
                        Persuasive Games
                    </p>
                    <p className= "text-left font-['Arima'] text-2xl leading-relaxed mt-10 mb-20 w-1/2">
                        Persuasive games use gamified techniques on top of exploratory explanation to enagage the audience. 
                        At IDEO, we use a range of technologies including creative coding libraries, AR/VR toolkits, game engines, 3D modeling softwares
                        to build games that translates scientific climate information into playful experiences. 
                    </p>
                </Fade>
                <hr></hr>
                <Fade bottom>
                    <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed rotate-180 mt-10 mb-20 w-1/2">
                        INSPIRATIONAL & SECONDARY RESEARCH 
                    </p>
                    <div className="relative" style={{height: "800px"}}>
                        <Fade left>
                            <video width="400" autoPlay={true} loop={true} muted className="absolute top-96 left-0">
                                <source src={WhereWaldo} type="video/mp4" />
                            </video>
                            <video width="600" autoPlay={true} loop={true} muted className="absolute top-0 left-10">
                                <source src={ElephantInRoom} type="video/mp4" />
                            </video>
                            <img src={CoalBall} alt="Coal Balls" className="absolute top-72 left-80" style={{width: "480px"}}/>
                         </Fade>
                         <Fade right>
                            <video width="600" autoPlay={true} loop={true} muted className="absolute top-20 right-40">
                                <source src={MusicRoom} type="video/mp4" />
                            </video>
                            <video width="400" autoPlay={true} loop={true} muted className="absolute top-96 right-20">
                                <source src={ParticleFields} type="video/mp4" />
                            </video>
                        </Fade>
                    </div>
                </Fade>
            </main> 
            <div className="p-36 bg-violet-100">
                <Fade bottom>
                    <div className="px-10">
                        <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-10 w-1/2">
                            PROVOCATION #1
                        </p>
                        <p className= "text-left font-['Arima'] text-6xl leading-normal mb-20">
                            An AR game that visualizes the carbon footprint of products as inflatable monsters or particle swarms that live in your space.
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
                            A where-is-waldo type of scavenger hunt under a given time limit for actions that reduces carbon emission.  
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

export default PersuasiveGame
