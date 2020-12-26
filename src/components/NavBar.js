// import React, { Component } from 'react'
// import Button from '@material-ui/core/Button'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// class NavBar extends Component{
//     render(){
//         return(
//             <div>
//              <div className="navbar">
//              <div className="logo">
//              <h2>Barefoot Nomad</h2>
//              </div>
//              <div className="navlinks">
//                 <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li> <Link to="/login">Login</Link></li>
//                 <li><Link to="/signup">Signup</Link></li>
//                 <li><Link to="/forgetpassword">Send Email</Link></li>
//                 <li><Link to="/newpassword">New Password</Link></li>
//                 </ul>
//              </div>
//              </div>
//             </div>
//         )
//     }
// }
// export default NavBar;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter} from 'react-router-dom'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
      color:"white"
  }
}));

 const NavBar = (props) => {
  const { history } = props
  // console.log(history);
  const query = history.location.search;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
  console.log(isMobile)
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClick = (pageURL) => {
      history.push(pageURL)
    setAnchorEl(null);
  };
 
  return (
    <div className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Barefoot Nomad
          </Typography>
          
            <div>
              
          {!isMobile ? (
            <>
              <IconButton 
              edge="start" 
              onClick={handleMenu} 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu"
              >
            <MenuIcon />
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/forgetpassword')}>Send Email</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/user/reset-password' + {query})}>New Password</MenuItem>
              </Menu>
              </>
              ) : (
                  <div>
                  
                <Button className={classes.button} onClick={() => handleMenuClick('/')}>Home</Button>
                <Button className={classes.button} onClick={() => handleMenuClick('/forgetpassword')}>Send Email</Button>
                <Button className={classes.button} onClick={() => handleMenuClick('/user/reset-password' + {query})}>New Password</Button>
                  </div>

              )}
              
            </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar)
import React from 'react'
import { AppBar, Toolbar, Button, makeStyles, List, Container, Hidden, Typography} from '@material-ui/core'
import {PersonAddOutlined, PersonOutlined} from '@material-ui/icons'
import SideDrawer from './SideDrawer'

const navLinks = [
    {title: 'Login', path: '/login'},
    {title: 'Signup', path: '/signup'}
]

const useStyles = makeStyles(theme => ({
    navDisplay: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        textDecorationLine: 'none',
        color: 'inherit'
    }
  }))

function Header (){
    const classes = useStyles()

    const barefootLogo = <Typography href='/welcome' variant='h6'component='a' className={classes.logo}> Barefoot Nomad </Typography>

    const displayDesktop = () => {
    return (
        <Toolbar>
            <Container maxWidth='lg' className={classes.navDisplay}>
                {barefootLogo}
                <Hidden smDown>
                    <List component='nav'>
                        <Button href="/login" color='inherit' startIcon={ <PersonOutlined/> }>Login</Button>
                        <Button href="/signup" color='inherit' startIcon = { <PersonAddOutlined/> }>Signup</Button>
                    </List>
                </Hidden>
                <Hidden mdUp>
                    <SideDrawer navLinks={navLinks}/>
                </Hidden>
            </Container>
        </Toolbar>
        )
    }

     return(
         <React.Fragment>
            <AppBar position='static'>{displayDesktop()}</AppBar>
         </React.Fragment>
     )
 
}
export default Header;
