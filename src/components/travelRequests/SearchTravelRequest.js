import React from 'react';
import { useState } from 'react'
import colors from '../colors';
import CloseIcon from '@material-ui/icons/Close';
import {
    Button,
    FormControlLabel,
    Grid, Typography,
    Checkbox, TextField,
    Tooltip
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';

import useStyles from '../styles/searchTraveRequest';
import { Skeleton } from '@material-ui/lab';

const SearchLocations = (props) => {
    const [retunTime, setReturnTime] = useState(null);
    const classes = useStyles();

    let data = {
        isReturning: props.travelRequest.isReturning,
        departureDate: props.travelRequest.departureDate,
        returnDate: props.travelRequest.returnDate
    };
    const handleDepartureDateChange = (date) => {
        const now = new Date(new Date().getTime() - 86400000).getTime();
        const selectedDate = new Date(date.toISOString()).getTime()
        if (selectedDate < now) {
            return props.handleErrorsAction(`You can't depart in the past please select the future date`);
        } else {
            data.departureDate = date.toISOString();
            return props.checkTravelDatesAction(data);
        }
    }
    const handleReturnDateChange = (date) => {
        const departdate = new Date(props.travelRequest.departureDate).getTime();
        const returndate = new Date(date.toISOString()).getTime()
        if (!props.travelRequest.departureDate) {
            return props.handleErrorsAction(`please provide departure date first`);
        }
        else if (returndate < departdate) {
            return props.handleErrorsAction(`You can't return before you depart`);
        } else {
            data.returnDate = date.toISOString();
            setReturnTime(date)
            return props.checkTravelDatesAction(data);
        }
    }
    const handleSelectionOfLocation = (event, newValue) => {
        const data = {
            textField: event.target.id,
            selectedLocation: newValue
        }
        const inputTextID = data.textField.split('-', 1)[0];
        if (inputTextID == 'destinationLocationId' && !props.travelRequest.currentLocation.id) {
            return props.handleErrorsAction('Please select the departure location');
        }
        return props.searchCurrentLocationAction(data);
    }
    const handleAddMultiCity = () => {

        if (!props.travelRequest.selectedAccommodation.id) {
            return props.handleErrorsAction('Please add the accommodation');
        }
        if (!props.travelRequest.currentLocation.id) {
            return props.handleErrorsAction('Please add the current location');
        }
        if (!props.travelRequest.destinationLocation.id) {
            return props.handleErrorsAction('Please add the destination location');
        }
        if (!props.travelRequest.departureDate) {
            return props.handleErrorsAction('Please add the departure date!');
        }
        const locations = {
            current: props.travelRequest.currentLocation,
            destination: props.travelRequest.destinationLocation,
            accommodation: props.travelRequest.selectedAccommodation,
            departureDate: props.travelRequest.departureDate,
            returnDate: props.travelRequest.returnDate,
        }
        setReturnTime(null);
        return props.addMultiCityAction(locations);
    }
    const handleClose = (event) => {
        const closeId = event.target.id.split('-', 2);
        const tabIndex = closeId[1];
        const selected = props.travelRequest.selectedLocations;
        const removed = selected.filter(location => location !== selected[tabIndex]);
        return props.removeMultiCityAction(removed);
    }

    const { availableLocations } = props.travelRequest;
    const destinationLocationOptions = availableLocations.filter(n => n !== props.travelRequest.currentLocation);
    let { selectedLocations } = props.travelRequest
    selectedLocations = selectedLocations ? selectedLocations : [{ current: '', destination: '' }];
    const display = selectedLocations ? 'flex' : 'none';
    const disabled = selectedLocations.length ? true : false;
    const handleTagClick = (event) => {
        let ev = {
            target: {
                id: 'destinationLocationId'
            }
        }
        const index = event.target.id.split('-', 2);

        let newValue = props.travelRequest.selectedLocations[Number(index[1])].destination.split(', ', 2);
        return handleSelectionOfLocation(ev, { country: newValue[1], LocationName: newValue[0] });
    }

    return (
        <>
            {(props.travelRequest.searchLocationsLoading ?
                <Grid container direction="row" className={classes.main} >
                    <Grid item direction="column">
                        <Skeleton animation="wave" variant="rect" style={{ width: '300px', height: '40px', margin: '10px' }} />
                    </Grid>
                    <Grid item direction="column">
                        <Skeleton animation="wave" variant="rect" style={{ width: '300px', height: '40px', margin: '10px' }} />
                    </Grid>
                    <Grid item direction="column">
                        <Skeleton animation="wave" variant="rect" style={{ width: '300px', height: '40px', margin: '10px' }} />
                    </Grid>

                </Grid>

                :

                <Grid container direction="row" className={classes.main} >
                    <Grid item direction="column">
                        <Typography>Departure Location</Typography>
                        <div className={classes.searchLocation}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <Autocomplete
                                id="currentLocationId"
                                key={`${props.travelRequest.selectedLocations}`}
                                options={props.travelRequest.availableLocations}
                                className={classes.searchCurrentLocation}
                                classes={{ input: classes.inputText }}
                                getOptionLabel={(option) => (`${option.LocationName}, ${option.country}`)}
                                onChange={handleSelectionOfLocation}
                                autoComplete
                                includeInputInList
                                clearText="no value"
                                closeIcon={<CloseIcon fontSize='small' />}
                                defaultValue={!props.travelRequest.currentLocation.id ? { LocationName: 'City', country: 'Country' } : props.travelRequest.currentLocation}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder="Select you depart location"
                                        id='currentLocationId'
                                    />

                                )}
                            />
                        </div>
                    </Grid>

                    <Grid item direction="column">
                        <Typography>Destination Location</Typography>
                        <div className={classes.searchLocation}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <Autocomplete
                                id="destinationLocationId"
                                key={`${props.travelRequest.selectedLocations}`}
                                options={destinationLocationOptions}
                                className={classes.searchCurrentLocation}
                                classes={{ input: classes.inputText }}
                                getOptionLabel={(option) => (`${option.LocationName}, ${option.country}`)}
                                onChange={handleSelectionOfLocation}
                                includeInputInList
                                clearText="no value"
                                closeIcon={<closeIcon fontSize='small' />}
                                defaultValue={!props.travelRequest.destinationLocation.id ? { LocationName: 'City', country: 'Country' } : props.travelRequest.destinationLocation}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        id="destinationLocationId"
                                    />

                                )}
                            />

                        </div>
                    </Grid>
                    <Grid item direction="column">
                        <Tooltip title="Click here to search accommodations" placement="bottom-end" arrow>
                            <Button variant="contained" onClick={handleAddMultiCity} className={classes.addButton}>Add trip</Button>
                        </Tooltip>
                    </Grid>
                    <Grid item direction="column" >

                        <Typography>Trip depart date</Typography>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="dialog"
                                inputVariant="filled"
                                format="MM/dd/yyyy"
                                invalidDateMessage=' '
                                value={!props.travelRequest.departureDate ? null : props.travelRequest.departureDate}
                                onChange={handleDepartureDateChange}
                                InputProps={{ className: classes.datesPicker }}
                            />
                        </MuiPickersUtilsProvider>

                        {/* <div className={classes.dates}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={props.travelRequest.isReturning}
                                        fontSize="small"
                                        style={{ color: colors.neutralWhite }}
                                        onChange={handleCheckboxChange}
                                    />
                                }

                                label="Returning Back?"
                            />
                        </div> */}

                        <div>
                            <Typography>Trip end date</Typography>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                <KeyboardDatePicker

                                    disableToolbar
                                    variant="dialog"
                                    inputVariant="filled"
                                    format="MM/dd/yyyy"
                                    invalidDateMessage=' '
                                    value={!props.travelRequest.returnDate ? retunTime : props.travelRequest.returndate}
                                    onChange={handleReturnDateChange}
                                    InputProps={{ className: classes.datesPicker }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>

                    </Grid>
                    <Grid container item style={{ display: display }} className={classes.selectedLocations}>
                        {selectedLocations.map((location, index) => (
                            <Grid xs={6} sm={3} md={2} item id={`tab-${index}`} className={classes.oneSelected}>
                                <div
                                    className={classes.closeSelectedLocations}
                                    id={`close-${index}`}
                                    onClick={handleClose}>
                                    &times;
                                </div>
                                <di className={classes.citiesSelected} id={`div-${index}`} onClick={handleTagClick} >
                                    <Typography id={`text1-${index}`}>{`From ${location.current.LocationName}, ${location.current.country} To `}</Typography>
                                    <Typography id={`text2-${index}`}>{`${location.destination.LocationName}, ${location.destination.country}`}</Typography>
                                </di>

                            </Grid>
                        ))}

                    </Grid>

                </Grid>
            )}
        </>
    );
}

export default SearchLocations;