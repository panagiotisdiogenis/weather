import React from 'react';
import { render, screen } from '@testing-library/react';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { WeatherContext } from '../../contexts/WeatherContext';
import Location from './Location';

describe('Location', () => {
  test('renders current location correctly', () => {
    const darkModeMock = true;
    const weatherDataMock = {
      location: { name: 'New York', region: 'New York' },
    };

    render(
      <WeatherContext.Provider value={{ weatherData: weatherDataMock }}>
        <DarkModeContext.Provider value={{ darkMode: darkModeMock }}>
          <Location />
        </DarkModeContext.Provider>
      </WeatherContext.Provider>
    );

    const locationText = screen.getByText('New York, New York');
    expect(locationText).toBeInTheDocument();
  });

  test('displays loading when weather data is not available', () => {
    const darkModeMock = true;
    const weatherDataMock = null;

    render(
      <WeatherContext.Provider value={{ weatherData: weatherDataMock }}>
        <DarkModeContext.Provider value={{ darkMode: darkModeMock }}>
          <Location />
        </DarkModeContext.Provider>
      </WeatherContext.Provider>
    );

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });
});
