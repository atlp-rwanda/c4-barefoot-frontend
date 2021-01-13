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

    },
    inputText:{
        color: colors.neutralWhite,
        margin: theme.spacing(0,2)
    },
    oneSelected:{
        margin:theme.spacing(0,0,1,0),
        color: colors.primary100,
        justifyContent:'flex-end'
    },
    closeSelectedLocations:{
        background:colors.red,
        display: 'block',
        color: colors.neutralWhite,
        borderRadius: '50%',
        padding: theme.spacing(0,1),
        paddingTop: '5px',
        paddingBottom:'5px',
        cursor: 'pointer',
        float:'right',
        fontWeight: 'bold',
        fontSize:'20px'
    },
    citiesSelected:{
        background:colors.neutralWhite,
        display:"block",
        padding: theme.spacing(1),
        borderRadius: '3px 15px 3px 3px',
        margin: theme.spacing(1),

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
        console.log('other values', event);
        const data = {
            textField: event.target.id,
            searchKeyword: newValue
        }
        if(!newValue){
            return props.searchCurrentLocationAction(data);
        }
        return props.searchCurrentLocationAction(data);
    }
    const handleAddTravelRequest = () =>{
        // console.log(props);
        
        // if(!props.travelRequest.currentLocation && !props.travelRequest.destinationLocation){
        //     return props.handleErrorsAction('Please add the current and destination location!');
        // }
        // if(props.travelRequest.currentLocation === props.travelRequest.destinationLocation){
        //     return props.handleErrorsAction('Current and Destination place can not be the same!');
        // }
        // if(!props.travelRequest.currentLocation){
        //     return props.handleErrorsAction('Please add your current location!');
        // }
        // if(!props.travelRequest.destinationLocation){
        //     return props.handleErrorsAction('Please add your Destination location!');
        // }
        // if(!props.travelRequest.departureDate){
        //     return props.handleErrorsAction('Please add the departure date!');
        // }
        // if(!props.travelRequest.returnDate && props.travelRequest.isReturning){
        //     return props.handleErrorsAction('Please add the return date!');
        // }

         


        return props.searchAccommodationAction(props.travelRequest.destinationLocation);

    }
    const handleSelectDestination = (event, newValue) =>{
        console.log('values 0000', event.target, newValue);
        return handleCurrentLocationChange(event,newValue );
        // console.log('selecting....', props.travelRequest);
        // props.searchAccommodationAction(props.travelRequest.destinationLocation);
    }
    const handleChangingDestination = () =>{
        console.log('changing....')
    }
    const handleAddMultiCity = () =>{
        const locations = {
            current: props.travelRequest.currentLocation,
            destination: props.travelRequest.destinationLocation,
            selected: props.travelRequest.selectedLocations
        }

        return props.addMultiCityAction(locations);
    }
    const handleClose = (event) =>{
        console.log('close clicked', event.target.id);
        const closeId = event.target.id.split('-',2);
        const tabIndex = closeId[1];
        const tab = document.getElementById(`tab-${tabIndex}`);
        console.log('the tab',tab.id);
        const selected = props.travelRequest.selectedLocations;
        const removed = selected.filter(location => location !== selected[tabIndex]);
        console.log('removed',removed);
        return props.removeMultiCityAction(removed);
    }
    // document.getElementById('currentLocationId').value=props.travelRequest.currentLocation

    let {selectedLocations}= props.travelRequest
    selectedLocations = selectedLocations ? selectedLocations : [{current:'', destination:''}];
    const display = selectedLocations ? 'flex' : 'none';
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
                                id='currentLocationId'
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
                        onInputChange={handleChangingDestination}
                        onChange={handleSelectDestination}
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
                    <Button variant="contained" onClick={handleAddMultiCity} className={classes.addButton}>Add</Button>
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
            <Grid container item style={{display: display}} className={classes.selectedLocations}>
                    {selectedLocations.map((location, index) =>(
                        <Grid xs={6} sm={3} md={2} item id={`tab-${index}`} className={classes.oneSelected}>
                            <div 
                            className={classes.closeSelectedLocations} 
                            id={`close-${index}`} 
                            onClick={handleClose}>
                                &times;
                            </div>
                            <di className={classes.citiesSelected}>
                                <Typography>{location.current}-</Typography>
                                <Typography>{location.destination} </Typography>
                            </di>
                            
                        </Grid>
                    ))}
                    
            </Grid>
            
        </Grid>
     );
}
 
export default SearchLocations;