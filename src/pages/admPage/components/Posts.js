import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {deletePost} from '../../../setup/firebase/admCRUD/deletePost'
import { Link } from 'react-router-dom';

export const Posts = (props) => {
  const { post } = props;
  const imgBg = 'https://images.unsplash.com/photo-1606146485652-75b352ce408a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aHRtbHx8fHx8fDE2NzQ3MjU4MDI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'

  return (
    <Grid item md={6}>
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${imgBg})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={`url(${imgBg})`} alt='project' />}
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
        
        <Grid container spacing={2}
          direction="column"
          sx={{
            marginTop:'10px',
            position: 'relative',
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
            maxWidth:'459px',
          }}
        >
        <h3>
            {post.title}
        </h3>
        <p>
            {post.description}
        </p>
        <Link sx={{color:'#f00'}} variant="subtitle1" onClick={deletePost}>
            Excluir
        </Link>
        </Grid>
        
    
    </Paper>
    </Grid>
  );
}
