import React from 'react';
import SearchLocations from '../../travelRequests/SearchTravelRequest';
import { Grid, makeStyles, Typography, Container, GridListTileBar } from '@material-ui/core';
import colors from '../../colors'
import { connect } from 'react-redux';
import { CheckReturningAction, checkTravelDatesAction, searchCurrentLocationAction } from '../../../redux/actions/CreateTravelRequestAction';
import AddAccommodation from '../../travelRequests/searchAccommodations';


const useStyles = makeStyles((theme) =>({
    main:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1,0)
    },
    title:{
        padding: theme.spacing(1),
        
    },
    content:{
        width: '100%',
        height: 'auto'
    }
}))

const CreateTravelRequest = (props) => {
    const classes = useStyles();

    const display = 'block';
    return ( 
        <Grid container direction="column" className = {classes.main}>
            <Grid item xs={12} className={classes.title}>
                <Typography variant="h6" style={{color: colors.primary100}}> 
                    Create Travel Request
                </Typography>
            </Grid>
            
            <Grid item xs={12} className={classes.content}>
                <SearchLocations {...props} />
            </Grid>
            <Grid item container xs={12} style={{border: '1px solid blue'}}>
                <Grid container style={{display: display}}>
                   <AddAccommodation /> 
                </Grid>
                
            </Grid>
        </Grid>
     );
}
 

const mapStateToProps = state =>({
    travelRequest: state.createTravelRequest
});
export default connect(mapStateToProps, {CheckReturningAction, checkTravelDatesAction, searchCurrentLocationAction})(CreateTravelRequest);

