import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { WeatherContext } from '../../contexts/WeatherContext';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import Search from './Search';

describe('Search', () => {
  test('renders search input and handles submit', () => {
    const fetchWeatherMock = jest.fn();
    const darkModeMock = true;

    render(
      <WeatherContext.Provider value={{ fetchWeather: fetchWeatherMock }}>
        <DarkModeContext.Provider value={{ darkMode: darkModeMock }}>
          <Search />
        </DarkModeContext.Provider>
      </WeatherContext.Provider>
    );

    const input = screen.getByPlaceholderText('Search City');
    const form = screen.getByRole('search');

    fireEvent.change(input, { target: { value: 'New York' } });
    expect(input.value).toBe('New York');

    fireEvent.submit(form);

    expect(fetchWeatherMock).toHaveBeenCalledWith('New York');
  });
});
