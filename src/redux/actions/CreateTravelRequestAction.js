export const RETURNING = 'RETURNING';
export const TRAVEL_DATES = 'TRAVEL_DATES';
export const SEARCH_LOCATIONS = 'SEARCH_LOCATIONS';
export const SEARCH_LOCATIONS_LOADING = 'SEARCH_LOCATIONS_LOADING';
export const DESTINATION_LOCATION = 'DESTINATION_LOCATION';
export const CURRENT_LOCATION = 'CURRENT_LOCATION';
export const SEARCH_ACCOMMODATIONS = 'SEARCH_ACCOMMODATIONS';
export const SEARCH_ACCOMMODATIONS_LOADING = 'SEARCH_ACCOMMODATIONS_LOADING';
export const SELECT_ACCOMMODATION = 'SELECT_ACCOMMODATION';
export const DESELECT_ACCOMMODATION = 'DESELECT_ACCOMMODATION';
export const HANDLE_ERRORS = 'HANDLE_ERRORS';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const ADD_TRAVEL_REASON = 'ADD_TRAVEL_REASON';
export const SEND_TRAVEL_REQUEST = 'SEND_TRAVEL_REQUEST';
export const SEND_TRAVEL_REQUEST_LOADING = 'SEND_TRAVEL_REQUEST_LOADING';
export const ADD_MULTI_CITY_TRAVEL_REQUEST = 'ADD_MULTI_CITY_TRAVEL_REQUEST';
export const REMOVE_MULTI_CITY_TRAVEL_REQUEST = 'REMOVE_MULTI_CITY_TRAVEL_REQUEST';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CANCEL_TRAVEL_REQUEST = 'CANCEL_TRAVEL_REQUEST';


import axios from 'axios';
import qs from 'qs';

const lang = localStorage.getItem('lang')

export const CheckReturningAction = (data) => dispatch =>{
    return dispatch({
        type: RETURNING,
        payload: data.isReturning
    })
}

export const checkTravelDatesAction = (data) => dispatch => {
    return dispatch({
        type: TRAVEL_DATES,
        payload: data
    })
}

export const getLocationsAction = () => async (dispatch) => {
    try {
        dispatch({
            type: SEARCH_LOCATIONS_LOADING
        })
        const token = localStorage.getItem('barefootUserToken');
        const getData = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/locations?lang=${lang}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return dispatch({
            type: SEARCH_LOCATIONS,
            payload: getData.data.locations.rows
        })
    } catch (error) {
    }

}

export const searchCurrentLocationAction = (data) => async (dispatch) => {
    const inputTextID = data.textField.split('-', 1)[0];
    data.textField = inputTextID;
    // Checking if the textField is for current location
    if (data.textField === "currentLocationId") {
        //Checking if there is a selected location
        if (!data.selectedLocation) {
            return dispatch({
                type: CURRENT_LOCATION,
                payload: ''
            })
        }
        // Set the CurrentLocation state to selected location
        dispatch({
            type: CURRENT_LOCATION,
            payload: data.selectedLocation
        });
    }
    // Checking if the textField is for destination location
    if (data.textField === "destinationLocationId") {
        //Checking if there is a selected location
        if (!data.selectedLocation) {
            return dispatch({
                type: DESTINATION_LOCATION,
                payload: ''
            })
        }
        // Set the destinationLocation state to selected location
        dispatch({
            type: DESTINATION_LOCATION,
            payload: data.selectedLocation
        });
        dispatch({
            type: SEARCH_ACCOMMODATIONS_LOADING
        })

        try {
            const locationId = data.selectedLocation.id; // Getting the location ID of destination location
            const token = localStorage.getItem('barefootUserToken');// Getting the token from local storage to be used as authorization header
            // Retrieve accommodation found in selected destination location
            const getAccommodations = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/accommodations/in/${locationId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return dispatch({
                type: SEARCH_ACCOMMODATIONS,
                payload: getAccommodations.data.accommodations
            })
        } catch (error) {
            if (error.response.status === 404) {
                return dispatch({
                    type: SEARCH_ACCOMMODATIONS,
                    payload: []
                })
            }
        }
    }
}


export const selectAccommodationAction = (accommodation) => dispatch => {
    // If checked is true add the selected accommodation to the selectedAccommodations state
    if (accommodation.checked) {
        return dispatch({
            type: SELECT_ACCOMMODATION,
            payload: {
                accommodation: accommodation.selected,
                displaySelection: accommodation.checked,
                displaySelected: !accommodation.checked
            }
        })
    } else { // Else remove the accommodation from the selectedAccommodations state
        return dispatch({
            type: DESELECT_ACCOMMODATION,
        })
    }
}

export const handleErrorsAction = (errorMessage) => dispatch => {
    return dispatch({
        type: HANDLE_ERRORS,
        payload: errorMessage
    })
}

export const closeSnackbar = () => dispatch => {
    dispatch({
        type: CLOSE_SNACKBAR
    });
}

export const addTravelReasonAction = (data) => dispatch => {
    return dispatch({
        type: ADD_TRAVEL_REASON,
        payload: data
    })
}

export const sendTravelRequestAction = (data) => async (dispatch) => {
    try {
        const token = localStorage.getItem('barefootUserToken');// Getting the token from local storage to be used as authorization header
        await axios.post(`${process.env.REACT_APP_BACKEND_LINK}/requests/request?lang=${lang}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch({
            type: SEND_TRAVEL_REQUEST_LOADING,
        })
        return dispatch({
            type: SEND_TRAVEL_REQUEST,
            payload: true
        })
    }
    catch (error) {
        console.log(error)
        return dispatch({
            type: HANDLE_ERRORS,
            payload: error.message
        })
    }
}

export const addMultiCityAction = (data) => dispatch => {

    dispatch({
        type: ADD_MULTI_CITY_TRAVEL_REQUEST,
        payload: data
    })
}
export const removeMultiCityAction = (data) => dispatch => {
    dispatch({
        type: REMOVE_MULTI_CITY_TRAVEL_REQUEST,
        payload: data
    })

}

export const openModalAction = (data) => dispatch => {
    return dispatch({
        type: OPEN_MODAL,
        payload: data
    });
}
export const cancelTravelRequestAction = () => dispatch => {
    return dispatch({
        type: CANCEL_TRAVEL_REQUEST
    })
}