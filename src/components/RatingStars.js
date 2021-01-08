import React from 'react';
import { Checkbox,Grid, makeStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles((theme) =>({
    checkboxes:{
        margin: theme.spacing(0)
    }
}))

const RatingStars = (props) =>{
    const classes = useStyles();
    let highRates=[];

    //the values of checkboxes
    for(let i=1; i<=5; i++){
        console.log(i, props.highRating, i<=props.highRating);
        highRates.push(i <= props.highRating); //store true or false
    }
    return (
        <Grid container>
            {highRates.map((value) =>(
                <Checkbox
                    className={classes.checkboxes}
                    checked={value}
                />
            ))}
            
        </Grid>
    )
}

export default RatingStars;