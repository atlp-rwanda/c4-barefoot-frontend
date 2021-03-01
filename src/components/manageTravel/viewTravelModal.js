import React, { useEffect, useState } from 'react';
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
import { updateSingleTravelRequest } from '../../redux/actions/updateTravelRequestAction';
import Loader from '../Loader'
import ErrorModal from './ErrorModal';
import ConfirmModal from './ConfirmModal';
import {clearUpdateTravelRequest} from '../../redux/actions/updateTravelRequestAction'


const ViewTravelModal= (props)=> {
//   const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { openModal, onClose, setOpenModal, singleTravel, handleUpdateTravel, updateSingleTravel, usage } = props
  const [isErrorModalOpen, setIsErrorModalOpen]= useState(false);
  const error= props.updateSingleTravel.error
  const [isConfirmOpen, setIsConfirmOpen] = useState({open: false, action: ''});


//   console.log(usage);
  // Styles for dialog box

  let title = 'View Travel Request';

  switch( usage){
      case 'view':
          title= 'View Travel Request';
          break;

      case 'approve':
          title= "Approve Travel request";
          break;
          
      case 'reject':
          title= "Reject Travel request";
          break;

      default:
        title= 'View Travel Request'
    }

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
          overflow:'hidden',
         
      },
      approveButton:{
          backgroundColor:'#219653',
          borderRadius:'0px',
          color: 'white',
          '&:hover':{
            backgroundColor: '#035F0A',
        }

      },
      rejectButton: {
           borderRadius:'0px',
           marginLeft:'20px',
           backgroundColor:'EB5757',
           color: 'white'
       },
  }));


 

    let load = false;

    if(updateSingleTravel.loading){
        load = true;
    } else {
        load = false;

    } 



  const travelRequestArray= singleTravel.travel;

  const classes= useStyles();



  const handleClose = () => {
    setOpenModal(false);
  };
  const handleActionButton= (id, action)=>{
      setIsConfirmOpen({
          action: action,
          open:true
      });
    // handleUpdateTravel(id, action);
  }

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
        <center><DialogTitle id="responsive-dialog-title">{title}</DialogTitle></center>
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
            <Loader open={load} />
            <ConfirmModal 
                isOpen={isConfirmOpen} 
                setIsOpen={setIsConfirmOpen} 
                handleUpdateTravel={handleUpdateTravel} 
                travelId={travelRequestArray[0].travelRequestInfo.travelId} 
            />
            <Box className={classes.imageContainer} >
                <img alt="dialog image" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg" style={{width:"100%"}} />
            </Box>
            <Box className={classes.detailsContainer}>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6} md={4} >
                        <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText}>
                        Location-destination
                        </Typography>
                                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText} >
                        Date of travel
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} >
                        <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText} >
                        Date of return
                        </Typography>
                    </Grid>

                </Grid>

                { travelRequestArray[0].travelRequestInfo.Trip.map( (trip)=>(

                    <Grid container spacing={2} key={trip.tripId}>
                        <Grid item xs={12} sm={6} md={4} >
                            <Typography variant="caption" component="h2" gutterBottom={true} >
                                {`${trip.originCity}-${trip.destination}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Typography variant="caption" component="h2" gutterBottom={true}  >
                                {trip.tripDate}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} >
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
                           { travelRequestArray[0].travelRequestInfo.Trip[0].reason}
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
          <Button autoFocus onClick={ ()=> handleActionButton( travelRequestArray[0].travelRequestInfo.travelId, 'approve' )} className={classes.approveButton}>
            Approve
          </Button>
          <Button onClick={ ()=> handleActionButton( travelRequestArray[0].travelRequestInfo.travelId, 'reject' )} variant='contained' color='secondary' >
            Reject
          </Button>
        </DialogActions>
        {error && <ErrorModal isOpen={isErrorModalOpen} setIsOpen={setIsErrorModalOpen} error={error} clearUpdateTravelRequest={clearUpdateTravelRequest} />}

      </Dialog>
  );
}

const mapStateToProps = state => ({
    singleTravel:state.manageSingleTravel
})

// export default ViewTravelModal;
export default connect(mapStateToProps, {getSingleTravelRequest, clearUpdateTravelRequest})(ViewTravelModal)