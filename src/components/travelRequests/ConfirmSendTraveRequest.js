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
    const handleSendTravelRequest = () => {
        const trips = [];
        props.travelRequest.selectedLocations.map(location => {
            const trip = {
                originCity: `${location.current}`,
                destination: `${location.destination}`,
                tripDate: `${props.travelRequest.departureDate}`,
                returnDate: `${props.travelRequest.returnDate}`,
                accommodationId: `${location.accommodation.id}`,
                reason: `${props.travelRequest.travelReason}`
            }
            trips.push(trip)
        })
        const request = {
            trip: trips
        }

        props.sendTravelRequestAction(request);
    }
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
                                    {`${location.current} To ${location.destination}`}
                                </Typography>
                            ))}
                        </Grid>
                        <Grid item xs={3} className={classes.infoDisplay}>
                            <Typography variant="h6">
                                Departure Date
                        </Typography>
                            {`${props.travelRequest.departureDate}`}
                        </Grid>
                        <Grid item xs={2} className={classes.infoDisplay}>
                            <Typography variant="h6">
                                Is returning
                        </Typography>
                            {`${props.travelRequest.isReturning}`}
                        </Grid>
                        <Grid item xs={3} className={classes.infoDisplay}>
                            <Typography variant="h6">
                                Return Date
                        </Typography>
                            {`${props.travelRequest.destinationLocation}`}
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
                </Grid>
                <Grid container item xs={12} style={{ marginTop: '30px' }}>
                    <Grid item xs={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={props.travelRequest.selectedLocations[0].accommodation.photo}
                                    title={props.travelRequest.selectedLocations[0].accommodation.title}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6">
                            {props.travelRequest.selectedLocations[0].accommodation.title}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {props.travelRequest.selectedLocations[0].accommodation.description}
                        </Typography>
                    </Grid>
                    <Divider style={{ width: '100%', marginTop: '20px' }} />
                </Grid>
                <Grid item contained className={classes.buttons}>
                    <Button variant="contained" onClick={handleSendTravelRequest} color="primary">Send Travel Request</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ConfirmSendTravelRequest;