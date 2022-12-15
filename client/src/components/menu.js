import React, { useEffect, useState, Suspense } from 'react';
import { Link } from "react-router-dom";
import { Tag, Robot, Polygon, Infinity, ScribbleLoop, Parachute, Strategy  } from "phosphor-react";

function Menu(){
    return(
        <div className="flex flex-col my-10"> 
            <h1 className= "text-left font-['Arima'] text-6xl leading-relaxed my-5 flex items-center">
                <Tag size={80} /><span className="mx-5">&nbsp;Generative Carbon Labeling</span> <div className="text-2xl mx-5 px-8 py-5 bg-amber-100 rounded-full">Play with Prototype</div>
            </h1>
            <h1 className= "text-left font-['Arima'] text-6xl leading-relaxed my-5 flex items-center">
                <Robot size={80} /><span className="mx-5">&nbsp;Associative Climate Chabot</span>
            </h1>
            <h1 className= "text-left font-['Arima'] text-6xl leading-relaxed my-5 flex items-center">
                <Polygon size={80} /><span className="mx-5">&nbsp;Interactive Data Visualization</span>
            </h1>
            <h1 className= "text-left font-['Arima'] text-6xl leading-relaxed my-5 flex items-center">
                <ScribbleLoop size={80} /><span className="mx-5">&nbsp;Exploratory Explanation</span>
            </h1>
            <h1 className= "text-left font-['Arima'] text-6xl leading-relaxed my-5 flex items-center">
                <Strategy size={80} /><Link className="mx-5" to="/persuasive-games">&nbsp;Persuasive Games</Link>
            </h1>
        </div>
    );
}

export default Menu
