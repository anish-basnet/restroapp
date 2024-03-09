import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const Header = () => {
  return (
    <div className="flex">
      <div className="md:hidden w-full flex items-center">
        <div className="w-1/2">
          <img src={logo} className="h-28 w-28 px-4" />
        </div>
        <div className="w-1/2 flex justify-end">
          <FontAwesomeIcon
            icon={faSearch}
            className="pr-5 text-[24px] shadow-sm rounded-full  text-gray-500 cursor-pointer"
          />
        </div>
      </div>
      <div className="w-1/2  items-center hidden md:flex">
        <img src={logo} className="h-28 w-28 px-4" />
        <input
          className="pl-4 pr-7 h-10 border-2 rounded-3xl shadow-sm"
          type="text"
          placeholder="Search Menu"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="border-2 p-1 shadow-sm rounded-full  text-orange-500 -translate-x-9 cursor-pointer md:flex md:justify-end"
        />
      </div>
      <div className="w-1/2 items-center justify-end hidden md:flex">
        <button className="border-2 rounded-xl h-10 px-4 mr-10">About</button>
      </div>
    </div>
  );
};
