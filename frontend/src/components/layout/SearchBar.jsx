import React from "react";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form className="relative flex items-center w-full justify-center">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="What're you looking for?"
              value={searchTerm}
              className="placeholder:text-gray-700 focus:outline-none px-4 py-2 pl-2 pr-12 rounded-lg bg-gray-100"
            />
          </div>
          <button
            type="submit"
            onClick={handleSearchToggle}
            className="hover:text-black absolute top-1/2 right-2"
          >
            <HiMagnifyingGlass className="h-7 w-7 text-gray-7000"></HiMagnifyingGlass>
          </button>
        </form>
      ) : (
        <div>
          <button
            className="hover:text-black cursor-pointer"
            onClick={handleSearchToggle}
          >
            <HiMagnifyingGlass className="h-7 w-7 text-gray-800"></HiMagnifyingGlass>
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
