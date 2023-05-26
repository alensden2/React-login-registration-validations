import React from 'react';
import { Box, Typography, AppBar, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box>
      <AppBar sx={{
        backgroundColor: 'white',
    }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{
                color: "black"
            }}/>
          </IconButton>
          <Typography sx={{
            fontFamily: 'Lobster', fontSize: '1.5rem', color: 'black'
          }}>
            VogueManic
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

// referene navbar - https://mui.com/material-ui/react-app-bar/
// font reference -<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
