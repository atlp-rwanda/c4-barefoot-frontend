import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button,TextareaAutosize} from '@material-ui/core';

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
        </div>
        </React.Fragment>
        
    );
}
