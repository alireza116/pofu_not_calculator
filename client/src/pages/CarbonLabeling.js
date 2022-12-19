import React, { useEffect, useState, Suspense, useRef } from "react";
import IdeoLogo from "../assets/ideo-logo.svg";
import { ArrowRight, ArrowLeft, HouseSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

import BackButton from "../components/BackButton.js";

import CleverCarbon from "../assets/carbon-label-1.png";
import CoffeeMenu from "../assets/carbon-label-2.png";
import Acme from "../assets/carbon-label-3.png";
import Pantys from "../assets/carbon-label-4.png";
import Asparagus from "../assets/carbon-label-5.png";
import Radish from "../assets/carbon-label-6.png";
import OatMilk from "../assets/carbon-label-7.png";
import Juice from "../assets/carbon-label-8.png";

function CarbonLabeling() {
  return (
    <>
      <main className="h-[1400px] m-36">
        <BackButton />
        <Fade bottom>
          <p className="text-left font-['Arima'] text-8xl leading-snug mt-10">
            Interactive Carbon Label Maker
          </p>
          <p className="text-left font-['Arima'] text-2xl leading-relaxed mb-16 mt-10 w-1/2">
            Carbon labeling turns numeric information into visual labels, tags
            and even art pieces. At IDEO, we design the usage, generative logic,
            visual and storytelling of the carbon labels and prototype the
            tangible experience of creating and using these labels. We combine
            explorable explanations, interactive visualizations, and visual
            communication design to create effective and engaging carbon labels.
          </p>

          <div className="text-left mb-20">
            <Link
              className="font-['Arima'] text-2xl px-12 py-5 bg-amber-100 rounded-full height-12 hover:text-white hover:bg-stone-700 duration-300"
              to="/make-your-carbon-labels"
            >
              Play with Prototype
            </Link>
          </div>
        </Fade>
        <hr></hr>
        <Fade bottom>
          <p className="text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-20 w-1/2">
            INSPIRATIONAL & SECONDARY RESEARCH
          </p>
          <div className="relative" style={{ height: "1200px" }}>
            <Flip left>
              <a
                href="https://clevercarbon.io/carbon-footprint-of-common-items/"
                target="_blank"
              >
                <Flip left>
                  <img
                    src={CleverCarbon}
                    alt="Coal Balls"
                    className="absolute top-0 rounded-xl drop-shadow-xl"
                    style={{ width: "280px", left: "22rem" }}
                  />
                </Flip>
              </a>
              <a href="https://clevercarbon.io/thecoffeemenu/" target="_blank">
                <Flip left>
                  <img
                    src={CoffeeMenu}
                    alt="Coal Balls"
                    className="absolute top-12 left-0 rounded-xl drop-shadow-xl"
                    style={{ width: "280px" }}
                  />
                </Flip>
              </a>
              <img
                src={Acme}
                alt="Coal Balls"
                className="absolute top-8 rounded-xl drop-shadow-xl"
                style={{ width: "280px", right: "26rem" }}
              />
              <div className="rotate-12">
                <img
                  src={Pantys}
                  alt="Coal Balls"
                  className="absolute top-96 left-52 rounded-xl drop-shadow-xl rotate-12"
                  style={{ width: "280px" }}
                />
              </div>
            </Flip>
            <Flip right>
              <img
                src={Asparagus}
                alt="Coal Balls"
                className="absolute top-12 right-0 rounded-xl drop-shadow-xl"
                style={{ width: "280px" }}
              />
              <img
                src={OatMilk}
                alt="Coal Balls"
                className="absolute top-44 right-12 rounded-xl drop-shadow-xl"
                style={{ width: "400px" }}
              />
              <img
                src={Radish}
                alt="Coal Balls"
                className="absolute top-96 right-52 rounded-xl drop-shadow-xl"
                style={{ width: "300px" }}
              />
              <img
                src={Juice}
                alt="Coal Balls"
                className="absolute top-72 rounded-xl drop-shadow-xl"
                style={{ width: "280px", right: "36rem" }}
              />
            </Flip>
          </div>
        </Fade>
      </main>
      <div className="p-36 bg-amber-100">
        <Fade bottom>
          <div className="px-10">
            <p className="text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-10 w-1/2">
              PROVOCATION #1
            </p>
            <p className="text-left font-['Arima'] text-6xl leading-normal mb-20">
              A carbon labeling tool that generates graphic labels from the
              carbon footprint of products that can be printed, cut, pasted and
              shared.
            </p>
            <p className="text-left font-['Arima'] text-3xl leading-normal mb-20">
              The larger the footprint, the longer the label.
            </p>
          </div>
        </Fade>
      </div>
      <div className="p-36 bg-orange-200">
        <Fade bottom>
          <div className="px-10">
            <p className="text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-10 w-1/2">
              ROVOCATION #2
            </p>
            <p className="text-left font-['Arima'] text-6xl leading-normal mb-20">
              A carbon price tag that a seller must purchase as a "ticket" to
              launch their product, which comes in a sticky on the packaging
              that customers can scan to pull up more info.
            </p>
            <p className="text-left font-['Arima'] text-3xl leading-normal mb-20">
              The larger the footprint, the pricer the ticket. All funds go to
              climate initiatives.
            </p>
          </div>
        </Fade>
      </div>
      <div className="px-36 pt-10 pb-36 h-[1600px]">
        <Fade bottom>
          <p className="text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-20 w-1/2">
            WHAT TO CONSIDER
          </p>
          <div className="relative mb-20">
            <div className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-orange-200 aspect-square w-72 -rotate-2">
              <h1 className="font-bold">Providing context</h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-orange-100 aspect-square w-72 left-80 rotate-2">
              <h1>
                What are some ways to provide context around the product and
                numbers shown?
              </h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-orange-100 aspect-square w-72 right-96 -rotate-3">
              <h1>
                Through equivalence of the numeric statistics such as 3.3 kg of
                CO2 = X trees?
              </h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-orange-100 aspect-square w-72 right-10 top-4 rotate-3">
              <h1>
                Through comparing the calculations for two or more products?
              </h1>
            </div>
          </div>
          <div className="flex mb-20">
            <div className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-yellow-200 aspect-square w-72 top-96 left-16 rotate-2">
              <h1 className="font-bold">Input for label generation</h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-yellow-100 aspect-square w-72 top-96 right-80 rotate-2">
              <h1>
                Type of product? Total carbon footprint? A brekdown of carbon
                footprint?
              </h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-yellow-100 aspect-square w-80 top-96 left-96">
              <h1>
                What would the inputs be that make sense from both the
                scientific and user experience standpoints?
              </h1>
            </div>
            <div className="absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-yellow-100 aspect-square w-72 top-96 right-0">
              <h1>Size, color, style, and usage of the label?</h1>
            </div>
          </div>
          <div className="flex mb-20">
            <div
              className="absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-stone-500 aspect-square w-72 left-0 -rotate-2 text-white"
              style={{ top: "44rem" }}
            >
              <h1 className="font-bold">Medium of the label</h1>
            </div>
            <div
              className="absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-stone-300 aspect-square w-80 right-96 rotate-2"
              style={{ top: "45rem" }}
            >
              <h1>
                Could it be combined with QR codes so that one can scan and
                tally up their usage through the day?
              </h1>
            </div>
            <div
              className="absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-stone-300 aspect-square w-80 left-80"
              style={{ top: "45rem" }}
            >
              <h1>
                What are some different ways the label could exist and how might
                we interact with it?
              </h1>
            </div>
            <div
              className="absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-stone-300 aspect-square w-80 right-8 -rotate-2"
              style={{ top: "45rem" }}
            >
              <h1>
                Could it be stickers that a product must purchase as "tickets"
                to launch to market?{" "}
              </h1>
            </div>
          </div>
        </Fade>
      </div>
      <div className="px-36 pt-10 pb-36 h-[60px]">
        <Fade bottom>
          <div className="grid grid-cols-3">
            <Link
              className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl justify-self-start text-white"
              to="/interactive-data-vis"
            >
              <ArrowLeft size={28} className="px-0" />
              &nbsp;Interactive Data Visualization
            </Link>
            <Link className="justify-self-center" to="/home">
              <HouseSimple size={36} className="justify-self-center" />
            </Link>
            <Link
              className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl justify-self-end"
              to="/exploratory-explanation"
            >
              Explorable Explanation &nbsp;
              <ArrowRight size={28} className="px-0" />
            </Link>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default CarbonLabeling;
