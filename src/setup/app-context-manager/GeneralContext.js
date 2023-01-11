import React, { useState } from "react";
import { Context } from "./Context";
import { ThemeProvider } from '@mui/material/styles';
import { light } from "../../constants/theme/light";
import { dark } from "../../constants/theme/dark";
import { useSwitchDarkLightMode } from "../../commons/hooks/useSwitchDarkLightMode";



export const GeneralContext = ({children})=>{

    const [loadingPage, setLoadingPage] = useState(false)/*mudar para true*/
    
    
    const {darkmode, changeDarkmode} = useSwitchDarkLightMode()

    const [logged, setLogged] = useState(false)
    const [loggedAsAdmin, setLoggedAsAdmin] = useState(true)
        
    return(
        <Context.Provider
         value={{logged, setLogged, darkmode, changeDarkmode,
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