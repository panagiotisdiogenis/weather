import React, { createContext, useState, useEffect, useCallback } from 'react';
import { fetchForecast, fetchCurrentWeather } from '../services/weatherService';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchWeather = useCallback(async (location) => {
    const locations = ['Beijing', 'California', 'Dubai', 'Charlottetown'];

    try {
      setLoading(true);
      const response = await fetchForecast(location);
      setWeatherData(response.data);

      const locationPromises = locations.map((loc) => fetchCurrentWeather(loc));
      const locData = await Promise.all(locationPromises);
      const locationDataObj = locData.reduce((acc, locRes, idx) => {
        acc[locations[idx]] = locRes.data;
        return acc;
      }, {});
      setLocationData(locationDataObj);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(`${latitude},${longitude}`);
          },
          (error) => {
            console.error('Error getting current location:', error);
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
    <WeatherContext.Provider
      value={{ weatherData, locationData, loading, fetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
