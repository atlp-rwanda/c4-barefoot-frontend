import { CREATE_ACC_PENDING, CREATE_ACC_SUCCESS, CREATE_ACC_ERROR} from '../actions/createAccAction'
const initialState= {
    pending: false,
    accomodation: null,
    error: null,
}

const createAccReducer = (state=initialState, action)=>{
    switch(action.type){
        case CREATE_ACC_PENDING:
            return {
                ...state,
                pending: true,
            }

        case CREATE_ACC_SUCCESS:
            return {
                ...state,
                accomodation: action.payload,
                pending: false,
            } 
            
        case CREATE_ACC_ERROR:
            return {
                ...state,
                error: action.error,
                pending: false,
            }            

        default:
            return state
    }
}

export default createAccReducer;