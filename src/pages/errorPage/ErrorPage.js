import React from "react";
import { Container } from "./styles";
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Header } from "../../commons/components/Header/Header";
import { Footer } from "../../commons/components/Footer/Footer";


export const ErrorPage = ()=>{


    return <Container>
            <Header />
            <div className="warning">
                <SentimentVeryDissatisfiedIcon />
                <p>
                    Desculpe! Não foi possível encontrar essa página.
                    <SmsFailedIcon />
                </p>
            </div>
            <Footer
              title="Pessoal"
              description="contato (email): silas.paixao873@gmail.com"
            />
    
    </Container>
}