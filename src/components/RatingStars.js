import React,{useEffect,useState} from 'react';
import { Grid } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import {connect} from 'react-redux'



const RatingStars = (props) => {
    const [state,setstate] = useState({rate:null})
    
    return (
        <Grid container>
            <Rating name="read-only" value={props.highratings} readOnly />
        </Grid>
    )
}

export default RatingStars
