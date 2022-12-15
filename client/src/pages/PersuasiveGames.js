import React, { useEffect, useState, Suspense } from 'react';
import IdeoLogo from '../assets/ideo-logo.svg'
import { ArrowDown } from "phosphor-react";

function PersuasiveGame(){
    return(
        <>
            <main className = "h-screen m-36"> 
                <img src={IdeoLogo} alt="React Logo" /> 
                <p className= "text-left font-['Arima'] text-8xl leading-snug mt-10">
                    Persuasive Games
                </p>
                <div className="absolute bottom-10">
                    <ArrowDown size={80}/>
                </div>
            </main> 
        </>
    );
}

export default PersuasiveGame
