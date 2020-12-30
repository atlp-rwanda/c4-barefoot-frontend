import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import {
    Toolbar, Typography, Drawer,
    Divider, IconButton, List, ListItem,
    ListItemText, AppBar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/icons/List';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

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
                        <Link className={classes.navLinks}>
                            Barefoot Nomad
                        </Link>
                    </Typography>
                    <Typography className={classes.subTitle}>
                        <Link className={classes.navLinks}>
                            Home
                        </Link>
                    </Typography>
                    <Typography className={classes.subTitle}>
                        <Link className={classes.navLinks}>
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
                    <ListItem button component={Link} to="/updateProfile">
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button component={Link} to="/changePassword" >
                        <ListItemText primary="Change Password" />
                    </ListItem>
                </List>
            </Drawer>

        </React.Fragment >
    );
}

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
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar>

                    <Typography variant="h5" color="primary" className={classes.title} noWrap>
                        <Link className={classes.navLinks}>
                            Barefoot Nomad
                        </Link>
                    </Typography>
                    <Typography className={classes.subTitle}>
                        <Link className={classes.navLinks}>
                            Home
                        </Link>
                    </Typography>
                    <Typography className={classes.subTitle}>
                        <Link className={classes.navLinks}>
                            Logout
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Divider />
                <List className={classes.sideNav}>
                    <ListItem button component={Link} to="/updateProfile">
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button component={Link} to="/changePassword" >
                        <ListItemText primary="Change Password" />
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                {children}
            </main>
        </React.Fragment >
    );
};

LoggedInUserLayout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default LoggedInUserLayout;