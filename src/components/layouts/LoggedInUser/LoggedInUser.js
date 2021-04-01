import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { managerSideBarData } from './manageSideBarData'
import PersonIcon from '@material-ui/icons/Person';
import { Toolbar, Typography, Drawer, Divider, IconButton, List, ListItem,ListItemText, AppBar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { Menu, AccountCircle, ExpandLess, ExpandMore } from '@material-ui/icons'
import { Box, Avatar, Collapse, ListItemIcon } from '@material-ui/core';
import Footer from '../../AuthorizeUserFooter';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: '100%',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        display: 'block',
        marginRight: theme.spacing(2),
    },

    title: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        flexGrow: 1,
    },
    subTitle: {
        [theme.breakpoints.down('sm')]: {
            flexGrow: 2
        },
        marginLeft: theme.spacing(5)
    },
    navLinks: {
        textDecoration: 'none',
        color: '#FFFFFF',
    },
    paper: {
        background: 'black',
        color: 'white'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        background: '#EAF4FB',
        color: '#43A0D6',
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    sideNav: {
        marginTop: theme.spacing(8)
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
        marginLeft: drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),

    },
}));

const PhoneView = (props) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleDrawer = () => { setOpen(!open) }
    const [collapse,setCollapse]= useState(false);
    // console.log(sideBarData)
    // console.log(drop);
    const [drop, setDrop] = React.useState( managerSideBarData.map( link=>{
        return {
          item: link.title,
          open: false
        }
    })
    );
    const checkIsOpen= ( title =>{
      let isOpen= false;
      drop.forEach( link => {
        if( link.item === title){
          isOpen= link.open
        }
      })
      return isOpen;
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ [anchor]: open });
      };

    const handleCollapse= (item)=>{
      const newState= drop.map( (link)=>{
        if(link.item === item){
          return {
            item: link.item,
            open: !link.open
          }
        }
        else{
          return {
            item: link.item,
            open: false
          }
        }
      });
      setDrop(newState);
      // setCollapse(!collapse);
    }
    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawer}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h5" className={classes.title} noWrap>
                            Barefoot Nomad
                    </Typography>
                    <Typography className={classes.subTitle}>
                        <Link className={classes.navLinks} to="/">
                            Home
                        </Link>
                    </Typography>
                    <Typography className={classes.subTitle}>
                        <Link className={classes.navLinks} to="/logout">
                            Logout
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div className={classes.drawerHeader}>

                </div>
                <Divider />
                
                <List>
                <ListItem button component={Link} to="/profile">
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button component={Link} to="/changePassword" >
                        <ListItemText primary="Change Password" />
                    </ListItem>
          {managerSideBarData.map(list => (
             list.subs.length === 0 ? (
              <Link to={list.link} key={list.title} className={classes.nested}>
                <ListItem button onClick={toggleDrawer('left', false)}>
                    <ListItemIcon className={classes.listIcons}>{list.icon}</ListItemIcon>
                    <ListItemText>
                        {list.title}
                    </ListItemText>
                </ListItem>

              </Link>
              )
               :
              (

                <Box key={list.title} onClick={()=> handleCollapse(list.title)}>
                <ListItem button >
                    <ListItemIcon className={classes.listIcons}>{list.icon}</ListItemIcon>
                    <ListItemText>
                        {list.title}
                    </ListItemText>
                    {checkIsOpen(list.title) ? <ExpandLess /> : <ExpandMore  /> }
                </ListItem>

                    <Collapse in={checkIsOpen(list.title)} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        { list.subs.map((sub)=>(
                          <Link to={sub.link} key={sub.title} style={{textDecoration: 'none'}} >
                            <ListItem button className={classes.subList}>
                              <ListItemIcon className={classes.listIcons}>
                                {sub.icon}
                              </ListItemIcon>
                              <ListItemText> {sub.title} </ListItemText>
                            </ListItem>
                          </Link>
                        ))}
                      </List>
                    </Collapse>

              </Box>               

              )
          ))}
                
      </List>
            </Drawer>

        </React.Fragment >
    );
}
//sidebar in desktop view
const DesktopView = (props) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleDrawer = () => { setOpen(!open) }
    const [collapse,setCollapse]= useState(false);
    const [drop, setDrop] = React.useState( managerSideBarData.map( link=>{
        return {
          item: link.title,
          open: false
        }
    })
    );
    const checkIsOpen= ( title =>{
      let isOpen= false;
      drop.forEach( link => {
        if( link.item === title){
          isOpen= link.open
        }
      })
      return isOpen;
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ [anchor]: open });
      };

    const handleCollapse= (item)=>{
      const newState= drop.map( (link)=>{
        if(link.item === item){
          return {
            item: link.item,
            open: !link.open
          }
        }
        else{
          return {
            item: link.item,
            open: false
          }
        }
      });
      setDrop(newState);
      // setCollapse(!collapse);
    }
    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawer}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h5" className={classes.title} noWrap>
                            Barefoot Nomad
                    </Typography>
                    <Typography className={classes.subTitle}>
                        <Link className={classes.navLinks} to="/">
                            Home
                        </Link>
                    </Typography>
                    <Typography className={classes.subTitle}>
                        <Link className={classes.navLinks} to="/logout">
                            Logout
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div className={classes.drawerHeader}>

                </div>
                <Divider />
                
                <List>
                <ListItem button component={Link} to="/profile">
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button component={Link} to="/changePassword" >
                        <ListItemText primary="Change Password" />
                    </ListItem>
          {managerSideBarData.map(list => (
             list.subs.length === 0 ? (
              <Link to={list.link} key={list.title} className={classes.nested}>
                <ListItem button onClick={toggleDrawer('left', false)}>
                    <ListItemIcon className={classes.listIcons}>{list.icon}</ListItemIcon>
                    <ListItemText>
                        {list.title}
                    </ListItemText>
                </ListItem>

              </Link>
              )
               :
              (

                <Box key={list.title} onClick={()=> handleCollapse(list.title)}>
                <ListItem button >
                    <ListItemIcon className={classes.listIcons}>{list.icon}</ListItemIcon>
                    <ListItemText>
                        {list.title}
                    </ListItemText>
                    {checkIsOpen(list.title) ? <ExpandLess /> : <ExpandMore  /> }
                </ListItem>

                    <Collapse in={checkIsOpen(list.title)} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        { list.subs.map((sub)=>(
                          <Link to={sub.link} key={sub.title} style={{textDecoration: 'none'}} >
                            <ListItem button className={classes.subList}>
                              <ListItemIcon className={classes.listIcons}>
                                {sub.icon}
                              </ListItemIcon>
                              <ListItemText> {sub.title} </ListItemText>
                            </ListItem>
                          </Link>
                        ))}
                      </List>
                    </Collapse>

              </Box>               

              )
          ))}
                
      </List>
            </Drawer>

        </React.Fragment >
    );
}
//layout
const LoggedInUserLayout = props => {
    const theme = useTheme();
    const { children } = props;
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    if (matches) {
        return (
            <React.Fragment>
                <PhoneView />
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    {children}
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <DesktopView />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                {children}
            </main>
            <Footer/>
        </React.Fragment>
    )
    // return (
    //     <React.Fragment>
    //         <AppBar
    //             position="fixed"
    //             className={classes.appBar}
    //         >
    //             <Toolbar>
    //                 <Typography variant="h5" color="primary" className={classes.title} noWrap>
    //                     <Link className={classes.navLinks}>
    //                         Barefoot Nomad
    //                     </Link>
    //                 </Typography>
    //                 <Typography className={classes.subTitle}>
    //                     <Link className={classes.navLinks} to="/">
    //                         Home
    //                     </Link>
    //                 </Typography>
    //                 <Typography className={classes.subTitle}>
    //                     <Link className={classes.navLinks} to="/logout">
    //                         Logout
    //                     </Link>
    //                 </Typography>
    //             </Toolbar>
    //         </AppBar>
    //         <Drawer
    //             className={classes.drawer}
    //             variant="permanent"
    //             anchor="left"
    //             classes={{
    //                 paper: classes.drawerPaper,
    //             }}
    //         >
    //             <Divider />
    //             <List className={classes.sideNav}>
    //                 <ListItem button component={Link} to="/profile">
    //                     <ListItemText primary="Profile" />
    //                 </ListItem>
    //                 <ListItem button component={Link} to="/changePassword" >
    //                     <ListItemText primary="Change Password" />
    //                 </ListItem>
    //             </List>
    //         </Drawer>
    //         <main
    //             className={clsx(classes.content, {
    //                 [classes.contentShift]: open,
    //             })}
    //         >
    //             {children}
    //         </main>
    //     </React.Fragment >
    // );
};

LoggedInUserLayout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default LoggedInUserLayout;