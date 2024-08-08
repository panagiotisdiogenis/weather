import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { WiStrongWind, WiHumidity, WiFog, WiDaySunny } from 'react-icons/wi';

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
      name: 'Beijing',
      country: 'China',
      data: locationData['Beijing'],
    },
    {
      name: 'California',
      country: 'US',
      data: locationData['California'],
    },
    {
      name: 'Arab Emirates',
      country: 'Dubai',
      data: locationData['Dubai'],
    },
    {
      name: 'Charlottetown',
      country: 'Canada',
      data: locationData['Charlottetown'],
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-xl font-bold mb-4">Today&apos;s Overview</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="space-y-4 flex flex-col h-[520px] justify-between">
          <div
            className={`group flex-grow rounded-2xl p-4 flex flex-col relative ${darkMode ? 'bg-zinc-900 text-white hover:bg-zinc-800' : 'bg-zinc-200 text-black hover:bg-zinc-300'}`}
          >
            <div className="absolute top-6 left-6">
              <div className="text-lg">Wind Status</div>
            </div>
            <div className="flex justify-center items-center flex-1">
              <WiStrongWind size={64} className="group-hover:animate-bounce animate-pulse" />
            </div>
            <div className="absolute bottom-6 left-6 text-4xl font-bold">
              {wind_kph.toFixed(1)} km/h
            </div>
            <div className="absolute bottom-6 right-6 text-xs">
              Updated at {forecastday[0].date}
            </div>
          </div>
          <div
            className={`group flex-grow rounded-2xl p-4 flex flex-col relative ${darkMode ? 'bg-zinc-900 text-white hover:bg-zinc-800' : 'bg-zinc-200 text-black hover:bg-zinc-300'}`}
          >
            <div className="absolute top-6 left-6">
              <div className="text-lg">Humidity</div>
            </div>
            <div className="flex justify-center items-center flex-1">
              <WiHumidity size={64} className="group-hover:animate-bounce animate-pulse" />
            </div>
            <div className="absolute bottom-6 left-6 text-4xl font-bold">
              {humidity}%
            </div>
            <div className="absolute bottom-6 right-6 text-xs">
              The dew point is {forecastday[0].day.avgtemp_c}° right now
            </div>
          </div>
        </div>
        <div className="space-y-4 flex flex-col h-[520px] justify-between">
          <div
            className={`group flex-grow rounded-2xl p-4 flex flex-col relative ${darkMode ? 'bg-zinc-900 text-white hover:bg-zinc-800' : 'bg-zinc-200 text-black hover:bg-zinc-300'}`}
          >
            <div className="absolute top-6 left-6">
              <div className="text-lg">UV Index</div>
            </div>
            <div className="flex justify-center items-center flex-1">
              <div className="flex justify-center items-center flex-1">
                <WiDaySunny size={64} className="group-hover:animate-bounce animate-pulse" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-4xl font-bold">
              {uv.toFixed(1)} UV
            </div>
            <div className="absolute bottom-6 right-6 text-xs">
              Updated at {forecastday[0].date}
            </div>
          </div>
          <div
            className={`group flex-grow rounded-2xl p-4 flex flex-col relative ${darkMode ? 'bg-zinc-900 text-white hover:bg-zinc-800' : 'bg-zinc-200 text-black hover:bg-zinc-300'}`}
          >
            <div className="absolute top-6 left-6">
              <div className="text-lg">Visibility</div>
            </div>
            <div className="flex justify-center items-center flex-1">
              <WiFog size={64} className="group-hover:animate-bounce animate-pulse" />
            </div>
            <div className="absolute bottom-6 left-6 text-4xl font-bold">
              {vis_km.toFixed(1)} km
            </div>
            <div className="absolute bottom-6 right-6 text-xs">
              Haze is affecting visibility
            </div>
          </div>
        </div>
        <div
          className={`flex-grow rounded-2xl p-8 flex flex-col justify-between h-[520px] bg-cover bg-center ${darkMode ? 'bg-zinc-900 text-white hover:bg-zinc-800' : 'bg-zinc-200 text-black hover:bg-zinc-300'}`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/getting-started.jpeg)`,
          }}
        >
          <div className="opacity-65 font-extrabold text-xl text-black text-center rounded-lg bg-white py-4">
            Explore global map of wind weather and ocean condition
          </div>
          <button className="bg-white text-black font-bold rounded-lg py-6 mt-4 transform transition-transform duration-300 hover:scale-105">
            GET STARTED
          </button>
        </div>
        <div className="space-y-4 flex flex-col h-[520px] justify-between">
          {otherLocations.map((location, index) => (
            <div
              key={index}
              className={`group rounded-2xl p-4 flex justify-between items-center h-[120px] ${darkMode ? 'bg-zinc-900 text-white hover:bg-zinc-800' : 'bg-zinc-200 text-black hover:bg-zinc-300'}`}
            >
              <div className="flex flex-col space-y-1">
                <div className="text-sm text-zinc-500">{location.country}</div>
                <div className="text-lg font-bold">{location.name}</div>
                <div className="text-sm">
                  {location.data.current.condition.text}
                </div>
              </div>
              <div>
                <img
                  src={location.data.current.condition.icon}
                  alt={location.data.current.condition.text}
                  className="w-12 h-12 group-hover:animate-bounce animate-pulse"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
