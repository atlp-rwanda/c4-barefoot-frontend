import axios from "axios";

export const FETCH_TRIP_HISTORY_PENDING = "FETCH_TRIP_HISTORY_PENDING";
export const FETCH_TRIP_HISTORY_SUCCESS = "FETCH_TRIP_HISTORY_SUCCESS";
export const FETCH_TRIP_HISTORY_ERROR = "FETCH_TRIP_HISTORY_ERROR";
export const GET_LOCATIONS_TRAVELLED = "GET_LOCATIONS_TRAVELLED";
export const GET_SINGLE_ACC = "GET_SINGLE_ACC";

const token = window.localStorage.getItem("barefootUserToken");

export const getTripHistory = () => async (dispatch) => {
  
    dispatch({ type: FETCH_TRIP_HISTORY_PENDING });
    return axios.get(
      `${process.env.REACT_APP_BACKEND_LINK}/requests`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ).then(res=>{
      
      dispatch({
        type: FETCH_TRIP_HISTORY_SUCCESS,
        payload: res.data,
      });
    }).catch(err=>{
      console.log(err.message)
      dispatch({
        type: FETCH_TRIP_HISTORY_ERROR,
        payload: err,
      });
    })
    
  
};

export const getAccommodation = () => async (dispatch) => {
  dispatch({ type: FETCH_TRIP_HISTORY_PENDING });
  const id = localStorage.getItem("accId");
  const res = await axios.get(
    `${process.env.REACT_APP_BACKEND_LINK}/accommodations/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return dispatch({
    type: GET_SINGLE_ACC,
    payload: res.data.singleAccommodation,
  });
};

// export const getTripLocations = () => dispatch => {
//   return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/trips`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//   .then(res => {
//     console.log('bcbcbcbbcbbbbcbbcbbc', res.data)
//     dispatch({
//       type: GET_LOCATIONS_TRAVELLED,
//       payload: res.data
//   })
//   })
//   .catch(err => console.log(err.message))
// }
export const getTripLocations = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_TRIP_HISTORY_PENDING });
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_LINK}/trips`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return dispatch({
      type: GET_LOCATIONS_TRAVELLED,
      payload: res.data.countedTrips,
    });
  } catch (err) {
    console.log(err.message);
  }
};
