import axios from "axios";

export const GETNOTIFICATONS_SUCCESS = 'GETNOTIFICATONS_SUCCESS';
export const GETNOTIFICATONS_PENDING = 'GETNOTIFICATONS_PENDING';
export const GETNOTIFICATONS_ERROR = 'GETNOTIFICATONS_ERROR';
export const getNotifications = () => dispatch=>{
    dispatch({
        type: GETNOTIFICATONS_PENDING
    })

    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/notification/notifications`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('barefootUserToken')}`
                    }
               })
                .then(res=>{
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

    return axios.patch(`${process.env.REACT_APP_BACKEND_LINK}/notification/notifications/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('barefootUserToken')}`
                    }
               })
                .then(res=>{
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