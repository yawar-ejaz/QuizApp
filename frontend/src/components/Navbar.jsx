import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = ({ username }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Welcome, {username}</h1>
      <div className="relative">
        <button
          className="flex items-center space-x-2 focus:outline-none"
          onClick={handleToggleDropdown}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
