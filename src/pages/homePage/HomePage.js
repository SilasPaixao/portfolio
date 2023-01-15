import React from "react";
import { Container, Grid } from "@mui/material";
import { UpBar } from "../../commons/components/UpBar/UpBar";
import { Header } from "../../commons/components/Header/Header";
import { Footer } from "../../commons/components/Footer/Footer";
import { AboutFeaturedCard } from "./components/AboutFeaturedCard";
import { Posts } from "./components/Posts";
import  bg2  from "../../assets/bg2.png";


export const HomePage = ()=>{

    const about = {
        title: 'Title of a longer featured blog post',
        description:
          "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: bg2,
        linkText: 'Continue lendo…',
    };

    const projects = [
        {
          title: 'Featured post',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random',
          linkText: 'Ver projeto…'
        },
        {
          title: 'Post title',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random',
          linkText: 'Ver projeto…'
        },
        {
            title: 'Featured post',
            description:
              'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            linkText: 'Ver projeto…'
          },
          
      ];


    return <div>
        <UpBar/>
        <Header />
        <AboutFeaturedCard post={about} />
        <Container maxWidth="xl">
          <main>
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
}