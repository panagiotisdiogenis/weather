import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState({});
  const [loading, setLoading] = useState(true);

  const locations = useMemo(() => ["Beijing", "California", "Dubai", "Charlottetown"], []);

  const fetchWeather = useCallback(async (location) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=7`);
      setWeatherData(response.data);

      const locationPromises = locations.map(async (loc) => {
        const locResponse = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${loc}`);
        return { [loc]: locResponse.data };
      });

      const locData = await Promise.all(locationPromises);
      setLocationData(Object.assign({}, ...locData));

    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  }, [locations]);

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(`${latitude},${longitude}`);
          },
          (error) => {
            console.error("Error getting current location:", error);
            fetchWeather('New York'); // Fallback to a default location if location access is denied
          }
        );
      } else {
        fetchWeather('New York'); // Fallback if geolocation is not supported
      }
    };

    getCurrentLocation();
  }, [fetchWeather]);

  return (
    <WeatherContext.Provider value={{ weatherData, locationData, loading, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
