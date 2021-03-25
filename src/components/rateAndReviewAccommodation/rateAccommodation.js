import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { useParams } from "react-router-dom";
import { Button } from '@material-ui/core';
import {getAccommodationsByLocation,selectAccommodation} from "../../redux/actions/fetchAccommodationByLocation";
import {getAccommodation,getAccommodations,getAccommodationAminity} from "../../redux/actions/fetchAccommodations";
import {addRatings} from '../../redux/actions/ratingsAction'
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
        rate: null,
        review: ''
    }
       )
    const classes = useStyles();
   
    const handleChange = (e) => {
        setstate({
            ...state,
            rate:e.target.value
         })
        // console.log(">>>"+rates);
    }
    const handleReview = (e) => {
        setstate ( {
            ...state,
            review:e.target.value
         })
    }
    const { id } = useParams();
    const handleSubmit = () => {
     
        console.log(state)
        console.log({ id })
        props.addRatings(id,state)
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
    selectedAccommodation:state.fetchAccommodations.selectedAccommodation,
    accId: state.fetchAccommodations.accId,
    ratings:state.addRatings
})
const mapDispatchToProps = dispatch => {
    return {
    addRatings: (id,datas)=>dispatch(addRatings(id,datas))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HalfRating)