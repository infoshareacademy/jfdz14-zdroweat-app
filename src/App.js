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
    }
    },
        typography: {
            fontFamily: ['Mulish',"Montserrat", 'Roboto'].join(',')
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
