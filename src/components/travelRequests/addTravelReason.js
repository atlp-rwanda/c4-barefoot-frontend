import React from 'react';
import { Grid, Container, makeStyles, Typography, TextField, Button, Divider } from '@material-ui/core';
import AccommodationCard from '../AccommodationCardWithReviews';

import colors from '../colors';
import useStyles from '../styles/addTravelReason';

function AddTravelReason(props) {
    const classes = useStyles();

    const handleSendTravelRequest = () => {
        if (!props.travelRequest.travelReason) {
            return props.handleErrorsAction('Please add a reason of travel!');
        }
        if (!props.travelRequest.selectedAccommodation.length) {
            return props.handleErrorsAction('Please add the accommodation of your choice!');
        }
        const userToken = localStorage.getItem('barefootUserToken');
        if (!props.travelRequest.selectedLocations.length) {
            props.handleErrorsAction('Please add the current and destination locations');
        }
        if (props.travelRequest.selectedAccommodation.length !== props.travelRequest.selectedLocations.length) {
            return props.handleErrorsAction('Please add all accommodations or cancel to start again!');
        }

        let trip = [];

        if (!props.travelRequest.isReturning) {
            props.travelRequest.selectedLocations.map((selected, index) => {
                trip.push({
                    originCity: selected.current,
                    destination: selected.destination,
                    tripDate: selected.travelDate,
                    accommodationId: props.travelRequest.selectedAccommodation[index].id,
                    reason: props.travelRequest.travelReason
                })
            })
        } else {
            props.travelRequest.selectedLocations.map(selected => {
                trip.push({
                    originCity: selected.current,
                    destination: selected.destination,
                    tripDate: selected.travelDate,
                    returnDate: selected.returnDate,
                    accommodationId: props.travelRequest.selectedAccommodation[0].id,
                    reason: props.travelRequest.travelReason
                })
            })
        }
        if (userToken) {

            const data = {
                authToken: userToken,
                travelRequest: { trip }
            }
            return props.sendTravelRequestAction(data);
        }
    }

    const handleTravelReasonChange = (event) => {
        return props.addTravelReasonAction(event.target.value);
    }

    const handleCancelTravelRequest = () => {
        return props.cancelTravelRequestAction();
    }
    return (
        <React.Fragment>
            <Grid container className={classes.textFieldGrid}>
                <Grid container item xs={12} className={classes.title}>
                    <Typography variant="h6" style={{ color: colors.primary100 }}>
                        Please add a reason of travel:
                    </Typography>
                    <Divider style={{ width: '50%' }} />
                </Grid>
                <TextField
                    placeholder="Please add a reason of travel"
                    multiline
                    value={props.travelRequest.travelReason}
                    variant="outlined"
                    label="Please add the reason of travel"
                    onChange={handleTravelReasonChange}
                    rows={10}
                    className={classes.textField}
                />
            </Grid>

        </React.Fragment>
    )
}

export default AddTravelReason;