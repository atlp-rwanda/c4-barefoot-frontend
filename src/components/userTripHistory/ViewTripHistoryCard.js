import React,{useEffect} from 'react'
import {Button, Grid, makeStyles,Paper, Typography} from '@material-ui/core'
import {getTripHistory} from '../../redux/actions/userTravelHistoryAction';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';
import {getAccommodation} from '../../redux/actions/userTravelHistoryAction'


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
    
    // const dispatch =useDispatch()
    // const trips = useSelector(state=>state.tripHistory)
    
   useEffect(()=>{
       props.getTripHistory() 
    },[])

    const trips =props.trips
    console.log('trips',trips);
    const classes = useStyle()
    React.useEffect(()=>{
        props.getAccommodation()
    },[])
    const acc = props.acc
    console.log(acc)

    
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
            <Button color= 'primary' variant='contained' onClick={()=> {
                localStorage.setItem('accId', trip.accommodationId);
                localStorage.setItem('destination', trip.destination);
                localStorage.setItem('origin', trip.originCity);
                localStorage.setItem('reason', trip.reason)
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