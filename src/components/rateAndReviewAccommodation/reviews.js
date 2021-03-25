import React,{useEffect,useState} from "react";
import {Card,CardContent, CardActionArea, CardActions, CardMedia,Typography,Grid,Divider,Button,FormControlLabel,Checkbox,Select,MenuItem} from '@material-ui/core';
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
import {convertorAction} from "../../redux/actions/convertorAction"

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
    btncontainer:{
        display:"flex",
        justifyContent:"space-between"
        // width:'80%'
    },
    btncontainer1:{
        //display:"flex",
        justifyContent:"flex-start"
        // width:'80%'
    },
    btncontainer2:{
        //display:"flex",
        justifyContent:"flex-end"
        // width:'80%'
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
    
  const classes = useStyles();
    let temp= null;
    let currency=null;
    const base={Rwanda:"RWF",Uganda:"UGX",USA:"USD",Europe:"EUR",Canada:"CND",Kenya:"KSH",Burundi:"BIF",Tanzania:"TSH"}
    const [direction, setDirection] = useState('back');
    const [value,setValue]=useState(base[props.accommodation.country]);
    const from=base[props.accommodation.country]
   
    if(props.temp){
        temp=<Typography gutterBottom variant="h6" color="textSecondary" className={classes.titleText} >
                <CloudIcon color="primary"/> {Math.round(props.temp-273.15)}                             
            </Typography>
    }
    const hanldeSelectOnchange=(e)=>{
        setValue(e.target.value)
        currency=e.target.value
        console.log(currency)
        props.convertorAction(props.accommodation.price,from,e.target.value)
     
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
                 <Typography variant="subtitle1" color="textSecondary" component="p" noWrap >
                    {property}
                </Typography>
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
                        direction === 'back' ? props.prevStep() : props.nextStep();
                        }}
                    >
                        <Form>
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
                                    // onClick={handleViewMore}
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
                                        <Grid container spacing={1}  direction='row' >
                                            <Grid container item xs={3} spacing={3} >
                                                    
                                                <Grid container item xs={12} sm={12} direction='column'>
                                                    <Grid item>
                                                    <Typography gutterBottom variant="h5" component="h2" className={classes.titleText} color="primary">
                                                    Location
                                                    </Typography>
                                                        <Typography gutterBottom variant="body" component="p" className={classes.titleText} color="textSecondary">
                                                        {props.accommodation.country}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography gutterBottom variant="subtitle1" component="p" className={classes.titleText} color="textSecondary">
                                                        {props.accommodation.city}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography gutterBottom variant="subtitle1" component="p" className={classes.titleText} color="textSecondary">
                                                        {props.accommodation.state}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography gutterBottom variant="subtitle1" component="p" className={classes.titleText} color="textSecondary">
                                                        {props.accommodation.streetAddress}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid container item xs={3}>
                                                    
                                                <Grid container item xs={12}  direction='column'>
                                                    <Typography gutterBottom variant="h5" component="h2" className={classes.titleText} color="primary">
                                                    Capacity
                                                    </Typography>
                                                    <Grid item>
                                                        <Typography variant="subtitle1" className={classes.titleText} color="textSecondary">
                                                        {props.accommodation.propertyType}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography gutterBottom variant="subtitle1" component="p" color="textSecondary" className={classes.titleText}>
                                                        {props.accommodation.numberOfRooms!=null?(`${props.accommodation.numberOfRooms} bedrooms`):(null)} 
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="subtitle1" component="p" className={classes.titleText} color="textSecondary">
                                                        {props.accommodation.typeOfBed?(`Type of: ${props.accommodation.typeOfBed} bedrooms`):(null)}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid container item xs={3}>
                                                    <Typography gutterBottom variant="h5" component="h2" className={classes.titleText} color="primary">
                                                Amenities
                                                <Grid container item xs={12} spacing={0} direction='column'>
                                                    {populateChecbox()}
                                                </Grid>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3} direction='column'>
                                                <Grid item xs={12} >
                                                    <Typography gutterBottom variant="h5"  className={classes.titleText} color="primary">
                                                        Cost/night
                                                    </Typography>
                                                    <Grid container item spacing={3} xs={12}>
                                                        <Grid item>
                                                            <Typography variant="body">{props.money?(props.money[Object.keys(props.money)[0]]):(props.accommodation.price)}</Typography>
                                                        </Grid>
                                                        <Grid item >  
                                                            <Select 
                                                                labelId='select-roles'
                                                                id='roles'
                                                                value={value}
                                                                onChange={hanldeSelectOnchange}
                                                                style={{"padding-right": '9px'}}
                                                                >
                                                                <MenuItem  key="USD" name="USD" value="USD">USD</MenuItem>
                                                                <MenuItem  key="RWF" name="RWF" value="RWF">RWF</MenuItem>
                                                                <MenuItem  key="EUR" name="EUR" value="EUR">EUR</MenuItem>
                                                                <MenuItem  key="CND" name="CND" value="CND">CND</MenuItem>
                                                                <MenuItem  key="KSH" name="KSH" value="KSH">KSH</MenuItem>
                                                                <MenuItem  key="UGX" name="UGX" value="UGX">UGX</MenuItem>
                                                                <MenuItem  key="BIF" name="BIF" value="BIF">BIF</MenuItem>
                                                                <MenuItem  key="TSH" name="TSH" value="TSH">TSH</MenuItem>    
                                                            </Select>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12} spacing={4} >
                                                    <Typography gutterBottom variant="h5"  className={classes.titleText} color="primary">
                                                        Weather
                                                    </Typography>
                                                     
                                                    {temp}
                                                        
                                                   
                                                </Grid> 
                                            </Grid>
                                        </Grid>
                                    </div>
                                    </CardContent>
                                </>
                                )}
                                </Card>
                            </div>
                            <div className={classes.divider}>
                            <div className={classes.btncontainer}>
                                <div className={classes.textCenter}>
                                    <Button
                                        type='submit'
                                        
                                        variant='contained'
                                        color='primary'
                                        className={classes.button}
                                        onClick={() => {
                                        setDirection('back'); 
                                        }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            <div >
                                <Button
                                    type='submit'
                                    id='backBtn'
                                    variant='contained'
                                    color='primary'
                                    className={classes.button}
                                    onClick={() => setDirection('forward')}
                                >
                                    Next
                                </Button>
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
    money:state.convertMoney.money,
    count:state.fetchAccommodations.count,
    status:state.fetchAccommodations.pending,
    amenities:state.fetchAccommodations.amenities,
    temp:state.fetchAccommodations.temp
})
export default connect(mapStateToProps,{getAccommodationsByLocation,selectAccommodation,getAccommodation,getAccommodations,getAccommodationAminity,getTemperature,convertorAction}) (Home)