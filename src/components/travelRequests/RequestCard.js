import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react';
import Moment from 'react-moment'


const default_image = 'https://res.cloudinary.com/nowo-ltd/image/upload/v1614639495/default-placeholder_uoekkz.png'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        backgroundColor: '#EAF4FB',
        padding: '20px',
        margin: '10px 0px'


    },
    imageContainer: {
        height: '200px',
        overflow: 'hidden'
    },
    requestDetails: {
        padding: '10px 15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    requesterInfo: {
        display: 'flex',
        flexDirection: 'row',

    },
    username: {
        margin: '-5px 0px 0px 10px',

    },
    reasonArea: {
        marginTop: '10px',
        paddingLeft: '30px'
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    approveBtn: {
        margin: "0px 20px",
        backgroundColor: '#219653',
        color: 'white',
        '&:hover': {
            backgroundColor: '#035F0A',
        }
    },
    cancelBtn: {
        margin: "0px 0px 0px 20px",
        backgroundColor: '#EB5757',
        color: 'white',
        '&:hover': {
            backgroundColor: '#71042B',
        }
    },
    editBtn: {
        margin: "0px 0px 0px 20px",
        backgroundColor: '#1769aa',
        color: 'white',
        '&:hover': {
            backgroundColor: '#71042B',
        }
    },
    approvedBadge: {
        padding: '3px 15px',
        backgroundColor: '#219653',
        borderRadius: '4px 4px 0px 0px',
        color: 'white',
    },
    badge: {
        padding: '3px 15px',
        borderRadius: '4px 4px 0px 0px',
        color: 'white',
    }
}))
const RequestCard = (props) => {
    const classes = useStyles();
    const { travel, userInfo, accommodationInfo } = props;
    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} sm={4}>
                <Box className={classes.imageContainer}>
                    <img src={accommodationInfo[0].photos ? accommodationInfo[0].photos : default_image} alt="request image" width="100%" />
                </Box>
            </Grid>
            <Grid item xs={12} sm={8} className={classes.requestDetails} >
                <Box>
                    <Box className={classes.requesterInfo}>
                        <AccountCircleIcon />
                        <Typography variant="h6" component="h6" className={classes.username} > {userInfo.username} </Typography>
                    </Box>
                    <Box className={classes.reasonArea}>
                        <Typography variant="subtitle2" component="h6" > {"Reason of travel"} </Typography>
                        <Typography variant="caption" component="h6" >
                            {travel.Trip.length !== 0 ? travel.Trip[0].reason : "No available Trip reason"}
                        </Typography>
                    </Box>
                    <Box className={classes.reasonArea}>
                        <Typography variant="subtitle2" component="h6" > {"Current Location"} </Typography>
                        <Typography variant="caption" component="h6" >
                            {travel.Trip.length !== 0 ? travel.Trip[0].originCity : "No available Trip reason"}
                        </Typography>
                    </Box>
                    <Box className={classes.reasonArea}>
                        <Typography variant="subtitle2" component="h6" > {"Destination Location of your last trip"} </Typography>
                        <Typography variant="caption" component="h6" >
                            {travel.Trip.length !== 0 ? travel.Trip[travel.Trip.length - 1].destination : "No available Trip reason"}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant='caption'
                            component='h6'
                            style={{ position: 'absolute', color: '#54AD7D', right: '10px', top: '10px' }}
                        >
                            <Moment format="YYYY/MM/DD">
                                {travel.createdAt}
                            </Moment>
                        </Typography>

                    </Box>
                </Box>
                <Box className={classes.actions}>
                    <Box>
                        <Button color="primary">View more</Button>
                    </Box>
                    <Box>
                        <Button color="primary" className={classes.editBtn}>Edit</Button>
                        <Button color="secondary" className={classes.cancelBtn}>Cancel</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export { RequestCard };
export default RequestCard;