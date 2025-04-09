import React from "react";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io"
const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
        }`}
    >
      {isOpen ? (
        <form className="relative flex items-center w-full justify-center">
          <div className="relative w-1/2 bg-red-200 rounded-lg">
            <input
              type="text"
              placeholder="What're you looking for?"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); }}
              className="placeholder:text-gray-700 w-full hover:outline-1 outline-0 px-4 py-2 pl-2 rounded-lg bg-gray-100"
            />
            <button
              type="submit"
              onClick={handleSearchToggle}
              className="hover:text-black absolute top-0 right-11 cursor-pointer hover:bg-blue-300 hover:scale-105 rounded-l-sm h-full bg-green-300 px-2"
            >
              <HiMagnifyingGlass className="h-7 w-7 text-gray-7000"></HiMagnifyingGlass>
            </button>
            <button
              type="submit"
              onClick={handleSearchToggle}
              className="hover:text-black absolute top-0 right-0 cursor-pointer hover:bg-blue-300 hover:scale-105 rounded-r-sm h-full bg-red-300 px-2"
            >
              <IoMdClose className="h-7 w-7 text-gray-7000"></IoMdClose>
            </button>
          </div>
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
