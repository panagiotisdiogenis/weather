import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { WiStrongWind, WiHumidity, WiFog } from 'react-icons/wi';

const Overview = () => {
  const { weatherData, locationData } = useContext(WeatherContext);
  const { darkMode } = useContext(DarkModeContext);

  if (!weatherData || !locationData) {
    return <div className="p-4">Loading weather data...</div>;
  }

  const {
    current: { wind_kph, humidity, uv, vis_km },
    forecast: { forecastday },
  } = weatherData;

  const otherLocations = [
    {
      name: "Beijing",
      country: "China",
      data: locationData["Beijing"]
    },
    {
      name: "California",
      country: "US",
      data: locationData["California"]
    },
    {
      name: "Arab Emirates",
      country: "Dubai",
      data: locationData["Dubai"]
    },
    {
      name: "Charlottetown",
      country: "Canada",
      data: locationData["Charlottetown"]
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-xl font-bold mb-4">Today's Overview</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="space-y-4 flex flex-col h-[520px] justify-between">
          <div className={`flex-grow rounded-2xl p-4 flex flex-col justify-between ${darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-black'}`}>
            <div className="flex justify-between items-start">
              <div className="text-lg">Wind Status</div>
              <div className="text-xs">Updated at {forecastday[0].date}</div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <WiStrongWind size={64} />
            </div>
            <div className="flex justify-between items-end">
              <div className="text-4xl font-bold">{wind_kph.toFixed(1)} km/h</div>
            </div>
          </div>
          <div className={`flex-grow rounded-2xl p-4 flex flex-col justify-between ${darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-black'}`}>
            <div className="flex justify-between items-start">
              <div className="text-lg">Humidity</div>
              <div className="text-xs">The dew point is {forecastday[0].day.avgtemp_c}° right now</div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <WiHumidity size={64} />
            </div>
            <div className="flex justify-between items-end">
              <div className="text-4xl font-bold">{humidity}%</div>
            </div>
          </div>
        </div>
        <div className="space-y-4 flex flex-col h-[520px] justify-between">
          <div className={`flex-grow rounded-2xl p-4 flex flex-col justify-between ${darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-black'}`}>
            <div className="flex justify-between items-start">
              <div className="text-lg">UV Index</div>
              <div className="text-xs">Updated at {forecastday[0].date}</div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img src={forecastday[0].day.condition.icon} alt={forecastday[0].day.condition.text} className="w-16 h-16" />
            </div>
            <div className="flex justify-between items-end">
              <div className="text-4xl font-bold">{uv.toFixed(1)} UV</div>
            </div>
          </div>
          <div className={`flex-grow rounded-2xl p-4 flex flex-col justify-between ${darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-black'}`}>
            <div className="flex justify-between items-start">
              <div className="text-lg">Visibility</div>
              <div className="text-xs">Haze is affecting visibility</div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <WiFog size={64} />
            </div>
            <div className="flex justify-between items-end">
              <div className="text-4xl font-bold">{vis_km.toFixed(1)} km</div>
            </div>
          </div>
        </div>
        <div className={`flex-grow rounded-2xl p-4 flex flex-col justify-between h-[520px] ${darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-black'}`}>
          <div className="text-lg">Explore global map of wind weather and ocean condition</div>
          <button className="bg-white text-black rounded-full py-2 mt-4">GET STARTED</button>
        </div>
        <div className="space-y-4 flex flex-col h-[520px] justify-between">
          {otherLocations.map((location, index) => (
            <div key={index} className={`rounded-2xl p-4 flex justify-between items-center h-[120px] ${darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-black'}`}>
              <div className="flex flex-col">
                <div className="text-sm">{location.country}</div>
                <div className="text-lg font-bold">{location.name}</div>
                <div className="text-xs">{location.data.current.condition.text}</div>
              </div>
              <div>
                <img src={location.data.current.condition.icon} alt={location.data.current.condition.text} className="w-12 h-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
