import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const WeatherGraph = () => {
  const { weatherData } = useContext(WeatherContext);
  const { darkMode } = useContext(DarkModeContext);

  if (!weatherData || !weatherData.forecast || !weatherData.forecast.forecastday[0].hour) {
    return <div className="p-4">No weather data available</div>;
  }

  const forecastHours = weatherData.forecast.forecastday[0].hour.slice(7, 13);
  const yLabels = ['Rainy', 'Sunny', 'Heavy'];

  const calculateBarHeight = (value) => {
    const maxValue = 130;
    return (value / maxValue) * 100;
  };

  return (
    <div className={`relative p-4 w-full max-w-lg rounded-2xl h-72 ${darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-black'}`}>
      <div className="absolute left-4 top-4 bottom-4 flex flex-col justify-between py-4">
        {yLabels.map((label, index) => (
          <div key={index} className="h-1/3 flex items-center text-xs">
            {label}
          </div>
        ))}
      </div>
      <div className="ml-16 flex items-end h-full space-x-4 relative">
        {forecastHours.map((hour, index) => (
          <div key={index} className="flex flex-col items-center w-12">
            <div
              className="absolute bottom-6 w-4 bg-blue-500"
              style={{
                height: `${calculateBarHeight(hour.chance_of_rain)}%`,
                transition: 'height 0.3s ease-in-out',
              }}
            />
            <div className="mt-2 text-sm relative">
              {new Date(hour.time).getHours()}AM
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherGraph;
