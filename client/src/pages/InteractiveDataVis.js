import React, { useEffect, useState, Suspense, useRef } from "react";
import IdeoLogo from "../assets/ideo-logo.svg";
import { ArrowRight, ArrowLeft, HouseSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

import BackButton from "../components/BackButton.js";

import Pictograms from "../assets/data-vis-1.png";
import Blast from "../assets/data-vis-2.png";
import Wrap from "../assets/data-vis-3.png";
import IdealPrac from "../assets/data-vis-4.png";
import Isotype from "../assets/data-vis-5.png";
import NYTClimate from "../assets/data-vis-6.png";
import Equivalent from "../assets/data-vis-7.png";

function InteractiveDataVis() {
  // const contentRef = useRef(null)
  // const scrollToContent = () => contentRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <main className="h-[1300px] m-36">
        <BackButton />
        <Fade bottom>
          <p className="text-left font-['Arima'] text-8xl leading-snug mt-10">
            Persuasive Data Visualization
          </p>
          <p className="text-left font-['Arima'] text-2xl leading-relaxed mt-10 mb-20 w-1/2">
            Data visualizations are amazing ways to communicate complex data
            because our visual systems are trained to process shape, size,
            color, and position, much faster than we process text. To design
            powerful, persuasive data visualizations, we need to think about the
            best visual encoding to represent our data, as well as ways to
            clearly communicate the story behind our data. Interactions, and
            animations are additional ways to improve our visualizations or make
            them more engaging.
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
                href="https://flourish.studio/blog/pictogram-isotype/"
                target="_blank"
              >
                <Flip left>
                  <img
                    src={Pictograms}
                    alt="Coal Balls"
                    className="absolute top-0 left-96 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
              <a
                href="https://www.reuters.com/graphics/LEBANON-SECURITY/BLAST/yzdpxnmqbpx/"
                target="_blank"
              >
                <Flip left>
                  <img
                    src={Blast}
                    alt="Coal Balls"
                    className="absolute top-12 left-10 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
              <a
                href="https://medium.com/multiple-views-visualization-research-explained/visualizing-categorical-data-with-disproportionate-values-using-du-bois-wrapped-bar-charts-7dd9e4901fa6"
                target="_blank"
              >
                <Flip left>
                  <img
                    src={Wrap}
                    alt="Coal Balls"
                    className="absolute top-0 right-96 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
              <a
                href="http://www.thefunctionalart.com/2022/11/idealism-and-pragmatism-in-visualization.html"
                target="_blank"
              >
                <Flip left>
                  <img
                    src={IdealPrac}
                    alt="Coal Balls"
                    className="absolute top-52 left-72 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
            </Flip>
            <Flip right>
              <a href="http://steveharoz.com/research/isotype/" target="_blank">
                <Flip left>
                  <img
                    src={Isotype}
                    alt="Coal Balls"
                    className="absolute top-20 right-40 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
              <a
                href="https://www.nytimes.com/2019/02/28/learning/teach-about-climate-change-with-these-24-new-york-times-graphs.html"
                target="_blank"
              >
                <Flip left>
                  <img
                    src={NYTClimate}
                    alt="Coal Balls"
                    className="absolute top-72 right-4 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
              <a
                href="https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator?unit=therms&amount=5#results"
                target="_blank"
              >
                <Flip left>
                  <img
                    src={Equivalent}
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
      <div className="p-36 bg-pink-100">
        <Fade bottom>
          <div className="px-10">
            <p className="text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-10 w-1/2">
              PROVOCATION
            </p>
            <p className="text-left font-['Arima'] text-6xl leading-normal mb-20">
              Pictogram visualizations of carbon footprint equivalences. If the
              footprint gets too big the browser becomes an infinity scroll of
              an array of icons.
            </p>
          </div>
        </Fade>
      </div>
      {/* <div className="p-36 bg-indigo-200">
                <Fade bottom>
                    <div className="px-10">
                        <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-10 w-1/2">
                            PROVOCATION #2
                        </p>
                        <p className= "text-left font-['Arima'] text-6xl leading-normal mb-20">
                            Scenario Simulations. Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit 
                        </p>
                    </div>      
                </Fade>
            </div> */}
      <div className="px-36 pt-10 pb-36 h-[1000px]">
        <Fade bottom>
          <p className="text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-20 w-1/2">
            WHAT TO CONSIDER
          </p>
          <div className="relative mb-20">
            <div className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-pink-100 aspect-square w-72 -rotate-2">
              <h1>Exploration VS. Narrative</h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-purple-100 aspect-square w-72 left-96 rotate-2">
              <h1>
                Visualization techniques to communicate without pure numbers
              </h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-pink-100 aspect-square w-72 right-80 -rotate-3">
              <h1>Animation VS. Interaction</h1>
            </div>
          </div>
          <div className="flex mb-20">
            <div className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-purple-100 aspect-square w-72 top-80 left-16 rotate-2">
              <h1>Two-way communication</h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-purple-100 aspect-square w-72 top-80 right-52 rotate-2">
              <h1>Inform VS. Change Behavior</h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-pink-100 aspect-square w-72 top-80 left-96">
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
              to="/exploratory-explanation"
            >
              <ArrowLeft size={28} className="px-0" />
              &nbsp;Exploratory Explanation
            </Link>
            <Link className="justify-self-center" to="/home">
              <HouseSimple size={36} className="justify-self-center" />
            </Link>
            <Link
              className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl justify-self-end"
              to="/climate-chatbot"
            >
              Associative Climate Chatbot &nbsp;
              <ArrowRight size={28} className="px-0" />
            </Link>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default InteractiveDataVis;
