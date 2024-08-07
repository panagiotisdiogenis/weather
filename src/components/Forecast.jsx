import React, { useContext, useState, useEffect } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import { DarkModeContext } from '../contexts/DarkModeContext';
import CurrentDayWeather from './CurrentDayWeather';

const Forecast = () => {
  const { weatherData } = useContext(WeatherContext);
  const { darkMode } = useContext(DarkModeContext);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    if (weatherData) {
      const firstDay = weatherData.forecast.forecastday[0];
      setSelectedDay({
        date: firstDay.date,
        temp_c: firstDay.day.avgtemp_c,
        condition: firstDay.day.condition,
        feelslike_c: firstDay.day.feelslike_c,
        wind_kph: firstDay.day.maxwind_kph,
        pressure_mb: firstDay.day.pressure_mb,
        humidity: firstDay.day.avghumidity,
        sunrise: firstDay.astro.sunrise,
        sunset: firstDay.astro.sunset,
      });
    }
  }, [weatherData]);

  if (!weatherData) {
    return <div className="p-4">Search for a location to see the forecast.</div>;
  }

  return (
    <div className="flex space-x-6">
      <CurrentDayWeather details={selectedDay} />
      <div className="flex space-x-6">
        {weatherData.forecast.forecastday.slice(1).map((day, index) => (
          <div 
            key={index} 
            className={`rounded-2xl flex flex-col items-center justify-between p-4 w-[96px] h-72 cursor-pointer ${
              darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-black'
            }`} // Adjust height and width to match CurrentDayWeather
            onClick={() => setSelectedDay({
              date: day.date,
              temp_c: day.day.avgtemp_c,
              condition: day.day.condition,
              feelslike_c: day.day.feelslike_c,
              wind_kph: day.day.maxwind_kph,
              pressure_mb: day.day.pressure_mb,
              humidity: day.day.avghumidity,
              sunrise: day.astro.sunrise,
              sunset: day.astro.sunset,
            })}
          >
            <div className="text-lg font-medium mt-2">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</div>
            <div className="my-4">
              <img src={day.day.condition.icon} alt={day.day.condition.text} className="w-12 h-12" />
            </div>
            <div className="text-2xl font-bold mb-2">{Math.floor(day.day.avgtemp_f)}°F</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
