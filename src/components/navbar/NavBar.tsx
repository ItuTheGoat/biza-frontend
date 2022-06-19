import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";

type NavBarProps = {
  defaultPaths: IDefaultPaths[];
  openSideBar: Function;
};

export interface IDefaultPaths {
  name: string;
  url: string;
}

const NavBar = ({ defaultPaths, openSideBar }: NavBarProps) => {
  return (
    <div className="h-32 px-8 py-6 flex items-center justify-between bg-primary-600 shadow-lg text-white w-full">
      {/* Brand Logo */}
      <div className="flex  items-center ">
        <span className="text-2xl font-semibold p-2">BIZA</span>
      </div>
      <button
        className="p-2 rounded-full hover:bg-primary-700 transition duration-200 ease-in-out"
        onClick={() => openSideBar()}
      >
        <Menu />
      </button>
    </div>
  );
};

export default NavBar;
