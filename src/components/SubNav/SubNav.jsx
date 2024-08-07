import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const SubNav = () => {
  const [activeTab, setActiveTab] = useState('Next 7 Days');
  const [activeToggle, setActiveToggle] = useState('Forecast');
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex space-x-4">
        <button
          className={`text-lg ${activeTab === 'Today' ? 'text-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('Today')}
        >
          Today
        </button>
        <button
          className={`text-lg ${activeTab === 'Tomorrow' ? 'text-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('Tomorrow')}
        >
          Tomorrow
        </button>
        <button
          className={`text-lg ${
            activeTab === 'Next 7 Days'
              ? darkMode
                ? 'text-white'
                : 'text-gray-600'
              : 'text-gray-400'
          }`}
          onClick={() => setActiveTab('Next 7 Days')}
        >
          Next 7 Days
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div
          className={`flex rounded-full p-1 ${darkMode ? 'bg-zinc-900' : 'bg-zinc-200'}`}
        >
          <button
            className={`px-4 py-1 rounded-full text-sm ${activeToggle === 'Forecast' ? 'bg-[#BBD7EC] text-black' : 'text-gray-400'}`}
            onClick={() => setActiveToggle('Forecast')}
          >
            Forecast
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm ${activeToggle === 'Air Quality' ? 'bg-[#BBD7EC] text-black' : 'text-gray-400'}`}
            onClick={() => setActiveToggle('Air Quality')}
          >
            Air Quality
          </button>
        </div>
        <div className={`text-lg ${darkMode ? 'text-white' : 'text-black'}`}>
          Chance Of Rain
        </div>
      </div>
    </div>
  );
};

export default SubNav;
