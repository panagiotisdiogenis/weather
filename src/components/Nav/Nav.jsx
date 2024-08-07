import React from 'react';
import Search from '../Search/Search';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import Location from '../Location/Location';
import Avatar from '../Avatar/Avatar';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex justify-start w-1/3">
        <Location />
      </div>
      <div className="flex justify-center w-1/3">
        <Search />
      </div>
      <div className="flex justify-end w-1/3">
        <DarkModeToggle />
        <Avatar />
      </div>
    </nav>
  );
};

export default Nav;
