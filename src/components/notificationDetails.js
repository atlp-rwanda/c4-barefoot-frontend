import React from 'react';
import { useParams} from "react-router-dom";
import {connect} from "react-redux";
import {readTravelRequestInfo} from "../redux/actions/notificationAction";


const NotificationDetails=(props)=>{
    React.useEffect(()=>{
        props.readTravelRequestInfo()
    })
    const request=props.request
    console.log(request)
    return(
        <div>
           {
               request&&
               <div>
                   <Typography>{request.userId}</Typography>
               </div>
           }
        </div>
    )
}
const mapStateToProps=(state)=>({
   request:state.notifications.travelRequest
})
export default connect(mapStateToProps,{readTravelRequestInfo})(NotificationDetails);