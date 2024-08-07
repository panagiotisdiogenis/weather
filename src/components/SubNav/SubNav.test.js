import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SubNav from './SubNav';
import { DarkModeContext } from '../../contexts/DarkModeContext';

describe('SubNav', () => {
  test('renders the SubNav component', () => {
    render(
      <DarkModeContext.Provider value={{ darkMode: false }}>
        <SubNav />
      </DarkModeContext.Provider>
    );

    expect(screen.getByText('Today')).toBeInTheDocument();
    expect(screen.getByText('Tomorrow')).toBeInTheDocument();
    expect(screen.getByText('Next 7 Days')).toBeInTheDocument();
    expect(screen.getByText('Forecast')).toBeInTheDocument();
    expect(screen.getByText('Air Quality')).toBeInTheDocument();
    expect(screen.getByText('Chance Of Rain')).toBeInTheDocument();
  });

  test('changes active tab when buttons are clicked', () => {
    render(
      <DarkModeContext.Provider value={{ darkMode: false }}>
        <SubNav />
      </DarkModeContext.Provider>
    );

    const todayButton = screen.getByText('Today');
    fireEvent.click(todayButton);
    expect(todayButton).toHaveClass('text-white');

    const tomorrowButton = screen.getByText('Tomorrow');
    fireEvent.click(tomorrowButton);
    expect(tomorrowButton).toHaveClass('text-white');

    const next7DaysButton = screen.getByText('Next 7 Days');
    fireEvent.click(next7DaysButton);
    expect(next7DaysButton).toHaveClass('text-white');
  });

  test('changes active toggle when buttons are clicked', () => {
    render(
      <DarkModeContext.Provider value={{ darkMode: false }}>
        <SubNav />
      </DarkModeContext.Provider>
    );

    const forecastButton = screen.getByText('Forecast');
    fireEvent.click(forecastButton);
    expect(forecastButton).toHaveClass('bg-[#BBD7EC]');

    const airQualityButton = screen.getByText('Air Quality');
    fireEvent.click(airQualityButton);
    expect(airQualityButton).toHaveClass('bg-[#BBD7EC]');
  });
});
