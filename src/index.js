import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

import "../src/index.css";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F50057",
    },
    secondary: {
      main: "#00ff00", //"#da61bf",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
