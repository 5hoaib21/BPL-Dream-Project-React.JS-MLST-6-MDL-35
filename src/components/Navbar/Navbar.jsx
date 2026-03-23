import React from 'react';
import navImg from '../../assets/logo.png';
import dollerImg from '../../assets/dollar.png'

const Navbar = () => {
  return (
    <div className="navbar max-w-300 mx-auto">
        <div className="flex-1">
          <a className=" text-xl"><img className="w-15 h-15" src={navImg} alt="" /></a>
        </div>
        <div className="flex items-center gap-1.5">
         <span>6000000000</span>
         <span>Coin </span>
         <img src={dollerImg} alt="" />
        </div>
      </div>
  );
};

export default Navbar;