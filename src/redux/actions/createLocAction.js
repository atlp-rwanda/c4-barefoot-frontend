import axios from "axios";

export const CREATE_LOC_PENDING= 'CREATE_LOC_PENDING'
export const CREATE_LOC_SUCCESS= 'CREATE_LOC_SUCCESS'
export const CREATE_LOC_ERROR= 'CREATE_LOC_ERROR'
export const createLocation= (body)=> dispatch =>{
    const token= localStorage.getItem('barefootUserToken');

    dispatch({
        type: CREATE_LOC_PENDING
    });
    
    return axios.post(`${process.env.REACT_APP_BACKEND_LINK}/locations`, body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then( res=>{

        const location= res.data.location;  
        dispatch({
            type: CREATE_LOC_SUCCESS,
            payload: location
        })    
    })
    .catch( err =>{
        if( err.response ){
            console.log('error:',err.response.data);
            dispatch({
                type: CREATE_LOC_ERROR,
                error: err.response.data
            })
        }
      
        else if( err.message ){
            console.log('error:',err.message);

            dispatch({
                type: CREATE_LOC_ERROR,
                error: err.message
            })
        }
        else if( err.request ){
            console.log('error:',err.request);
            dispatch({
                type: CREATE_LOC_ERROR,
                error: err.request
            })
        }
        else{
            console.log('error:',err);

            dispatch({
                type: CREATE_LOC_ERROR,
                error: err
            })
        }
        
    })

}