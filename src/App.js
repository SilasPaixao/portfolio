import React from "react";
import { Router } from "./setup/app-routes-manager/Router"
import CssBaseline from '@mui/material/CssBaseline';
import { GeneralContext } from "./setup/app-context-manager/GeneralContext";

const App = () => {
  return <GeneralContext>{/* Provides all common states 
                          and Material-ui theme  */}
    
      <CssBaseline />
      <Router />
  </GeneralContext>
  
}

export default App;

