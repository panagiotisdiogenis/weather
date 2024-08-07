import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { WeatherContext } from '../contexts/WeatherContext';
import { GoBell } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";

const Location = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { weatherData } = useContext(WeatherContext);

  const currentLocation = weatherData ? weatherData.location.name : 'Loading...';

  return (
    <div className="flex items-center space-x-2">
      <div className={`rounded-full flex items-center p-4 mr-2 ${darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-black'}`}>
        <RxDashboard className="text-lg w-4 h-4" />
      </div>
      <div className={`rounded-full flex items-center p-4 mr-2 ${darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-black'}`}>
        <GoBell className="text-lg w-4 h-4" />
      </div>
      <div className={`flex items-center ${darkMode ? 'text-white' : 'text-black'}`}>
        <SlLocationPin className="text-xl mx-2" />
        <span>{currentLocation}</span>
      </div>
    </div>
  );
};

export default Location;
