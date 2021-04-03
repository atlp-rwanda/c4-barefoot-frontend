import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Divider, Grid, Typography } from '@material-ui/core';

const default_image = 'https://res.cloudinary.com/nowo-ltd/image/upload/v1614639495/default-placeholder_uoekkz.png'

const RequestModal = (props) => {
    let { openProp, travel, setOpenModal, status } = props
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    let title = 'View Travel Request';

    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: "yellow"
        },
        dialogPaper: {
            backgroundColor: 'green'
        },
        imageContainer: {
            height: '400px',
            overflow: "hidden",
            minWidth: '100%',
            margin: '0px auto'
        },
        detailsContainer: {
            padding: '20px',
            margin: '0px auto',
            width: '85%',
            textAlign: 'left'
        },
        tripItemBinder: {
            display: 'flex',
            flexDirection: 'column',
        },
        headersText: {
            fontWeight: 600,
        },
        hotelAndReasonBoxes: {
            margin: '30px 0px',
            width: '70%',
        },

        hotelImageContainer: {
            height: '160px',
            overflow: 'hidden',

        },
        approveButton: {
            backgroundColor: '#219653',
            borderRadius: '0px',
            color: 'white',
            '&:hover': {
                backgroundColor: '#035F0A',
            }

        },
        rejectButton: {
            borderRadius: '0px',
            marginLeft: '20px',
            backgroundColor: 'EB5757',
            color: 'white'
        },
    }));

    const [open, setOpen] = useState(openProp)

    const handleClose = () => {
        setOpen(false);
        setOpenModal(false);
    };
    const classes = useStyles();
    console.log(travel)
    let num = status == 'approved' ? 3 : 4;
    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth='md'
            PaperProps={{ style: { padding: 10 } }}
            style={{ padding: 10 }}
        >
            <center><DialogTitle id="responsive-dialog-title">{title}</DialogTitle></center>
            <React.Fragment>

                <DialogContent>
                    <Box className={classes.imageContainer} >
                        <img alt="dialog image"
                            src={travel.accommodationInfo ? travel.accommodationInfo[0].photos : default_image}
                            style={{ width: "100%" }}
                        />
                    </Box>
                    <Box className={classes.detailsContainer}>

                        {travel.travelRequestInfo.Trip.map((trip) => (
                            <Grid container spacing={2} key={trip.tripId} style={{ borderBottom: '1px solid gray' }}>
                                <Grid item xs={12} sm={num}>
                                    <Box className={classes.tripItemBinder}>
                                        <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText}>
                                            Location-destination
                                </Typography>
                                        <Typography variant="caption" component="h2" gutterBottom={true} >
                                            {`${trip.originCity}-${trip.destination}`}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={num}>
                                    <Box className={classes.tripItemBinder}>
                                        <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText} >
                                            Date of travel
                                </Typography>
                                        <Typography variant="caption" component="h2" gutterBottom={true}  >
                                            <Moment format="YYYY/MM/DD">
                                                {trip.tripDate}
                                            </Moment>
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={num} >
                                    <Box className={classes.tripItemBinder}>
                                        <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText} >
                                            Date of return
                                </Typography>
                                        <Typography variant="caption" component="h2" gutterBottom={true}  >
                                            <Moment format="YYYY/MM/DD">
                                                {trip.returnDate}
                                            </Moment>
                                        </Typography>
                                    </Box>
                                </Grid>
                                {status == 'approved' &&
                                    <Grid item xs={12} sm={num} >
                                        <Box className={classes.tripItemBinder}>
                                            <Button color="primary" variant="contained" style={{ marginTop: '5px' }} href={`/bookaccommodation/${trip.destinationId}`}>Book</Button>
                                        </Box>
                                    </Grid>
                                }
                            </Grid>
                        ))}
                        <Box className={classes.hotelAndReasonBoxes}>
                            <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText}>
                                Reason
                            </Typography>
                            <Typography variant="caption" component="h2" gutterBottom={true}  >
                                {travel.travelRequestInfo.Trip.length > 0 ? travel.travelRequestInfo.Trip[0].reason : 'No reason available'}
                            </Typography>
                        </Box>
                        {travel.accommodationInfo.map((accommodation) => {
                            return (
                                <Box className={classes.hotelAndReasonBoxes}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6} className={classes.hotelImageContainer}>
                                            <img
                                                alt="hotel image"
                                                src={accommodation.photos ? accommodation.photos : default_image}
                                                style={{ width: '100%' }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText}>
                                                {accommodation.title ? accommodation.title : 'No name available'}
                                            </Typography>
                                            <Typography variant="caption" component="h2" gutterBottom={true}  >
                                                {accommodation.description ? accommodation.description : 'No accomodation decription available for this Trip'}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )
                        })}
                    </Box>
                </DialogContent>

            </React.Fragment>
        </Dialog>
    );
}

// export default RequestModal;
export default RequestModal