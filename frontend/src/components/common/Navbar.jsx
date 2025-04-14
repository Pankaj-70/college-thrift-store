import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartDrawer from "../layout/CartDrawer";
import MobileNavigation from "../layout/MobileNavigation"
import { HiOutlineUser, HiShoppingCart, HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  let a = 0;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  }

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">

        {/* Left: Logo */}
        <div>
          <Link
            to="/"
            className="text-gray-700 hover:text-black text-2xl font-medium"
          >
            Rabbit
          </Link>
        </div>


        {/* Center: Navigation Links */}
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


        {/* Right: Profile, Cart, Search, Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="text-gray-700 h-7 w-7"></HiOutlineUser>
          </Link>

          <button className="relative hover:text-black cursor-pointer" onClick={toggleDrawer}>
            <HiShoppingCart className="text-gray-700 h-7 w-7" />
            <span className="absolute bg-[#ea2e0e] -top-1 text-white text-xs rounded full px-1 py-0.5">
              4
            </span>
          </button>

          <div className="overflow-hidden">
            <SearchBar></SearchBar>
          </div>

          <button className="md:hidden hover:text-black cursor-pointer" onClick={toggleNavDrawer}>
            <HiBars3 className="h-7 w-7 text-gray-700"></HiBars3>
          </button>
        </div>

      </nav>

      {/* CartDrawer */}
      <CartDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}></CartDrawer>

      {/* Mobile Navigation */}
      <MobileNavigation toggleNavDrawer={toggleNavDrawer} navDrawerOpen={navDrawerOpen} />
    </>
  );
};

export default Navbar;
