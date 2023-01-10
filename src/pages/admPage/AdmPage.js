import React, { useContext, useState } from "react";
import { Header } from "../../commons/components/Header/Header";
import { Context } from "../../setup/app-context-manager/Context";

export const AdmPage = ()=>{

    const {loggedAsAdmin, loadingPage} = useContext(Context)

    if(loadingPage){
        return <p>Carregando...</p>
    }

    return (
        loggedAsAdmin?
            <div>
                <p>
                    AdminPage
                </p>
            </div>
        :
            <div>
                <p>
                    é preciso ser administrado, faça login de administrador
                </p>
            </div>
        
    )

}