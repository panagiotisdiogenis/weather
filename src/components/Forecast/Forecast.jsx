import React, { useContext, useState, useEffect } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import CurrentDayWeather from '../CurrentDayWeather/CurrentDayWeather';
import WeatherGraph from '../WeatherGraph/WeatherGraph';

const Forecast = () => {
  const { weatherData } = useContext(WeatherContext);
  const { darkMode } = useContext(DarkModeContext);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    if (weatherData) {
      const firstDay = weatherData.forecast.forecastday[0];
      setSelectedDay({
        date: firstDay.date,
        temp_f: firstDay.day.avgtemp_f,
        condition: firstDay.day.condition,
        feelslike_f: firstDay.hour[0].feelslike_f,
        wind_kph: firstDay.day.maxwind_kph,
        pressure_mb: firstDay.day.pressure_mb,
        humidity: firstDay.day.avghumidity,
        sunrise: firstDay.astro.sunrise,
        sunset: firstDay.astro.sunset,
      });
    }
  }, [weatherData]);

  if (!weatherData) {
    return (
      <div className="p-4">Search for a location to see the forecast.</div>
    );
  }

  return (
    <div className="flex space-x-6">
      <CurrentDayWeather details={selectedDay} />
      <div className="flex space-x-6">
        {weatherData.forecast.forecastday.slice(1).map((day, index) => (
          <div
            key={index}
            className={`group rounded-2xl flex flex-col items-center justify-between p-4 w-[96px] h-72 cursor-pointer ${
              darkMode
                ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                : 'bg-zinc-200 text-black hover:bg-zinc-300'
            }`}
            onClick={() =>
              setSelectedDay({
                date: day.date,
                temp_f: day.day.avgtemp_f,
                condition: day.day.condition,
                feelslike_f: day.hour[0].feelslike_f,
                wind_kph: day.day.maxwind_kph,
                pressure_mb: day.day.pressure_mb,
                humidity: day.day.avghumidity,
                sunrise: day.astro.sunrise,
                sunset: day.astro.sunset,
              })
            }
          >
            <div className="text-lg font-medium mt-2">
              {new Date(day.date)
                .toLocaleDateString('en-US', { weekday: 'short' })
                .toUpperCase()}
            </div>
            <div className="my-4">
              <img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
                className="w-12 h-12 group-hover:animate-bounce"
              />
            </div>
            <div className="text-2xl font-bold mb-2">
              {Math.floor(day.day.avgtemp_f)}°F
            </div>
          </div>
        ))}
      </div>
      <WeatherGraph />
    </div>
  );
};

export default Forecast;
