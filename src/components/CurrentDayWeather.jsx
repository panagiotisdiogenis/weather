import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

const CurrentDayWeather = ({ details }) => {
  const { darkMode } = useContext(DarkModeContext);

  if (!details) {
    return null;
  }

  const {
    date,
    temp_c,
    condition,
    feelslike_c,
    wind_kph,
    pressure_mb,
  } = details;

  return (
    <div className={`rounded-2xl p-6 w-80 h-72 flex flex-col justify-between ${darkMode ? 'bg-[#1e293b] text-white' : 'bg-[#BBD7EC] text-black'}`}>
      <div>
        <div className="flex justify-between mb-2">
          <div className="text-lg font-medium">{new Date(date).toLocaleDateString('en-US', { weekday: 'long' })}</div>
          <div>{new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
        <div className="text-6xl font-bold mb-2">{Math.round(temp_c)}°</div>
        <div className="flex items-center mb-2">
          <img src={condition.icon} alt={condition.text} className="w-12 h-12" />
          <div className="ml-4 text-lg">{condition.text}</div>
        </div>
        <div className="text-sm mb-2">Real Feel: {Math.round(feelslike_c)}°</div>
        <div className="text-sm mb-2">Wind: {Math.round(wind_kph)} km/h</div>
        <div className="text-sm mb-2">Pressure: {pressure_mb} MB</div>
      </div>
    </div>
  );
};

export default CurrentDayWeather;
