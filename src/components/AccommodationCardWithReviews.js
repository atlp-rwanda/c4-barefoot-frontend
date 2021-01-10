import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Checkbox} from '@material-ui/core';
import { Place } from '@material-ui/icons'
import { Skeleton } from '@material-ui/lab'
import { connect } from 'react-redux'
import colors from './colors';
import Ratings from './RatingStars';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  }
}));

function Accommodations(props) {
    const classes = useStyles();

    const handleSelection = (event) =>{
      const accommodation={
        selected:[props.accommodation],
        checked: event.target.checked
      };
      return props.selectAccommodationAction(accommodation);

    }    
    // console.log('props from the actual card');
    // console.log(props);
    const check = props.travelRequest.selectedAccommodation.length ? true : false;
    // console.log('+++++++++the only prop');
    // console.log(props.accommodation, check);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Checkbox
        onChange={handleSelection}
        checked={check}
        className={classes.checkbox}/>
        <CardMedia
          className={classes.media}
          image={props.accommodation.photos}
          title={props.accommodation.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.accommodation.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.accommodation.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" startIcon={<Place />}> {props.accommodation.state}, {props.accommodation.city} </Button>
        <Ratings highRating={3} />
        <Typography className={classes.reviews}>
            25 Reviews
        </Typography>
      </CardActions>
    </Card>
  );
}

export default Accommodations;
