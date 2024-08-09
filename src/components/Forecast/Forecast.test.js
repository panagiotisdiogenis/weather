import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { WeatherProvider, WeatherContext } from '../../contexts/WeatherContext';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import Forecast from './Forecast';

const mockWeatherData = {
  location: { name: 'New York', region: 'New York' },
  current: { temp_f: 20 },
  forecast: {
    forecastday: [
      {
        date: '2024-08-07',
        day: {
          avgtemp_f: 20,
          condition: {
            text: 'Sunny',
            icon: 'http://cdn.weatherapi.com/weather/64x64/day/113.png',
          },
          feelslike_f: 22,
          maxwind_kph: 10,
          pressure_mb: 1012,
          avghumidity: 60,
        },
        hour: [
          {
            time: '2024-08-07 00:00',
            feelslike_f: 22,
          },
        ],
        astro: {
          sunrise: '6:00 AM',
          sunset: '8:00 PM',
        },
      },
      {
        date: '2024-08-08',
        day: {
          avgtemp_f: 25,
          condition: {
            text: 'Partly cloudy',
            icon: 'http://cdn.weatherapi.com/weather/64x64/day/116.png',
          },
          feelslike_f: 27,
          maxwind_kph: 12,
          pressure_mb: 1010,
          avghumidity: 65,
        },
        hour: [
          {
            time: '2024-08-08 00:00',
            feelslike_f: 27,
          },
        ],
        astro: {
          sunrise: '6:01 AM',
          sunset: '8:01 PM',
        },
      },
    ],
  },
};  

const renderComponent = (darkMode = false) => {
  return render(
    <WeatherContext.Provider value={{ weatherData: mockWeatherData }}>
      <DarkModeContext.Provider value={{ darkMode }}>
        <Forecast />
      </DarkModeContext.Provider>
    </WeatherContext.Provider>
  );
};

describe('Forecast', () => {
  test('renders current day weather', () => {
    renderComponent();

    expect(screen.getByText('Tuesday')).toBeInTheDocument();
    expect(screen.getByAltText('Sunny')).toBeInTheDocument();
  });

  test('renders forecast for the next days', () => {
    renderComponent();

    expect(screen.getByText('WED')).toBeInTheDocument();
    expect(screen.getByAltText('Partly cloudy')).toBeInTheDocument();
  });

  test('changes selected day when a forecast day is clicked', () => {
    renderComponent();

    fireEvent.click(screen.getByText('WED'));

    expect(screen.getByText('25°')).toBeInTheDocument();
  });

  test('applies dark mode styles', () => {
    renderComponent(true);

    const forecastDay = screen.getByText('WED');

    const forecastDiv = forecastDay.closest('div.group');

    expect(forecastDiv).toHaveClass('bg-zinc-900');
    expect(forecastDiv).toHaveClass('text-white');
  });

  test('displays message when no weather data is available', () => {
    render(
      <WeatherContext.Provider value={{ weatherData: null }}>
        <DarkModeContext.Provider value={{ darkMode: false }}>
          <Forecast />
        </DarkModeContext.Provider>
      </WeatherContext.Provider>
    );

    expect(
      screen.getByText('Search for a location to see the forecast.')
    ).toBeInTheDocument();
  });
});
