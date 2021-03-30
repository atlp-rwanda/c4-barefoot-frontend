import React, { useState } from 'react'
import { Menu, AccountCircle, ExpandLess, ExpandMore } from '@material-ui/icons'
import { makeStyles, IconButton, Drawer, Box, Avatar, Typography, Collapse, Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import {menuItems} from "./sideBarData";
import { Link } from 'react-router-dom';

const useStyles = makeStyles( theme =>({
  root: {
    background: '#EAF4FB'
  },  
  list: {
    width: 290,
  },
  menuIcon: {
    color: 'white'
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: 'black'
  },
  accountInfo: {
    display: 'flex',
    alignItems: 'center',
    marginLeft:"10px",
    height: 80
  },
  paper: {
    backgroundColor: '#EAF4FB'
  },
  listIcons: {
    color: theme.palette.primary.main,
  },
  subList: {
    paddingLeft: theme.spacing(4),
    textDecoration: `none`,
    color: 'black'
    
  },
  nested: {
    paddingLeft: theme.spacing(4),
    textDecoration: `none`,
    color: 'black'
    
  },
}))

function DrawerComponent() {

    // console.log('side menu items', menuItems);
    const classes = useStyles();
    const username = localStorage.getItem('userName');
    const role = localStorage.getItem('userRole');
    const [openDrawer, setOpenDrawer] = useState(true);
    const [state, setState] = useState({left: false});
    const [drop, setDrop] = React.useState( menuItems[role].map( link=>{
        return {
          item: link.title,
          open: false
        }
    })
    );
    
    const menuItem=menuItems[role]
    const [collapse,setCollapse]= useState(false);
    // console.log(menuItems)
    // console.log(drop);

    const checkIsOpen= ( title =>{
      let isOpen= false;
      drop.forEach( link => {
        if( link.item === title){
          isOpen= link.open
        }
      })
      // console.log(title + ':' + isOpen);
      return isOpen;
    });

    // checkIsOpen('Travel requests');

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
    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ [anchor]: open });
  };
    const drawSideBar = (anchor) => (
        <>
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
        </div>
        <Box className={classes.accountInfo}>
        <Link to='userprofile'>
          <Avatar className={classes.paper}>
            <AccountCircle fontSize='large' className={classes.listIcons}/>
          </Avatar>
        </Link>
        <Typography>{ username }</Typography>
      </Box>
      <Divider/>
      <List>
          {menuItem.map(list => (
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
                          <Link to={sub.link} key={sub.title} style={{textDecoration: 'none'}} onClick={toggleDrawer('left', false)} >
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
      </>
    )
    return (
        <React.Fragment>
         <IconButton edge='start' onClick={toggleDrawer('left', true)}>
            <Menu fontSize='large' className = {classes.menuIcon} />
          </IconButton>
        <Drawer 
        classes= { {paper: classes.root}}
        anchor='left'
        open={state.left} 
        onClose={toggleDrawer('left', false)}>
            {drawSideBar('left')}
        </Drawer>
        </React.Fragment>
    )
}

export default DrawerComponent
