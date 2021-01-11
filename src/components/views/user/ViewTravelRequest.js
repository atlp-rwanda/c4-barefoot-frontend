import React, {useEffect} from 'react';
import { Grid, makeStyles, Typography, Container, GridListTileBar, Button } from '@material-ui/core';
import colors from '../../colors'
import { connect } from 'react-redux';
<<<<<<< HEAD
import { GetTravelRequestsAction } from '../../../redux/actions/ViewTravelRequestAction';
import DisplayTravelRequest from '../../travelRequests/DisplayTravelRequest';
import SnackBarMessage from '../../SnackBarMessage';
import Loader from '../../Loader';
import { Pagination } from '@material-ui/lab';
=======
import DisplayTravelRequest from '../../travelRequests/DisplayTravelRequest';
import SnackBarMessage from '../../SnackBarMessage';
import Loader from '../../Loader';
>>>>>>> adds the viewTravelRequest componet

const useStyles = makeStyles((theme) =>({
    main:{
        justifyContent: 'center',
        alignItems: 'center',
<<<<<<< HEAD
=======
        border:'1px solid blue',
>>>>>>> adds the viewTravelRequest componet
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
<<<<<<< HEAD
        const userToken = localStorage.getItem('barefootUserToken');
        if(userToken){
            return props.GetTravelRequestsAction({userToken});
        }
        },[])

        const getNextPage = (event,value) =>{
            const userToken = localStorage.getItem('barefootUserToken');
            if(userToken){
                return props.GetTravelRequestsAction({userToken, page:value});
            }
            return 0;
        }

    return ( 
        <Grid container direction="column" className = {classes.main}>
            <Loader open={false} />
=======
    },[])

    console.log('props for loading', props.travelRequest);
    return ( 
        <Grid container direction="column" className = {classes.main}>
            <Loader open={props.travelRequest.sendLoading} />
            <SnackBarMessage {...props} />
>>>>>>> adds the viewTravelRequest componet
            <Grid item xs={12} className={classes.title}>
                <Typography variant="h6" style={{color: colors.primary100}}> 
                    View Travel Requests
                </Typography>
            </Grid>
            
            <Grid item xs={12} className={classes.content}>
                <DisplayTravelRequest {...props} />
            </Grid>
<<<<<<< HEAD
            <Grid container item justify="center" style={{marginTop:'50px'}}>
                <Pagination count={10} variant="outlined" color="primary" onChange={getNextPage} />
            </Grid>
=======
>>>>>>> adds the viewTravelRequest componet
            
        </Grid>
     );
}
 

const mapStateToProps = state =>({
<<<<<<< HEAD
    listTravelRequest: state.viewTravelRequest
});
export {ViewTravelRequest};
export default connect(mapStateToProps, {GetTravelRequestsAction})(ViewTravelRequest);
=======
    travelRequest: state.createTravelRequest
});
export default connect(mapStateToProps, null)(ViewTravelRequest);
>>>>>>> adds the viewTravelRequest componet

