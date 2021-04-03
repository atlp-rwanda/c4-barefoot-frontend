import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import React,{ useEffect } from "react";


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const ErrorSnackBar = (props) => {
    const { error,handleClose,open,setOpen }= props;
    useEffect( ()=>{
        if(error){
            setOpen(true);
        }
    },[]);
    return ( 
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {
                    'Status : '+ (error.status ? error.status :'400')
                     +  '   ' +
                     'Error : '+ (error.error ? error.error :( typeof error ==='string'? error : 'Unable to create accomodation') ) 
                }
            </Alert>
        </Snackbar>
     );
}
 
export default ErrorSnackBar;