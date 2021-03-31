export const FETCH_TRAVEL_REQUEST_LOADING = 'FETCH_TRAVEL_REQUEST_LOADIN';
export const FETCH_TRAVEL_REQUEST_SUCCESS = 'FETCH_TRAVEL_REQUEST_SUCCESS';
export const FETCH_TRAVEL_REQUEST_FAIL = 'FETCH_TRAVEL_REQUEST_FAIL';

import axios from 'axios';

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