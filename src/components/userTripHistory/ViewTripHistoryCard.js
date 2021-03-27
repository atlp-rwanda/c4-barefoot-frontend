import React,{useEffect} from 'react'
import {Button, Grid, makeStyles,Paper, Typography} from '@material-ui/core'
import {getTripHistory} from '../../redux/actions/userTravelHistoryAction';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';
import {getAccommodation} from '../../redux/actions/userTravelHistoryAction'
import {useParams} from 'react-router-dom';
import moment from 'moment'


const useStyle = makeStyles(()=>({
    paper:{
        padding:5,
        textAlign: 'center'
    },
    container:{
        margin:10
    },media: {
        height: 140,
    },
    root: {
        maxWidth: 345,
    },
    media: {
    height: 140,
    },
}))

function ViewTripHistoryCard(props) {
    const {location} = useParams()
    
   useEffect(()=>{
        props.getTripHistory(location) 
        props.getAccommodation()
    },[])

    const trips =props.trips
    const classes = useStyle()
    const acc = props.acc

    return (
        <div>

        <Grid container  className={classes.container}>
  
    {trips.map(trip=>(
    <Grid item key={trip.tripId} md ={4} sm={6} xs={12}>
        <Paper className={classes.paper}>
        
       {acc && <img src={acc.photos} style={{width: 150}}></img>}
            <Typography>Destination: {trip.destination}</Typography>
            <Typography>Origin City: {trip.originCity}</Typography>
            <Typography>Reason: {trip.reason}</Typography>
            <Typography>From: {moment(trip.tripDate).format('DD/MMM/YYYY')}</Typography> 
            <Typography>To: {moment(trip.returnDate).format('DD/MMM/YYYY')}</Typography>
            <Button color= 'primary' variant='contained' onClick={()=> {
                localStorage.setItem('accId', trip.accommodationId);
                localStorage.setItem('destination', trip.destination);
                localStorage.setItem('origin', trip.originCity);
                localStorage.setItem('reason', trip.reason)
                localStorage.setItem('departure', trip.tripDate)
                localStorage.setItem('returning', trip.returnDate)
            }}><Link to='/individual-history' style={{color: 'white', textDecoration: 'none'}}>Details</Link></Button>
        </Paper>

     </Grid>
    ))}

        </Grid>

            
        </div>
    )
}

const mapStateToProps = state => ({
    trips: state.tripHistory.trips,
    acc: state.tripHistory.acc
})

export default connect(mapStateToProps, {getTripHistory, getAccommodation}) (ViewTripHistoryCard)