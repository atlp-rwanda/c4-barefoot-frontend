import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import {getSingleTravelRequest} from '../../redux/actions/singleTravelAction'
import { Skeleton } from '@material-ui/lab';


const ViewTravelModal= (props)=> {
//   const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { openModal, onClose, setOpenModal, singleTravel } = props


  // Styles for dialog box

  const useStyles= makeStyles((theme)=>({
      root:{
          backgroundColor: "yellow"
      },
      dialogPaper:{
          backgroundColor: 'green'
      },
      imageContainer:{
          height: '400px',
          overflow:"hidden",
      },
      detailsContainer:{
          padding: '20px',
          margin: '0px auto',
          width: '85%',
          textAlign: 'left'
      },
      headersText:{
          fontWeight: 600,
      },
      hotelAndReasonBoxes:{
          margin:'30px 0px',
          width:'70%',
      },

      hotelImageContainer:{
          height: '160px',
          overflow:'hidden'
      }
  }));



  const travelRequestArray= singleTravel.travel;

  const classes= useStyles();

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (

      <Dialog
        fullScreen={fullScreen}
        open={openModal}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth= 'md'
        PaperProps={{ style:{padding: 40}}}
        style={{padding: 50}}
        

      >
        <center><DialogTitle id="responsive-dialog-title">View Travel Request</DialogTitle></center>
        { travelRequestArray.length === 0 ? (
            <Box style={{margin:'50px'}}>
                <Skeleton variant='rect' height={400} width={800} />
                <Skeleton variant='text'  />
                <Skeleton variant='text'  />
                <Skeleton variant='text'  />

            </Box>
        )
        :
        (
            <React.Fragment>


        <DialogContent>
            <Box className={classes.imageContainer} >
                <img alt="dialog image" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg" style={{width:"100%"}} />
            </Box>
            <Box className={classes.detailsContainer}>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText}>
                        Location-destination
                        </Typography>
                                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText} >
                        Date of travel
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText} >
                        Rertuning
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText} >
                        Date of return
                        </Typography>
                    </Grid>

                </Grid>

                { travelRequestArray[0].Trip.map( (trip)=>(

                    <Grid container spacing={2} key={trip.tripId}>
                        <Grid item xs={12} sm={6} md={3} >
                            <Typography variant="caption" component="h2" gutterBottom={true} >
                                {`${trip.originCity}-${trip.destination}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Typography variant="caption" component="h2" gutterBottom={true}  >
                                {trip.tripDate}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Typography variant="caption" component="h2" gutterBottom={true}  >
                                True
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Typography variant="caption" component="h2" gutterBottom={true}  >
                                {trip.returnDate}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}


                <Box className={classes.hotelAndReasonBoxes}>
                    <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText}>
                        Reason
                    </Typography>
                    <Typography variant="caption" component="h2" gutterBottom={true}  >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate 
                            beatae hic voluptate perferendis, tempore quidem explicabo, alias, 
                            maiores non sit omnis nihil minima. Atque iste numquam fuga tempora 
                            iure tempore sint laudantium ratione. Nam, doloribus. Laboriosam velit, quibusdam aliquid soluta quam, 
                            incidunt quae sint est veritatis in, impedit accusamus vero.
                    </Typography>                    
                </Box>
                <Box className={classes.hotelAndReasonBoxes}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} className={classes.hotelImageContainer}>
                            <img alt="hotel image" src='https://res.cloudinary.com/nowo-ltd/image/upload/v1613499405/image1_wk0wa0.jpg' style={{width: '100%'}} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText}>
                                Mariot Hotel
                            </Typography>
                            <Typography variant="caption" component="h2" gutterBottom={true}  >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate 
                                    beatae hic voluptate perferendis, tempore quidem explicabo, alias, 
                                    
                            </Typography> 
                        </Grid>
                    </Grid>
                </Box>   
            </Box>
        </DialogContent>

        </React.Fragment>
        )}
        <DialogActions>
          <Button autoFocus onClick={onClose} color="primary">
            Approve
          </Button>
          <Button onClick={onClose} color="secondary" autoFocus>
            Reject
          </Button>
        </DialogActions>
      </Dialog>
  );
}

const mapStateToProps = state => ({
    singleTravel:state.manageSingleTravel
})

// export default ViewTravelModal;
export default connect(mapStateToProps, {getSingleTravelRequest})(ViewTravelModal)