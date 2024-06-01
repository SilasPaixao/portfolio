/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/style-prop-object */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { featuredcardBg } from '../../../constants/featuredCardBG';
import Sidebar from './SideBar'

export const AboutFeaturedCard = () => {

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
      <Grid container sx={{ justifyContent: 'flex-end' }}>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              right: '-1.4em',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Sidebar />

            <Link variant="subtitle1" href="#more">
              Continue lendo...
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

