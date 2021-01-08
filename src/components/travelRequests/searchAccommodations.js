import React from 'react';
import { Grid, Container, makeStyles, Typography } from '@material-ui/core';
import AccommodationCard from '../AccommodationCardWithReviews';
import { accommodationsPayload } from '../../../dummyData';
import colors from '../colors';

const useStyles = makeStyles((theme) => ({
    borders:{
        border: '1px solid red',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'

    },
    borders2:{
        border: '1px solid red',
        margin: theme.spacing(2,0,0,2)
    },
    title:{
        padding: theme.spacing(1),
        textAlign: 'center'
    }
}))

function AddAccommodation(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs={12} className={classes.title}>
                <Typography variant="h6" style={{color: colors.primary100}}> 
                    Choose Accommodation:
                </Typography>
            </Grid>
            <Container className={classes.borders}>
                
                {accommodationsPayload.map((accommodation) =>(
                    <Grid item className={classes.borders2}>
                        <AccommodationCard pending={false} accommodation={accommodation}  />
                    </Grid>
                ))}
            </Container>
        </React.Fragment>
    )
}

export default AddAccommodation;