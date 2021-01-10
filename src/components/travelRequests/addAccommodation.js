import React from 'react';
import { Grid, Container, makeStyles, Typography } from '@material-ui/core';
import AccommodationCard from '../AccommodationCardWithReviews';
import colors from '../colors';

const useStyles = makeStyles((theme) => ({
    container:{
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'

    },
    insideGrid:{
        margin: theme.spacing(2,0,0,2)
    },
    title:{
        padding: theme.spacing(1),
        textAlign: 'center'
    }
}))

function AddAccommodation(props) {
    const classes = useStyles();
    const accommodations = props.travelRequest.searchAccommodations;
    return (
        <React.Fragment>
            <Grid item xs={12} className={classes.title}>
                <Typography variant="h6" style={{color: colors.primary100}}> 
                    Choose Accommodation:
                </Typography>
            </Grid>
            <Container className={classes.container}>
                
                {accommodations.map((accommodation) =>(
                    <Grid item className={classes.insideGrid}>
                        <AccommodationCard pending={false} accommodation={accommodation} {...props}  />
                    </Grid>
                ))}
            </Container>
        </React.Fragment>
    )
}

export default AddAccommodation;