import React from 'react';
import { useParams} from "react-router-dom";
import {connect} from "react-redux";
import {readTravelRequestInfo} from "../redux/actions/notificationAction";
import {Typography, Card, Paper,Button, Skeleton, Container, makeStyles, Grid, Box}  from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Moment from 'react-moment'


const default_image= 'https://res.cloudinary.com/nowo-ltd/image/upload/v1614639495/default-placeholder_uoekkz.png'

const useStyles= makeStyles( (theme)=>({
    container:{
        display: 'flex',
        flexGrow: 1,
        position:'relative',
        backgroundColor: '#EAF4FB',
        padding:'20px',
        margin: '20px auto',
        width: '80%'


    },
    imageContainer:{
        height: '300px',
        overflow: 'hidden'
    },
    requestDetails:{
        padding: '10px 15px',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    requesterInfo:{
        display: 'flex',
        flexDirection: 'row',

    },
    username: {
        margin: '-5px 0px 0px 10px',

    },
    reasonArea:{
        marginTop: '10px',
        paddingLeft: '30px'
    },
    actions:{
        display: 'flex',
        justifyContent: 'space-between'
    },
    approveBtn:{
        margin: "0px 20px",
        backgroundColor: '#219653',
        color: 'white',
        '&:hover':{
            backgroundColor: '#035F0A',
        }
    },
    rejectBtn:{
        margin: "0px 0px 0px 20px",
        backgroundColor:'#EB5757',
        color: 'white',
        '&:hover':{
            backgroundColor: '#71042B',
        }
    },
    approvedBadge:{
        padding: '3px 15px',
        backgroundColor: '#219653',
        borderRadius: '4px 4px 0px 0px',
        color: 'white',
    },
    badge:{
        padding: '3px 15px',
        borderRadius: '4px 4px 0px 0px',
        color: 'white',
    }
}))

const NotificationDetails=(props)=>{
    const classes = useStyles();
    const [loading, setLoading] = React.useState(true);
    
    const { id } = props.match.params;
    React.useEffect(()=>{
        props.readTravelRequestInfo(id)
       
        setTimeout(()=>{
            setLoading(false);
        }, 5000)
    }, [])
    const request=props.request
    //const cardImage= request[0].accomodationInfo ? accomodationsInfo[0].photos : default_image
    console.log(request);
    return(
        <>
        { loading ? <Typography>Loading</Typography> :
        <Grid container className={ classes.container}>
        <Grid item xs={12} sm={4}>
            <Box className={classes.imageContainer}>
                <img src={default_image} alt="request image" width="100%" onError= { (e)=> handleImageError(e)} />
            </Box>
        </Grid>
        <Grid item xs={12} sm={8} className={classes.requestDetails} >
            <Box>
            <Box className={classes.requesterInfo}>
                <AccountCircleIcon />
                <Typography variant="h6" component="h6" className={classes.username} > {request.userInfo.username} </Typography>
            </Box>
            <Box className={classes.reasonArea}>
                <Typography variant="subtitle2" component="h6" > {"Reason of travel"} </Typography>
                <Box variant="caption" component="h6" >
                     { request.travelRequestInfo.Trip.length !== 0 ? request.travelRequestInfo.Trip.map(t=>(
                         <Typography key={t.tripId}>{t.reason}</Typography>
                     )) : <Typography>No available Trips</Typography>}
                </Box>
            </Box>
            <Box>
                <Typography 
                    variant='caption' 
                    component='h6' 
                    style={{position:'absolute', color:'#54AD7D', right:'10px', top:'10px'}}
                >
                    <Moment format="YYYY/MM/DD">
                        {request.travelRequestInfo.createdAt}
                    </Moment>
                </Typography>

            </Box>
            </Box>
            {/* <Box className={ classes.actions}>
                <Box>
                    <Button color="primary" onClick={ ()=> handleSingleTravel(request.travelRequestInfo.travelId, 'view')}>View more</Button>
                </Box>
                <Box>
                   {category==='approved' && <Box className={classes.approvedBadge}><Typography variant='subtitle1' component='h6'>Approved</Typography></Box>}
                   {category==='done' && (
                        <Box 
                            className={classes.badge} 
                            style={{backgroundColor: 'blue'}} 
                        >
                            <Typography variant='subtitle1' component='h6'>Done</Typography>
                        </Box>
                    )}
                    {category==='rejected' && (
                        <Box 
                            className={classes.badge} 
                            style={{backgroundColor: travel.status === 'canceled'? 'black' : '#CE2020'}} 
                        >
                            <Typography variant='subtitle1' component='h6' style={{textTransform: 'capitalize'}}>{travel.status}</Typography>
                        </Box>
                    )}

                </Box>
            </Box> */}
        </Grid>
    </Grid>
        }
        </>
    )
}
const mapStateToProps=(state)=>({
   request:state.notifications.travelRequest
})
export default connect(mapStateToProps,{readTravelRequestInfo})(NotificationDetails);