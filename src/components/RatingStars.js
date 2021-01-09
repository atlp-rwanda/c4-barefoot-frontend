import React from 'react';
import { Checkbox,Grid, makeStyles, FormControlLabel } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>({
    checkboxes:{
        margin: theme.spacing(0)
    }
}))

const RatingStars = (props) =>{
    const classes = useStyles();
    return (
        <Grid container>
            <Rating name="read-only" value={props.highRating} readOnly />
        </Grid>
    )
}

export default RatingStars;