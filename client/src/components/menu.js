import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import {
  Tag,
  Robot,
  Polygon,
  Infinity,
  ScribbleLoop,
  Parachute,
  Strategy,
} from "phosphor-react";

function Menu() {
  return (
    <div className="flex flex-col my-20">
      <Fade bottom>
        <div className="flex items-center">
          <h1 className="text-left font-['Arima'] text-6xl leading-relaxed my-4 flex items-center hover:text-orange-200 duration-300">
            <Tag size={80} />
            <Link className="mx-5" to="/carbon-labeling">
              &nbsp;Interactive Carbon Label Maker
            </Link>
          </h1>
          <div>
            <Link
              className="font-['Arima'] text-2xl mx-5 px-8 py-5 bg-amber-100 rounded-full height-12 hover:text-white hover:bg-stone-700 duration-300"
              to="/make-your-carbon-labels"
            >
              Play with Prototype
            </Link>
          </div>
        </div>
        <h1 className="text-left font-['Arima'] text-6xl leading-relaxed my-4 flex items-center hover:text-red-200 duration-300">
          <ScribbleLoop size={80} />
          <Link className="mx-5" to="/exploratory-explanation">
            &nbsp;Explorable Explanations
          </Link>
        </h1>
        <h1 className="text-left font-['Arima'] text-6xl leading-relaxed my-4 flex items-center hover:text-violet-200 duration-300">
          <Polygon size={80} />
          <Link className="mx-5" to="/data-visualization">
            &nbsp;Powerful Data Visualization
          </Link>
        </h1>

        <h1 className="text-left font-['Arima'] text-6xl leading-relaxed my-4 flex items-center hover:text-cyan-200 duration-300">
          <Robot size={80} />
          <Link className="mx-5" to="/climate-chatbot">
            &nbsp;Associative Climate Chatbot
          </Link>
        </h1>
        <h1 className="text-left font-['Arima'] text-6xl leading-relaxed my-4 flex items-center hover:text-indigo-200 duration-300">
          <Strategy size={80} />
          <Link className="mx-5" to="/persuasive-games">
            &nbsp;Persuasive Games
          </Link>
        </h1>
      </Fade>
    </div>
  );
}

export default Menu;
