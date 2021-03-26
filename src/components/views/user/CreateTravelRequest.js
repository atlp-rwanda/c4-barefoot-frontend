import React, { useEffect } from 'react';
import SearchLocations from '../../travelRequests/SearchTravelRequest';
import { Button, Grid, makeStyles, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import colors from '../../colors'
import { connect } from 'react-redux';
import {
    CheckReturningAction, checkTravelDatesAction,
    searchCurrentLocationAction, selectAccommodationAction,
    getLocationsAction, closeSnackbar,
    handleErrorsAction, addTravelReasonAction,
    sendTravelRequestAction, addMultiCityAction,
    removeMultiCityAction, openModalAction, cancelTravelRequestAction
} from '../../../redux/actions/CreateTravelRequestAction';
import AddAccommodation from '../../travelRequests/addAccommodation';
import AddTravelReason from '../../travelRequests/addTravelReason';
import ConfirmSendTravelRequest from '../../travelRequests/ConfirmSendTraveRequest'
import SnackBarMessage from '../../SnackBarMessage';
import Loader from '../../Loader';
import AccommodationModal from '../../AccommodationModal';


const useStyles = makeStyles((theme) => ({
    main: {
        justifyContent: 'center',
        padding: theme.spacing(2, 2),
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(7, 0, 0, 0)
        }
    },
    title: {
        padding: theme.spacing(1),
        textAlign: 'center'
    },
    content: {
        width: '100%',
        height: 'auto'
    },
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    infoDisplay: {
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
    },
}))

function getSteps() {
    return ['Origin and Destination', 'Reason of travelling', 'Confirm travel Request'];
}



const CreateTravelRequest = (props) => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <Grid container xs={12}>
                        <Grid item container xs={12}>
                            <SearchLocations {...props} />
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid container style={{ display: display }}>
                                <AddAccommodation {...props} />
                            </Grid>
                        </Grid>
                    </Grid>
                );
            case 1:
                return (
                    <Grid container xs={12}>
                        <Grid item container xs={12}>
                            <AddTravelReason {...props} />
                        </Grid>
                    </Grid>
                );
            case 2:
                return (
                    <Grid container xs={12}>
                        <Grid item container xs={12}>
                            <ConfirmSendTravelRequest {...props} />
                        </Grid>
                    </Grid>
                );
            default:
                return 'nothing';
        }
    }
    const handleSendTravelRequest = () => {
        const trips = [
            {
                originCity: `${props.travelRequest.currentLocation.LocationName}, ${props.travelRequest.currentLocation.country}`,
                destination: `${props.travelRequest.destinationLocation.LocationName}, ${props.travelRequest.destinationLocation.country}`,
                tripDate: `${props.travelRequest.departureDate}`,
                returnDate: `${props.travelRequest.returnDate}`,
                accommodationId: `${props.travelRequest.selectedAccommodation.id}`,
                reason: `${props.travelRequest.travelReason}`
            }
        ];
        if (props.travelRequest.selectedLocations.length > 0) {
            props.travelRequest.selectedLocations.map(location => {
                const trip = {
                    originCity: `${location.current}`,
                    destination: `${location.destination}`,
                    tripDate: `${location.departureDate}`,
                    returnDate: `${location.returnDate}`,
                    accommodationId: `${location.accommodation.id}`,
                    reason: `${props.travelRequest.travelReason}`
                }
                trips.push(trip)
            })
        }
        const request = {
            trip: trips
        }
        console.log(request)
        props.sendTravelRequestAction(request);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleGoback = () => {
        setActiveStep(0);
    };

    useEffect(() => {
        props.getLocationsAction();
    }, [])

    const display = props.travelRequest.displaySelection ? 'block' : 'none';
    let firstCondition = activeStep === 1 && !props.travelRequest.travelReason;
    let secondCondition = activeStep === 0 && !props.travelRequest.selectedAccommodation.id;
    return (
        <Grid container direction="column" className={classes.main}>
            <Loader open={props.travelRequest.sendLoading} />
            <AccommodationModal
                open={props.travelRequest.Modal.open}
                data={props.travelRequest.Modal.data}
                {...props}
            />
            <SnackBarMessage {...props} />
            <Grid item xs={12} className={classes.title}>
                <Typography variant="h6" style={{ color: colors.primary100 }}>
                    Create Travel Request
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <div className={classes.root}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                                <Typography className={classes.instructions}>
                                    All steps of sending travel request completed
                                </Typography>
                                <Button onClick={handleGoback} className={classes.button} variant="contained"
                                    color="primary">
                                    Go back
                                </Button>
                            </div>
                        ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div className={classes.buttonWrapper}>
                                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} color="primary" variant="contained">
                                        Back
                                    </Button>
                                    <Button
                                        disabled={activeStep === 0 ? secondCondition : firstCondition}
                                        variant="contained"
                                        color="primary"
                                        // onClick={handleNext}
                                        onClick={activeStep === steps.length - 1 ? handleSendTravelRequest : handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}


const mapStateToProps = state => ({
    travelRequest: state.createTravelRequest
});

export { CreateTravelRequest };
export default connect(
    mapStateToProps,
    {
        CheckReturningAction, checkTravelDatesAction,
        searchCurrentLocationAction, selectAccommodationAction,
        getLocationsAction, closeSnackbar, handleErrorsAction,
        addTravelReasonAction, sendTravelRequestAction,
        addMultiCityAction, removeMultiCityAction, openModalAction,
        cancelTravelRequestAction
    }
)(CreateTravelRequest);