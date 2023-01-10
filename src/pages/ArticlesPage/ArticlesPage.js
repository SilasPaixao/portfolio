import React,{ useContext } from "react";
import { Header } from "../../commons/components/Header/Header";
import { UpBar } from "../../commons/components/UpBar/UpBar";
import { Context } from "../../setup/app-context-manager/Context";

export const ArticlesPage = ()=>{
    const {logged, loadingPage} = useContext(Context)
    
    if(loadingPage){
        return <p>Carregando...</p>
    }


    return (
        logged?
            <div>
                <UpBar/>
                <Header />
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>

                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
                <p>
                    ArticlesPage
                </p>
            </div>
        :
            <div>
                <Header />
                <p>
                    é preciso fazer login
                </p>
            </div>
        
    )
}