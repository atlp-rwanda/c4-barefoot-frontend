import React from 'react'
import LocationCard from './LocationCard'
import AccommodationCard from './AccommodationCard'
import Grid from '@material-ui/core/Grid'
import {Box, makeStyles, Typography, Container} from '@material-ui/core'
import {locations, accommodations} from '../dummyData.json'

const useStyles = makeStyles((theme) => ({
  
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
    fontSize: "4rem",
  },
  cardContainer: {
    paddingTop: theme.spacing(3)
  },
  cardTitle: {
    fontWeight: 600,
    paddingBottom: theme.spacing(3)
  }
}));

function Landing (){

  const classes = useStyles();

  return(
    <React.Fragment>
      <Box className={classes.image}>
        <Box> <Typography variant='h4'>Let's travel together</Typography> </Box>
      </Box>
      <Container maxWidth='lg' className={classes.cardContainer}>
        <Typography variant='h6' className={classes.cardTitle}>Recommended places to visit</Typography>
        <Grid container spacing={3}>
          {locations.map((location) => (
             <Grid item xs={12} sm={6} md={4} className={classes.paper}>
             <LocationCard location={location}/>
           </Grid> 
          )
          )}
        </Grid>
      </Container>

      <Container maxWidth='lg' className={classes.cardContainer}>
        <Typography variant='h6' className={classes.cardTitle}>Checkout top rated accommodations</Typography>
        <Grid container spacing={3}>
          {accommodations.map((accommodation)=> (
            <Grid item xs={12} sm={6} md={4} className={classes.paper}>
              <AccommodationCard accommodation={accommodation}/>
            </Grid>
          ))}
          
        </Grid>
      </Container>
    </React.Fragment>

  )
  
}

export default Landing