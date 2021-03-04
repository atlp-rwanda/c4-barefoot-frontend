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
        const request = {
            trip: [
                {
                    originCity: `${props.travelRequest.currentLocation.LocationName}, ${props.travelRequest.currentLocation.country}`,
                    destination: `${props.travelRequest.destinationLocation.LocationName}, ${props.travelRequest.destinationLocation.country}`,
                    tripDate: `${props.travelRequest.departureDate}`,
                    returnDate: `${props.travelRequest.returnDate}`,
                    accommodationId: `${props.travelRequest.selectedAccommodation[0].id}`,
                    reason: `${props.travelRequest.travelReason}`
                }
            ]
        }
        props.sendTravelRequestAction(request);
        history.push("/requester/create-travel-request");
    }
    return (
        <React.Fragment>
            <Grid container item xs={12} style={{ marginTop: '30px' }} className={classes.infoDisplay}>
                <Grid item container xs={12} justify="space-between">
                    <Grid item xs={3} className={classes.infoDisplay}>
                        <Typography variant="h6">
                            Current and Destination Location
                        </Typography>
                        {`From ${props.travelRequest.currentLocation.LocationName}, ${props.travelRequest.currentLocation.country} To ${props.travelRequest.destinationLocation.LocationName}, ${props.travelRequest.destinationLocation.country}`}
                    </Grid>
                    <Grid item xs={3} className={classes.infoDisplay}>
                        <Typography variant="h6">
                            Departure Date
                        </Typography>
                        {`${props.travelRequest.departureDate}`}
                    </Grid>
                    <Grid item xs={3} className={classes.infoDisplay}>
                        <Typography variant="h6">
                            Is returning
                        </Typography>
                        {`${props.travelRequest.isReturning}`}
                    </Grid>
                    <Grid item xs={3} className={classes.infoDisplay}>
                        <Typography variant="h6">
                            Return Date
                        </Typography>
                        {`${props.travelRequest.returnDate}`}
                    </Grid>
                </Grid>
                <Divider style={{ width: '100%', marginTop: '40px' }} />
            </Grid>
            <Grid container item xs={12} style={{ marginTop: '30px' }}>
                <Grid item xs={12}>
                    <Typography variant="h6">
                        Selected Accommodation
                    </Typography>
                    <Card className={classes.root} >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={props.travelRequest.selectedAccommodation[0].photo}
                                title={props.travelRequest.selectedAccommodation[0].title}
                            />
                            <CardContent className={classes.cardContent} >
                                <Typography gutterBottom variant="h5" component="h2" className={classes.titleText}>
                                    {props.travelRequest.selectedAccommodation[0].title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" noWrap >
                                    {props.travelRequest.selectedAccommodation[0].description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Button size="small" color="primary" startIcon={<Place color="secondary" />}> {props.travelRequest.selectedAccommodation[0].state}, {props.travelRequest.selectedAccommodation[0].city} </Button>
                            <Rating name="read-only" value={4} readOnly />
                            <Typography className={classes.reviews}>
                                25 Reviews
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Divider style={{ width: '100%', marginTop: '20px' }} />
            </Grid>
            <Grid ontainer item xs={12} style={{ marginTop: '30px' }}>
                <Typography variant="h6">
                    Reason of travel
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {props.travelRequest.travelReason}
                </Typography>
            </Grid>
            <Grid item contained className={classes.buttons}>
                <Button variant="contained" onClick={handleSendTravelRequest} color="primary">Send Travel Request</Button>
            </Grid>
        </React.Fragment>
    )
}

export default ConfirmSendTravelRequest;