import React from "react";
import { Header } from "../../commons/components/Header/Header";
import { UpBar } from "../../commons/components/UpBar/UpBar";
import { Footer } from "../../commons/components/Footer/Footer";
import {Posts} from "./components/Posts"
import { Container } from "@mui/system";
import { Grid, Paper, Typography } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import { useGetPosts } from "../../setup/firebase/admCRUD/getPosts";

export const ArticlesPage = ()=>{
  
  
    const {posts} = useGetPosts([]);

    const articles = posts.filter((article)=>{
      return article.article === true
    });


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
                    {articles.map((post) => (
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