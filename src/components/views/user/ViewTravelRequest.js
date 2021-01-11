import React, {useEffect} from 'react';
import { Grid, makeStyles, Typography, Container, GridListTileBar, Button } from '@material-ui/core';
import colors from '../../colors'
import { connect } from 'react-redux';
import DisplayTravelRequest from '../../travelRequests/DisplayTravelRequest';
import SnackBarMessage from '../../SnackBarMessage';
import Loader from '../../Loader';

const useStyles = makeStyles((theme) =>({
    main:{
        justifyContent: 'center',
        alignItems: 'center',
        border:'1px solid blue',
        padding: theme.spacing(1,0),
        [theme.breakpoints.up('sm')]:{
            margin: theme.spacing(7,0,0,0)
        }
    },
    title:{
        padding: theme.spacing(1),
        
    },
    content:{
        width: '100%',
        height: 'auto'
    }
}))

const ViewTravelRequest = (props) => {
    const classes = useStyles();
    useEffect(()=>{
    },[])

    console.log('props for loading', props.travelRequest);
    return ( 
        <Grid container direction="column" className = {classes.main}>
            <Loader open={props.travelRequest.sendLoading} />
            <SnackBarMessage {...props} />
            <Grid item xs={12} className={classes.title}>
                <Typography variant="h6" style={{color: colors.primary100}}> 
                    View Travel Requests
                </Typography>
            </Grid>
            
            <Grid item xs={12} className={classes.content}>
                <DisplayTravelRequest {...props} />
            </Grid>
            
        </Grid>
     );
}
 

const mapStateToProps = state =>({
    travelRequest: state.createTravelRequest
});
export default connect(mapStateToProps, null)(ViewTravelRequest);

