import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { Button } from '@material-ui/core';
import {getAccommodationsByLocation,selectAccommodation} from "../../redux/actions/fetchAccommodationByLocation";
import {getAccommodation,getAccommodations,getAccommodationAminity} from "../../redux/actions/fetchAccommodations";
import {getTemperature} from "../../redux/actions/getWeather";
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(4),
        },
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10em',
        marginRight: 100
    },
    button: {
        marginTop: '2em',
        marginRight: 150
    },
    textarea: {
        width:'300px'
    }
}));


function HalfRating(props) {
    let [state, setstate] = useState({
        rates: null,
        review: ''
    }
       )
    const classes = useStyles();
   
    const handleChange = (e) => {
        setstate({
            ...state,
            rates:e.target.value
         })
        // console.log(">>>"+rates);
    }
    const handleReview = (e) => {
        setstate ( {
            ...state,
            review:e.target.value
         })
    }
    const handleSubmit = () => {
        console.log(state)
        console.log(props.match.params.id)
   }

    return (
        <React.Fragment >
            <div className={classes.root}>
                <form >
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5}
                        onChange={handleChange}
                    />
                    <div><TextareaAutosize
                        onChange={handleReview}
                        className={classes.textarea} aria-label="empty textarea" rowsMin={5} placeholder="your review" /></div>
                <div>
                        <Button onClick={handleSubmit} variant="contained" color="primary" href="#contained-buttons" className={classes.button}>
                    submit</Button>
                </div>
                </form>
            
                
                
        </div>
        </React.Fragment>
        
    );
}


const mapStateToProps=state=>({
    accommodation: state.fetchAccommodations.accommodation,
    accId:state.fetchAccommodations.accId,
})
export default connect(mapStateToProps)(HalfRating)