import axios from "axios";

export const GETNOTIFICATONS_SUCCESS = 'GETNOTIFICATONS_SUCCESS';
export const GETNOTIFICATONS_PENDING = 'GETNOTIFICATONS_PENDING';
export const GETNOTIFICATONS_ERROR = 'GETNOTIFICATONS_ERROR';
export const READNOTIFICATION = 'READNOTIFICATION';
export const getNotifications = () => dispatch=>{
    dispatch({
        type: GETNOTIFICATONS_PENDING
    })

    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/notification/unread`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('barefootUserToken')}`
                    }
               })
                .then(res=>{
                    console.log(res.data)
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
export const readNotification = (id) => dispatch=>{
    dispatch({
        type: GETNOTIFICATONS_PENDING
    })

    return fetch(`${process.env.REACT_APP_BACKEND_LINK}/notification/${id}`, {
                    method: 'put',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('barefootUserToken')}`
                    }
               })
                .then(res=> res.json())
                .then(data=>{
                    console.log(data.notification)
                    dispatch({
                        type: READNOTIFICATION,
                        payload: data.notification
                    })
                })
                .catch(e=>{
                    console.log(e)
                    dispatch({
                        type: GETNOTIFICATONS_ERROR,
                        payload: 'network error'
                    })
                })
}