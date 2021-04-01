import {API} from './AxiosAPI';

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_ERROR = 'FETCH_AMENITIES_ERROR'

export const getTemperature = (city) => dispatch => {
  return API.get(`/weather/weather?city=${city}`)
    .then(res => {
      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: res.data.info.main.temp
      })
    }
    )
    .catch(err => {
      dispatch({
        type: FETCH_WEATHER_ERROR,
        error: err
      })
    })
}