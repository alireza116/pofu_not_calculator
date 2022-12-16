import React, { useEffect, useState, Suspense } from 'react';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import { Tag, Robot, Polygon, Infinity, ScribbleLoop, Parachute, Strategy  } from "phosphor-react";

function Menu(){
    return(
        <div className="flex flex-col my-10"> 
            <Fade bottom>
                <h1 className= "text-left font-['Arima'] text-6xl leading-relaxed my-4 flex items-center">
                    <Tag size={80} /><Link className="mx-5" to="/carbon-labeling">&nbsp;Generative Carbon Labeling</Link> 
                    <Link className="text-2xl mx-5 px-8 py-5 bg-amber-100 rounded-full" to="/make-your-carbon-labels">Play with Prototype</Link>
                </h1>
                <h1 className= "text-left font-['Arima'] text-6xl leading-relaxed my-4 flex items-center">
                    <Robot size={80} /><Link className="mx-5" to="/climate-chatbot">&nbsp;Associative Climate Chabot</Link>
                </h1>
                <h1 className= "text-left font-['Arima'] text-6xl leading-relaxed my-4 flex items-center">
                    <Polygon size={80} /><Link className="mx-5" to="/interactive-data-vis">&nbsp;Interactive Data Visualization</Link>
                </h1>
                <h1 className= "text-left font-['Arima'] text-6xl leading-relaxed my-4 flex items-center">
                    <ScribbleLoop size={80} /><Link className="mx-5" to="/exploratory-explanation">&nbsp;Exploratory Explanation</Link>
                </h1>
                <h1 className= "text-left font-['Arima'] text-6xl leading-relaxed my-4 flex items-center">
                    <Strategy size={80} /><Link className="mx-5" to="/persuasive-games">&nbsp;Persuasive Games</Link>
                </h1>
            </Fade>
        </div>
    );
}

export default Menu
