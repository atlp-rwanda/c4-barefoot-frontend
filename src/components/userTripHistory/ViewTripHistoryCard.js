import React from 'react'
import {Grid} from '@material-ui/core'
import {connect} from 'react-redux'
import {getTripHistory} from '../../redux/actions/userTravelHistoryAction'
import reactDom from 'react-dom'

function ViewTripHistoryCard(props) {
    React.useEffect(()=>{
        props.getTripHistory()
    },[])
    const trips =props.trips
    console.log(trips)
    return (
        <div>
        <Grid container >
    

        </Grid>

            
        </div>
    )
}
const mapStateToProps=(state)=>({
trips : state.tripHistory.trips

})

export default connect (mapStateToProps,{getTripHistory})(ViewTripHistoryCard)
