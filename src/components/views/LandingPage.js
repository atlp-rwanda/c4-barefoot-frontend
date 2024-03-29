import React, {useEffect} from 'react'
import LocationCard from '../LocationCard'
import AccommodationCard from '../AccommodationCard'
import {Box, makeStyles, Typography, Container, Grid} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { connect } from 'react-redux'
import { getLocations } from '../../redux/actions/fetchLocationsAction'
import { getAccommodations } from '../../redux/actions/fetchAccommodations'
import { useTranslation } from 'react-i18next';
import { getUsers } from '../../redux/actions/UsersAction'
import { adminGetUsers} from '../../redux/actions/fetchUsersAction'
import { getRoles } from '../../redux/actions/fetchRolesAction'

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
    flexDirection:"column",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
  content:{
    textAlign:'center',
    border:'2px solid white',
    width:'80%',
    padding:"5px",
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    paddingTop: theme.spacing(3)
  },
  cardTitle: {
    fontWeight: 600,
    paddingBottom: theme.spacing(3)
  }
}));

function Landing (props){
  const { t, i18n } = useTranslation();

  useEffect(() => {
    props.getLocations()
    props.getAccommodations()
    if(localStorage.getItem('userRole')==="administrator"){
      props.getRoles()
      props.adminGetUsers()
    }
  }, [])
  
  const locationSkeleton = (<Grid item xs={12} sm={6} md={4}> <LocationCard/> </Grid>)

  const accommodationSkeleton = <Grid item xs={12} sm={6} md={4}> <AccommodationCard/> </Grid>

  const classes = useStyles();
  return(
    <React.Fragment>
      {props.locationsData.pending ? <Skeleton variant='rect' height='500px'/> :(<Box className={classes.image}>
        <Box> 
          <Typography variant='h4'>{t("Let's travel together")}</Typography>
        </Box>
        <Box className={classes.content}>
        <Typography variant='h6' >{t("Are you planning to cross the borders of your country as well as the continent, alone or with your co-workers ? Don't worry, you're in the right place. Here we're going to help you find best destination & accommodations and book your trip.")}</Typography>
        </Box>
      </Box>)}
      <Container maxWidth='lg' className={classes.cardContainer}>

        <Typography variant='h6' className={classes.cardTitle}>
          {props.locationsData.pending ? <Skeleton variant='text' width='25%' /> :"Recommended places to visit"}
        </Typography>

        <Grid container spacing={3}>
          {props.locationsData.pending ? locationSkeleton :props.locationsData.locations.slice(0,3).map((location) => (
              <Grid item xs={12} sm={6} md={4} className={classes.paper} key = {location.id}>
                <LocationCard location={location}/>
              </Grid> 
            )
          )}
        </Grid>
      </Container>

      <Container maxWidth='lg' className={classes.cardContainer}>

        <Typography variant='h6' className={classes.cardTitle}>
          {props.accommodationsData.pending ? <Skeleton variant='text' width='25%' /> :"Checkout top rated accommodations"}
        </Typography>

        <Grid container spacing={3}>
          {props.accommodationsData.pending ? accommodationSkeleton : props.accommodationsData.accommodations.rows.map((accommodation)=> (
            <Grid item xs={12} sm={6} md={4} className={classes.paper} key = {accommodation.id}>
              <AccommodationCard accommodation={accommodation}/>
            </Grid>
          ))}
           
        </Grid>
      </Container>
    </React.Fragment>

  )
  
}

const mapStateToProps = state => ({
  locationsData: state.fetchLocations,
  accommodationsData: state.fetchAccommodations
})

export {Landing}
export default connect(mapStateToProps, { getLocations, getAccommodations, getUsers,getRoles,adminGetUsers})(Landing)

