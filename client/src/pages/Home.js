import React, { useEffect, useState, Suspense } from 'react';
import IdeoLogo from '../assets/ideo-logo.svg';
import { ArrowDown } from "phosphor-react";

import Menu from '../components/menu.js'

function Home(){
    return(
        <>
            <main className = "h-screen m-36"> 
                <img src={IdeoLogo} alt="React Logo" /> 
                <p className= "text-left font-['Arima'] text-8xl leading-snug mt-10">
                    HMW <span className="text-amber-400">make sense of the climate</span> & communicate carbon footprint calculations in intuitive & effective ways?
                </p>
                <div className="absolute bottom-10">
                    <ArrowDown size={80}/>
                </div>
            </main> 
            <div className = "h-screen m-36"> 
                <p className= "text-left font-['Arima'] text-4xl leading-snug mt-10">
                    We can do this through ...
                </p>
                <Menu />
            </div> 
        </>
    );
}

export default Home
