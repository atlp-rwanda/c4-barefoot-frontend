import {FETCH_ACCOMMODATIONS_SUCCESS, FETCH_ACCOMMODATIONS_ERROR,FETCH_ACCOMMODATION_SUCCESS,FETCH_AMENITIES_SUCCESS} from '../actions/fetchAccommodations'
import {FETCH_WEATHER_SUCCESS,FETCH_WEATHER_ERROR} from '../actions/getWeather'
import {FETCH_ACCOMMODATIONS_BY_LOCATION, FETCH_ACCOMMODATIONS_BY_LOCATION_ERROR,SELECT_ACCOMMODATION} from '../actions/fetchAccommodationByLocation'
const initialState = {
  pending: true,
  accommodations: [],
  accommodation: {},
  amenities:{},
  accommodationsByLocation:[],
  selectedAccommodation:null,
  count:null,
  error: null,
  temp:null,
  accId:null,
  temp:null,
  accId:null
}

export function fetchAccommodationsReducer(state = initialState, action){
  switch(action.type){
    case FETCH_ACCOMMODATIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        accommodations: action.payload
      }
      case FETCH_SINGLE_ACCOMMODATION_SUCCESS:
        return {
          ...state,
          pending: false,
          accommodation: action.payload
        }
    case FETCH_ACCOMMODATION_SUCCESS:
      const accomo =()=>{
          let v=null;
          console.log(state.accommodations
            ) 
          state.accommodations.rows.forEach(acc=>{
            console.log(`${acc.id}  ${action.payload}`) 
          if(acc.id===action.payload){
            v= acc
            console.log(v)
          }
        })
        return v
      }
      console.log(accomo())
      return {
        ...state,
        pending: false,
        accommodation: accomo()
      }
    case FETCH_AMENITIES_SUCCESS:
        return {
          ...state,
          pending: false,
          amenities: action.payload.amenities,
          accommodation: action.payload.singleAccommodation
        }
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        pending: false,
        temp: action.payload
      }
    case FETCH_ACCOMMODATIONS_BY_LOCATION:
      return {
        ...state,
        pending: false,
        accommodationsByLocation: action.payload.rows,
        count:action.payload.count,
        accId:action.id,
        count:action.payload.count,
        count:action.payload.count,
        accId:action.id,
      }
    case FETCH_ACCOMMODATIONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case FETCH_ACCOMMODATIONS_BY_LOCATION_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case SELECT_ACCOMMODATION:
      return {
        ...state,
        selectedAccommodation: action.payload
      }
    default:
      return state
  } 
 

}