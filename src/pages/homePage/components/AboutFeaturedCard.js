import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { featuredcardBg } from "../../../constants/featuredCardBG";


export const AboutFeaturedCard = ()=> {

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${featuredcardBg})`
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={featuredcardBg} alt="card background" />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container sx={{justifyContent:'flex-end'}}>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          > 
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Olá! <br /> Bem vindo(a)<br /> Eu sou o Silas.
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Sou desenvolvedor back-end...
            </Typography>
            <Link variant="subtitle1" href="/sobre">
              Continue lendo...
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

