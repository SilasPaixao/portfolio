import React,{ useContext } from "react";
import { Header } from "../../commons/components/Header/Header";
import { UpBar } from "../../commons/components/UpBar/UpBar";
import { Context } from "../../setup/app-context-manager/Context";


export const HomePage = ()=>{

    const { loadingPage } = useContext(Context)

    if(loadingPage){
        return <p>Carregando...</p>
    }


    return <div>
        <UpBar/>
        <Header />
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p><p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p><p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p><p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p><p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p><p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p><p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p><p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p><p> 
            HomePage
        </p>
        <p> 
        
        </p><p> 
            HomePage
        </p>
        <p> 
            HomePage
        </p><p> 
            HomePage
        </p>
    </div>
}