import React from "react";
import { Context } from "./Context";
import { ThemeProvider } from '@mui/material/styles';
import { light } from "../../constants/theme/light";
import { dark } from "../../constants/theme/dark";
import { useSwitchDarkLightMode } from "../../commons/hooks/useSwitchDarkLightMode";



export const GeneralContext = ({children})=>{

    
    const {darkmode, changeDarkmode} = useSwitchDarkLightMode()

    return(
        <Context.Provider value={{darkmode, changeDarkmode}}>
            
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