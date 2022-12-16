import React, { useEffect, useState, useRef, Suspense } from 'react';
import IdeoLogo from '../assets/ideo-logo.svg';
import { ArrowDown } from "phosphor-react";
import Fade from 'react-reveal/Fade';

import Menu from '../components/Menu.js'
import GradientBg from '../assets/gradient-bg.mp4'

function Home(){
    const menuRef = useRef(null)
    const scrollToMenu = () => menuRef.current.scrollIntoView({ behavior: 'smooth' })

    return(
        <>
            <video height="100vh" autoPlay={true} loop={true} muted className="absolute top-0" style={{minHeight: "100vh", objectFit: "cover", zIndex: "-1"}}>
                <source src={GradientBg} type="video/mp4" />
            </video> 
            <main className = "h-screen m-36 opening-section">
                <img src={IdeoLogo} alt="Ideo Logo" className="z-10"/> 
                <Fade bottom>
                    <p className= "text-left font-['Arima'] text-8xl leading-snug mt-10 z-1">
                        HMW <span className="text-orange-600 font-semibold">make sense of the climate </span> 
                        & communicate carbon footprint calculations  
                        <span className="text-indigo-600 font-semibold"> in intuitive & effective ways</span>?
                    </p>
                </Fade>
                <div className="absolute bottom-10">
                    <ArrowDown size={60} onClick={scrollToMenu} />
                </div>
            </main> 
            <div className = "h-screen p-36" ref = {menuRef}> 
                <p className= "text-left font-['Arima'] text-4xl leading-snug mt-10">
                    We can do this through ...
                </p>
                <Menu />
            </div> 
        </>
    );
}

export default Home