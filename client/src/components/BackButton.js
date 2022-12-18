import React, { useEffect, useState, Suspense, useRef } from 'react';
import { ArrowRight, ArrowLeft, HouseSimple } from "phosphor-react";
import { Link } from "react-router-dom";

function BackButton(){
    return(
        <Link className="mx-5 text-left font-['Arima'] flex mx-0 text-2xl hover:italic duration-300" to="/home">
             <ArrowLeft size={28} className="px-0"/>&nbsp;Back
        </Link>
    );
}

export default BackButton

