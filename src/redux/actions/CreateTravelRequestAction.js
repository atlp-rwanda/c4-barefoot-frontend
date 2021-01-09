export const RETURNING = 'RETURNING';
export const TRAVEL_DATES = 'TRAVEL_DATES';
export const SEARCH_LOCATIONS = 'SEARCH_LOCATIONS';
export const DESTINATION_LOCATION = 'DESTINATION_LOCATION';
export const CURRENT_LOCATION = 'CURRENT_LOCATION';
export const SEARCH_ACCOMMODATIONS = 'SEARCH_ACCOMMODATIONS';
export const SELECT_ACCOMMODATION = 'SELECT_ACCOMMODATION';
export const HANDLE_ERRORS = 'HANDLE_ERRORS';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

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
        console.log(getData);
        return dispatch({
            type: SEARCH_LOCATIONS,
            payload: getData.data.locations.rows
        })
    }catch(error){
        console.log(error);
    }
    
}

export const searchCurrentLocationAction = (data) => dispatch =>{

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
            payload: data.searchKeyword
        });
    }
    if(data.textField === "destinationLocationId" || (selectedOption[0] === "destinationLocationId")){
        if(!data.searchKeyword){
            return dispatch({
                type: DESTINATION_LOCATION,
                payload: ''
            })            
        }
        dispatch({
            type: DESTINATION_LOCATION,
            payload: data.searchKeyword
        });
    }
}

export const searchAccommodationAction = (searchKeyword) => dispatch =>{
    const location = searchKeyword.split(",",2);
    const city = location[0];
    const country = location[1];
    // console.log(city,country);
    dispatch({
        type: SEARCH_LOCATIONS,
        payload: 'locations'
    })
    return dispatch({
        type: SEARCH_ACCOMMODATIONS,
        payload: true
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
            accommodationId: [],
            displaySelection: accommodation.checked,
            displaySelected: !accommodation.checked
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