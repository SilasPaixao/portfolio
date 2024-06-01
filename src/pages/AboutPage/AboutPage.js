import React from "react";
import { Header } from "../../commons/components/Header/Header";
import { Footer } from "../../commons/components/Footer/Footer";
import { me, brazilFlat, euaFlat } from "../../constants/aboutPageImages"
import { Container, Grid, Paper, Typography } from "@mui/material";
import { AboutFeaturedCard } from "../ProjectPage/components/AboutFeaturedCard";
import { UpBar } from "../../commons/components/UpBar/UpBar";

export const AboutPage = () => {
    return (
        <div>
            <UpBar />
            <Header />
            <AboutFeaturedCard />
            <Container sx={{ mt: 5 }}>
                <Paper sx={{ p: 4 }} >

                    <img style={{ width: '20px', height: '20px' }}
                        src={euaFlat}
                        alt='united states flat' />

                    <h3 style={{ color: '#ccc' }}>ABOUT ME</h3>

                    <Typography>
                        <Grid container spacing={4}>
                            <Grid item md={6}>
                                <img src={me} alt='me'
                                    style={{ borderRadius: '50%', float: 'left', marginLeft: '5px', border: '2px solid #D62976' }} />
                            </Grid>
                            <Grid item md={6}>
                                <h3 style={{ display: 'inline' }}>Hi, I’m Silas.</h3>
                                <br />
                                <br />
                                <br />
                                I am a Full Stack Developer, focused on Node.js, with experience in development with React.js, developing Jest code test, performance improvement, and application integration by combining best development practices, Clean Architecture, SOLID, DDD, and TDD, standardization with libraries like ESLint, Husky + lint-staged, and git-commit-msg-linter to keep the code always clean, organized, well-structured, and decoupled.

                                <br /><br />

                                <h3>Skills:</h3>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;JavaScript, TypeScript, Node.js, Express, MySQL, MongoDB, Firebase, Git/GitHub, Docker, Next.js and React.js (with webpack and CRA) including Hooks (such as Context API and others), Styled-Components, design systems like Material-UI, Chakra-UI, React Bootstrap, REST API consumption.
                                <br />Always seeking knowledge to produce the best practices of clean, modular, and semantic code.
                                <h3>In each application, I use the following principles, design patterns, and methodologies</h3>
                                Principles:
                                <ul>
                                    <li>Single Responsibility Principle (SRP)</li>
                                    <li>Open Closed Principle (OCP)</li>
                                    <li>Liskov Substitution Principle (LSP)</li>
                                    <li>Interface Segregation Principle (ISP)</li>
                                    <li>Dependency Inversion Principle (DIP)</li>
                                    <li>Don't Repeat Yourself (DRY)</li>
                                    <li>Composition Over Inheritance</li>
                                    <li>Small Commits</li>
                                </ul>
                                Design Patterns:
                                <ul>
                                    <li>Factory</li>
                                    <li>Adapter</li>
                                    <li>Composite</li>
                                    <li>Decorator</li>
                                    <li>Proxy</li>
                                    <li>Dependency Injection</li>
                                    <li>Abstract Server</li>
                                    <li>Composition Root</li>
                                </ul>
                                Methodologies:
                                <ul>
                                    <li>TDD</li>
                                    <li>Clean Architecture</li>
                                    <li>DDD</li>
                                    <li>Conventional Commits</li>
                                    <li>GitFlow</li>
                                    <li>Modular Design</li>
                                    <li>Dependency Diagrams</li>
                                    <li>Use Cases</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Typography>
                </Paper>

                <Paper sx={{ p: 4, mt: 5, mb: 5 }}>
                    <figure style={{ border: '3px solid #000 50%' }}>
                        <img style={{ width: '20px', height: '20px' }}
                            src={brazilFlat}
                            alt='brazil flat' />
                    </figure>

                    <h3 style={{ color: '#ccc' }}>SOBRE MIM</h3>

                    <Typography sx={{ textAlign: 'justify', }}>
                        <h3 id="more">Olá, eu sou o Silas.</h3>
                        <br />
                        <br />
                        <br />

                        Sou um Desenvolvedor Full Stack, focado em Node.js, com experiência em desenvolvimento com React.js, criação de testes de código com Jest, melhoria de desempenho e integração de aplicações combinando as boas práticas de desenvolvimento, Clean Architecture, SOLID, DDD e TDD, padronização com libraries como ESLint, Husky + lint-staged e git-commit-msg-linter à fim de manter o código sempre limpo, organizado, bem estruturado e desacoplado.

                        <br /><br />

                        <h3>Habilidades:</h3>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;JavaScript, TypeScript, NodeJs, Express, MySQL, MongoDB, Firebase, Git/GitHub, Docker, Next.js e React.js (com webpack e CRA) incluindo Hooks
                        (como Context API e outros),Styled-Components, sistemas de design, como Material-UI, Chakra-UI, React bootstrap, Consumo de REST API,
                        <br />Sempre em busca de conhecimento para produzir as melhores práticas de código limpo, modular e semântico.
                        <h3>Utilizo em cada aplicação os seguintes, principios, padrões de design e metodologias </h3>
                        Princípios:
                        <ul>
                            <li>Single Responsibility Principle (SRP)</li>
                            <li>Open Closed Principle (OCP)</li>
                            <li>Liskov Substitution Principle (LSP)</li>
                            <li>Interface Segregation Principle (ISP)</li>
                            <li>Dependency Inversion Principle (DIP)</li>
                            <li>Don't Repeat Yourself (DRY)</li>
                            <li>Composition Over Inheritance</li>
                            <li>Small Commits</li>
                        </ul>
                        Design Patterns:
                        <ul>
                            <li>Factory</li>
                            <li>Adapter</li>
                            <li>Composite</li>
                            <li>Decorator</li>
                            <li>Proxy</li>
                            <li>Dependency Injection</li>
                            <li>Abstract Server</li>
                            <li>Composition Root</li>
                        </ul>
                        Metodologias:
                        <ul>
                            <li>TDD</li>
                            <li>Clean Architecture</li>
                            <li>DDD</li>
                            <li>Conventional Commits</li>
                            <li>GitFlow</li>
                            <li>Modular Design</li>
                            <li>Dependency Diagrams</li>
                            <li>Use Cases</li>
                        </ul>
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
