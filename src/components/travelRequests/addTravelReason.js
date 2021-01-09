import React from 'react';
import { Grid, Container, makeStyles, Typography,TextField, Button } from '@material-ui/core';
import AccommodationCard from '../AccommodationCardWithReviews';
import { accommodationsPayload } from '../../../dummyData';

import colors from '../colors';

const useStyles = makeStyles((theme) => ({
    container:{
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'

    },
    insideGrid:{
        margin: theme.spacing(2,0,0,2)
    },
    title:{
        padding: theme.spacing(1),
        textAlign: 'center'
    },
    textFieldGrid:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        margin: theme.spacing(3),
        flexDirection: 'column'
    },
    buttons:{
        margin: theme.spacing(3),
        justifyContent: 'space-between'
    },
    cancelButton:{
        margin:theme.spacing(0,3)
    }
}))
 
function AddTravelReason(props) {
    const classes = useStyles();
    // console.log('--------------------props from reason of travel');
    // console.log(props);
    
    const handleSendTravelRequest = () =>{
        alert(...props.travelRequest);
    }
    const selectedAccommodation= props.travelRequest.selectedAccommodation ? props.travelRequest.selectedAccommodation : [{id:'',country:'',city:'',title:'',description:'',photos:''}];
    return (
        <React.Fragment>
            <Grid item xs={12} className={classes.title}>
                <Typography variant="h6" style={{color: colors.primary100}}> 
                    Please add a reason of travel:
                </Typography>
            </Grid>
            <Container className={classes.container}>
                <Grid item className={classes.insideGrid}>
                    {selectedAccommodation.map((accommodation) =>(
                        <AccommodationCard pending={false} accommodation={accommodation} {...props}  />
                    ))}
                </Grid>
            </Container>
            <Grid container className={classes.textFieldGrid}>
                <TextField
                placeholder="Please add a reason of travel"
                multiline
                variant="outlined"
                rows={10}
                style={{width:'50%',border:'1px solid primary'}}
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