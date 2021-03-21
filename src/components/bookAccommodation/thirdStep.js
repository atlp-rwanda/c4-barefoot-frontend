import React,{useEffect,useState} from "react";
import {Card,CardContent, CardActionArea, CardActions, CardMedia,Typography,Grid,Divider,Button,FormControlLabel,Checkbox,TextField} from '@material-ui/core';
import { Field, Form, Formik,  FormikConfig,FormikValues} from 'formik';
import {getAccommodationsByLocation,selectAccommodation} from "../../redux/actions/fetchAccommodationByLocation";
import {getAccommodation,getAccommodations,getAccommodationAminity} from "../../redux/actions/fetchAccommodations";
import {bookAccommodations,clearBookSnackbar} from "../../redux/actions/bookAccommodationAction";
import {getTemperature} from "../../redux/actions/getWeather";
import { connect } from 'react-redux';
import AccommodationCard from "../AccommodationCardWithReview";
import { makeStyles } from '@material-ui/core/styles';
import { Label, Place } from '@material-ui/icons'
import colors from '../colors';
import { Pagination } from '@material-ui/lab';
import Ratings from '../RatingStars';
import { Skeleton } from '@material-ui/lab';
import * as yup from 'yup';
import CloudIcon from '@material-ui/icons/Cloud';
import Loader from '../Loader'
import {DatePicker} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    // root: {
    //   maxWidth: 345,
    //   height: 360,
    //   height: '100%',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'space-between'
    // },
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
        // marginBottom:theme.spacing(3),
        marginLeft:theme.spacing(3)
    },
    divider:{
        // marginBottom:theme.spacing(3),
        marginTop:theme.spacing(4)
    },
    separator:{
        marginBottom:theme.spacing(3),
        marginTop:theme.spacing(3),
        marginLeft:theme.spacing(2),
    },
    dates:{
        marginRight:theme.spacing(3),
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
        marginLeft:theme.spacing(9),
        // width:'80%'
    },
    btn:{
        display:'flex',
        alignContent:'flex-end',
        flexDirection:'column',
        alignItems:'flex-start',
    },
    btncontainer:{
        display:"flex",
        justifyContent:"space-between"
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
function Home(props){
    
  const classes = useStyles();
    let temp= null;
    const [Fromdate,setFromDate] = useState(null)
    const [Returndate,setRetrunDate] = useState(null)
    if(props.temp){
        temp=<Typography gutterBottom variant="h6"  className={classes.titleText} >
                <CloudIcon color="primary"/> {props.temp-273.15}                                  
            </Typography>
    }

    const handleBook=(value)=>{
        let formdata={From:"",To:""}
        formdata.From=value.From
        formdata.To=value.To
        props.bookAccommodations(props.selectedAccommodation,formdata,props.nextStep)
    }
    const validationSchema = yup.object().shape({
        From: yup
        .date()
        .required('Booking Date is required',"Booking Date is required")
        .min(new Date(),"You can not book a Hotel in the past"),
        To: yup
            .date()
            .required('Checkout Date is required',"Che")
            .min(yup.ref('From'),"You can not checkout before you arrive  ")
    })

    return(
        <React.Fragment>
            <Loader open={props.status}/>
            <Card>
                <CardContent>
                    <Formik initialValues={{
                        From:null,
                        To:null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                            handleBook(values)
                            resetForm()
                        }}
                    >
                    {({ values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting}) => (
                        <Form onSubmit={handleSubmit}>
                            <div className={classes.divider} >
                            <Card className={classes.root} >
                                {(!props.accommodation ? 
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
                                <>
                                <CardActionArea>
                                    
                                    <CardMedia
                                    className={classes.media}
                                    image={props.accommodation.photos}
                                    title={props.accommodation.title}
                                    />
                                </CardActionArea>
                                    <CardContent  className={classes.cardContent} >
                                        <Typography gutterBottom variant="h5" component="h2" className={classes.titleText}>
                                        {props.accommodation.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" noWrap >
                                            {props.accommodation.description}
                                        </Typography>
                                        <div className={classes.divider}>
                                            <Typography variant="h4" color="primary">
                                                Booking
                                            </Typography>
                                            <Grid container spacing={3} className={classes.divider} >
                                                <Grid container item xs={3} spacing={3} className={classes.dates}>
                                                    
                                                                                                                                                <TextField 
                                                            id="From"
                                                            label="Book From"
                                                            type="datetime-local"
                                                            error={touched.From && errors.From}
                                                            helperText={touched.From && errors.From}
                                                            InputLabelProps={{
                                                                shrink: true
                                                            }}
                                                            format="yyy-dd-mm HH:MM:ss"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.From}
                                                        />
                                                       
                                                </Grid>
                                                <Grid container item xs={3} spacing={3} className={classes.dates}>
                                                        <TextField 
                                                            id="To"
                                                            label="Book upto"
                                                            type="datetime-local"
                                                            error={touched.To && errors.To}
                                                            helperText={touched.To && errors.To}
                                                            InputLabelProps={{
                                                                shrink: true
                                                            }}
                                                            format="yyy-dd-mm HH:MM:ss"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.To}
                                                        />
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </CardContent>
                                </>
                                )}
                                </Card>
                            </div>
                            <div className={classes.textCenter,classes.divider}>
                            <div className={classes.btncontainer}>
                            <div className={classes.textCenter}>
                                <Button
                                    color='primary'
                                    variant='contained'
                                    id="backBtn"
                                    className={classes.button}
                                    onClick={() => props.prevStep()}
                                >
                                    Back
                                </Button>
                            </div>
                            <div className={classes.textCenter}>
                                <Button
                                    type='submit'
                                    color='primary'
                                    variant='contained'
                                    btn='submitBtn'
                                    disabled={isSubmitting}
                                    className={classes.button}
                                >
                                    Book
                                </Button>
                            </div>
                            </div>
                            </div>
                        </Form>
                        )}
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
    status:state.bookAccommodations.pending,
    amenities:state.fetchAccommodations.amenities,
    temp:state.fetchAccommodations.temp
})
export default connect(mapStateToProps,{getAccommodationsByLocation,selectAccommodation,getAccommodation,getAccommodations,getAccommodationAminity,getTemperature,bookAccommodations,clearBookSnackbar}) (Home)