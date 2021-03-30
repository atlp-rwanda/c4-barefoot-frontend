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
import { connect } from 'react-redux';
import {getSingleTravelRequest} from '../../redux/actions/singleTravelAction'
import { Skeleton } from '@material-ui/lab';
import { updateSingleTravelRequest } from '../../redux/actions/updateTravelRequestAction';
import Loader from '../Loader'
import ErrorModal from './ErrorModal';
import ConfirmModal from './ConfirmModal';
import {clearUpdateTravelRequest} from '../../redux/actions/updateTravelRequestAction'
import SuccessModal from './SuccessModal';

const default_image= 'https://res.cloudinary.com/nowo-ltd/image/upload/v1614639495/default-placeholder_uoekkz.png'

const ViewTravelModal= (props)=> {
//   const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { openModal, onClose, setOpenModal, singleTravel, handleUpdateTravel, updateSingleTravel, usage, clearUpdateTravelRequest } = props;
  const accomodationsInfo= singleTravel.travel && singleTravel.travel.length > 0?singleTravel.travel[0].accommodationInfo : [];
  const [isErrorModalOpen, setIsErrorModalOpen]= useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen]= useState(false)
  const error= props.updateSingleTravel.error
  const success= props.updateSingleTravel.travel
  const [isConfirmOpen, setIsConfirmOpen] = useState({open: false, action: ''});

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
          minWidth: '100%',
          margin: '0px auto'
      },
      detailsContainer:{
          padding: '20px',
          margin: '0px auto',
          width: '85%',
          textAlign: 'left'
      },
      tripItemBinder:{
          display: 'flex',
          flexDirection: 'column',
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
  }
  const handleImageError= (e)=>{
      e.target.src= default_image
      e.onError = "";
      return true;
  }

  return (

      <Dialog
        fullScreen={fullScreen}
        open={openModal}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth= 'md'
        PaperProps={{ style:{padding: 10}}}
        style={{padding: 10}}
        

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
                <img alt="dialog image" 
                    src={accomodationsInfo ? accomodationsInfo[0].photos : default_image } 
                    style={{width:"100%"}} 
                    onError= { (e)=> handleImageError(e)}
                    
                    />
            </Box>
            <Box className={classes.detailsContainer}>
               
                { travelRequestArray[0].travelRequestInfo.Trip.map( (trip)=>(

                    <Grid container spacing={2} key={trip.tripId} style={{ borderBottom: '1px solid gray'}}>
                        <Grid item xs={12} sm={4} md={4} >
                            <Box className={ classes.tripItemBinder}>
                                <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText}>
                                    Location-destination
                                </Typography>
                                <Typography variant="caption" component="h2" gutterBottom={true} >
                                    {`${trip.originCity}-${trip.destination}`}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} >
                            <Box className={ classes.tripItemBinder}>
                                <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText} >
                                    {t("Date of travel")}
                                </Typography>
                                <Typography variant="caption" component="h2" gutterBottom={true}  >
                                    <Moment format="YYYY/MM/DD">
                                        {trip.tripDate}
                                    </Moment>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} >
                            <Box className={ classes.tripItemBinder}>
                                <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText} >
                                    {t("Date of return")}
                                </Typography>
                                <Typography variant="caption" component="h2" gutterBottom={true}  >
                                    <Moment format="YYYY/MM/DD">
                                        {trip.returnDate}
                                    </Moment>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                ))}


                <Box className={classes.hotelAndReasonBoxes}>
                    <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText}>
                        {t("Reason")}
                    </Typography>
                    <Typography variant="caption" component="h2" gutterBottom={true}  >
                           { travelRequestArray[0].travelRequestInfo.Trip.length>0 ? travelRequestArray[0].travelRequestInfo.Trip[0].reason : 'No reason available'}
                    </Typography>                    
                </Box>
                <Box className={classes.hotelAndReasonBoxes}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} className={classes.hotelImageContainer}>
                            <img 
                                alt="hotel image" 
                                src={accomodationsInfo ? accomodationsInfo[0].photos : default_image } 
                                style={{width: '100%'}} 
                                onError= { (e)=> handleImageError(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body2" component="h2" gutterBottom={true} className={classes.headersText}>
                                {accomodationsInfo ? accomodationsInfo[0].title : 'No name available' }
                            </Typography>
                            <Typography variant="caption" component="h2" gutterBottom={true}  >
                                {accomodationsInfo ? accomodationsInfo[0].description : 'No accomodation decription available for this Trip' }     
                            </Typography> 
                        </Grid>
                    </Grid>
                </Box>   
            </Box>
        </DialogContent>

        </React.Fragment>
        )}
        {
           travelRequestArray.length> 0 && travelRequestArray[0].travelRequestInfo.status === 'pending' ?
             (
                <DialogActions>
                    <Button autoFocus onClick={ ()=> handleActionButton( travelRequestArray[0].travelRequestInfo.travelId, 'approve' )} className={classes.approveButton}>
                        Approve
                    </Button>
                    <Button onClick={ ()=> handleActionButton( travelRequestArray[0].travelRequestInfo.travelId, 'reject' )} variant='contained' color='secondary' >
                        Reject
                    </Button>
                </DialogActions>
            )
            :
            (
                <DialogActions>
                    <Button onClick={ ()=> onClose()} variant='contained' color='secondary' >
                        Close
                    </Button>
                </DialogActions>
            )
        }
        {error && <ErrorModal isOpen={isErrorModalOpen} setIsOpen={setIsErrorModalOpen} error={error} clearUpdateTravelRequest={clearUpdateTravelRequest} />}

      </Dialog>
  );
}

const mapStateToProps = state => ({
    singleTravel:state.manageSingleTravel
})

// export default ViewTravelModal;
export default connect(mapStateToProps, {getSingleTravelRequest, clearUpdateTravelRequest})(ViewTravelModal)