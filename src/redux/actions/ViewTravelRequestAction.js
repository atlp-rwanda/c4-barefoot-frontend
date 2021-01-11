export const FETCH_TRAVEL_REQUEST_LOADING = 'FETCH_TRAVEL_REQUEST_LOADIN';
export const FETCH_TRAVEL_REQUEST_SUCCESS = 'FETCH_TRAVEL_REQUEST_SUCCESS';
export const FETCH_TRAVEL_REQUEST_FAIL = 'FETCH_TRAVEL_REQUEST_FAIL';

import axios from 'axios';

export const GetTravelRequestsAction = (userToken) =>  async (dispatch) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
    dispatch({
        type: FETCH_TRAVEL_REQUEST_LOADING
    });
    
    try{
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/requests`);
        console.log('requests', res.data);
        return dispatch({
            type: FETCH_TRAVEL_REQUEST_SUCCESS,
            payload: res.data
        });
    }
    catch(error){
        console.log('errors', error);
        return dispatch({
            type: FETCH_TRAVEL_REQUEST_FAIL,
            payload: 'the errors'
        })
    }

}
