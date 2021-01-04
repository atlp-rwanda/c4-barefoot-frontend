import React, { useEffect } from 'react';
import colors from '../colors';
import { Button, fade, FormControlLabel, Grid, InputBase, makeStyles, Typography, Checkbox } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { CheckReturningAction, checkTravelDatesAction } from '../../redux/actions/CreateTravelRequestAction';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    main:{
        backgroundColor: colors.primary200,
        width:'90%',
        margin:'auto',
        color:colors.neutralWhite,
        justifyContent: 'space-evenly',
        padding: theme.spacing(3)
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
    }
}))

const SearchLocations = (props) => {
    useEffect(() => {
        console.log("props here");
        console.log(props);
        console.log("DAte here");
        console.log(new Date().toLocaleDateString());
    })
    const classes = useStyles();
    let data = {
        isReturning: props.travelRequest.isReturning,
        departureDate: props.travelRequest.departureDate,
        returnDate: props.travelRequest.returnDate
    };
    const  handleDepartureDateChange=(date) => {
        console.log('clicked!!!!!!!!!!!!');
        console.log(date);
        data.departureDate = date;
        return props.checkTravelDatesAction(data);
    }
    const  handleReturnDateChange=(date) => {
        data.returnDate = date;
        return props.checkTravelDatesAction(data);
    }
    const handleCheckboxChange =(event) => {
        data.isReturning = event.target.checked
        return props.CheckReturningAction(data);
    }


    return ( 
        <Grid container direction="row" className={classes.main} >
            <Grid  item direction="column">
                <Typography>Enter your location</Typography>
                <div className={classes.searchLocation}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search your Location ..."
                        className={classes.searchInput}
                    />

                </div>
            </Grid>
            <Grid item direction="column">
                <Typography>Enter your Destination</Typography>
                <div className={classes.searchLocation}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search your Destination ..."
                        className={classes.searchInput}
                    />

                </div>
            </Grid>
            <Grid item direction="column">
                <Button variant="contained" className={classes.addButton}>Add</Button>
            </Grid>
            <Grid item direction="column" >
                <Typography>Date of travel</Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker 
                        disableToolbar
                        variant="dialog"
                        inputVariant="filled"
                        format="MM/dd/yyyy"
                        value={data.departureDate}
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
 
const mapStateToProps = state =>({
    travelRequest: state.createTravelRequest
});
export default connect(mapStateToProps, {CheckReturningAction, checkTravelDatesAction})(SearchLocations);
