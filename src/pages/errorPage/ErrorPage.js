import React, {useContext} from "react";
import { Container } from "./styles";
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Header } from "../../commons/components/Header/Header";
import { Context } from "../../setup/app-context-manager/Context";


export const ErrorPage = ()=>{

    const {loadingPage} = useContext(Context)
    
    if(loadingPage){
        return <p>Carregando...</p>
    }


    return <Container>
            <Header />
            <div className="warning">
                <SentimentVeryDissatisfiedIcon />
                <p>
                    Desculpe! Não foi possível encontrar essa página.
                    <SmsFailedIcon />
                </p>
            </div>
    
    </Container>
}