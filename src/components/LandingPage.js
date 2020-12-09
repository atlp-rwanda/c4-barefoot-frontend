import React from 'react'
import Card from './PlacesToVisit'
import Grid from '@material-ui/core/Grid'
import {Box, makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: { 
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  image:{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1485245389155-8173f59637a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem"
  }
}));

function Landing (){

  const classes = useStyles();

  return(
    <div className={ classes.root }>
      <Box className={classes.image}>
        <Box> <Typography>Let's travel together</Typography> </Box>
      </Box>
      <Grid container>
        <Grid item xs={4} className={classes.paper}>
          <Card/>
        </Grid>
        <Grid item xs={4} className={classes.paper}>
          <Card/>
        </Grid>
        <Grid item xs={4} className={classes.paper}>
          <Card/>
        </Grid>
      </Grid>
    </div>

  )
  
}

export default Landing