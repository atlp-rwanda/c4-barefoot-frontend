import {GET_RATINGS_FAILED,GET_RATINGS_PENDING,GET_RATINGS_SUCCESS,ADD_RATINGS_FAILED,
ADD_RATINGS_SUCCESS} from '../actions/ratingsAction'

const initState = {
    loading:false,
    reviews:{},
    error:''
}

export const fetchReviewsReducer = (state=initState, action)=>{
switch(action.type){
    case GET_RATINGS_PENDING:
        return{
            ...state,
            loading:true
        }
        case GET_RATINGS_SUCCESS:
        return {
            ...state,
            reviews: action.payload
        }
        case GET_RATINGS_FAILED:
        return{
            ...state,
            error:action.payload
        }
        default:
        return{
            ...state
        }
}
}