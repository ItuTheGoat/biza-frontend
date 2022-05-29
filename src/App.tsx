import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar, { INavPaths } from "./navbar/NavBar";

const App: FC = () => {
  const defaultPaths: INavPaths[] = [
    { url: "/", name: "Home" },
    { url: "/about", name: "About" },
  ];

  return (
    <Router>
      <NavBar defaultPaths={defaultPaths} />
    </Router>
  );
};

export default App;
