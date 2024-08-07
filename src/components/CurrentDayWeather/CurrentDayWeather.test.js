import React from 'react';
import { render, screen } from '@testing-library/react';
import CurrentDayWeather from './CurrentDayWeather';

describe('CurrentDayWeather', () => {
  const mockDetails = {
    date: '2024-08-07T12:00:00Z',
    temp_c: 25,
    condition: {
      icon: 'http://cdn.weatherapi.com/weather/64x64/day/113.png',
      text: 'Sunny',
    },
    feelslike_c: 27,
    wind_kph: 10,
    pressure_mb: 1012,
    humidity: 60,
  };

  test('renders weather details correctly', () => {
    render(<CurrentDayWeather details={mockDetails} />);

    expect(screen.getByText('Wednesday')).toBeInTheDocument();
    expect(screen.getByText('25°')).toBeInTheDocument();
    expect(screen.getByAltText('Sunny')).toBeInTheDocument();
    expect(screen.getByText('Real Feel: 27°')).toBeInTheDocument();
    expect(screen.getByText('Wind: 10 km/h')).toBeInTheDocument();
    expect(screen.getByText('Pressure: 1012 MB')).toBeInTheDocument();
    expect(screen.getByText('Humidity: 60%')).toBeInTheDocument();
  });

  test('returns null when no details are provided', () => {
    const { container } = render(<CurrentDayWeather details={null} />);
    expect(container.firstChild).toBeNull();
  });
});
