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
                            <br />
                            <br />
                            I've worked as a motherboard and computer maintenance technician independently. Recently, I transitioned my career to web development. 
                            I have experience with front-end (HTML, CSS, and React), but from the beginning, I've been focusing on the backend, incorporating best development practices <br />
                            such as Clean Architecture, SOLID, DDD, and TDD, along with documentation using Swagger. <br />
                            I also follow standardization with libraries like ESLint, Husky + lint-staged, and git-commit-msg-linter to keep the code consistently clean, organized, well-structured, and decoupled.<br />

                        <h3>Skills:</h3>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Back-end developer, with knowledge in JavaScript, TypeScript, Node.js, Express, MySQL, MongoDB, Firebase, Git/GitHub, Docker, and React.js, including Hooks (such as Context API and others),<br />
                        Styled-Components, design systems like Material-UI, Chakra-UI, React Bootstrap, REST API consumption.<br />
                        Always seeking knowledge to produce the best practices of clean, modular, and semantic code.<br />
                        <br />
                        <br />
                        </Grid>
                        </Grid>
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
                        <br />
                        <br />

                            Já trabalhei como técnico em manutenção de placas-mães e computadores de maneira autônoma. Recentemente fiz uma transição em minha profissão para o desenvolvimento web,
                            tenho experiência com o front-end (html, css e react), porém desde o início tenho dado ênfase à parte de backend combinando as boas práticas de desenvolvimento, 
                            Clean Architecture, SOLID, DDD e TDD, documentação com Swagger, padronização com libraries como ESLint, Husky + lint-staged e git-commit-msg-linter à fim de manter
                            o código sempre limpo, organizado, bem estruturado e desacoplado.

                        <br /><br />

                        <h3>Habilidades:</h3>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Desenvolvedor back-end, com conhecimento em JavaScript, TypeScript, NodeJs, Express, MySQL, MongoDB, Firebase, Git/GitHub, Docker e React.js incluindo Hooks
                        (como Context API e outros),Styled-Components, sistemas de design, como Material-UI, Chakra-UI, React bootstrap, Consumo de REST API,
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
