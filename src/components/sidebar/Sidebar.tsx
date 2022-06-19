import React from "react";
import { Close } from "@mui/icons-material";
import { IDefaultPaths } from "../navbar/NavBar";
import { Link } from "react-router-dom";
import "./Sidebar.css";

type SideBarProps = {
  hideSideBar: Function;
  sideBarState: boolean;
  defaultPaths: IDefaultPaths[];
};

const Sidebar = (props: SideBarProps) => {
  return (
    <div
      className={`w-2/3 sm:w-64 h-full min-h-screen bg-primary-500 px-6 py-3 fixed top-0 right-0  duration-300 ease-in-out ${
        props.sideBarState ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="flex flex-col">
        <button
          className="text-white text-left w-full text-base my-1 font-semibold px-4 py-2 hover:bg-primary-700 transition duration-200 ease-in-out hover:shadow rounded-lg"
          onClick={() => props.hideSideBar()}
        >
          <Close />
        </button>

        <div className="gap-4 flex-col">
          {props.defaultPaths.map((path) => {
            return (
              <Link key={path.name} to={path.url}>
                <button className="text-white text-left w-full text-base my-1 font-semibold px-4 py-2 hover:bg-primary-700 transition duration-200 ease-in-out hover:shadow rounded-lg">
                  {path.name}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
