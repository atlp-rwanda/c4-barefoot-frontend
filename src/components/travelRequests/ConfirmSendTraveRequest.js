import React from 'react';
import { Grid, Button, Divider } from '@material-ui/core';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Place } from '@material-ui/icons';
import colors from '../colors';
import useStyles from '../styles/addTravelReason';
import Rating from '@material-ui/lab/Rating';
import { useHistory } from "react-router-dom";

function ConfirmSendTravelRequest(props) {
    const classes = useStyles();
    let history = useHistory();

    return (
        <React.Fragment>
            <Grid container xs={12} style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                <Grid container item xs={12} style={{ marginTop: '30px' }} className={classes.infoDisplay}>
                    <Grid item container xs={12} justify="space-between">
                        <Grid item xs={4} className={classes.infoDisplay}>
                            <Typography variant="h6">
                                Current and Destination Location
                        </Typography>
                            {props.travelRequest.selectedLocations.map(location => (
                                <Typography variant="subtitle1" gutterBottom>
                                    {`From ${location.current.LocationName},  ${location.current.country} To ${location.destination.LocationName}, ${location.destination.country}`}
                                </Typography>
                            ))}
                            <Typography variant="subtitle1" gutterBottom>
                                {` From ${props.travelRequest.currentLocation.LocationName}, ${props.travelRequest.currentLocation.country} To ${props.travelRequest.destinationLocation.LocationName}, ${props.travelRequest.destinationLocation.country}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} className={classes.infoDisplay}>
                            <Typography variant="h6">
                                Departure Date
                        </Typography>
                            {props.travelRequest.selectedLocations.map(location => (
                                <Typography variant="subtitle1" gutterBottom>
                                    {`${new Date(location.departureDate).toLocaleDateString("en-US")}`}
                                </Typography>
                            ))}
                            <Typography variant="subtitle1" gutterBottom>
                                {`${new Date(props.travelRequest.departureDate).toLocaleDateString("en-US")}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} className={classes.infoDisplay}>
                            <Typography variant="h6">
                                Return Date
                            </Typography>
                            {props.travelRequest.selectedLocations.map(location => (
                                <Typography variant="subtitle1" gutterBottom>
                                    {`${new Date(location.returnDate).toLocaleDateString("en-US")}`}
                                </Typography>
                            ))}
                            <Typography variant="subtitle1" gutterBottom>
                                {`${new Date(props.travelRequest.returnDate).toLocaleDateString("en-US")}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} className={classes.infoDisplay}>
                            <Typography variant="h6">
                                Prefered Accommodation
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                {`${props.travelRequest.selectedAccommodation.title}`}
                            </Typography>
                            {props.travelRequest.selectedLocations.map(location => (
                                <Typography variant="subtitle1" gutterBottom>
                                    {`${location.accommodation.title}`}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                    <Divider style={{ width: '100%', marginTop: '40px' }} />
                </Grid>
                <Grid container item xs={12} style={{ marginTop: '30px' }}>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            Reason of travel
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" gutterBottom>
                            {props.travelRequest.travelReason}
                        </Typography>
                    </Grid>
                    <Divider style={{ width: '100%', marginTop: '20px' }} />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ConfirmSendTravelRequest;