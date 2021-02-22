import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AdminNavBar from '../../AdminNavbar'
import Footer from '../../Footer'


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }
}));

const DefaultM = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div >
      <AdminNavBar/>
      <div className={classes.toolbar} />
      <main className={classes.content}>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

DefaultM.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default DefaultM;




// import React from 'react';
// import AdminDrawer from './AdminDrawer'
// import PropTypes from 'prop-types';
// //import { makeStyles } from '@material-ui/styles';
// import AdminNavBar from '../../AdminNavbar'
// import Footer from '../../Footer'
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import {Typography,Button} from '@material-ui/core';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import { PlusOne, Home, People, Delete, Settings, Menu, AccountCircle, ExpandLess, ExpandMore } from '@material-ui/icons';
// import { Box, Avatar, Collapse} from '@material-ui/core';
// import { Link } from 'react-router-dom'
// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     // zIndex:theme.zIndex.drawer + 1,
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
//   navDisplay: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: '100%'
//     },
//     logo: {
//         textDecorationLine: 'none',
//         color: 'inherit'
//     },
//     innerBox: {
//         display: 'flex',
//         alignItems: 'center'
//     }
// }));

// function DefaultM(props) {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const [drop, setDrop] = React.useState(false);
 
//           const barefootLogo = <Typography href='/welcome' variant='h6'component='a' className={classes.logo}> Barefoot Nomad </Typography>

//               const displayDesktop = () => {
//               return (
//                   <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         className={clsx(classes.menuButton, open && classes.hide)}
//                     >
//                     {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                         {/* <MenuIcon /> */}
//                     </IconButton>
//                       <Box  className={classes.navDisplay}>
//                           <Box className={classes.innerBox}>
//                               <AdminDrawer/>
//                               {barefootLogo}
//                           </Box>
                        
//                               <List component='nav'>
//                                   <Button href="/login" color='inherit'>Logout</Button>
//                               </List>
//                       </Box>
//                   </Toolbar>
//                   )
//               }
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

// //   const handleDrawerClose = () => {
// //     setOpen(false);
// //   };
// //   const handleClick = () => {
// //         setDrop(!drop)
// //       }
 
//   return (
//     //   <React.Fragment>
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         className={clsx(classes.appBar, {
//           [classes.appBarShift]: open,
//         })}
//       >
//         {displayDesktop()}
//       </AppBar>
//       {/* <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//       {list('left')}
//       </Drawer> */}
//       {/* <main
//         className={clsx(classes.content, {
//           [classes.contentShift]: open,
//         })}
//       >
//         <div className={classes.drawerHeader} />
//         {children}
//       </main> */}
//     </div>
   
//   );
// }

// // ResponsiveDrawer.propTypes = {
// //   /**
// //    * Injected by the documentation to work in an iframe.
// //    * You won't need it on your project.
// //    */
// //   window: PropTypes.func,
// // };

// DefaultM.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string
// };

// export default DefaultM;