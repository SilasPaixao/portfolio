import React, { useContext } from "react";
import { LinkAdmin, Bar } from "./styles";
import { IconButton } from "@mui/material";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from "react-router-dom";
import { goToAdmin } from "../../../setup/app-routes-manager/coordinator";
import { Context } from "../../../setup/app-context-manager/Context";

export const UpBar = ()=>{
    const {darkmode, changeDarkmode} = useContext(Context)
    const navigate = useNavigate()
    
    return(
        <Bar>
            <ManageAccountsIcon />
            <LinkAdmin onClick={()=>{goToAdmin(navigate)}}>Admin</LinkAdmin>
            <IconButton aria-label="Mudar tema" 
            onClick={()=>{changeDarkmode()}}>
                {darkmode?
                    <LightModeIcon sx={{color:'#fff'}}/>
                 :
                    <DarkModeIcon sx={{color:'#000'}}/>
                }
            </IconButton>
            
        </Bar>
    )
}