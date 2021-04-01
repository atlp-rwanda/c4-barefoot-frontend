import React,{useEffect,useState} from "react";
import {Card,CardContent, CardActionArea, CardActions, CardMedia,Typography,Grid,Divider,Button,FormControlLabel,Checkbox} from '@material-ui/core';
import { Field, Form, Formik, FormikConfig,FormikValues} from 'formik';
import {getBookings} from "../../redux/actions/bookAccommodationAction";
import {getAccommodation,getAccommodations,getAccommodationAminity} from "../../redux/actions/fetchAccommodations";
import {getTemperature} from "../../redux/actions/getWeather";
import { connect } from 'react-redux';
import AccommodationCard from "../AccommodationCardWithReview";
import { makeStyles } from '@material-ui/core/styles';
import colors from '../colors';

const useStyles = makeStyles((theme) => ({
   
    media: {
      height: 440
    },
    checkbox:{
        display: 'block',
        position:'absolute',
        color: 'secondary',
        right: 0,
        fontSize:'25px'
    },
    cardActions:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'flex-start',
    },
    separate:{
        marginLeft:theme.spacing(3),
        marginBottom:theme.spacing(3),
    },
    divider:{
        // marginBottom:theme.spacing(3),
        marginTop:theme.spacing(4)
    },
    separator:{
        marginBottom:theme.spacing(3),
        marginTop:theme.spacing(3),
        marginLeft:theme.spacing(45)
    },
    reviews:{
        fontSize: '14px',
        color: colors.primary100,
    },
    cardContent:{
      overflow: 'hidden'
    },
    container:{
        marginLeft:theme.spacing(9),
        // width:'80%'
    },
    btncontainer1:{
        display:"flex",
        justifyContent:"flex-start"
        // width:'80%'
    },
    btncontainer2:{
        display:"flex",
        justifyContent:"flex-end"
        // width:'80%'
    },
    titleText:{
      [theme.breakpoints.down('sm')]:{
        fontSize:'18px',
      }
    },
    item:{
        display:'block'
    },
    NotFound: {
       marginLeft:theme.spacing(35)
    }
  }));
function Home(props){
  const classes = useStyles();
    let temp= null;
    const [page, setPage] = useState(1);
  
    const display = props.accommodation.length ? 'none' : 'flex';
    useEffect(() => {
        props.getBookings()
       
    }, [])
    if (props.accommodation.success) {
        // console.log(props.accommodation)
    //   const accomo= props.accommodation.bookedAccommodation.map((acc) => {
    //         console.log(acc)
    //     })
    }
    
    
    return(
        <React.Fragment>
            <Card>
                <CardContent>
                    <Formik initialValues={{
                        from:null,
                        retrunDate:null
                    }}
                   >
                        <Form>
                            <div >
                                   <Typography variant="h6" style={{color: colors.primary100}} className={classes.separator}> 
                                        Accommodation Bookings History
                                    </Typography>
                                {/* <Grid container item xs={12}  className={classes.title,classes.container}  direction="column">
                                    
                                    <Divider style={{width:'80%'}} variant='middle' />
                                    <Typography variant="subtitle1" style={{color: colors.primary100}} className={classes.separator}> 
                                        <Place color="secondary"/> Rwanda
                                    </Typography>            

                                </Grid> */}
                                <Grid container item xs={12} className={classes.container}>
                                    
                                    {props.accommodation.bookedAccommodation!=undefined? (
                                        props.accommodation.bookedAccommodation.map((accommodation) =>(
                                            <Grid item xs={8} sm={4} md={3} className={classes.insideGrid,classes.separate}>
                                                <AccommodationCard pending={props.status}  accommodationn={accommodation.accommodation} city={accommodation.accommodation.city} {...props}  />
                                            </Grid>
                                        ))
                                    ):(<Grid container item style={{display: display}} className={classes.NotFound}>
                                        <Typography variant="h6" color="secondary" component="h6">No Booked Accommodations found</Typography>
                                    </Grid>)}
                                  
                                    
                                    
                                </Grid>
                                
                            </div>
                        </Form>
                    </Formik>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

const mapStateToProps=state=>({
    // accommodations:state.fetchAccommodations.accommodationsByLocation,
    accommodation:state.bookedAccommodations
    
})
// const mapDispatchToProps = dispatch => {
//     return {
//         bookings: () => dispatch(getBookings())
//     }
// }
export default connect(mapStateToProps,{getBookings}) (Home)