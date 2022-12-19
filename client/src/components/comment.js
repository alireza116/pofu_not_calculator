import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import {
    ArrowSquareOut
  } from "phosphor-react";

function Comment(){
    return(
        <div className="relative flex flex-col mx-36 mb-24 px-28 py-14 bg-amber-100 rounded-3xl comment-box" > 
            <Fade bottom>
                {/* <img src={Flowers} alt="Coal Balls" className="absolute top-0 left-12 rounded-xl"/> */}
                <p className= "text-left font-['Arima'] text-7xl leading-snug mt-10 z-1">
                    Thoughts &  Comments?
                </p>
                <p className= "text-left font-['Arima'] text-2xl leading-snug mt-10">
                    This short 2-week project is just the starting point as we begin to 
                    think about, collect, experiment and prototype ideas around calculating and communicating carbon footprint information.
                    <br></br><br></br>
                    We hope that this website will expand overtime into a library of ideas, experiments and prototypes that showcases IDEO's capability and creativity in approaching climate & carbon topics. 
                    <br></br><br></br>
                    Contributions are always welcomed and celebrated !
                </p>
                <p className= "text-left font-['Arima'] text-3xl leading-snug mt-12 mb-10">
                    <a className="flex"> 
                        <ArrowSquareOut size={48}/> 
                        <p className="mx-4 underline underline-offset-8">Fill out Google Form</p> 
                        <p className="text-xl flex items-center px-8 py-2 bg-indigo-50 text-indigo-700 rounded-full">Coming soon</p>
                    </a>
                </p>
            </Fade>
        </div>
    );
}

export default Comment;