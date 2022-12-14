import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const getData = async () => {
    const { data } = await axios.get(`/getThings`);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="text-3xl font-bold underline">
        <p>IDEO website for Label Maker</p>
      </header>
    </div>
  );
}

export default App;
