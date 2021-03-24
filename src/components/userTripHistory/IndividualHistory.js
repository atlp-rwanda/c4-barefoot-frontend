import { Typography } from '@material-ui/core'
import React from 'react'
import {connect} from 'react-redux'
import {getAccommodation} from '../../redux/actions/userTravelHistoryAction'

function IndividualHistory(props) {
    React.useEffect(()=>{
        props.getAccommodation()
    },[])
    const acc = props.acc
    console.log(acc)
    return (
 
        <div>
        
            {acc && 
                <div>
                    <Typography variant="h4">Accomodation used</Typography>
                    <hr></hr>
                    <img src={acc.photos} style={{width: 150}}></img>
                    <Typography>Country: {acc.country}</Typography>
                    <Typography>Street: {acc.streetAddress}</Typography>
                    <Typography>Type: {acc.title}</Typography>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    acc: state.tripHistory.acc
})

export default connect(mapStateToProps, {getAccommodation}) (IndividualHistory)
