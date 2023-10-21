import { useState, useEffect } from "react";

export const useSwitchDarkLightMode = ()=>{

    const LocalStorageDarkMode = localStorage.getItem('darkmode')
    const [darkmode, setDarkmode] = useState(LocalStorageDarkMode?true:false)
    

    useEffect(()=>{
        if(darkmode){
            localStorage.setItem("darkmode", "dark")
        }else{
            localStorage.removeItem("darkmode")
        }
    },[darkmode])

    const changeDarkmode = ()=>{
        setDarkmode(!darkmode)
    }

    return {darkmode, changeDarkmode}

}