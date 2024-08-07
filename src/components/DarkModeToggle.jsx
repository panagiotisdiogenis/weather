import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    return (
        <div className="p-4 flex items-center space-x-2">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider round">
                    <span className="icon">{darkMode ? <IoMoonOutline /> : <IoMoonSharp />}</span>
                </span>
            </label>
        </div>
    );
};

export default DarkModeToggle;
