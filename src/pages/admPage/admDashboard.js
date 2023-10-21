import React, { useState } from "react";
import {createPost} from "../../setup/firebase/admCRUD/createPost"
import { useEmailPassAuthentication } from "../../setup/firebase/admAuth/emailPassAuthentication";
import { useForm } from "../../commons/hooks/useForm";
import { Posts } from "./components/Posts"
import styled from "styled-components";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { useGetPosts } from "../../setup/firebase/admCRUD/getPosts";


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
        projLink:"", articleTitle:"",
        articleMsgBody:"", articleLink:""
    })


    const {posts} = useGetPosts([]);

    const articles = posts.filter((article)=>{
      return article.article === true
    });

    const projects = posts.filter((project)=>{
      return project.project === true
    });


    const [showRegisterProj, setShowRegister] = useState(true)

    
    const {IsAdmlogged, logout} = useEmailPassAuthentication()



    const handleSubmit = async (e)=>{
        e.preventDefault()

        await data.projTitle && createPost(data, showRegisterProj)
        await data.articleTitle && createPost(data, showRegisterProj)
       
         console.log('POSTS FICOU ASSIM', posts) //MOSTRA A POSTAGEM
       

        alert("Pronto!") 
    }

        
    if(IsAdmlogged){
        return(
            <>
            <HorizontalContainer>
              <button onClick={logout}>{'SAIR  <---]'}</button>
              <button onClick={()=>{clear();setShowRegister(true)}}>{'CADASTRAR PROJETO'}</button>
              <button onClick={()=>{clear();setShowRegister(false)}}>{'CADASTRAR ARTIGO'}</button>
            </HorizontalContainer>
            <VerticalContainer>

            <HorizontalContainer>
              {showRegisterProj
                ?
                
                <form onSubmit={handleSubmit}>
                    <VerticalContainer>
                    <h3>Cadastrar projeto</h3>
                    <label htmlFor='projTitle'>Título do projeto</label>
                    <input value={data.projTitle.value} onChange={handleFormData}
                     maxLength={35} name='projTitle' required/>
                
                    <label htmlFor={'projMsgBody'}>Texto sobre o projeto</label>
                    <textarea value={data.projMsgBody.value} onChange={handleFormData}
                    rows={10} cols={40} name='projMsgBody' maxLength={48} style={{resize: 'none'}}></textarea>
                    
                    <label htmlFor='projLink'>link do projeto</label>
                    <input value={data.projLink.value} onChange={handleFormData} name='projLink' />

                    <input type='submit' value='cadastrar' />

                    </VerticalContainer>
                </form>
                :
                <form onSubmit={handleSubmit}>
                    <VerticalContainer>
                    <h3>Cadastrar Artigo</h3>
                    <label htmlFor='articleTitle'>Título do artigo</label>
                    <input value={data.articleTitle.value} onChange={handleFormData}
                     maxLength={35} name='articleTitle' required />
                
                    <label htmlFor={'articleMsgBody'}>Texto sobre o artigo</label>
                    <textarea value={data.articleMsgBody.value} onChange={handleFormData}
                    rows={10} cols={40} name='articleMsgBody' maxLength={48} style={{resize: 'none'}}></textarea>
                    
                    <label htmlFor='articleLink'>link do artigo</label>
                    <input value={data.articleLink.value} onChange={handleFormData} name='articleLink' />

                    <input type='submit' value='cadastrar' />

                    </VerticalContainer>
                </form>}
            </HorizontalContainer>
            
            
                <div>
                    <h3>Projetos cadastrados</h3>
                    <Container maxWidth="xl">
                      <main>
                        <Grid container spacing={2}>
                            {projects.map((post) => (
                            <Posts key={post} post={post} />
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
                            <Posts key={post} post={post} />
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