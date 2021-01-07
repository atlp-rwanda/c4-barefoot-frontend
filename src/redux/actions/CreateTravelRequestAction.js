export const RETURNING = 'RETURNING';
export const TRAVEL_DATES = 'TRAVEL_DATES';
export const SEARCH_LOCATIONS = 'SEARCH_LOCATIONS';
export const DESTINATION_LOCATION = 'DESTINATION_LOCATION';
export const CURRENT_LOCATION = 'CURRENT_LOCATION';
export const SEARCH_ACCOMMODATIONS = 'SEARCH_ACCOMMODATIONS';

import { locations } from './searchDummyData';
import { accommodationsPayload } from '../../../dummyData';

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
    return dispatch({
        type: SEARCH_LOCATIONS,
        payload: locations
    })
}

export const searchAccommodationAction = (searchKeyword) =>{
    const location = searchKeyword.split(",",2);
    const city = location[0];
    const country = location[1];
    console.log(city,country);
    return dispatch({
        type: SEARCH_ACCOMMODATIONS,
        payload: accommodationsPayload
    })
}