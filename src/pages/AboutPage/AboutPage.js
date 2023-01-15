import React from "react";
import { Header } from "../../commons/components/Header/Header";
import { Footer } from "../../commons/components/Footer/Footer";
import { Container } from "@mui/material";

export const AboutPage = ()=>{
    return (
        <div>
            <Header />
            <Container sx={{minHeight:'70vh'}}>
            <p>
                Sobre...
            </p>
            </Container>
            <Footer
                title="Pessoal"
                description="contato (email): silas.paixao873@gmail.com"
            />
        </div>
    
    )

}