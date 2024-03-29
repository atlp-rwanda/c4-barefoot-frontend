import axios from "axios";

export const CREATE_ACC_PENDING= 'CREATE_ACC_PENDING'
export const CREATE_ACC_SUCCESS= 'CREATE_ACC_SUCCESS'
export const CREATE_ACC_ERROR= 'CREATE_ACC_ERROR'
export const createAccomodation = (body, amenities)=> dispatch =>{
    const token= localStorage.getItem('barefootUserToken');

    dispatch({
        type: CREATE_ACC_PENDING
    });
    
    return axios.post(`${process.env.REACT_APP_BACKEND_LINK}/accommodations`, body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then( res=>{
        const accomodation= res.data.accommodation;
        return axios.patch(`${process.env.REACT_APP_BACKEND_LINK}/amenities/${accomodation.id}`, amenities, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then( res =>{
            console.log('amenities response', res);
            dispatch({
                type: CREATE_ACC_SUCCESS,
                payload: accomodation
            });
        })
        .catch( err =>{
            if( err.response ){
                console.log('error:',err.response.data);
                dispatch({
                    type: CREATE_ACC_ERROR,
                    error: err.response.data
                })
            }
          
            else if( err.message ){
                console.log('error:',err.message);
    
                dispatch({
                    type: CREATE_ACC_ERROR,
                    error: err.message
                })
            }
            else if( err.request ){
                console.log('error:',err.request);
                dispatch({
                    type: CREATE_ACC_ERROR,
                    error: err.request
                })
            }
            else{
                console.log('error:',err);
    
                dispatch({
                    type: CREATE_ACC_ERROR,
                    error: err
                })
            }
        })

    })
    .catch( err =>{
        if( err.response ){
            console.log('error:',err.response.data);
            dispatch({
                type: CREATE_ACC_ERROR,
                error: err.response.data
            })
        }
      
        else if( err.message ){
            console.log('error:',err.message);

            dispatch({
                type: CREATE_ACC_ERROR,
                error: err.message
            })
        }
        else if( err.request ){
            console.log('error:',err.request);
            dispatch({
                type: CREATE_ACC_ERROR,
                error: err.request
            })
        }
        else{
            console.log('error:',err);

            dispatch({
                type: CREATE_ACC_ERROR,
                error: err
            })
        }
        
    })

}