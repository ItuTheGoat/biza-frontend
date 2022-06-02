import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/fonts.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6622cc",
    },

    secondary: {
      main: "#00e676",
    },
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      type: string;
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
