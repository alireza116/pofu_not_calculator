import React, { useEffect, useState, Suspense, useRef } from 'react';
import IdeoLogo from '../assets/ideo-logo.svg'
import { ArrowDown, ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';


function LabelMaker(){
    // const contentRef = useRef(null)
    // const scrollToContent = () => contentRef.current.scrollIntoView({ behavior: 'smooth' })

    return(
        <>
            <main className = "h-screen flex"> 
                <div className="flex-1 bg-zinc-900 p-24">
                    <Link className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl text-white" to="/home">
                        <ArrowLeft size={28} className="px-0 text-white"/>&nbsp;Back
                    </Link>
                    <h1 className= "text-left font-['Arima'] text-8xl leading-snug mt-10 text-white">//Input Area</h1>
                </div>
                <div className="flex-1 overflow-y-scroll p-24">
                    <div className="bg-amber-200">
                        // label area
                    </div>
                </div>
            </main> 
        </>
    );
}

export default LabelMaker
