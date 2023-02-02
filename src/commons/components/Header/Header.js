import React from 'react';
import { BarContainer, NeutralLink } from './styles';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import { logoImgUrl } from "../../../constants/logoImageURL";
import { useNavigate } from 'react-router-dom';
import { goToAbout, goToArticles, goToHome, } from '../../../setup/app-routes-manager/coordinator';
import { cvUrl, githubUrl, linkedinUlr } from "../../../constants/contatos-cvURLs";
import { authorImgUrl } from "../../../constants/authorImageURL";





export const Header = () => {
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <BarContainer>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logoImgUrl} alt="logo" />
                    
          {/*For mobiles menu*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{color:'#fff'}}/>
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                ".MuiMenu-paper":{backgroundColor:'#232323', color:'#fff'}
              }}
            >
              
                  <MenuItem onClick={()=>{goToHome(navigate); handleCloseNavMenu()}}>
                    <Typography textAlign="center">home</Typography>
                  </MenuItem>

                  <MenuItem onClick={()=>{goToAbout(navigate); handleCloseNavMenu()}}>
                    <Typography textAlign="center">sobre</Typography>
                  </MenuItem>

                  <MenuItem onClick={()=>{goToArticles(navigate); handleCloseNavMenu()}}>
                    <Typography textAlign="center">artigos</Typography>
                  </MenuItem>


            </Menu>
          </Box>

          <TabletMacIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          {/*For desktops menu*/}


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end' }}>
            
              <Button
                sx={{ my: 2, color:'white', display: 'flex'}}
                onClick={()=>{goToHome(navigate)}}
              >
                <HomeIcon />
                home
              </Button>

              <Button
                sx={{ my: 2, color:'white', ml:1, mr:1, display: 'flex' }}
                onClick={()=>{goToAbout(navigate)}}
              >
                <EmojiPeopleIcon />
                <Typography>sobre</Typography>
              </Button>

              <Button
                sx={{ my: 2, color:'white', display: 'flex' }}
                onClick={()=>{goToArticles(navigate)}}
              >
                <HistoryEduIcon />
                 artigos
              </Button>

              
          </Box>

          {/*social menu*/}

          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Menu Social">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Author image" src={ authorImgUrl } />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', ".MuiMenu-paper":{backgroundColor:'#232323'}}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <NeutralLink href={linkedinUlr}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">linkedin</Typography>
                  </MenuItem>
                </NeutralLink>

                <NeutralLink href={githubUrl}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">GitHub</Typography>
                  </MenuItem>
                </NeutralLink>

                <NeutralLink href={cvUrl}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">CV</Typography>
                  </MenuItem>
                </NeutralLink>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </BarContainer>
  );
}