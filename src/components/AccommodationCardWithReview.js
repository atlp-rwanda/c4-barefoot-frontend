import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Checkbox} from '@material-ui/core';
import { Place } from '@material-ui/icons'
import { Skeleton } from '@material-ui/lab'
import colors from './colors';
import Ratings from './RatingStars';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {getBookings} from "../redux/actions/bookAccommodationAction";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 360,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  media: {
    height: 140
  },
  checkbox:{
      display: 'block',
      position:'absolute',
      color: 'secondary',
      right: 0,
      fontSize:'25px'
  },
  cardActions:{
      display: 'flex',
      flexDirection:'column',
      alignItems:'flex-start',
  },
  reviews:{
      fontSize: '14px',
      color: colors.primary100,
  },
  cardContent:{
    overflow: 'hidden'
  },
  titleText:{
    [theme.breakpoints.down('sm')]:{
      fontSize:'18px',
    }
  },
  rateAndReviewLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    padding:'5px'
  }
}));

function Accommodations(props) {
    const classes = useStyles();
    const open = false; 
    let [check,setCheck]=useState(null);
    const handleSelection = (event) =>{
      setCheck(event.target.id);
      console.log(event.target.name);
      props.selectAccommodation(event.target.id);
     // props.getAccommodation(event.target.name);
     console.log(props)
      props.getTemperature(event.target.name);
      props.getAccommodationAminity(event.target.id);

  };
  useEffect(() => {
    props.getBookings()
    // console.log(props.reviews)
  },[])
    const handleViewMore =() =>{
      return props.openModalAction({open: true, data: props.accommodation});
    }


  return (
    <Card className={classes.root} >
      {(props.pending ? 
        <CardActionArea>
          <Skeleton animation="wave" variant="rect" className={classes.media} />
          <CardContent className={classes.cardContent} >
            <Skeleton animation="wave" height={30} width="60%" />
            <Skeleton animation="wave" height={10} width="80%" />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Skeleton animation="wave" height={30} width="60%" />
          </CardActions>
        </CardActionArea>
        :
      <>
      <CardActionArea>
        <Checkbox
        onChange={handleSelection}
        checked={props.accommodationn.id===props.selectedAccommodation?true:false}
        id={props.accommodationn.id}
        name={props.accommodationn.city}
        className={classes.checkbox}/>
        <CardMedia
          onClick={handleViewMore}
          className={classes.media}
          image={props.accommodationn.photos}
              // image={image}
          title={props.accommodationn.title}
        />
        <CardContent onClick={handleViewMore} className={classes.cardContent} >
          <Typography gutterBottom variant="h5" component="h2" className={classes.titleText}>
           {props.accommodationn.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" noWrap >
            {props.accommodationn.description}
          </Typography>
        </CardContent>
          </CardActionArea>
          {props.accommodation.bookedAccommodation != undefined ? (
            <CardActions className={classes.cardActions}>
               <Button size="small" color="primary" onClick={handleViewMore} startIcon={<Place color="secondary" />}> {props.accommodationn.state}, {props.accommodationn.city} </Button>
              <div className={classes.rateAndReviewLinks}>
                <div>
                <Link  to={'/review/'+props.accommodationn.id}>
                   <Ratings highratings={3} id={props.accommodationn.id} />
                 </Link>
                </div>
                <div>
                <Typography className={classes.reviews}>
             <Link  to={'/reviews/'+props.accommodationn.id} className={classes.links}  style={{ textDecoration: 'none' }}>
                   Reviews
                   </Link>
             </Typography>
                </div>
              </div>
            
                 
            
           </CardActions>
          ):( <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={handleViewMore} startIcon={<Place color="secondary" />}> {props.accommodationn.state}, {props.accommodationn.city} </Button>
                
                  <Ratings highratings={3} id={props.accommodationn.id} />
                
            <Typography className={classes.reviews}>
                  Reviews
            </Typography>
          </CardActions>)}
     
      </>
      )}
    </Card>
  );
}

const mapStateToProps = state => ({
  accommodation:state.bookedAccommodations
})

export default connect(mapStateToProps, {getBookings}) (Accommodations);

