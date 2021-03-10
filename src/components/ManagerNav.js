import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import DrawerComponent from './sideBarDrawer/Drawer';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationMenu from '../components/NotificationMenu';

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
  link:{
      '&:hover':{
          cursor:'pointer',
          textDecoration:"none"
      }
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [sideBar, setSideBar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const showSideBar = () => setSideBar(!sideBar)
  const handleClockMenuIcon = () => {
      console.log('hahahahahahahahahaha')
     return (
     <>
        <DrawerComponent />
      </>
      )    
  } 
  const handleClickNotif = (e)=>{
    setAnchorEl(e.currentTarget);
  }
  const hancleCloseNot = ()=>{
    setAnchorEl(null);
  }
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <DrawerComponent />
          <Typography variant="h6" className={classes.title}>
           <Link className={classes.link} href="/" color="inherit">
    
            Barefoot Nomad
  </Link>
          </Typography>
         
          <Button aria-controls="noti-menu" aria-haspopup="true" onClick={handleClickNotif}> <NotificationsActiveIcon href="/notification" color="inherit"/> </Button>
          <Button href="/logout" color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
      <NotificationMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleClose={hancleCloseNot}/>
    </div>
  );
}
