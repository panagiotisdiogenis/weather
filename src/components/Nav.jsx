import React from 'react';
import Search from './Search';
import DarkModeToggle from './DarkModeToggle';
import Location from './Location';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex justify-start w-1/3">
        <Location />
      </div>
      <div className="flex justify-center w-1/3">
        <Search />
      </div>
      <div className="flex justify-end w-1/3">
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Nav;
