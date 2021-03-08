import React from 'react'
import { IconButton, Drawer, List, ListItem, ListItemText, Typography, Box, Avatar } from "@material-ui/core"
import { AddLocation, Business, Home, LocationCity, Menu, PinDrop } from "@material-ui/icons"
import { useState } from "react"
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: 'black'
  },
  menuIcon: {
    color: 'white'
  },
  container: {
    width: 250,
    position: 'absolute',
    top: 64,
    bottom: 0,
    backgroundColor:'#EAF4FB',
    overflow:'auto'
},
adminBox:{
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    height:70,
},
linkBox: {
  display:'flex',
  padding:'20px',
  color:'#43A0D6',
  '&:hover':{
      background: '#ABD5ED',
      borderLeft: '6px solid  #257AAA'
    }
},
a:{
    textDecoration:'none',
    color:'#43A0D6',
    
},
}))

const SideDrawer = ({navLinks}) => {
  const classes = useStyles()
  const [state, setState] = useState({ right: false })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ [anchor]: open })
  }

  const sideDrawerList = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
            <Box className={classes.adminBox}>
                <Typography><Avatar/></Typography>
                <Typography>Requester Name</Typography>
            </Box>
            <Typography className={classes.a} href='/requester/create-travel-request' component='a'>
              <ListItem className={classes.linkBox}>
                  <Typography><AddLocation/></Typography>
                  Create Travel Request
              </ListItem>
            </Typography>
            <Typography className={classes.a} href='/requester/view-travel-requests' component='a'>
              <ListItem className={classes.linkBox}>
                  <Typography><PinDrop/></Typography>
                  View Travel Requests
              </ListItem>
            </Typography>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton 
      edge="start" 
      aria-label="menu"
      onClick={toggleDrawer("left", true)}
      >
        <Menu fontSize='large' className={classes.menuIcon}/>
      </IconButton>
      <Drawer
        anchor="left"
        open={state.left}
        onOpen={toggleDrawer("left", true)}
        onClose={toggleDrawer("left", false)}
        
      >
  {sideDrawerList("left")}
</Drawer>
    </React.Fragment>
  )
}

export default SideDrawer