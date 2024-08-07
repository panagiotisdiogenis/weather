import React from 'react';

const Avatar = () => {
  return (
    <div className="w-[34px] h-[34px] rounded-full overflow-hidden">
      <img
        src={`${process.env.PUBLIC_URL}/avatar.jpeg`}
        alt="Avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
