import Container from "@mui/material/Container";
import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Businesses from "./components/Businesses";
import Layout from "./components/Layout";
import NavBar, { INavPaths } from "./navbar/NavBar";

const App: FC = () => {
  return (
    //
    <Router>
      <Layout>
        <Businesses />
      </Layout>
      {/* <NavBar defaultPaths={defaultPaths} /> */}
    </Router>
    // </ThemeProvider>
  );
};

export default App;
