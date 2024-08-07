import React from 'react';

const CurrentDayWeather = ({ details }) => {
  if (!details) {
    return null;
  }

  const {
    date,
    temp_f,
    condition,
    feelslike_f,
    wind_kph,
    pressure_mb,
    humidity,
  } = details;

  return (
    <div className="rounded-2xl p-6 w-80 h-72 flex flex-col justify-between text-black bg-[#BBD7EC]">
      <div>
        <div className="flex justify-between mb-2">
          <div className="text-lg font-medium">
            {new Date(date).toLocaleDateString('en-US', { weekday: 'long' })}
          </div>
          <div>
            {new Date(date).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
        <div className="flex justify-between items-center my-4">
          <div className="text-6xl font-bold">{Math.round(temp_f)}°</div>
          <img
            src={condition.icon}
            alt={condition.text}
            className="w-16 h-16"
          />
        </div>
        <div className="text-sm mb-2">
          Real Feel: {Math.round(feelslike_f)}°
        </div>
        <div className="text-sm mb-2">Wind: {Math.round(wind_kph)} km/h</div>
        <div className="text-sm mb-2">Pressure: {pressure_mb} MB</div>
        <div className="text-sm mb-2">Humidity: {humidity}%</div>
      </div>
    </div>
  );
};

export default CurrentDayWeather;
