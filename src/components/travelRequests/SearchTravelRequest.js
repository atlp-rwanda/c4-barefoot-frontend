import React, { useEffect } from 'react';
import colors from '../colors';
import { Button, fade, FormControlLabel, Grid, makeStyles, Typography, Checkbox, TextField, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    main:{
        backgroundColor: colors.primary200,
        width:'90%',
        margin:'auto',
        color:colors.neutralWhite,
        justifyContent: 'space-evenly',
        padding: theme.spacing(3),
    },
    searchLocation:{
        display:'flex',
        position: 'relative',
        width: '100%',
        backgroundColor: fade(theme.palette.common.white, 0.10),
        '&:hover':{
            backgroundColor: fade(theme.palette.common.white, 0.20)
        } ,
        padding: 0
    },
    searchIcon:{
        position:'absolute',
        padding: theme.spacing(0,1),
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput:{
        padding: theme.spacing(0,1,0,0),
        paddingLeft: '3em',
        color: 'inherit',
        width:'100%',
        border: '1px solid white'
    },
    dates:{
        padding: theme.spacing(1,0)
    },
    datesPicker:{
        color:colors.neutralWhite,
    },
    addButton:{
        color: colors.primary100,
        margin: theme.spacing(3,0,0,0)
    },
    searchCurrentLocation:{
        width: 300,
        padding:0,
        paddingLeft: '2em',
        border: '1px solid white',

    },
    inputText:{
        color: colors.neutralWhite,
        margin: theme.spacing(0,2)
    }
}))

const SearchLocations = (props) => {
    const classes = useStyles();
    useEffect(() => {
        // console.log("props here");
        // console.log(props);
        // props.getLocationsAction();
        
    },[])
    
    let data = {
        isReturning: props.travelRequest.isReturning,
        departureDate: props.travelRequest.departureDate,
        returnDate: props.travelRequest.returnDate
    };
    const  handleDepartureDateChange=(date) => {
        data.departureDate = date.toISOString();
        return props.checkTravelDatesAction(data);
    }
    const  handleReturnDateChange=(date) => {
        data.returnDate = date.toISOString();
        return props.checkTravelDatesAction(data);
    }
    const handleCheckboxChange =(event) => {
        data.isReturning = event.target.checked
        return props.CheckReturningAction(data);
    }
    const handleCurrentLocationChange = (event,newValue) =>{
        const data = {
            textField: event.target.id,
            searchKeyword: newValue
        }
        if(!newValue){
            return props.searchCurrentLocationAction(data);
        }
        if(newValue && newValue.length >= 2){
            return props.searchCurrentLocationAction(data);
        }
        return 0;
    }
    const handleAddTravelRequest = () =>{
        // console.log(props);
        
        if(!props.travelRequest.currentLocation && !props.travelRequest.destinationLocation){
            return props.handleErrorsAction('Please add the current and destination location!');
        }
        if(props.travelRequest.currentLocation === props.travelRequest.destinationLocation){
            return props.handleErrorsAction('Current and Destination place can not be the same!');
        }
        if(!props.travelRequest.currentLocation){
            return props.handleErrorsAction('Please add your current location!');
        }
        if(!props.travelRequest.destinationLocation){
            return props.handleErrorsAction('Please add your Destination location!');
        }
        if(!props.travelRequest.departureDate){
            return props.handleErrorsAction('Please add the departure date!');
        }
        if(!props.travelRequest.returnDate && props.travelRequest.isReturning){
            return props.handleErrorsAction('Please add the return date!');
        }

        return props.searchAccommodationAction(props.travelRequest.destinationLocation);

    }

    return ( 
        <Grid container direction="row" className={classes.main} >
            <Grid  item direction="column">
                <Typography>Enter your location</Typography>
                <div className={classes.searchLocation}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <Autocomplete
                        id="currentLocationId"
                        options={props.travelRequest.searchLocations}
                        className={classes.searchCurrentLocation}
                        classes={{input:classes.inputText}}
                        getOptionLabel={(option) => (`${option.LocationName}, ${option.country}`)}
                        onInputChange={handleCurrentLocationChange}
                        onChange={handleCurrentLocationChange}
                        autoComplete
                        includeInputInList
                        clearText="no value"
                        closeIcon={<closeIcon fontSize='small' />}
                        renderInput={(params) => (
                            <TextField 
                                {...params}
                                value={props.travelRequest.currentLocation}
                                placeholder="Search your Location ..."
                            />
                            
                        )}
                    />

                </div>
            </Grid>
            <Grid item direction="column">
                <Typography>Enter your Destination</Typography>
                <div className={classes.searchLocation}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <Autocomplete
                        id="destinationLocationId"
                        options={props.travelRequest.searchLocations}
                        className={classes.searchCurrentLocation}
                        classes={{input:classes.inputText}}
                        getOptionLabel={(option) => (`${option.LocationName}, ${option.country}`)}
                        onInputChange={handleCurrentLocationChange}
                        onChange={handleCurrentLocationChange}
                        includeInputInList
                        clearText="no value"
                        closeIcon={<closeIcon fontSize='small' />}
                        renderInput={(params) => (
                            <TextField 
                                {...params}
                                placeholder="Search your Destionation ..."
                            />
                            
                        )}
                    />

                </div>
            </Grid>
            <Grid item direction="column">
                <Tooltip title="Click here to search accommodations" placement="bottom-end" arrow>
                    <Button variant="contained" onClick={handleAddTravelRequest} className={classes.addButton}>Add</Button>
                </Tooltip>
                
            </Grid>
            <Grid item direction="column" >
                <Typography>Date of travel</Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker 
                        disableToolbar
                        variant="dialog"
                        inputVariant="filled"
                        format="MM/dd/yyyy"
                        value={props.travelRequest.departureDate}
                        onChange={handleDepartureDateChange}
                        InputProps={{className: classes.datesPicker}}
                    />
                </MuiPickersUtilsProvider>
                <div className={classes.dates}>
                    <FormControlLabel 
                    control={
                        <Checkbox
                        checked={props.travelRequest.isReturning}
                        fontSize="small"
                        style={{color:colors.neutralWhite}}
                        onChange={handleCheckboxChange}
                        /> 
                    }

                    label="Returning Back?"
                    />
                </div>
                

                <div style={{display: props.travelRequest.isReturning ? 'block' : 'none'}}>
                    <Typography>Date of return</Typography>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <KeyboardDatePicker 
                            disableToolbar
                            variant="dialog"
                            inputVariant="filled"
                            format="MM/dd/yyyy"
                            value={data.returnDate}
                            onChange={handleReturnDateChange}
                            InputProps={{className: classes.datesPicker}}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                
            </Grid>
            
        </Grid>
     );
}
 
export default SearchLocations;