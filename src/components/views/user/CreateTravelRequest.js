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
}))

function getSteps() {
    return ['Origin and Destination', 'Reason of travelling', 'Confirm travel Request'];
}



const CreateTravelRequest = (props) => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };

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
                return 'Reason of travelling';
            default:
                return 'Confirm travel Request';
        }
    }

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    useEffect(() => {
        props.getLocationsAction();
    }, [])
    const display = props.travelRequest.displaySelection ? 'block' : 'none';
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
                            <div>
                                <Typography className={classes.instructions}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Button onClick={handleReset} className={classes.button}>
                                    Reset
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
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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

