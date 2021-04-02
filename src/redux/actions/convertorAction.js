import {API} from './AxiosAPI';

export const CONVERT_MONEY_SUCCESS = 'CONVERT_MONEY_SUCCESS'
export const CONVERT_MONEY_ERROR =  'CONVERT_MONEY_ERROR'

export const convertorAction = (money,from,to) => dispatch => {
<<<<<<< HEAD
//   dispatch({
//     type: CREATE_ROLE_PENDING
//   })
    const come=[from];
    const go=[to]
    console.log(to)
=======
>>>>>>> develop
  return API.get(`/convert/converter/${money}?from=[${from}]&to=[${to}]`)
  .then((res) => {
    dispatch({
      type: CONVERT_MONEY_SUCCESS,
      result:res.data
    })
    console.log(res.data)
  })
  .catch(err => {
      dispatch({
        type: CONVERT_MONEY_ERROR,
        error: err.message
      })
  })
}