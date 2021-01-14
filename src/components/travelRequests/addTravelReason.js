import React from 'react';
import { Grid, Container, makeStyles, Typography,TextField, Button, Divider } from '@material-ui/core';
import AccommodationCard from '../AccommodationCardWithReviews';

import colors from '../colors';

const useStyles = makeStyles((theme) => ({
    container:{
        justifyContent: 'center',
        alignItems: 'center'

    },
    insideGrid:{
        margin: theme.spacing(2,0,0,2)
    },
    title:{
        padding: theme.spacing(1),
        flexDirection:'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFieldGrid:{
        justifyContent:'center',
        alignItems:'center',
        margin: theme.spacing(3,0),
        flexDirection: 'column'
    },
    buttons:{
        margin: theme.spacing(3),
        justifyContent: 'space-between'
    },
    cancelButton:{
        margin:theme.spacing(0,3)
    },
    textField:{
        width:'60%',
        [theme.breakpoints.down('sm')]:{
            width: '90%'
        }
    }
}))
 
function AddTravelReason(props) {
    const classes = useStyles();
    
    const handleSendTravelRequest = () =>{
        if(!props.travelRequest.travelReason){
            return props.handleErrorsAction('Please add a reason of travel!');
        }
        if(!props.travelRequest.selectedAccommodation.length){
            return props.handleErrorsAction('Please add the accommodation of your chose!');
        }
        const userToken = localStorage.getItem('barefootUserToken');
        if(!props.travelRequest.selectedLocations.length){
            props.handleErrorsAction('Please add the current and destination locations');
        }
            
        let trip = [];
            
        if(!props.travelRequest.isReturning){
            props.travelRequest.selectedLocations.map((selected,index) =>{
                trip.push({
                    originCity: selected.current,
                    destination: selected.destination,
                    tripDate:selected.travelDate,
                    accommodationId:props.travelRequest.selectedAccommodation[index].id,
                    reason: props.travelRequest.travelReason
                })
            })
        }else{
            props.travelRequest.selectedLocations.map(selected =>{
                trip.push({
                    originCity: selected.current,
                    destination: selected.destination,
                    tripDate:selected.travelDate,
                    returnDate:selected.returnDate,
                    accommodationId:props.travelRequest.selectedAccommodation[0].id,
                    reason: props.travelRequest.travelReason
                })
            })
        }
        if(userToken){
            
            const data={
                authToken : userToken,
                travelRequest: {trip}
            }
            return props.sendTravelRequestAction(data);
        }
    }

    const handleTravelReasonChange = (event) =>{
        return props.addTravelReasonAction(event.target.value);
    }
    const selectedAccommodation= props.travelRequest.selectedAccommodation ? props.travelRequest.selectedAccommodation : [{id:'',country:'',city:'',title:'',description:'',photos:''}];
    return (
        <React.Fragment>
            <Grid container item xs={12} className={classes.title}>
                <Typography variant="h6" style={{color: colors.primary100}}> 
                    Selected accommodation:
                </Typography>
                <Divider style={{width: '50%'}} />
            </Grid>
            <Grid container className={classes.container}>
                <Grid item className={classes.insideGrid}>
                    {selectedAccommodation.map((accommodation) =>(
                        <AccommodationCard pending={false} accommodation={accommodation} {...props}  />
                    ))}
                </Grid>
            </Grid>
            <Grid container className={classes.textFieldGrid}>
                <Grid container item xs={12} className={classes.title}>
                    <Typography variant="h6" style={{color: colors.primary100}}> 
                        Please add a reason of travel:
                    </Typography>
                    <Divider style={{width: '50%'}} />
                </Grid>
                <TextField
                placeholder="Please add a reason of travel"
                multiline
                variant="outlined"
                label="Please add the reason of travel"
                onChange={handleTravelReasonChange}
                rows={10}
                className={classes.textField}
                />
                <Grid item contained className={classes.buttons}>
                    <Button variant="contained" color="secondary" className={classes.cancelButton}>Cancel</Button>
                    <Button variant="contained"  onClick={handleSendTravelRequest} color="primary">Send Travel Request</Button>
                </Grid>
            </Grid>
            
        </React.Fragment> 
    )
}

export default AddTravelReason;