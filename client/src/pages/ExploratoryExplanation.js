import React, { useEffect, useState, Suspense, useRef } from "react";
import IdeoLogo from "../assets/ideo-logo.svg";
import { ArrowRight, ArrowLeft, HouseSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

import BackButton from "../components/BackButton.js";

import PersuasiveStorytelling from "../assets/explorables-1.png";
import ExplorableExplanations from "../assets/explorables-2.png";
import Draw from "../assets/explorables-3.png";
import ClimateGoals from "../assets/explorables-4.png";
import ClimateMap from "../assets/explorables-5.png";
import IncomeMobility from "../assets/explorables-6.png";
import PolygonParable from "../assets/explorables-7.png";

function ExploratoryExplanation() {
  // const contentRef = useRef(null)
  // const scrollToContent = () => contentRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <main className="h-[1300px] m-36">
        <BackButton />
        <Fade bottom>
          <p className="text-left font-['Arima'] text-8xl leading-snug mt-10">
            Explorable Explanations
          </p>
          <p className="text-left font-['Arima'] text-2xl leading-relaxed mt-10  w-1/2">
            Narrative visualization is a powerfull tool for communicating
            important concepts and persuading behavior change. Interactive
            articles that combine narrative storytelling with data explorations
            are used by journalists to create narratives that are data driven,
            engaging, and persuasive!
          </p>
          <p className="text-left font-['Arima'] text-2xl leading-relaxed mt-2 mb-20 w-1/2">
            {" "}
            <span className="font-semibold">"Explorable explanation'</span>
            is the phrase used to describe interactive, narrative visualizations
            that enable humans to learn from data in a playful, engaging manner.
            How might we create such explorables to communicate important
            climate information?
          </p>
        </Fade>
        <hr></hr>
        <Fade bottom>
          <p className="text-left font-['Arima'] font-bold text-2xl leading-relaxed rotate-180 mt-10 mb-20 w-1/2">
            INSPIRATIONAL & SECONDARY RESEARCH
          </p>
          <div className="relative" style={{ height: "800px" }}>
            <Flip left>
              <a
                href="https://www.youtube.com/watch?v=pCA62zf99ck"
                target="_blank"
              >
                <Flip left>
                  <img
                    src={PersuasiveStorytelling}
                    alt="Coal Balls"
                    className="absolute top-0 left-96 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
              <a href="https://explorabl.es/" target="_blank">
                <Flip left>
                  <img
                    src={ExplorableExplanations}
                    alt="Coal Balls"
                    className="absolute top-12 left-10 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
              <a
                href="https://www.nytimes.com/interactive/2015/05/28/upshot/you-draw-it-how-family-income-affects-childrens-college-chances.html"
                target="_blank"
              >
                <Flip left>
                  <img
                    src={Draw}
                    alt="Coal Balls"
                    className="absolute top-0 right-96 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
              <a
                href="https://www.nytimes.com/interactive/2017/11/06/climate/world-emissions-goals-far-off-course.html"
                target="_blank"
              >
                <Flip left>
                  <img
                    src={ClimateGoals}
                    alt="Coal Balls"
                    className="absolute top-52 left-72 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
            </Flip>
            <Flip right>
              <a
                href="https://www.nytimes.com/interactive/2022/12/13/climate/climate-footprint-map-neighborhood.html?smid=nytcore-ios-share&referringSource=articleShare"
                target="_blank"
              >
                <Flip right>
                  <img
                    src={ClimateMap}
                    alt="Coal Balls"
                    className="absolute top-20 right-40 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
              <a
                href="https://www.nytimes.com/interactive/2018/03/27/upshot/make-your-own-mobility-animation.html"
                target="_blank"
              >
                <Flip right>
                  <img
                    src={IncomeMobility}
                    alt="Coal Balls"
                    className="absolute top-72 right-4 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
              <a href="https://ncase.me/polygons/" target="_blank">
                <Flip right>
                  <img
                    src={PolygonParable}
                    alt="Coal Balls"
                    className="absolute top-72 rounded-xl drop-shadow-xl"
                    style={{ width: "280px", right: "30rem" }}
                  />
                </Flip>
              </a>
            </Flip>
          </div>
        </Fade>
      </main>
      <div className="p-36 bg-rose-100">
        <Fade bottom>
          <div className="px-10">
            <p className="text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-10 w-1/2">
              PROVOCATION #1
            </p>
            <p className="text-left font-['Arima'] text-6xl leading-normal mb-20">
              A carbon footprint drawing tool that asks the user to draw their
              trend prediction before revealing the actual one.
            </p>
          </div>
        </Fade>
      </div>
      <div className="p-36 bg-red-200">
        <Fade bottom>
          <div className="px-10">
            <p className="text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-10 w-1/2">
              PROVOCATION #2
            </p>
            <p className="text-left font-['Arima'] text-6xl leading-normal mb-20">
              A scenario simulation that allows the user to explore the causal
              relationships between product parameters and carbon footprint by
              simulating the future in animated scenes based on the users'
              input.
            </p>
          </div>
        </Fade>
      </div>
      <div className="px-36 pt-10 pb-36 h-[1000px]">
        <Fade bottom>
          <p className="text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-20 w-1/2">
            WHAT TO CONSIDER
          </p>
          <div className="relative mb-20">
            <div className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-red-100 aspect-square w-72 -rotate-2">
              <h1>Exploration VS. Narrative</h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-rose-200 aspect-square w-72 left-96 rotate-2">
              <h1>
                Visualization techniques to communicate without pure numbers
              </h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-red-100 aspect-square w-72 right-80 -rotate-3">
              <h1>Animation VS. Interaction</h1>
            </div>
          </div>
          <div className="flex mb-20">
            <div className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-rose-200 aspect-square w-72 top-80 left-16 rotate-2">
              <h1>Two-way communication</h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-rose-200 aspect-square w-72 top-80 right-52 rotate-2">
              <h1>Inform VS. Change Behavior</h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-red-100 aspect-square w-72 top-80 left-96">
              <h1>Individual Influence VS. System Impact</h1>
            </div>
          </div>
        </Fade>
      </div>
      <div className="px-36 pt-10 pb-36 h-[60px]">
        <Fade bottom>
          <div className="grid grid-cols-3">
            <Link
              className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl justify-self-start"
              to="/carbon-labeling"
            >
              <ArrowLeft size={28} className="px-0" />
              &nbsp;Interactive Carbon Label Maker
            </Link>
            <Link className="justify-self-center" to="/home">
              <HouseSimple size={36} className="justify-self-center" />
            </Link>
            <Link
              className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl justify-self-end"
              to="/interactive-data-vis"
            >
              Powerful Data Visualization &nbsp;
              <ArrowRight size={28} className="px-0" />
            </Link>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default ExploratoryExplanation;
