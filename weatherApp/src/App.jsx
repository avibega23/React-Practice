import { use, useState } from "react";
import MainBox from "./Components/MainBox";

import "./App.css";

function App() {
  const [currentCity, setCurrentCity] = useState("Mumbai");
  const [weather, setWeather] = useState("Rainy");
  const [icon, setIcon] = useState("");
  const [temprature, setTemprature] = useState(30.99);
  const [min, setMin] = useState(20);
  const [max, setMax] = useState(40);

  return (
    <>
      <MainBox
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        weather={weather}
        icon={icon}
        temprature={temprature}
        min={min}
        max={max}
      ></MainBox>
    </>
  );
}

export default App;
