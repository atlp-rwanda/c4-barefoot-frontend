export const FETCH_TRAVEL_REQUEST_LOADING = 'FETCH_TRAVEL_REQUEST_LOADIN';
export const FETCH_TRAVEL_REQUEST_SUCCESS = 'FETCH_TRAVEL_REQUEST_SUCCESS';
export const FETCH_TRAVEL_REQUEST_FAIL = 'FETCH_TRAVEL_REQUEST_FAIL';
export const STATUS_FILTERING = 'STATUS_FILTERING';

import axios from 'axios';
const lang = localStorage.getItem('lang')

export const GetTravelRequestsAction = () => async (dispatch) => {
    dispatch({
        type: FETCH_TRAVEL_REQUEST_LOADING
    });
    try {
        const token = localStorage.getItem('barefootUserToken');
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/requests`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return dispatch({
            type: FETCH_TRAVEL_REQUEST_SUCCESS,
            payload: res.data
        });
    }
    catch (error) {
        return dispatch({
            type: FETCH_TRAVEL_REQUEST_FAIL,
            payload: 'something went wrong, try again!'
        })
    }

}

export const changeStatusFilter = (status) => async (dispatch) => {
    dispatch({
        type: STATUS_FILTERING,
        payload: status
    });
}

