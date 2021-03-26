import React,{useEffect,useState} from "react";
import {Card,CardContent, CardActionArea, CardActions, CardMedia,Typography,Grid,Divider,Button,Snackbar,TextField,Slide} from '@material-ui/core';
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
import { Skeleton } from '@material-ui/lab';
import * as yup from 'yup';
import CloudIcon from '@material-ui/icons/Cloud';
import Loader from '../Loader'
import MuiAlert from '@material-ui/lab/Alert';

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
        marginLeft:theme.spacing(3)
    },
    divider:{
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
function ThirdStep(props){
    
  const classes = useStyles();
    const closeBookSnackBarTimer = () => {
        props.clearBookSnackbar()
      }

    const TransitionUp = (props) => {
    return <Slide {...props} direction="up" />;
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
        <div>
            <Loader open={props.status}/>
            <Snackbar
                    open={props.snackBarMessage.open}
                    onClose={closeBookSnackBarTimer}
                    autoHideDuration={4000}
                    TransitionComponent={TransitionUp}
                >
                <MuiAlert
                    severity={props.snackBarMessage.severity}
                    variant='filled'
                    elevation={6}
                    >{props.snackBarMessage.message}
                </MuiAlert>
            </Snackbar>
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
                        <Form form-data="form-3">
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
                                                <Grid container item xs={12} sm={4} spacing={3} className={classes.dates}>
                                                    
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
                                                <Grid container item xs={12} sm={4} spacing={3} className={classes.dates}>
                                                        <TextField 
                                                            id="To"
                                                            label="Book up to"
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
            </div>
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
    temp:state.fetchAccommodations.temp,
    snackBarMessage:state.bookAccommodations.snackBarMessage
})

export {ThirdStep}
export default connect(mapStateToProps,{getAccommodationsByLocation,selectAccommodation,getAccommodation,getAccommodations,getAccommodationAminity,getTemperature,bookAccommodations,clearBookSnackbar}) (ThirdStep)