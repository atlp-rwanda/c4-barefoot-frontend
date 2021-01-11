import React, { useEffect } from 'react';
import colors from '../colors';
import { Button, fade, FormControlLabel, Grid, makeStyles, Typography, Checkbox, TextField, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main:{
        backgroundColor: colors.primary200,
        width:'90%',
        margin:'auto',
        color:colors.neutralWhite,
        justifyContent: 'space-evenly',
        padding: theme.spacing(3),
        border: '2px solid magenta',
    }
}))

const DisplayTravelRequest = (props) => {
    const classes = useStyles();
    useEffect(() => {
        // console.log("props here");
        // console.log(props);
        // props.getLocationsAction();
        
    },[])
    const handleAddTravelRequest = () =>{
        // console.log(props);
        
        
        return 0;

    }

    return ( 
        <Grid container  className={classes.main} >
            
            <Typography>
                This the container of the grid 
            </Typography>
        </Grid>
     );
}
 
export default DisplayTravelRequest;