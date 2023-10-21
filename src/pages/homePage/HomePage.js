import React from "react";
import { Container, Grid } from "@mui/material";
import { UpBar } from "../../commons/components/UpBar/UpBar";
import { Header } from "../../commons/components/Header/Header";
import { Footer } from "../../commons/components/Footer/Footer";
import { AboutFeaturedCard } from "./components/AboutFeaturedCard";
import { Posts } from "./components/Posts";
import { useGetPosts } from "../../setup/firebase/admCRUD/getPosts";



export const HomePage = () => {

 

  const {posts} = useGetPosts([]);

  const projects = posts.filter((project)=>{
    return project.project === true
  });





  return <div>
    <UpBar />
    <Header />
    <AboutFeaturedCard />
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