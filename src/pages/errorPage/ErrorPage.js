import React from "react";
import { Container } from "./styles";
import { errorImgUlr } from "../../constants/errorImageUrl";
import { Header } from "../../commons/components/Header/Header";


export const ErrorPage = ()=>{
    return <Container>
            <Header />
            <img src={errorImgUlr} alt="error" />
            <p>Desculpe! Não foi possível encontrar essa página.</p>
    
    </Container>
}