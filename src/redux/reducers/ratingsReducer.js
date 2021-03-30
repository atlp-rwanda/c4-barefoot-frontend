import {GET_RATINGS_FAILED,GET_RATINGS_PENDING,GET_RATINGS_SUCCESS,ADD_RATINGS_FAILED,
ADD_RATINGS_SUCCESS,ADD_RATINGS_PENDING,CLOSE_SNACKBAR} from '../actions/ratingsAction'

const initState = {
    loading:false,
    reviewAndRates:[],
    count:null,
    error:''
}
const initialState = {
    pending: false,
    success: false,
    error: '',
    snackbarOpen: false
}

export const addRatesAndReview = (state= initialState, action) => {
    switch (action.type) {
        case ADD_RATINGS_PENDING:
            return {
                ...state,
                pending:true
            }
        case ADD_RATINGS_FAILED:
            return {
                ...state,
                pending:false,
                error: "Not allowed to review this Accommodation",
                snackbarOpen: true,
                
            }
        case ADD_RATINGS_SUCCESS:
            return {
                ...state,
                pending:false,
                success:true
            }
            case CLOSE_SNACKBAR:
                return {
                    ...state,
                    snackbarOpen: false,
                }
        default:
            return {state};
     }
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
            count:action.payload.reviews.count,
            reviewAndRates: action.payload.reviews.rows
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