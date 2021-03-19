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
    }
  }));
function Home(props){
    console.log(props)
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
        return Math.round((props.count/6)+1)
    }
    
    const handleChange = (event, value) => {
        props.getAccommodationsByLocation(props.accId,value)
        setPage(value)
      };
    const populateChecbox=()=>{
        let labels=[];
        let label;
        let count=0;
        if(props.amenities){
            const perm=props.amenities;
            for(const property in perm){
              label=
              <Grid item>
                <FormControlLabel
                        key={property}
                        control={<Checkbox checked={perm[property]} color={'primary'} name={property} id={count} disableRipple={true} />}
                        label={property}
                        color={colors.neutralBlack}
                />
              </Grid>
              count++;
              labels.push(label);
            }
            return labels;
          }else{
            return null;
        }
    }
    return(
        <React.Fragment>
            <Card>
                <CardContent>
                    <Formik initialValues={{
                        from:null,
                        retrunDate:null
                    }}
                    onSubmit={values => {
                        props.nextStep();
                    }}>
                        <Form>
                            <div >
                                <Grid container item xs={12}  className={classes.title,classes.container}  direction="column">
                                    <Typography variant="h6" style={{color: colors.primary100}} className={classes.separator}> 
                                        Choose Accommodation:
                                    </Typography>
                                    <Divider style={{width:'50%'}} variant='middle' />
                                    <Typography variant="subtitle1" style={{color: colors.primary100}} className={classes.separator}> 
                                        <Place color="secondary"/> Rwanda
                                    </Typography>            

                                </Grid>
                                <Grid container item xs={12} className={classes.container}>
                                    
                                    {props.accommodations.map((accommodation) =>(
                                        <Grid item xs={10} sm={4} md={3} className={classes.insideGrid,classes.separate}>
                                            <AccommodationCard pending={props.status} accommodationn={accommodation} city={accommodation.city} {...props}  />
                                        </Grid>
                                    ))}
                                    
                                    <Grid container item style={{display: display}} className={classes.notFound}>
                                        <Typography variant="h6" color="secondary" component="h6">No Accommodations found in Rwanda</Typography>
                                    </Grid>
                                    <Grid container item justify="center" style={{marginTop:'50px'}}>
                                    <Pagination count={count()} page={page} variant="outlined" color="primary" onChange={handleChange} />
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
                                            Next
                                        </Button>):(null)}
                                    </div>
                                </div>
                            </div>
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
    accId:state.fetchAccommodations.accId,
    status:state.fetchAccommodations.pending,
    amenities:state.fetchAccommodations.amenities,
    temp:state.fetchAccommodations.temp
})
export default connect(mapStateToProps,{getAccommodationsByLocation,selectAccommodation,getAccommodation,getAccommodations,getAccommodationAminity,getTemperature}) (Home)