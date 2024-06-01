/* eslint-disable react/style-prop-object */
import React from "react";
import { Container, Grid } from "@mui/material";
import { UpBar } from "../../commons/components/UpBar/UpBar";
import { Header } from "../../commons/components/Header/Header";
import { Footer } from "../../commons/components/Footer/Footer";
import { Posts } from "./components/Posts";
import { useGetPosts } from "../../setup/firebase/admCRUD/getPosts";



export const ProjectPage = () => {



  const { posts } = useGetPosts([]);

  const projects = posts.filter((project) => {
    return project.project === true
  });

  const staticProjects = [
    {
      title: "front-end para acesso à API das melhores ações da B3",
      description: "API com arquitetura limpa, TDD, SOLID+ ",
      link: "https://github.com/SilasPaixao/b3-front",
      image: "https://i.postimg.cc/xdkCgMTw/frn2.png"
    },
    {
      title: "Sistema de login/cadastro + acesso as melhores ações da B3",
      description: "API com arquitetura limpa, TDD, SOLID+ ",
      link: "https://github.com/SilasPaixao/b3",
      image: "https://i.postimg.cc/9QwZ3Q36/men.png"
    },
    {
      title: "Users Api CRUD em typescript",
      description: "API com arquitetura limpa, Dependency Injection ",
      link: "https://github.com/SilasPaixao/users-crud",
      image: "https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "To Do(em Lista) - JavaScript +React",
      description: "App full stack criação de API e Client",
      link: "https://github.com/SilasPaixao/todo-app/tree/main",
      image: "https://i.postimg.cc/B6xVq8Yt/projects.jpg"
    },
    {
      title: "Pokedex",
      description: "projeto baseado na utilização da API Poke API (ReactJS)",
      link: "http://poised-cherry.surge.sh/",
      image: "https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "TO DO tarefas em cards",
      description: "cadastrar tarefas a fazer em forma de cards (ReactJS + Local Storage) ",
      link: "https://fanatical-chain.surge.sh/",
      image: "https://i.postimg.cc/B6xVq8Yt/projects.jpg"
    }
  ]





  return <div>
    <UpBar />
    <Header />
    <Container maxWidth="xl">
      <main>

        <Grid container spacing={2}>
          {posts.length ?
            projects.map((post) => (
              <Posts key={post.title} post={post} />
            )) :
            staticProjects.map((post) => (
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
}