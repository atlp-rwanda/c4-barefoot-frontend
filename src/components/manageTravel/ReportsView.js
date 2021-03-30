import React, {useState, useEffect}from 'react'
import { Typography, makeStyles, useTheme, Drawer, Grid, TextField, Card, GridList, GridListTile, CardActionArea, CardMedia, CardContent, IconButton, CardActions, Avatar, Button, Paper, Modal, Container, Box } from "@material-ui/core";
import { connect } from 'react-redux'
import Model from "./viewTravelModal";
import { Skeleton } from "@material-ui/lab";
import Pagination from '@material-ui/lab/Pagination';
import { getTravelRequest } from "../../redux/actions/fetchTravelRequestAction";
import { updateSingleTravelRequest, clearUpdateTravelRequest } from "../../redux/actions/updateTravelRequestAction";
import { clearSingleRequest, getSingleTravelRequest } from "../../redux/actions/singleTravelAction";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ErrorModal from './ErrorModal';
import TravelRequestCard from './TravelRequestCard';
import SuccessModal from './SuccessModal';
import { useTranslation } from 'react-i18next';

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

const filter= (travels, category)=>{
    let filteredArray=[];
    switch( category ){
        case 'approved':
            filteredArray= travels.filter( (trav)=>{
                return trav.travelRequestInfo.status === category;
            });
            return filteredArray;
        case 'pending':
            filteredArray= travels.filter( (trav)=>{
                return trav.travelRequestInfo.status === category;
            });
            return filteredArray;

        case 'canceled':
        case 'rejected':
            filteredArray= travels.filter( (trav)=>{
                return trav.travelRequestInfo.status === 'canceled' || trav.travelRequestInfo.status === 'rejected' ;
            });
            return filteredArray;

        case 'done':
            filteredArray= travels.filter( (trav)=>{
                if( trav.travelRequestInfo.Trip.length !== 0){
                    return (trav.travelRequestInfo.Trip[ trav.travelRequestInfo.Trip.length -1 ].returnDate < Date.now()) &&( trav.travelRequestInfo.Trip[ trav.travelRequestInfo.Trip.length -1 ].returnDate);
                }
            });
            return filteredArray;
        default: 
            return [];

    }
}

function ReportsView(props) {
    const { t, i18n } = useTranslation();
    const classes = useStyles()
     const theme = useTheme();
     const loading = props.travelRequest.loading;
     const travel = props.travelRequest.travel;
     const error= props.travelRequest.error
     const [openModal, setOpenModal] = useState(false)
     const [isErrorModalOpen, setIsErrorModalOpen]= useState(false);
     const {updateSingleTravel}= props
     const success= updateSingleTravel.travel;
     const [isSuccessModalOpen, setIsSuccessModalOpen]= useState(false);

     const { clearUpdateTravelRequest }= props;

     const category= props.category;
     const [modalUsage, setModalUsage]= useState('view');
     const [page, setPage] =useState(1);
     const page_size= 5;


     const filtered=  filter(travel, category);

     const handlePage = (e, value)=>{
        setPage(value);
     };


     useEffect(() => {
         props.getTravelRequest()
     }, []);

     useEffect(() => {
         if(success){
            handleModalClose();
         }
         
    }, [success]);
    
    //updatting travel request
    const handleUpdateTravel = (id, action) => {
        props.updateSingleTravelRequest(id, action)
    }
    //formating dsate
   
     // openning modal
     const handleModalOpen = () => {
         setOpenModal(true)
     }
     //getting single travel
     const handleSingleTravel = (id, usage) =>{

         handleModalOpen()
         props.getSingleTravelRequest(id);
         setModalUsage(usage);
     }



     // closing modal
     const handleModalClose = () => {
         setOpenModal(false);
         props.clearSingleRequest();
        //  props.clearUpdateTravelRequest();
         props.getTravelRequest()

     };



     const paginate= (array, page_number) => {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }
    const paginated= paginate(filtered, page);


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
           {filtered.length !== 0 ? paginated.map((trav)=> (

            <Card className={classes.root} key={trav.travelId}>

                <TravelRequestCard 
                    travel={trav.travelRequestInfo} 
                    handleSingleTravel={handleSingleTravel} 
                    category={category} 
                    userInfo= {trav.userInfo}
                    accomodationsInfo= {trav.accommodationInfo}
                />

                <Model
                     openModal={openModal}
                     setOpenModal={setOpenModal} 
                     onClose={handleModalClose} 
                     handleUpdateTravel={handleUpdateTravel} 
                     updateSingleTravel={updateSingleTravel}
                     usage= {modalUsage}
                     accomodationsInfo= {trav.accommodationInfo}

                >

                    <div>{t("this is details of travel request")}</div>

                </Model>
                
            </Card>
           ))
           :
           <center>
            <Box style={{ paddingTop: '50px'}}>
               <Typography variant="subtitle1" component="h6">{t("No")} {category} {t("travel request found")}</Typography>
           </Box>
           </center>
        
        }
           </Box>
        <Box>
        <ErrorModal isOpen={isErrorModalOpen} setIsOpen={setIsErrorModalOpen} error={error} />
        <div className={classes.paganete}>
            { filtered.length !== 0 && filtered.length/page_size > 1 &&  <Pagination count={Math.ceil(filtered.length/page_size)} color="primary" onChange={handlePage} />}
        </div>

        {success && 
            <SuccessModal 
                isOpen={isSuccessModalOpen} 
                setIsOpen={setIsSuccessModalOpen} 
                success={success} 
                clearUpdateTravelRequest={clearUpdateTravelRequest} 
                handleModalClose={handleModalClose} 
            />}

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

export { ReportsView }
export default connect(mapStateToProps, {getTravelRequest, getSingleTravelRequest, updateSingleTravelRequest, clearSingleRequest, clearUpdateTravelRequest})(ReportsView)
