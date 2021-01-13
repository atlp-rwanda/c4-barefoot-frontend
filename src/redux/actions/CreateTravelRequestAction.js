export const RETURNING = 'RETURNING';
export const TRAVEL_DATES = 'TRAVEL_DATES';
export const SEARCH_LOCATIONS = 'SEARCH_LOCATIONS';
export const DESTINATION_LOCATION = 'DESTINATION_LOCATION';
export const CURRENT_LOCATION = 'CURRENT_LOCATION';
export const SEARCH_ACCOMMODATIONS = 'SEARCH_ACCOMMODATIONS';
export const SELECT_ACCOMMODATION = 'SELECT_ACCOMMODATION';
export const HANDLE_ERRORS = 'HANDLE_ERRORS';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const ADD_TRAVEL_REASON = 'ADD_TRAVEL_REASON';
export const SEND_TRAVEL_REQUEST = 'SEND_TRAVEL_REQUEST';
export const SEND_TRAVEL_REQUEST_LOADING = 'SEND_TRAVEL_REQUEST_LOADING';

import axios from 'axios';

export const CheckReturningAction = (data) => dispatch =>{
    return dispatch({
        type: RETURNING,
        payload: data.isReturning
    })
}

export const checkTravelDatesAction = (data) => dispatch =>{
    return dispatch({
        type: TRAVEL_DATES,
        payload: data
    })
}
export const getLocationsAction = () => async (dispatch) =>{
    try{
        const getData = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/search/locations/all`);
        // console.log(getData);
        return dispatch({
            type: SEARCH_LOCATIONS,
            payload: getData.data.locations.rows
        })
    }catch(error){
        console.log(error);
    }
    
}

export const searchCurrentLocationAction = (data) => async (dispatch) =>{
    //get the text field id
    const selectedOption = data.textField.split("-",1)

    if((data.textField === "currentLocationId") || (selectedOption[0] === "currentLocationId")){
        if(!data.searchKeyword){
            return dispatch({
                type: CURRENT_LOCATION,
                payload: ''
            })            
        }
        dispatch({
            type: CURRENT_LOCATION,
            payload: `${data.searchKeyword.LocationName}, ${data.searchKeyword.country}`
        });
    }
    if(data.textField === "destinationLocationId" || (selectedOption[0] === "destinationLocationId")){
        if(!data.searchKeyword){
            return dispatch({
                type: DESTINATION_LOCATION,
                payload: ''
            })            
        }
        const country = data.searchKeyword.country;
        const city = data.searchKeyword.LocationName;
        const getAccommodations = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/search/accommodations?fromLocation=${country}&city=${city}`);
        
        dispatch({
            type: DESTINATION_LOCATION,
            payload: `${city}, ${country}`
        });
        return dispatch({
            type: SEARCH_ACCOMMODATIONS,
            payload: getAccommodations.data.rows
        })
    }
}

export const searchAccommodationAction = (searchKeyword) => async(dispatch) =>{
    const location = searchKeyword.split(", ",2);
    const city = location[0];
    const country = location[1];
    // console.log('the city and country to search');
    // console.log(city,country);
    const getAccommodations = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/search/accommodations?fromLocation=${country}&city=${city}`);
    // console.log('accommodations', getAccommodations.data);
    return dispatch({
        type: SEARCH_ACCOMMODATIONS,
        payload: getAccommodations.data.rows
    })
}

export const selectAccommodationAction = (accommodation) => dispatch => {
    if(accommodation.checked){
        return dispatch({
            type: SELECT_ACCOMMODATION,
            payload: {
                accommodation: accommodation.selected,
                displaySelection: !accommodation.checked,
                displaySelected: accommodation.checked
            }
        })
    }
    return dispatch({
        type: SELECT_ACCOMMODATION,
        payload: {
            accommodation: [],
            displaySelection: !accommodation.checked,
            displaySelected: accommodation.checked
        }
    })
}

export const handleErrorsAction = (errorMessage) => dispatch =>{
    return dispatch({
        type: HANDLE_ERRORS,
        payload: errorMessage
    })
}

export const closeSnackbar = () => dispatch =>{
    dispatch({
        type: CLOSE_SNACKBAR
    });
}

export const addTravelReasonAction = (data) => dispatch =>{
    return dispatch({
        type: ADD_TRAVEL_REASON,
        payload: data
    })
}

export const sendTravelRequestAction = (data) => async (dispatch) =>{
    try{
        dispatch({
            type: SEND_TRAVEL_REQUEST_LOADING,
        })
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.authToken}`;
        // console.log('before sending', data.authToken);
        const sendTrip = await axios.post(`${process.env.REACT_APP_BACKEND_LINK}/requests/request`, data.travelRequest);
        // console.log('the response', sendTrip);
        return dispatch({
            type: SEND_TRAVEL_REQUEST,
            payload: true
        })
        
    }
    catch(error){
        console.log('error from sending travel request', error);
    }
}