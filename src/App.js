import React from "react";
import MainSection from "./components/MainSection";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "./App.css";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#23763e",
            main: "#004d34",
            dark: "#003028",
    },
        secondary: {
            light: "#c4e34a",
            main: "#68a845",
            dark: "#23763e",
    },
        info: {
            light: "#64b5f6",
            main: "#2196f3",
            dark: "#1565c0",
    },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#b71c1c",
    },
        success: {
            light: "#a5d6a7",
            main: "#4caf50",
            dark: "#2e7d32",
    },
        warning: {
            light: "#ffab40",
            main: "#ff9100",
            dark: "#ff6d00",
    },
    },
        typography: {
            fontFamily: ["Comfortaa", "RobotoMono"].join(","),
    },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <MainSection />
    </MuiThemeProvider>
  );
}

export default App;
