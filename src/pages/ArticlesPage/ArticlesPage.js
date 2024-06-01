import React from "react";
import { Header } from "../../commons/components/Header/Header";
import { UpBar } from "../../commons/components/UpBar/UpBar";
import { Footer } from "../../commons/components/Footer/Footer";
import { Posts } from "./components/Posts"
import { Container } from "@mui/system";
import { Grid, Paper, Typography } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import { useGetPosts } from "../../setup/firebase/admCRUD/getPosts";

export const ArticlesPage = () => {


    const { posts } = useGetPosts([]);

    const articles = posts.filter((article) => {
        return article.article === true
    });

    const staticArticles = [
        {
            title: "Custom hooks (Autoria própria)",
            description: "Um resumo sobre Custom hooks",
            link: "https://medium.com/@silasmerces/um-resumo-sobre-custom-hooks-eb7ad7b1ff8f",
            image: "https://i.postimg.cc/qqGRFhq2/article.jpg"
        },
        {
            title: "Bye-bye useState & useEffect:",
            description: "Revolutionizing React Development!",
            link: "https://medium.com/@emmanuelodii80/bye-bye-usestate-useeffect-revolutionizing-react-development-d91f95891adb",
            image: "https://i.postimg.cc/qqGRFhq2/article.jpg"
        },
        {
            title: "scrolling animations for ReactJS",
            description: "How to add scrolling animations to ReactJS ",
            link: "https://blog.devgenius.io/how-to-add-scrolling-animations-to-reactjs-by-using-aos-cefa020a1604",
            image: "https://i.postimg.cc/qqGRFhq2/article.jpg"
        }
    ]


    return (
        <div>
            <UpBar />
            <Header />

            <Container maxWidth="xl">
                <main>
                    <Paper sx={{ mt: 5 }}>
                        <Typography> <ArticleIcon /> ARTIGOS DE AUTORIA PRÓPRIA E PÚBLICOS </Typography>
                    </Paper>
                    <Grid container spacing={2}>
                        {posts.length ?
                            articles.map((post) => (
                                <Posts key={post.title} post={post} />
                            )) :
                            staticArticles.map((post) => (
                                <Posts key={post.title} post={post} />
                            ))
                        }
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