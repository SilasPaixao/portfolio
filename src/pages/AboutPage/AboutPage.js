import React from "react";
import { Header } from "../../commons/components/Header/Header";
import { Footer } from "../../commons/components/Footer/Footer";
import {me, brazilFlat, euaFlat} from "../../constants/aboutPageImages"
import { Container, Grid, Paper, Typography } from "@mui/material";

export const AboutPage = () => {
    return (
        <div>
            <Header />
            <Container sx={{ mt: 5 }}>
                <Paper sx={{ p: 4 }} >
                    
                    <img style={{ width: '20px', height: '20px'}}
                        src={euaFlat}
                        alt='united states flat' />

                    <h3 style={{ color: '#ccc'}}>ABOUT ME</h3>

                    <Typography>
                        <Grid container spacing={4}>
                        <Grid item md={6}>
                            <img src={me} alt='me'
                                style={{ borderRadius: '50%', float: 'left', marginLeft: '5px', border:'2px solid #D62976'}} />
                        </Grid>
                        <Grid item md={6}>
                            <h3 style={{ display: 'inline' }}>Hi, I’m Silas.</h3>
                            <br />
                            Simply: I make beautiful things with reactJs.<br />
                            <br />
                            I’m a developer front-end jr. Previously, I was studying physics (bachelor), but I've realized that programming is my aspiration, by the way since i was 14 year old i'm involved with tech stuff in general.
                        </Grid>
                        </Grid>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3>More:</h3>
                        <br />
                        I believe technology should give us superpowers.<br />
                        Therefore, i'm on my way to build those superpowers.<br />

                        <h3>Skills:</h3>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Front-end web developer, with knowledge in HTML, CSS, JavaScript and  React.js including Hooks (such as Context API and others),
                        Styled-Components, design systems, such as Material-UI, Chakra-UI, React bootstrap, REST API consumption, Git/GitHub, firebase(for CRUD and storage).<br />
                        Always looking for knowledge to produce clean, modular, and semantic code best practices.
                        <br />
                        <br />
                    </Typography>
                </Paper>

                <Paper sx={{ p: 4, mt: 5, mb: 5 }}>
                  <figure style={{ border:'3px solid #000 50%'}}> 
                    <img style={{ width: '20px', height: '20px'}}
                        src={brazilFlat}
                        alt='brazil flat' />
                  </figure>

                    <h3 style={{ color: '#ccc'}}>SOBRE MIM</h3>

                    <Typography sx={{ textAlign: 'justify', }}>
                        <h3>Olá, eu sou o Silas.</h3>
                        <br />
                        Simplesmente: eu faço coisas bonitas com reactJs.<br />
                        <br />
                        Sou desenvolvedor front-end jr. Anteriormente, eu estudava física (bacharelado), mas percebi que a programação é minha aspiração, aliás desde os 14 anos estou envolvido com coisas de tecnologia em geral.
                        <br />
                        <br />
                        <h3>Mais:</h3>
                        <br />

                        Acredito que a tecnologia deveria nos dar superpoderes.<br />

                        Portanto, estou no caminho para construir esses superpoderes.<br />
                        <br />

                        <h3>Habilidades:</h3>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Desenvolvedor front-end, com conhecimento em HTML, CSS, JavaScript e React.js incluindo Hooks
                        (como Context API e outros),Styled-Components, sistemas de design, como Material-UI, Chakra-UI, React bootstrap, Consumo de REST API, Git/GitHub, firebase
                        (para CRUD e armazenamento).
                        <br />Sempre em busca de conhecimento para produzir as melhores práticas de código limpo, modular e semântico.
                        <br />
                        <br />
                    </Typography>
                </Paper>
            </Container>
            <Footer
                title="Pessoal"
                description="contato (email): silas.paixao873@gmail.com"
            />
        </div>

    )

}