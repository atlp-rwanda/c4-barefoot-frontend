import React, {useEffect, useState} from 'react'
import { AppBar, Toolbar, Button, makeStyles, List, Container, Hidden, Typography } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import SideDrawer from './SideDrawer';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { NotificationsActiveOutlined } from '@material-ui/icons/';
import NotificationMenu from '../components/NotificationMenu';
import Badge from '@material-ui/core/Badge';
import { connect } from "react-redux";
import { getNotifications } from "../redux/actions/notificationAction";

const navLinks = [
    { title: 'Logout', path: '/logout' },
    {title: 'notification', path: '/notification'}
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

function Header(props) {
    const classes = useStyles();
  const [sideBar, setSideBar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
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

    const barefootLogo = <Typography href='/welcome' variant='h6' component='a' className={classes.logo}> Barefoot Nomad </Typography>

    const displayDesktop = () => {
        return (
            <div>
                <Toolbar>
                <Container maxWidth='lg' className={classes.navDisplay}>
                    {barefootLogo}
                    <Hidden smDown>
                        <List component='nav'>

                        <Button aria-controls="noti-menu" aria-haspopup="true" onClick={handleClickNotif}> 
                            <Badge badgeContent={props.notifications.notifications.count} color="error"><NotificationsActiveOutlined href="/notification" color=''/></Badge> 
                        </Button>
                            <Button href="/logout" color='inherit' startIcon={<LockIcon />}>Logout</Button>
                        </List>
                    </Hidden>
                    <Hidden mdUp>
                        <SideDrawer navLinks={navLinks} />
                    </Hidden>
                </Container>
            </Toolbar>
            <NotificationMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleClose={hancleCloseNot} notifications={props.notifications}/>
        </div>
            
        )
    }

    return (
        <React.Fragment>
            <AppBar position='static'>{displayDesktop()}</AppBar>
        </React.Fragment>
    )

}
const mapStateToProps = state=> {
    return {
        notifications: state.notifications
    }
  }
export default connect(mapStateToProps,{getNotifications})(Header);