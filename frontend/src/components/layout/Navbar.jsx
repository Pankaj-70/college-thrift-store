import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiShoppingCart, HiBars3 } from "react-icons/hi2";
const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-4">
      {/* left logo */}
      <div>
        <Link
          to="/"
          className="text-gray-700 hover:text-black text-2xl font-medium"
        >
          Rabbit
        </Link>
      </div>

      {/* center section */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-black uppercase text-sm font-medium"
        >
          Men
        </Link>
        <Link
          to="/"
          className="text-gray-700 hover:text-black uppercase text-sm font-medium"
        >
          Women
        </Link>
        <Link
          to="/"
          className="text-gray-700 hover:text-black uppercase text-sm font-medium"
        >
          Top Wear
        </Link>
        <Link
          to="/"
          className="text-gray-700 hover:text-black uppercase text-sm font-medium"
        >
          Bottom Wear
        </Link>
      </div>

      {/* right section */}
      <div className="flex items-center space-x-4">
        <Link to="/profile" className="hover:text-black">
          <HiOutlineUser className="text-gray-700 h-7 w-7"></HiOutlineUser>
        </Link>
        <button className="relative hover:text-black cursor-pointer">
          <HiShoppingCart className="text-gray-700 h-7 w-7"></HiShoppingCart>
          <span className="absolute bg-[#ea2e0e] -top-1 text-white text-xs rounded full px-1 py-0.5">
            4
          </span>
        </button>
        {/* search */}
        <button className="md:hidden hover:text-black cursor-pointer">
          <HiBars3 className="h-7 w-7 text-gray-700"></HiBars3>
        </button>
        <div className="overflow-hidden">
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
