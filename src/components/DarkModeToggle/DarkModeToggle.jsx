import React, { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';
import './DarkModeToggle.css';
const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="pr-4 flex items-center space-x-2">
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider round">
          <span className="icon">
            {darkMode ? <IoMoonOutline /> : <IoMoonSharp />}
          </span>
        </span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
