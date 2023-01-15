import React from "react";
import { Link } from "react-router-dom";
import { emailPassAuthentication } from "../../setup/firebase/admAuth/emailPassAuthentication";
import { useForm } from "../../commons/hooks/useForm";
import { Posts } from "./components/Posts"
import styled from "styled-components";
import { Container } from "@mui/system";
import { Button, Grid } from "@mui/material";

    const VerticalContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin: 10px;

    `

    const HorizontalContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    `


export const AdmDashboard = ()=>{

    const { data, handleFormData, clear } = useForm({
        projTitle:"",projMsgBody:"",
        photoProj:"", projLink:"",
        articleTitle:"", articleMsgBody:"",
        photoArticle:"", articleLink:""
    })

    const projects = [
        {
          title: 'Featured post',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random'
        }          
      ];

      const articles = [
        {
          title: 'Featured post',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random'
        },
        {
          title: 'Post title',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random'
        }
          
      ];


    
    const {IsAdmlogged, logout} = emailPassAuthentication()

    const handleSubmit = (e)=>{
        e.preventDefault()
        clear()
        alert("Pronto!")
    }

    
        
    if(IsAdmlogged){
        return(
            <>
            <button onClick={logout}>{'sair  <---]'}</button>
            <VerticalContainer>

            <HorizontalContainer>

                <form onSubmit={handleSubmit}>
                    <VerticalContainer>
                    <h3>Cadastrar projeto</h3>
                    <label htmlFor='projTitle'>Título do projeto</label>
                    <input value={data.projTitle.value} onChange={handleFormData}
                     maxLength={35} name='projTitle' />
                
                    <label htmlFor={'projMsgBody'}>Texto sobre o projeto</label>
                    <textarea value={data.projMsgBody.value} onChange={handleFormData}
                    rows={10} cols={40} name='projMsgBody' maxLength={168} style={{resize: 'none'}}></textarea>
                    
                    <label htmlFor='photoProj'>Imagem do projeto</label>
                    <input type='file' name='photoProj' onChange={handleFormData} />

                    <label htmlFor='projLink'>link do projeto</label>
                    <input value={data.projLink.value} onChange={handleFormData} name='projLink' />

                    <input type='submit' value='cadastrar' />

                    </VerticalContainer>
                </form>

                <form onSubmit={handleSubmit}>
                    <VerticalContainer>
                    <h3>Cadastrar projeto</h3>
                    <label htmlFor='articleTitle'>Título do artigo</label>
                    <input value={data.articleTitle.value} onChange={handleFormData}
                     maxLength={35} name='articleTitle' />
                
                    <label htmlFor={'articleMsgBody'}>Texto sobre o artigo</label>
                    <textarea value={data.articleMsgBody.value} onChange={handleFormData}
                    rows={10} cols={40} name='articleMsgBody' maxLength={168} style={{resize: 'none'}}></textarea>
                    
                    <label htmlFor='photoArticle'>Imagem do artigo</label>
                    <input type='file' name='photoArticle' onChange={handleFormData} />

                    <label htmlFor='articleLink'>link do artigo</label>
                    <input value={data.articleLink.value} onChange={handleFormData} name='articleLink' />

                    <input type='submit' value='cadastrar' />

                    </VerticalContainer>
                </form>
            </HorizontalContainer>
            
            
                <div>
                    <h3>Projetos cadastrados</h3>
                    <Container maxWidth="xl">
                      <main>
                        <Grid container spacing={2}>
                            {projects.map((post) => (
                            <Posts key={post.title} post={post} />
                            ))}
                        </Grid>
                      </main>
                    </Container>
                </div>

                <div>
                    <h3>Artigos cadastrados</h3>
                    <Container maxWidth="xl">
                      <main>
                        <Grid container spacing={2}>
                            {articles.map((post) => (
                            <Posts key={post.title} post={post} />
                            ))}
                        </Grid>
                      </main>
                    </Container>
                </div>
            </VerticalContainer>

           

            <button onClick={logout}>{'sair  <---]'}</button>
            
            </>
        )
    }        
    
    return(
        <a href="/admin">
            <h3>...Por favor, faça/refaça o login de administrador!</h3>
        </a>
    )
    
    

}
//COLOCAR LIMITE NOS IMPUTS E AUMENTAR TAMANHO