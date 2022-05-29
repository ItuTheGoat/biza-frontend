import React, { FC } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Mui Imports
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

export interface INavPaths {
  url: string;
  name: string;
}

const NavBar = ({ defaultPaths }: { defaultPaths: INavPaths[] }) => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        BIZA
      </a>

      {/* TODO: Complete side nav  */}
      <div className="sidenav">
        {defaultPaths.map((path: INavPaths) => {
          return (
            <li>
              <Link className="nav-item" to={path.url}>
                {path.name}
              </Link>
            </li>
          );
        })}
      </div>

      <MenuIcon className="menu-button" />
      <ul className="nav-list">
        {defaultPaths.map((path: INavPaths) => {
          return (
            <li>
              <Link className="nav-item" to={path.url}>
                {path.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
