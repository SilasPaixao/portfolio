import React, {useContext} from "react";
import { Header } from "../../commons/components/Header/Header";
import { Context } from "../../setup/app-context-manager/Context";

export const AboutPage = ()=>{
    const { loadingPage } = useContext(Context)


    if(loadingPage){
        return <p>Carregando...</p>
    }

    return (
        <div>
            <Header />
            <p>
               Sobre...
            </p>
        </div>
    
    )

}