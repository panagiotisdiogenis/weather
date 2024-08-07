import React, { useContext, useState } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { FiSearch } from 'react-icons/fi'; // Import the search icon

const Search = () => {
  const [location, setLocation] = useState('');
  const { fetchWeather } = useContext(WeatherContext);
  const { darkMode } = useContext(DarkModeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather(location);
  };

  return (
    <form
      role="form"
      onSubmit={handleSubmit}
      className="relative p-4 w-full max-w-lg"
    >
      <span className="absolute inset-y-0 left-4 flex items-center pl-3">
        <FiSearch
          className={`text-gray-400 ${darkMode ? 'text-white' : 'text-black'}`}
        />
      </span>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={`pl-10 pr-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-black'
        }`}
        placeholder="Search City"
      />
    </form>
  );
};

export default Search;
