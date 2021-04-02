import React,{useEffect,useState} from "react";
import {Card,CardContent, CardActionArea, CardActions, CardMedia,Typography,Grid,Divider,Button,FormControlLabel,Checkbox} from '@material-ui/core';
import { Field, Form, Formik, FormikConfig,FormikValues} from 'formik';
import {getAccommodationsByLocation,selectAccommodation} from "../../redux/actions/fetchAccommodationByLocation";
import {getAccommodation,getAccommodations,getAccommodationAminity} from "../../redux/actions/fetchAccommodations";
import {getTemperature} from "../../redux/actions/getWeather";
import { connect } from 'react-redux';
import AccommodationCard from "../AccommodationCardWithReview";
import { makeStyles } from '@material-ui/core/styles';
import { Label, Place } from '@material-ui/icons'
import colors from '../colors';
import { Pagination } from '@material-ui/lab';
import Ratings from '../RatingStars';
import { Skeleton } from '@material-ui/lab';
import CloudIcon from '@material-ui/icons/Cloud';
<<<<<<< HEAD
import {getRatings} from "../../redux/actions/ratingsAction"

const useStyles = makeStyles((theme) => ({
    // root: {
    //   maxWidth: 345,
    //   height: 360,
    //   height: '100%',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'space-between'
    // },
=======
import {useTranslation} from 'react-i18next'

const useStyles = makeStyles((theme) => ({
>>>>>>> develop
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
<<<<<<< HEAD
        // marginBottom:theme.spacing(3),
=======
>>>>>>> develop
        marginLeft:theme.spacing(3),
        marginBottom:theme.spacing(3),
    },
    divider:{
<<<<<<< HEAD
        // marginBottom:theme.spacing(3),
=======
>>>>>>> develop
        marginTop:theme.spacing(4)
    },
    separator:{
        marginBottom:theme.spacing(3),
        marginTop:theme.spacing(3),
        marginLeft:theme.spacing(2)
    },
    reviews:{
        fontSize: '14px',
        color: colors.primary100,
    },
    cardContent:{
      overflow: 'hidden'
    },
    container:{
<<<<<<< HEAD
        marginLeft:theme.spacing(9),
        // width:'80%'
=======
        [theme.breakpoints.up("xs")]:{
            marginLeft:theme.spacing(3)
          },
          [theme.breakpoints.up("sm")]:{
            marginLeft:theme.spacing(9)
          }
        
>>>>>>> develop
    },
    btncontainer1:{
        display:"flex",
        justifyContent:"flex-start"
<<<<<<< HEAD
        // width:'80%'
=======
>>>>>>> develop
    },
    btncontainer2:{
        display:"flex",
        justifyContent:"flex-end"
<<<<<<< HEAD
        // width:'80%'
=======
>>>>>>> develop
    },
    titleText:{
      [theme.breakpoints.down('sm')]:{
        fontSize:'18px',
      }
    },
    item:{
        display:'block'
    }
  }));
<<<<<<< HEAD
function Home(props){
  const classes = useStyles();
    let temp= null;
    const [page, setPage] = useState(1);
    if(props.temp){
        temp=<Typography gutterBottom variant="h6"  className={classes.titleText} >
                <CloudIcon color="primary"/> {props.temp-273.15}                                  
            </Typography>
    }
    const display = props.accommodations.length ? 'none' : 'flex';
    const count=()=>{
        return Math.trunc((props.count/6)+1)
=======
function FirstStep(props){
    const {t, i18n} = useTranslation();
  const classes = useStyles();
    const [page, setPage] = useState(1);
    const display = props.accommodations.length ? 'none' : 'flex';
    const count=()=>{
        if(props.count % 6 ===0){
            return(props.count/6)
        }else{
            return Math.trunc((props.count/6)+1)
        }
>>>>>>> develop
    }
    const handleChange = (event, value) => {
        props.getAccommodationsByLocation(props.accId,value)
        setPage(value)
<<<<<<< HEAD
    };
    // const handleRates = (id) => {
    //     const rev=getReviews(id);
    //     console.log("rates", rev)
    // }
=======
      };
>>>>>>> develop
    return(
        <React.Fragment>
            <Card>
                <CardContent>
                    <Formik initialValues={{
<<<<<<< HEAD
                        from:null,
                        retrunDate:null
=======
                        From:null,
                        To:null
>>>>>>> develop
                    }}
                    onSubmit={values => {
                        props.nextStep();
                    }}>
<<<<<<< HEAD
                        <Form>
=======
                        <Form form-data='form-1'>
                        {(props.status ? 
                            <CardActionArea>
                            <Skeleton animation="wave" variant="rect" className={classes.media} />
                            <CardContent className={classes.cardContent} >
                                <Skeleton animation="wave" height={30} width="60%" />
                                <Skeleton animation="wave" height={10} width="80%" />
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Skeleton animation="wave" height={30} width="60%" />
                            </CardActions>
                            </CardActionArea>
                            :
>>>>>>> develop
                            <div >
                                <Grid container item xs={12}  className={classes.title,classes.container}  direction="column">
                                    <Typography variant="h6" style={{color: colors.primary100}} className={classes.separator}> 
                                        Choose Accommodation:
                                    </Typography>
                                    <Divider style={{width:'80%'}} variant='middle' />
<<<<<<< HEAD
                                    <Typography variant="subtitle1" style={{color: colors.primary100}} className={classes.separator}> 
                                        <Place color="secondary"/> Rwanda
                                    </Typography>            

                                </Grid>
                                <Grid container item xs={12} className={classes.container}>
                                    
                                    {props.accommodations.map((accommodation) =>(
                                        <Grid item xs={8} sm={4} md={3} className={classes.insideGrid,classes.separate}>
                                            <AccommodationCard pending={props.status}  accommodationn={accommodation} city={accommodation.city} {...props}  />
                                        </Grid>
                                    ))}
                                    
                                    <Grid container item style={{display: display}} className={classes.notFound}>
                                        <Typography variant="h6" color="secondary" component="h6">No Accommodations found in Rwanda</Typography>
                                    </Grid>
                                    <Grid container item justify="center" style={{marginTop:'50px'}}>
                                    <Pagination count={count()} page={page} variant="outlined" color="primary" onChange={handleChange} />
=======
                                                

                                </Grid>
                                <Grid container item xs={12} className={classes.container} direction='row'>
                                    {props.accommodations.length>0?(
                                        <Grid item>
                                        <Typography variant="subtitle1" style={{color: colors.primary100}} className={classes.separator}> 
                                            <Place color="secondary"/>{props.nation}
                                        </Typography>
                                    </Grid>
                                    ):(null)}
                                    
                                    <Grid  container item >
                                        {props.accommodations.map((accommodation,index) =>(
                                            <Grid item xs={8} sm={4} md={3} key={index} className={classes.insideGrid,classes.separate}>
                                                <AccommodationCard pending={props.status} accommodationn={accommodation} city={accommodation.city} {...props}  />
                                            </Grid>
                                        ))}
                                    </Grid>
                                    <Grid container item style={{display: display}} className={classes.notFound}>
                                        <Typography variant="h6" color="secondary" component="h6">No Accommodations found in this Locaton</Typography>
                                    </Grid>
                                    <Grid container item justify="center" style={{marginTop:'50px'}}>
                                    <Pagination count={count()} page={page} variant="outlined" color="primary" onChange={handleChange} id='pagination' />
>>>>>>> develop
                                    </Grid>
                                </Grid>
                                <div className={classes.btncontainer2}>
                                    <div className={classes.textCenter,classes.divider}>
                                        {props.selectedAccommodation?(<Button
                                            type='submit'
                                            variant='contained'
                                            color='primary'
                                            className={classes.button}
                                        >
<<<<<<< HEAD
                                            Next
=======
                                            {t("Next")}
>>>>>>> develop
                                        </Button>):(null)}
                                    </div>
                                </div>
                            </div>
<<<<<<< HEAD
=======
                        )}
>>>>>>> develop
                        </Form>
                    </Formik>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

const mapStateToProps=state=>({
    accommodations:state.fetchAccommodations.accommodationsByLocation,
    accommodation:state.fetchAccommodations.accommodation,
    selectedAccommodation:state.fetchAccommodations.selectedAccommodation,
    count:state.fetchAccommodations.count,
<<<<<<< HEAD
    accId:state.fetchAccommodations.accId,
    status:state.fetchAccommodations.pending,
    amenities:state.fetchAccommodations.amenities,
    temp: state.fetchAccommodations.temp,
    // reviews: state.fetchReviews
})
// const mapDispatchToProps = dispatch => {
//     return {
//         getReviews: (id)=>dispatch(getRatings(id))
//     }
// }
export default connect(mapStateToProps,{getAccommodationsByLocation,selectAccommodation,getAccommodation,getAccommodations,getAccommodationAminity,getTemperature}) (Home)
=======
    nation:state.fetchAccommodations.nation,
    accId:state.fetchAccommodations.accId,
    status:state.fetchAccommodations.pending,
    amenities:state.fetchAccommodations.amenities,
    temp:state.fetchAccommodations.temp
})

export {FirstStep}
export default connect(mapStateToProps,{getAccommodationsByLocation,selectAccommodation,getAccommodation,getAccommodations,getAccommodationAminity,getTemperature}) (FirstStep)
>>>>>>> develop
