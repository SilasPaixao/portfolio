import React from "react";
import { Router } from "./setup/app-routes-manager/Router"
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./constants/theme";
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </>
  
}

export default App;

