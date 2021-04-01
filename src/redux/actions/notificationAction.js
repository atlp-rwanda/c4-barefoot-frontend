import axios from "axios";

export const GETNOTIFICATONS_SUCCESS = 'GETNOTIFICATONS_SUCCESS';
export const LOADING = 'LOADING';
export const GETNOTIFICATONS_ERROR = 'GETNOTIFICATONS_ERROR';
export const READNOTIFICATION = 'READNOTIFICATION';
export const READ_TRAVELREQUEST_INFO = "READ_TRAVELREQUEST_INFO";
export const getNotifications = () => dispatch=>{
    dispatch({
        type: LOADING
    })

    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/notification/unread`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('barefootUserToken')}`
                    }
               })
                .then(res=>{
                    console.log(res.data.notifications)
                    dispatch({
                        type: GETNOTIFICATONS_SUCCESS,
                        payload: res.data.notifications
                    })
                })
                .catch(e=>{
                    dispatch({
                        type: GETNOTIFICATONS_ERROR,
                        payload: 'network error'
                    })
                })
}

export const readTravelRequestInfo =(id)=> dispatch=>{

    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/directReports/${id}`,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('barefootUserToken')}`
      }
  })
  .then(res=>{
    
      dispatch({
        type: READ_TRAVELREQUEST_INFO,
        payload: res.data[0]
      })
      fetch(`${process.env.REACT_APP_BACKEND_LINK}/notification/${localStorage.getItem('notificationId')}`,{
        method: 'PUT',
        headers:{
            Authorization: `Bearer ${localStorage.getItem('barefootUserToken')}`
          }
      })
      
  })
  .catch(err=>{
      console.log(err.message)
  })
}

