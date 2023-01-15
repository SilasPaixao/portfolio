import React from "react";
import { Header } from "../../commons/components/Header/Header";
import { UpBar } from "../../commons/components/UpBar/UpBar";
import { Footer } from "../../commons/components/Footer/Footer";
import {Posts} from "./components/Posts"
import { Container } from "@mui/system";
import { Grid, Paper, Typography } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';

export const ArticlesPage = ()=>{
  
    const projects = [
        {
          title: 'Featured post',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random',
          linkText: 'Ver artigo…'
        },
        {
          title: 'Post title',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random',
          linkText: 'Ver artigo…'
        },
        {
            title: 'Featured post',
            description:
              'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            linkText: 'Ver artigo…'
          },
          
      ];

    return (
        <div>
            <UpBar/>
            <Header />
            
            <Container maxWidth="xl">
            <main>
                <Paper sx={{mt:5}}>
                  <Typography> <ArticleIcon /> ARTIGOS DE AUTORIA PRÓPRIA E PÚBLICOS </Typography>
                </Paper>
                <Grid container spacing={2}>
                    {projects.map((post) => (
                    <Posts key={post.title} post={post} />
                    ))}
                </Grid>
            </main>
            </Container>
            <Footer
                title="Pessoal"
                description="contato (email): silas.paixao873@gmail.com"
            />
        </div>
    )
}