import React, {useState, useEffect}from 'react'
import { Typography, makeStyles, useTheme, Drawer, Grid, TextField, Card, GridList, GridListTile, CardActionArea, CardMedia, CardContent, IconButton, CardActions, Avatar, Button, Paper, Modal, Container, Box } from "@material-ui/core";
import { connect } from 'react-redux'
 import dateFormat from 'dateformat';
import Model from "./viewTravelModal";
import { Skeleton } from "@material-ui/lab";
import Pagination from '@material-ui/lab/Pagination';
import { getTravelRequest } from "../../redux/actions/fetchTravelRequestAction";
import { updateSingleTravelRequest, clearUpdateTravelRequest } from "../../redux/actions/updateTravelRequestAction";
import { clearSingleRequest, getSingleTravelRequest } from "../../redux/actions/singleTravelAction";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ErrorModal from './ErrorModal';
import TravelRequestCard from './TravelRequestCard';

const useStyles = makeStyles((theme) => ({
    container:{
        minHeight:'78vh',
        display: 'flex',
        alignItems:'center',
        padding:'0%',
        marginTop:'20px',
        flexDirection:'column',
        paddingBottom:'20px',
    },
    cardContainer:{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '75vh',
        position: 'relative',
        justifyContent: 'space-between',
    },
  root: {
    padding:'20px',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    boxShadow: 'none',
    marginTop:'20px',
    position: 'relative',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  content: {
    flex: '1 0 auto',
  },

  image:{
      width:'100%',
      height:'300px'
  },
  name:{
      marginLeft:'10px',
      marginTop: "-5px"
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    justifyContent: 'space-between'
  },
  
  requesterProfi: {
      display: 'flex',
      width:'350px',
      flexDirection:'row',
      justifyContent:'flex-start'
  },
  imageContainer:{
      width:'300px',
      height:'200px',
      marginLeft:'0%',
      overflow: 'hidden'
  },
 
  paganete:{
    marginTop:'20px',
    width: '100%',
    display: 'flex',
    justifyContent:'center',
    marginBottom: '15px',
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  buttons:{
    float:'inline-end',
    marginRight:'20px',
    justifyContent:'space-evenly',
    display:'inline-block',

  }
}));
function ReportsView(props) {
    const classes = useStyles()
     const theme = useTheme();
     const loading = props.travelRequest.loading;
     const travel = props.travelRequest.travel;
     const error= props.travelRequest.error
     const [openModal, setOpenModal] = useState(false)
     const [isErrorModalOpen, setIsErrorModalOpen]= useState(false);
     const {updateSingleTravel}= props
     const updateError= updateSingleTravel.error;
     const category= props.category;
     const [modalUsage, setModalUsage]= useState('view')

     const filtered= travel.filter( (trav)=>{
         return trav.status === category;
     });

     console.log('filtered', filtered);
     useEffect(() => {
         props.getTravelRequest()
     }, [])
    
    //updatting travel request
    const handleUpdateTravel = (id, action) => {
        props.updateSingleTravelRequest(id, action)
    }
    //formating dsate
    const dateFormat = (date) =>{
        return dataFormat(date, "mmmm dS, yyyy")
    }
     // openning modal
     const handleModalOpen = () => {
         setOpenModal(true)
     }
     //getting single travel
     const handleSingleTravel = (id, usage) =>{
         console.log('single travel')
         console.log(id)
         handleModalOpen()
         props.getSingleTravelRequest(id);
         setModalUsage(usage);
     }

     console.log(error)
     const cardImage = "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg";

     // closing modal
     const handleModalClose = () => {
         setOpenModal(false);
         props.clearSingleRequest();
         props.clearUpdateTravelRequest();
     }
    return (
        <div className={classes.container} style={{boxShadow:'none'}}>
            <Typography variant='h6' component='h6'>Direct report travel Request</Typography>
           {
           loading? <>
           <Card className={classes.root} style={{boxShadow:'none'}}>
            <Paper className={classes.imageContainer}>
                <Skeleton variant='rect' animation="wave" height='300px' width='320px' />
            </Paper>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <div className={classes.requesterProfi}>
                        <Skeleton variant='circle' width={40} height={40}/>
                        <Skeleton variant='text' width='190px' height='20'  className={classes.name}/>
                        <Skeleton variant='text' height='20' width='100px' style={{float:'right'}}/>
                        </div>
                        <Skeleton variant='text' width='300px' height='40px' style={{marginLeft:'30px'}}/>
                        <Skeleton variant='text' width='100px' height='40px' style={{marginLeft:'30px'}}/>
                        <div className={classes.controls}>
                            <Skeleton variant='text' width='100px' height='40px' style={{marginLeft:'23px'}} />
                        <div className={classes.buttons}>
                            <Skeleton variant='text' width='150px' height='40px' />      
                            </div>
                        </div>
                    </CardContent>
                </div>
                
           </Card>
           </>
            : 
           <Container maxWidth="md" className={classes.cardContainer}>
               <Box>
           {filtered.length !== 0 ? filtered.map((trav)=> (

            <Card className={classes.root} key={trav.travelId}>

                <TravelRequestCard travel={trav} handleSingleTravel={handleSingleTravel} category={category} />

                <Model
                     openModal={openModal}
                     setOpenModal={setOpenModal} 
                     onClose={handleModalClose} 
                     handleUpdateTravel={handleUpdateTravel} 
                     updateSingleTravel={updateSingleTravel}
                     usage= {modalUsage}
                >

                    <div>this is details of travel request</div>

                </Model>
                
            </Card>
           ))
           :
           <center>
            <Box style={{ paddingTop: '50px'}}>
               <Typography variant="subtitle1" component="h6">No {category} travel request found</Typography>
           </Box>
           </center>
        
        }
           </Box>
        <Box>
        <ErrorModal isOpen={isErrorModalOpen} setIsOpen={setIsErrorModalOpen} error={error} />
        {/* <button onClick={ ()=> setIsErrorModalOpen(true)} >open</button> */}
        <div className={classes.paganete}>
            { filtered.length !== 0 &&  <Pagination count={10} color="primary" />}
        </div>
        </Box>
        </Container>
           } 
    </div>
    )
}
const mapStateToProps = state => ({
    travelRequest: state.manageTravel,
    singleTravel: state.manageSingleTravel,
    updateSingleTravel: state.updateTravel
})
export default connect(mapStateToProps, {getTravelRequest, getSingleTravelRequest, updateSingleTravelRequest, clearSingleRequest, clearUpdateTravelRequest})(ReportsView)
