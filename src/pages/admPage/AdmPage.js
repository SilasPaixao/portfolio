import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { useForm } from "../../commons/hooks/useForm";
import { useEmailPassAuthentication } from "../../setup/firebase/admAuth/emailPassAuthentication";


export const AdmPage = ()=>{

  const theme = useTheme()
    
    const {data, handleFormData, clear} = useForm({email:"", password:""})
    const {login} = useEmailPassAuthentication(data)

    const handleSubmit = (e)=>{
        e.preventDefault()
        login()
        clear()
    }

    return (
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5" 
                  sx={{ color:theme.palette.text.primary }}
                  >
                    Entrar como administrador
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email do Adm"
                      name="email"
                      value={data.email.value}
                      onChange={handleFormData}
                      autoComplete="email"
                      autoFocus
                      sx={{ '.MuiInputLabel-root':{color:theme.palette.text.primary }}}
                      
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      value={data.password.value}
                      onChange={handleFormData}
                      label="Senha do Adm"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      sx={{ '.MuiInputLabel-root':{color:theme.palette.text.primary }}}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Entrar como Administrador
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2"
                         onClick={()=>{alert("Como admin, você deve recuperar a senha no Firebase Server")}}
                         sx={
                            {color:theme.palette.text.primary,
                             textDecoration:'none',
                            '&:hover':{textDecoration:'underline'},
                            cursor:'pointer'}
                            }
                         >
                          Esqueceu a senha?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="/cadastroAdmin" variant="body2" 
                         sx={
                            {color:theme.palette.text.primary,
                             textDecoration:'none',
                            '&:hover':{textDecoration:'underline'},
                            cursor:'pointer'}
                            }
                         >
                          {"Novo Administrador? Cadastre-se!"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                  <Link href="/" 
                  sx={{ color:theme.palette.text.primary, marginTop:'40px' }}
                  >
                    voltar ao site
                  </Link>
                </Box>
              </Container>)
         

}