import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import React,{ useEffect } from "react";


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const SuccessSnackBar = (props) => {
    const { location,handleClose,open,setOpen, reset }= props;
    useEffect( ()=>{
        if(location){
            setOpen(true);
            reset();
        }
    },[]);
    return ( 
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
                Location created successfully
            </Alert>
        </Snackbar>
     );
}
 
export default SuccessSnackBar;