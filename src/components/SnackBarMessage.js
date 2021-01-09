import React from 'react';

import {Snackbar, Slide} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const SnackBarMessage = (props) => {
    const transitionSnackbar = (props)=>{
        return <Slide {...props} direction ="right"/>;
    }
    return ( 
        <div>
            <Snackbar
            open={props.snackbar.open}
            onClose={props.snackbar.closeTimer}
            autoHideDuration={5000}
            TransitionComponent={transitionSnackbar}
            >
                <MuiAlert 
                severity={props.snackbar.severity} 
                variant="filled"
                elevation={6}
                >{props.snackbar.error}</MuiAlert>
            </Snackbar>
        </div>
     );
}
 
export default SnackBarMessage;