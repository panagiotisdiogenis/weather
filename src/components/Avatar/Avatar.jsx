import React from 'react';

const Avatar = () => {
  return (
    <div className="relative w-[34px] h-[34px] rounded-full overflow-visible">
      <img
        src={`${process.env.PUBLIC_URL}/avatar.jpeg`}
        alt="Avatar"
        className="w-full h-full object-cover rounded-full"
      />
      <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </div>
  );
};

export default Avatar;
