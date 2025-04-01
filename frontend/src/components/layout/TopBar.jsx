import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className="w-full bg-[#ea2e0e] text-white flex items-center justify-between px-5">
      <div className="hidden md:flex items-center justify-between py-3">
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="text-sm text-center flex-grow">
        <span>We ship worldwide - Fast and reliable shipping!</span>
      </div>
      <div className="hidden md:block text-sm">
        <a href="tel:+918595869664" className="hover:text-gray-300">
          +91-8595869664
        </a>
      </div>
    </div>
  );
};

export default TopBar;
