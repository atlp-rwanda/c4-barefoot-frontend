import { CREATE_LOC_PENDING, CREATE_LOC_SUCCESS, CREATE_LOC_ERROR} from '../actions/createLocAction'
const initialState= {
    pending: false,
    location: null,
    error: null,
}

const createAccReducer = (state=initialState, action)=>{
    switch(action.type){
        case CREATE_LOC_PENDING:
            return {
                ...state,
                pending: true,
                error: null,
                location: null,
            }

        case CREATE_LOC_SUCCESS:
            return {
                ...state,
                location: action.payload,
                pending: false,
            } 
            
        case CREATE_LOC_ERROR:
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