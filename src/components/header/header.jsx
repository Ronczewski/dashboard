import { AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from "react";
import { Link } from "react-router-dom";
import './header.css'


// ToDo 
//const pages = ['Products', 'Pricing', 'Blog'];
const pages = [
  {
    label: 'Home',
    path: '/home',
    id: 'home',
  },
  {
    label: 'News',
    path: '/news',
    id: 'news',
  },
  {
    label: 'Money',
    path: '/money',
    id: 'money',
  },
  {
    label: 'Weather',
    path: '/weather',
    id: 'weather',
  },
  {
    label: 'User',
    path: '/user',
    id: 'user',
  },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const settings = [
    {
      label: 'LogIn',
      path: '/log',
      id: 'logId',
  },
  {
    label: 'Products',
    path: '/products',
    id: 'product',
  },
];

  
export const Header =() =>{
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <img src='./images/logo_ok.png' alt=""
          style={{width: '110px', backgroundColor: 'white ', opacity: 0.8, borderRadius: '3px'}} />
        
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
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
              // horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem 
              key={page.id} 
              onClick={handleCloseNavMenu}>
                <Typography 
                  textAlign="center">
                  <Link className="menu" to={page.path}>{page.label}</Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <img src='./images/logo_ok.png' alt=""
          style={{width: '110px', background: 'white', borderRadius: '15px'}} />
        </Typography>
        <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            // <Button
            //   className="menuButton"
            //   key={page.id}
            //   onClick={handleCloseNavMenu}
            //   sx={{ my: 2, color: 'white', display: 'block' }}
            // >
            // </Button>
            // <button style={{margin: '3px', borderRadius: '33px'}}>
            <Link 
            className="buttons" 
            to={page.path} 
            key={page.id} 
            onClick={handleCloseNavMenu}
            >{page.label}
            </Link>
            // </button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Tomy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
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
            {settings.map((setting) => (
              <MenuItem 
              key={setting}
              onClick={handleCloseUserMenu}>
                <Typography 
                textAlign="center">
                  {/* {setting} */}
                  <Link className="menu" to={setting.path}>{setting.label}</Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>

  );
}