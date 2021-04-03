import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import DrawerComponent from './sideBarDrawer/Drawer';
import { NotificationsActiveOutlined } from '@material-ui/icons/';
import NotificationMenu from '../components/NotificationMenu';
import Badge from '@material-ui/core/Badge';
import { connect } from "react-redux";
import { getNotifications } from "../redux/actions/notificationAction";
import DrawerComponent from './sideBarDrawer/Drawer';
import MultipleLanguages from './MultiLang/MultiLang'
import { useTranslation } from 'react-i18next';


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

const ButtonAppBar= (props)=> {
  const classes = useStyles();
  const [sideBar, setSideBar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const showSideBar = () => setSideBar(!sideBar)
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [sideBar, setSideBar] = useState(false)
  const handleClockMenuIcon = () => {
      console.log('hahahahahahahahahaha')
     return (
     <>
        <DrawerComponent />
      </>
      )    
  } 
  const handleClockMenuIcon = () => {
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
  useEffect(() => {
    props.getNotifications();
    var channel = pusher.subscribe('bare-foot-normad');
    channel.bind('notification', (data)=>{
      props.getNotifications();
    })
  }, [])
  console.log('notifications: ', props.notifications)

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
         
          <Button aria-controls="noti-menu" aria-haspopup="true" onClick={handleClickNotif}> 
          <Badge badgeContent={props.notifications.notifications.count} color="error"><NotificationsActiveOutlined href="/notification" color=''/></Badge> 
          </Button>
          <Button><MultipleLanguages/></Button>
          <Button href="/logout" color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
    
        <NotificationMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleClose={hancleCloseNot} notifications={props.notifications}/>
      
    </div>
  );
}
const mapStateToProps = state=> {
  return {
      notifications: state.notifications
  }
}

export default connect(mapStateToProps,{getNotifications})(ButtonAppBar);
