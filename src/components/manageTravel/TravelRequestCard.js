import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react'

const useStyles= makeStyles( (theme)=>({
    container:{
        display: 'flex',
        flexGrow: 1,
        position:'relative',
        backgroundColor: '#EAF4FB',
        padding:'20px',
        margin: '10px 0px'


    },
    imageContainer:{
        height: '200px',
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
    }
}))
const TravelRequestCard = (props) => {

    const {travel, handleSingleTravel} = props;
    console.log(travel);
    const classes= useStyles();
    const cardImage= 'https://res.cloudinary.com/nowo-ltd/image/upload/v1613499405/image1_wk0wa0.jpg'
    return ( 
        <Grid container className={ classes.container}>
            <Grid item xs={4}>
                <Box className={classes.imageContainer}>
                    <img src={cardImage} alt="request image" width="100%" />
                </Box>
            </Grid>
            <Grid item xs={8} className={classes.requestDetails} >
                <Box>
                <Box className={classes.requesterInfo}>
                    <AccountCircleIcon />
                    <Typography variant="h6" component="h6" className={classes.username} > {travel.userId} </Typography>
                </Box>
                <Box className={classes.reasonArea}>
                    <Typography variant="subtitle2" component="h6" > {"Reason of travel"} </Typography>
                    <Typography variant="caption" component="h6" >
                         {travel.Trip[0].reason}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='caption' component='h6' style={{position:'absolute', color:'#54AD7D', right:'10px', top:'10px'}}>{travel.createdAt}</Typography>

                </Box>
                </Box>
                <Box className={ classes.actions}>
                    <Box>
                        <Button color="primary" onClick={ ()=> handleSingleTravel(travel.travelId)}>View more</Button>
                    </Box>
                    <Box>
                        <Button variant='contained' className={classes.approveBtn} onClick={ ()=> handleSingleTravel(travel.travelId)}>Approve</Button>
                        <Button variant='contained' className={classes.rejectBtn} onClick={ ()=> handleSingleTravel(travel.travelId)}>Reject</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
     );
}
 
export default TravelRequestCard;