import "./../app.css";
import React, { useState } from "react";
import SearchIcon from "./../assets/search.svg";

export default function ({
  currentCity,
  setCurrentCity,
  icon,
  weather,
  temprature,
  min,
  max,
}) {
  const [value, setValue] = useState("");
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[url('https://images.pexels.com/photos/2519813/pexels-photo-2519813.jpeg')] bg-cover bg-center">
      <div style={{ width: "30vw", height: "80vh" }} className="glass">
        <div className="glass flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm max-w-md w-full">
          <input
            type="text"
            placeholder="Enter City Name.."
            class="flex-grow bg-transparent outline-none text-gray-700 placeholder-black"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            onKeyDown={(e) => {
              if (e.key == "Enter") setCurrentCity(value);
            }}
          />
          <button
            className="text-white bg-orange-500 hover:bg-orange-800 rounded-full px-3 py-1 font-medium"
            onClick={() => {
              setCurrentCity(value);
            }}
          >
            <img
              style={{ width: "16px", height: "32px" }}
              src={SearchIcon}
              alt=""
            />
          </button>
        </div>
        <div>
          <h1>{currentCity}</h1>
        </div>
        <div><h2>{weather}</h2></div>
        <div><img src={icon} alt="" srcset="" /></div>
        <div><h1>{temprature}</h1></div>
        <div className="flex">
            <div><h1>{min}</h1></div>
            <div><h1>{max}</h1></div>
        </div>
      </div>
    </div>
  );
}
