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
import Book from "./index"

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
    useEffect(() => {
    props.getAccommodationsByLocation(props.match.params.locationId);
    //console.log('here')
    props.getAccommodations();
  }, [])
  const classes = useStyles();
    let temp= null;
    if(props.temp){
        temp=<Typography gutterBottom variant="h6"  className={classes.titleText} >
                <CloudIcon color="primary"/> {props.temp-273.15}                                  
            </Typography>
    }
    const display = props.accommodations.length ? 'none' : 'flex';
    const count=()=>{
        if((props.count % 6) === 0){
            return (props.count / 6);
        }else if((props.count % 6) < 1){
            return 1;
        }else if((props.count % 6) >= 1){
            let pages= (props.count / 6)+1;
            return pages;
        }
    }

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
        // <React.Fragment>
        //     <Card>
        //         <CardContent>
        //             <Formik initialValues={{
        //                 from:null,
        //                 retrunDate:null
        //             }}>
        //                 <Form>
        //                     <div >
        //                         <Grid container item xs={12}  className={classes.title,classes.container}  direction="column">
        //                             <Typography variant="h6" style={{color: colors.primary100}} className={classes.separator}> 
        //                                 Choose Accommodation:
        //                             </Typography>
        //                             <Divider style={{width:'50%'}} variant='middle' />
        //                             <Typography variant="subtitle1" style={{color: colors.primary100}} className={classes.separator}> 
        //                                 <Place color="secondary"/> kenya
        //                             </Typography>            

        //                         </Grid>
        //                         <Grid container className={classes.container}>
                                    
        //                             {props.accommodations.map((accommodation) =>(
        //                                 <Grid item xs={10} sm={4} md={3} className={classes.insideGrid,classes.separate}>
        //                                     <AccommodationCard pending={props.status} accommodationn={accommodation} city={accommodation.city} {...props}  />
        //                                 </Grid>
        //                             ))}
                                    
        //                             <Grid container item style={{display: display}} className={classes.notFound}>
        //                                 <Typography variant="h6" color="secondary" component="h6">No Accommodations found in kenya</Typography>
        //                             </Grid>
        //                             <Grid container item justify="center" style={{marginTop:'50px'}}>
        //                             <Pagination count={count()} variant="outlined" color="primary" />
        //                             </Grid>
        //                         </Grid>
        //                     </div>
        //                     <div className={classes.divider} >
        //                     <Card className={classes.root} >
        //                         {(!props.accommodation ? 
        //                             <CardActionArea>
        //                             <Skeleton animation="wave" variant="rect" className={classes.media} />
        //                             <CardContent className={classes.cardContent} >
        //                                 <Skeleton animation="wave" height={30} width="60%" />
        //                                 <Skeleton animation="wave" height={10} width="80%" />
        //                             </CardContent>
        //                             <CardActions className={classes.cardActions}>
        //                                 <Skeleton animation="wave" height={30} width="60%" />
        //                             </CardActions>
        //                             </CardActionArea>
        //                             :
        //                         <>
        //                         <CardActionArea>
                                    
        //                             <CardMedia
        //                             // onClick={handleViewMore}
        //                             className={classes.media}
        //                             image={props.accommodation.photos}
        //                             title={props.accommodation.title}
        //                             />
        //                         </CardActionArea>
        //                             <CardContent  className={classes.cardContent} >
        //                                 <Typography gutterBottom variant="h5" component="h2" className={classes.titleText}>
        //                                 {props.accommodation.title}
        //                                 </Typography>
        //                                 <Typography variant="body2" color="textSecondary" component="p" noWrap >
        //                                     {props.accommodation.description}
        //                                 </Typography>
        //                                 <div className={classes.divider}>
        //                                 <Grid container spacing={1}  direction='row' >
        //                                     <Grid container item xs={3} spacing={3} >
                                                    
        //                                         <Grid container item xs={12} spacing={3} direction='column'>
        //                                             <Typography gutterBottom variant="h5" component="h2" className={classes.titleText} color="primary">
        //                                             Location
        //                                             </Typography>
        //                                             <Grid item>
        //                                                 <Typography gutterBottom variant="body" className={classes.titleText}>
        //                                                 {props.accommodation.country}
        //                                                 </Typography>
        //                                             </Grid>
        //                                             <Grid item>
        //                                                 <Typography gutterBottom variant="body" className={classes.titleText}>
        //                                                 {props.accommodation.city}
        //                                                 </Typography>
        //                                             </Grid>
        //                                             <Grid item>
        //                                                 <Typography gutterBottom variant="body" className={classes.titleText}>
        //                                                 {props.accommodation.state}
        //                                                 </Typography>
        //                                             </Grid>
        //                                             <Grid item>
        //                                                 <Typography gutterBottom variant="body" className={classes.titleText}>
        //                                                 {props.accommodation.streetAddress}
        //                                                 </Typography>
        //                                             </Grid>
        //                                         </Grid>
        //                                     </Grid>
        //                                     <Grid container item xs={3} spacing={3}>
                                                    
        //                                         <Grid container item xs={12} spacing={3} direction='column'>
        //                                             <Typography gutterBottom variant="h5" component="h2" className={classes.titleText} color="primary">
        //                                             Capacity
        //                                             </Typography>
        //                                             <Grid item>
        //                                                 <Typography gutterBottom variant="body" className={classes.titleText}>
        //                                                 {props.accommodation.propertyType}
        //                                                 </Typography>
        //                                             </Grid>
        //                                             <Grid item>
        //                                                 <Typography gutterBottom variant="body" className={classes.titleText}>
        //                                                 {props.accommodation.numberOfRooms!=null?(`${props.accommodation.numberOfRooms} bedrooms`):(null)} 
        //                                                 </Typography>
        //                                             </Grid>
        //                                             <Grid item>
        //                                                 <Typography gutterBottom variant="body" className={classes.titleText}>
        //                                                 {props.accommodation.typeOfBed?(`Type of: ${props.accommodation.typeOfBed} bedrooms`):(null)}
        //                                                 </Typography>
        //                                             </Grid>
        //                                         </Grid>
        //                                     </Grid>
        //                                     <Grid container item xs={3} spacing={3}>
        //                                             <Typography gutterBottom variant="h5" component="h2" className={classes.titleText} color="primary">
        //                                         Amenities
        //                                         <Grid container item xs={12} spacing={0} direction='column'>
        //                                             {populateChecbox()}
        //                                         </Grid>
        //                                         </Typography>
        //                                     </Grid>
        //                                     <Grid item xs={3} spacing={12} direction='column'>
        //                                         <Grid item xs={12} spacing={4} >
        //                                             <Typography gutterBottom variant="h5"  className={classes.titleText} color="primary">
        //                                                 Cost/night in currency
        //                                             </Typography>
        //                                         </Grid>
        //                                         <Grid item xs={12} spacing={4} >
        //                                             <Typography gutterBottom variant="h5"  className={classes.titleText} color="primary">
        //                                                 Weather
        //                                             </Typography>
                                                     
        //                                             {temp}
                                                        
                                                   
        //                                         </Grid> 
        //                                     </Grid>
        //                                 </Grid>
        //                             </div>
        //                             </CardContent>
        //                         </>
        //                         )}
        //                         </Card>
        //                     </div>
        //                     <div className={classes.divider} >
        //                     <Card className={classes.root} >
        //                         {(!props.accommodation ? 
        //                             <CardActionArea>
        //                             <Skeleton animation="wave" variant="rect" className={classes.media} />
        //                             <CardContent className={classes.cardContent} >
        //                                 <Skeleton animation="wave" height={30} width="60%" />
        //                                 <Skeleton animation="wave" height={10} width="80%" />
        //                             </CardContent>
        //                             <CardActions className={classes.cardActions}>
        //                                 <Skeleton animation="wave" height={30} width="60%" />
        //                             </CardActions>
        //                             </CardActionArea>
        //                             :
        //                         <>
        //                         <CardActionArea>
                                    
        //                             <CardMedia
        //                             // onClick={handleViewMore}
        //                             className={classes.media}
        //                             image={props.accommodation.photos}
        //                             title={props.accommodation.title}
        //                             />
        //                         </CardActionArea>
        //                             <CardContent  className={classes.cardContent} >
        //                                 <Typography gutterBottom variant="h5" component="h2" className={classes.titleText}>
        //                                 {props.accommodation.title}
        //                                 </Typography>
        //                                 <Typography variant="body2" color="textSecondary" component="p" noWrap >
        //                                     {props.accommodation.description}
        //                                 </Typography>
        //                                 <div className={classes.divider}>
        //                                     <Typography variant="h4" color="primary">
        //                                         Booking
        //                                     </Typography>
        //                                     <Grid container spacing={3} >
        //                                         <Grid container item xs={3} spacing={3} >
                                                    
        //                                         </Grid>
        //                                         <Grid container item xs={3} spacing={3} >

        //                                         </Grid>
        //                                     </Grid>
        //                                 </div>
        //                             </CardContent>
        //                         </>
        //                         )}
        //                         </Card>
        //                     </div>
        //                 </Form>
        //             </Formik>
        //         </CardContent>
        //     </Card>
        // </React.Fragment>
        <Book/>
    )
}

// export function FormikStepper({children,...props}: FormikConfig<FormikValues>){
//     const childrenArray= React.Children.toArray(children)
//     const [step,setStep] =useState(0);
//     const currentChild=childrenArray[step];

//     return (
//         <Formik {...props} >
//             <Form autoComplete="off">{currentChild}</Form>
//         </Formik>
//     )
// }
const mapStateToProps=state=>({
    accommodations:state.fetchAccommodations.accommodationsByLocation,
    accommodation:state.fetchAccommodations.accommodation,
    count:state.fetchAccommodations.count,
    status:state.fetchAccommodations.pending,
    amenities:state.fetchAccommodations.amenities,
    temp:state.fetchAccommodations.temp
})
export default connect(mapStateToProps,{getAccommodationsByLocation,selectAccommodation,getAccommodation,getAccommodations,getAccommodationAminity,getTemperature}) (Home)