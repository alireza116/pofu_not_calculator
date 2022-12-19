import React, { useEffect, useState, Suspense, useRef } from 'react';
import IdeoLogo from '../assets/ideo-logo.svg'
import { ArrowRight, ArrowLeft, HouseSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import BackButton from '../components/BackButton.js'

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
                <BackButton />
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
                    <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-20 w-1/2">
                        INSPIRATIONAL & SECONDARY RESEARCH 
                    </p>
                    <div className="relative" style={{height: "800px"}}>
                        <Flip left>
                            <a href="https://www.nytimes.com/guides/year-of-living-better/how-to-reduce-your-carbon-footprint" target="_blank">
                                <Flip left>
                                <video width="400" autoPlay={true} loop={true} muted className="absolute top-96 left-0">
                                    <source src={WhereWaldo} type="video/mp4" />
                                </video>
                                </Flip>
                            </a>
                            <a href="https://www.everydayexperiments.com/extreme-measures" target="_blank">
                                <Flip left>
                                <video width="600" autoPlay={true} loop={true} muted className="absolute top-0 left-10">
                                <source src={ElephantInRoom} type="video/mp4" />
                                </video>
                                </Flip>
                            </a>
                            {/* <a href="https://field.blue/work/ikea-space10-everyday-experiments" target="_blank">
                                <Flip left>
                                <video width="600" autoPlay={true} loop={true} muted className="absolute top-0 left-10">
                                <source src={ElephantInRoom} type="video/mp4" />
                                </video>
                                </Flip>
                            </a> */}
                            <Flip left>
                                <img src={CoalBall} alt="Coal Balls" className="absolute top-72 left-80" style={{width: "480px"}}/>
                            </Flip>
                         </Flip>
                         <Flip right>
                            <a href="https://www.everydayexperiments.com/spatial-instruments" target="_blank">
                                <Flip left>
                                <video width="600" autoPlay={true} loop={true} muted className="absolute top-20 right-36">
                                <source src={MusicRoom} type="video/mp4" />
                                </video>
                                </Flip>
                            </a>
                            <a href="https://www.everydayexperiments.com/sound-bubbles" target="_blank">
                                <Flip left>
                                <video width="400" autoPlay={true} loop={true} muted className="absolute top-96 right-10">
                                <source src={ParticleFields} type="video/mp4" />
                                </video>
                                </Flip>
                            </a>
                        </Flip>
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
            <div className="px-36 pt-10 pb-36 h-[1000px]">
                <Fade bottom>
                    <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-20 w-1/2">
                        WHAT TO CONSIDER
                    </p>
                    <div className= "relative mb-20">
                        <div className= "absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-indigo-100 aspect-square w-72 -rotate-2">
                            <h1>Gaming mechanisms to engage users</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-violet-100 aspect-square w-72 left-96 rotate-2">
                            <h1>Accessible interactions</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-indigo-100 aspect-square w-72 right-80 -rotate-3">
                            <h1>Balancing education and fun</h1>
                        </div>
                    </div>
                    <div className= "flex mb-20">
                        <div className= "absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-violet-100 aspect-square w-72 top-80 left-16 rotate-2">
                            <h1>Browser-based games vs. AR/VR games</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-violet-100 aspect-square w-72 top-80 right-52 rotate-2">
                            <h1>Casual games vs. competitive games</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-indigo-100 aspect-square w-72 top-80 left-96">
                            <h1>Who can we persuade through games?</h1>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="px-36 pt-10 pb-36 h-[60px]">
                <Fade bottom>
                    <div className="grid grid-cols-3">
                        <Link className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl justify-self-start" to="/climate-chatbot">
                            <ArrowLeft size={28} className="px-0"/>&nbsp;Associative Climate Chatbot
                        </Link>
                        <Link className="justify-self-center" to="/home">
                            <HouseSimple size={36} className="justify-self-center"/>
                        </Link>
                        <Link className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl justify-self-end text-white" to="/home">
                            Associative Cliate Chatbot  &nbsp;<ArrowRight size={28} className="px-0"/>
                        </Link>
                    </div>
                </Fade>
            </div>
            
        </>
    );
}

export default PersuasiveGame
