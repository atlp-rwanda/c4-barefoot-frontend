import React from 'react'
import {Button, Grid, makeStyles,Paper, Typography} from '@material-ui/core'
import {connect} from 'react-redux'
import {getTripHistory} from '../../redux/actions/userTravelHistoryAction'
import reactDom from 'react-dom'

const useStyle = makeStyles(()=>({
    paper:{
        padding:20,
        textAlign: 'center'
    }
}))

function ViewTripHistoryCard(props) {
    React.useEffect(()=>{
        props.getTripHistory()
    },[])
    const trips =props.trips
    console.log(trips)
    const classes = useStyle()
    return (
        <div>
        <Grid container >
    {trips.map(trip=>(
    <Grid item key={trip.tripId} md ={4} sm={6} xs={12}>
        <Paper className={classes.paper}>
            <Typography>Destination: {trip.destination}</Typography>
            <Typography>Origin City: {trip.originCity}</Typography>
            <Typography>Reason: {trip.reason}</Typography>
            <Button color= 'primary' variant='contained'>Details</Button>
        </Paper>

     </Grid>
    ))}

        </Grid>

            
        </div>
    )
}
const mapStateToProps=(state)=>({
trips : state.tripHistory.trips

})

export default connect (mapStateToProps,{getTripHistory})(ViewTripHistoryCard)
