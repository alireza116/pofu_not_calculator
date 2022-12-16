import { useEffect, useState } from "react";
import axios from "axios";
import IconArrayByColRow from "./components/IconArrayByColRow";
import IconArrayByCount from "./components/IconArrayByCount";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import CarbonLabeling from './pages/CarbonLabeling';
import ClimateChatbot from './pages/ClimateChatbot';
import InteractiveDataVis from './pages/InteractiveDataVis.js';
import ExploratoryExplanation from './pages/ExploratoryExplanation';
import PersuasiveGames from './pages/PersuasiveGames.js';
import LabelMaker from './pages/LabelMaker.js';
import ScrollToTop from './components/ScrollToTop.js';


function App() {
  const getData = async () => {
    const { data } = await axios.get(`/getThings`);
    console.log(data);
  };

  const [numCols, setNumCols] = useState(10);
  const [numRows, setNumRows] = useState(10);
  const [pct, setPct] = useState(50);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/carbon-labeling' element={<CarbonLabeling />} />
          <Route path='/climate-chatbot' element={<ClimateChatbot />} />
          <Route path='/interactive-data-vis' element={<InteractiveDataVis />} />
          <Route path='/exploratory-explanation' element={<ExploratoryExplanation />} />
          <Route path='/persuasive-games' element={<PersuasiveGames />} />
          <Route path='/make-your-carbon-labels' element={<LabelMaker />} />
        </Routes>
      </Router>
      <header className="text-3xl font-bold underline">
        <p>IDEO website for Label Maker</p>
      </header>
      <hr></hr>

      <div className="flex">
        <div className="mt-20" style={{ width: "600px", height: "600px" }}>
          <input
            type="range"
            min={5}
            max={20}
            onChange={(event) => {
              setNumCols(parseInt(event.target.value));
            }}
          />
          <input
            type="range"
            min={5}
            max={20}
            onChange={(event) => {
              setNumRows(parseInt(event.target.value));
            }}
          />
          <input
            type="range"
            min={0}
            max={100}
            onChange={(event) => {
              setPct(parseInt(event.target.value));
            }}
          />
          <div>{numCols * numRows}</div>
          {/* <IconArrayByColRow
            numCols={numCols}
            numRows={numRows}
            pct={pct}
          ></IconArrayByColRow> */}
        </div>
        <div className="mt-20" style={{ width: "600px", height: "1200px" }}>
          <IconArrayByCount
            count={988}
            iconSize={50}
            gap={1}
            icon={"/images/tree.svg"}
            pct={pct}
          ></IconArrayByCount>
        </div>
      </div>
    </div>
  );
}

export default App;
