<<<<<<< HEAD
import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { useParams } from "react-router-dom";
import { Button } from '@material-ui/core';
import {addRatings,closeSnackbar} from '../../redux/actions/ratingsAction'
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import {Typography,Divider} from '@material-ui/core'

=======
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button,TextareaAutosize} from '@material-ui/core';
>>>>>>> 9c36432... added ratings components

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(4),
        },
        alignItems: 'center',
        justifyContent: 'center',
<<<<<<< HEAD
        marginTop: '4em',
=======
        marginTop: '10em',
>>>>>>> 9c36432... added ratings components
        marginRight: 100
    },
    button: {
        marginTop: '2em',
<<<<<<< HEAD
        marginLeft: 88
    },
    textarea: {
        width:'300px'
    },
    stars: {
        marginLeft:88
    }
}));


function HalfRating(props) {
    let [state, setstate] = useState({
        rate: 2,
    }
       )
    const classes = useStyles();
    const handleClose = () => props.closeSnackbar();
    const handleChange = (e) => {
        setstate({
            ...state,
            rate:e.target.value
         })
        // console.log(">>>"+rates);
    }
    const handleReview = (e) => {
        if (e.target.value!=null) {
            setstate ( {
                ...state,
                review: e.target.value
            })
            console.log("==========")
        } else {
            setstate ( {
                rate
             })
        }
    }
    const { id } = useParams();
    const handleSubmit = () => {
     
        console.log(state)
        console.log({ id })
        props.addRatings(id,state)
      
   }
   if (props.ratings.success) {
    props.history.push(`/reviews/${id}`)
}
    return (
        <React.Fragment >
            
            <div className={classes.root}>
                <div>
                    <Typography>Rate and Review This Accommodation</Typography>
                </div>
               
                <form >
                    <div className={classes.stars}>
                    <Rating  defaultValue={2} 
                        onChange={handleChange}
                    />
                    </div>
                   
                    <div><TextareaAutosize
                        onChange={handleReview}
                        className={classes.textarea} aria-label="empty textarea" rowsMin={5} placeholder="your review" /></div>
                <div>
                        <Button onClick={handleSubmit} variant="contained" color="primary" href="#contained-buttons" className={classes.button}>
                            {props.ratings.pending ?
                                 (<div>
                                    <CircularProgress color="secondary" />
                                </div>):"submit"    
                        }
                        </Button>
                        <Snackbar
                                open={props.ratings.snackbarOpen}
                                autoHideDuration={5000}
                                onClose={handleClose}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            >
                                <Alert
                                    severity={props.ratings.error ? "error" : "success"}
                                    onClose={handleClose}
                            >{props.ratings.error}</Alert>
                            </Snackbar>
                </div>
                </form>
            
                
                
=======
        marginRight: 150
    },
    textarea: {
        width:'300px'
    }
}));

export default function HalfRating() {
    const classes = useStyles();

    return (
        <React.Fragment >
            <div className={classes.root}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <form>
                    <div><TextareaAutosize className={ classes.textarea} aria-label="empty textarea" rowsMin={5}  placeholder="your review" /></div>
                <div>
                <Button variant="contained" color="primary" href="#contained-buttons" className={classes.button}>
                    submit</Button>
                </div>
            </form>
>>>>>>> 9c36432... added ratings components
        </div>
        </React.Fragment>
        
    );
}
<<<<<<< HEAD


const mapStateToProps=state=>({
    accommodation: state.fetchAccommodations.accommodation,
    selectedAccommodation:state.fetchAccommodations.selectedAccommodation,
    accId: state.fetchAccommodations.accId,
    ratings:state.addReviews
})
const mapDispatchToProps = dispatch => {
    return {
        addRatings: (id, datas) => dispatch(addRatings(id, datas)),
        closeSnackbar:()=>dispatch(closeSnackbar())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HalfRating)
=======
>>>>>>> 9c36432... added ratings components
