import React, { useState } from "react";
import { Context } from "./Context";
import { ThemeProvider } from '@mui/material/styles';
import { light } from "../../constants/theme/light";
import { dark } from "../../constants/theme/dark";



export const GeneralContext = ({children})=>{

    const [loadingPage, setLoadingPage] = useState(false)/*mudar para false*/
    
    const LocalStorageDarkMode = localStorage.getItem('darkmode')
    const [darkmode, setDarkmode] = useState(LocalStorageDarkMode?true:false)

    const [logged, setLogged] = useState(false)
    const [loggedAsAdmin, setLoggedAsAdmin] = useState(true)
        
    return(
        <Context.Provider
         value={{darkmode, setDarkmode, logged, setLogged, 
         loggedAsAdmin, setLoggedAsAdmin, loadingPage, setLoadingPage}}
         >
            {darkmode
            ?
                <ThemeProvider theme={dark}>
                    {children}
                </ThemeProvider>
            :
                <ThemeProvider theme={light}>
                    {children}
                </ThemeProvider>
            }   
        </Context.Provider>

    )
}