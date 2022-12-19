import React, { useEffect, useState, Suspense, useRef } from 'react';
import IdeoLogo from '../assets/ideo-logo.svg'
import { ArrowRight, ArrowLeft, HouseSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import BackButton from '../components/BackButton.js'

import AngryUncle from '../assets/chatbot-1.png';
import Examples from '../assets/chatbot-2.png';
import AIChatbots from '../assets/chatbot-3.png';
import CaseStudies from '../assets/chatbot-4.png';
import Einstein from '../assets/chatbot-5.png';
import Roo from '../assets/chatbot-6.png';
import Duolingo from '../assets/chatbot-7.png';
import ChatGpt from '../assets/chatbot-8.png';

function ClimateChatbot(){
    // const contentRef = useRef(null)
    // const scrollToContent = () => contentRef.current.scrollIntoView({ behavior: 'smooth' })

    return(
        <>
            <main className = "h-[1400px] m-36"> 
                <BackButton />
                <Fade bottom>
                    <p className= "text-left font-['Arima'] text-8xl leading-snug mt-10">
                        Associative Climate Chatbot
                    </p>
                    <p className= "text-left font-['Arima'] text-2xl leading-relaxed mt-10 mb-20 w-1/2">
                        Associative climate chatbot leverages AI to interact with users through dialogues around carbon footprint and the climate. It could be an experience on its own, 
                        an embedded part of a game or a website, or a feature within a larger concept or product. At IDEO, we investigate the audience, use cases and media of the chatbot, 
                        design for the stories and emotions it brings about, and prototype innovative ways that the chatbot can be experienced. 
                    </p>
                </Fade>
                <hr></hr>
                <Fade bottom>
                    <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed rotate-180 mt-10 mb-20 w-1/2">
                        INSPIRATIONAL & SECONDARY RESEARCH 
                    </p>
                    <div className="relative" style={{height: "800px"}}>
                        <Flip left>
                            <a href="https://www.nytimes.com/interactive/2019/11/26/opinion/family-holiday-talk-impeachment.html" target="_blank">
                                <Flip left>
                                    <img src={AngryUncle} alt="Coal Balls" className="absolute top-0 left-96 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                                </Flip>
                            </a>
                            <a href="https://www.tidio.com/blog/chatbot-examples/" target="_blank">
                                <Flip left>
                                <img src={Examples} alt="Coal Balls" className="absolute top-8 left-4 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                                </Flip>
                            </a>
                            <a href="https://research.aimultiple.com/top-chatbot-success/" target="_blank">
                                <Flip left>
                                <img src={CaseStudies} alt="Coal Balls" className="absolute top-52 left-72 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                                </Flip>
                            </a>
                            <a href="https://d3.harvard.edu/platform-digit/submission/duolingo-learning-the-language-of-ai/" target="_blank">
                                <Flip left>
                                <img src={Duolingo} alt="Coal Balls" className="absolute top-96 left-12 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                                </Flip>
                            </a>
                         </Flip>
                         <Flip right>
                            <a href="https://blog.hubspot.com/marketing/best-ai-chatbot" target="_blank">
                                <Flip left>
                                <img src={AIChatbots} alt="Coal Balls" className="absolute top-0 right-96 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                                </Flip>
                            </a>
                            <a href="https://einstein.digitalhumans.com/" target="_blank">
                                <Flip left>
                                <img src={Einstein} alt="Coal Balls" className="absolute top-20 right-40 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                                </Flip>
                            </a>
                            <a href="https://roo.plannedparenthood.org/chat" target="_blank">
                                <Flip left>
                                <img src={Roo} alt="Coal Balls" className="absolute top-72 right-4 rounded-xl drop-shadow-xl" style={{width: "280px"}}/>
                                </Flip>
                            </a>
                            <a href="https://openai.com/blog/chatgpt/%5C/" target="_blank">
                                <Flip left>
                                <img src={ChatGpt} alt="Coal Balls" className="absolute top-64 rounded-xl drop-shadow-xl" style={{width: "280px", right: "30rem"}}/>
                                </Flip>
                            </a>
                        </Flip>
                    </div>
                </Fade>
            </main> 
            <div className="p-36 bg-cyan-100">
                <Fade bottom>
                    <div className="px-10">
                        <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-10 w-1/2">
                            PROVOCATION #1
                        </p>
                        <p className= "text-left font-['Arima'] text-6xl leading-normal mb-20">
                            A future-self chatbot that tells us what happens to them depending on the carbon choices we make.
                        </p>
                        <p className= "text-left font-['Arima'] text-3xl leading-normal mb-20">
                            or, a grizzled dystopian timetraveler from the future...
                        </p>
                    </div>      
                </Fade>
            </div>
            <div className="p-36 bg-sky-200">
                <Fade bottom>
                    <div className="px-10">
                        <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-10 w-1/2">
                            PROVOCATION #2
                        </p>
                        <p className= "text-left font-['Arima'] text-6xl leading-normal mb-20">
                            A browser extension that follows you around the web being commentary about the carbon footprint of actions you are taking.
                        </p>
                        <p className= "text-left font-['Arima'] text-3xl leading-normal mb-20">
                            i.e. online shopping, buying flight tickets, renting a car, donating to climate causes...
                        </p>
                    </div>      
                </Fade>
            </div>
            <div className="px-36 pt-10 pb-36 h-[1900px]">
                <Fade bottom>
                    <p className= "text-left font-['Arima'] font-bold text-2xl leading-relaxed mt-10 mb-20 w-1/2">
                        WHAT TO CONSIDER
                    </p>
                    <div className= "relative mb-20">
                        <div className= "absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-sky-200 aspect-square w-72 -rotate-2">
                            <h1 className="font-bold">Personality of a Chatbot</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-sky-100 aspect-square w-72 left-80 rotate-2">
                            <h1>How does a chatbot talking about climate change <span className="font-bold">sound</span> like?</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-sky-100 aspect-square w-80 right-96 -rotate-3">
                            <h1><span className="font-bold">Amicable</span> like a friend? <br></br> 
                            <span className="font-bold">Informative</span> like a teacher?  <br></br> 
                            <span className="font-bold">Stern</span> like a parent?</h1>
                        </div>
                    </div>
                    <div className= "flex mb-20">
                        <div className= "absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-cyan-200 aspect-square w-72 top-96 left-16 rotate-2">
                            <h1 className="font-bold">Visual Appearance of a Chatbot</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-cyan-100 aspect-square w-96 top-96 right-72 rotate-2">
                            <h1>Is it a <span className="font-bold">famous</span> person? Are they random or directly related to Climate Change / Earth? David Attenborough? Greta Thunberg?</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-cyan-100 aspect-square w-80 top-96 left-96">
                            <h1>How does a chatbot talking about climate change <span className="font-bold">look</span> like?</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-cyan-100 aspect-square w-80 top-96 right-0">
                            <h1>Is it someone familiar, like a <span className="font-bold">friend of yours</span>, or even your <span className="font-bold">alter ego</span>? 
                            Is it <span className="font-bold">just a voice with no image</span>?</h1>
                        </div>
                    </div>
                    <div className= "flex mb-20">
                        <div className= "absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-teal-200 aspect-square w-72 left-0 -rotate-2" style={{top: "44rem"}}>
                            <h1 className="font-bold">Purpose of a Chatbot</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-teal-100 aspect-square w-80 right-96 rotate-2" style={{top: "50rem"}}>
                            <h1>Does it provide <span className="font-bold">facts about the current situation</span> and current consumption trends?</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-teal-100 aspect-square w-80 left-80" style={{top: "45rem"}}>
                            <h1>What does a chatbot talking about climate change <span className="font-bold">do</span>?</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-teal-100 aspect-square w-80 right-14 -rotate-2" style={{top: "48rem"}}>
                            <h1>Does it provide guidelines and <span className="font-bold">advice around behavior change</span> to reduce our carbon footprint?</h1>
                        </div>
                    </div>
                    <div className= "flex mb-20">
                        <div className= "absolute text-left font-['Arima'] text-3xl leading-relaxed p-10 m-5 bg-emerald-200 aspect-square w-72 left-0 rotate-2" style={{top: "65rem"}}>
                            <h1 className="font-bold">Use Cases of a Chatbot</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-emerald-100 aspect-square w-80 right-96 rotate-6" style={{top: "68rem"}}>
                            <h1>Where would you interact with this chatbot? Slack? Mobile? Web?</h1>
                        </div>
                        <div className= "absolute text-left font-['Arima'] text-2xl leading-relaxed p-10 m-5 bg-emerald-100 aspect-square w-80 left-80 -rotate-2" style={{top: "65rem"}}>
                            <h1>Is this a chatbot for individual and/or private use or professional and/or industry use?</h1>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="px-36 pt-10 pb-36 h-[60px]">
                <Fade bottom>
                    <div className="grid grid-cols-3">
                        <Link className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl justify-self-start" to="/data-visualization">
                            <ArrowLeft size={28} className="px-0"/>&nbsp;Interactive Data Visualization
                        </Link>
                        <Link className="justify-self-center" to="/home">
                            <HouseSimple size={36} className="justify-self-center"/>
                        </Link>
                        <Link className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl justify-self-end" to="/persuasive-games">
                            Persuasive Games  &nbsp;<ArrowRight size={28} className="px-0"/>
                        </Link>
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default ClimateChatbot
