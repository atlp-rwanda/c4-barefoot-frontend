import React, { useEffect } from 'react';
import colors from '../colors';
import { Button, fade, FormControlLabel, Grid, makeStyles, Typography, Checkbox, TextField, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main:{
        backgroundColor: colors.neutralWhite,
        width:'90%',
        margin:'auto',
        justifyContent: 'space-evenly',
        padding: theme.spacing(3),
        flexDirection:'column'
    },
    travelData:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-start',
    },
    data:{
        flexDirection:'column',
    },
    titleButtons:{
        justifyContent: 'flex-end',
        flexDirection:'row'
    },
    headers:{
        fontSize:'18px',
    },
    requestGrid:{
        background: colors.grey6,
        margin: theme.spacing(0,0,3,0),
        border:'2px solid #257AAA',
        padding:theme.spacing(2),
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
            <Grid container item className={classes.requestGrid}>          
                <Typography>
                    Status: Pending...
                </Typography>
                <Grid container item className={classes.travelData}>
                    <Grid container item  xs={10} sm={4} md={3} className={classes.data}>
                        <Typography variant="h6" component="h6" className={classes.headers}>Location - Destination</Typography>
                        <Typography variant="subtitle2">Kigali, Rwanda to Nairobi, Kenya</Typography>
                    </Grid>
                    <Grid container item  xs={10} sm={4} md={3} className={classes.data}>
                        <Typography variant="h6">Date of Travel</Typography>
                        <Typography variant="subtitle2"> 2021-05-03</Typography>
                    </Grid>
                    <Grid container item  xs={10} sm={4} md={3} className={classes.data}>
                        <Typography variant="h6">Returning</Typography>
                        <Typography variant="subtitle2"> True </Typography>
                    </Grid>
                    <Grid container item  xs={10} sm={4} md={3} className={classes.data}>
                        <Typography variant="h6">Date of Travel</Typography>
                        <Typography variant="subtitle2"> 2021-05-03</Typography>
                    </Grid>
                </Grid>
                <Grid container item className={classes.titleButtons} >
                    <Button variant="contained">Edit</Button>
                    <Button variant="contained" color="secondary">Cancel Travel request</Button>
                </Grid>
            </Grid>
            <Grid container item className={classes.requestGrid}>          
                <Typography>
                    Status: Pending...
                </Typography>
                <Grid container item className={classes.travelData}>
                    <Grid container item  xs={10} sm={4} md={3} className={classes.data}>
                        <Typography variant="h6" component="h6" className={classes.headers}>Location - Destination</Typography>
                        <Typography variant="subtitle2">Kigali, Rwanda to Nairobi, Kenya</Typography>
                        <Typography variant="subtitle2">Kigali, Rwanda to Nairobi, Kenya</Typography>
                        <Typography variant="subtitle2">Kigali, Rwanda to Nairobi, Kenya</Typography>
                        <Typography variant="subtitle2">Kigali, Rwanda to Nairobi, Kenya</Typography>
                    </Grid>
                    <Grid container item  xs={10} sm={4} md={3} className={classes.data}>
                        <Typography variant="h6">Date of Travel</Typography>
                        <Typography variant="subtitle2"> 2021-05-03</Typography>
                    </Grid>
                    <Grid container item  xs={10} sm={4} md={3} className={classes.data}>
                        <Typography variant="h6">Returning</Typography>
                        <Typography variant="subtitle2"> True </Typography>
                    </Grid>
                    <Grid container item  xs={10} sm={4} md={3} className={classes.data}>
                        <Typography variant="h6">Date of Travel</Typography>
                        <Typography variant="subtitle2"> 2021-05-03</Typography>
                    </Grid>
                </Grid>
                <Grid container item className={classes.titleButtons} >
                    <Button variant="contained">Edit</Button>
                    <Button variant="contained" color="secondary">Cancel Travel request</Button>
                </Grid>
            </Grid>
            <Grid container item className={classes.requestGrid}>          
                <Typography>
                    Status: Pending...
                </Typography>
                <Grid container item className={classes.travelData}>
                    <Grid container item  xs={10} sm={4} md={3} className={classes.data}>
                        <Typography variant="h6" component="h6" className={classes.headers}>Location - Destination</Typography>
                        <Typography variant="subtitle2">Kigali, Rwanda to Nairobi, Kenya</Typography>
                        <Typography variant="subtitle2">Kigali, Rwanda to Nairobi, Kenya</Typography>
                        <Typography variant="subtitle2">Kigali, Rwanda to Nairobi, Kenya</Typography>
                        <Typography variant="subtitle2">Kigali, Rwanda to Nairobi, Kenya</Typography>
                    </Grid>
                    <Grid container item  xs={10} sm={4} md={3} className={classes.data}>
                        <Typography variant="h6">Date of Travel</Typography>
                        <Typography variant="subtitle2"> 2021-05-03</Typography>
                    </Grid>
                    <Grid container item  xs={10} sm={4} md={3} className={classes.data}>
                        <Typography variant="h6">Returning</Typography>
                        <Typography variant="subtitle2"> True </Typography>
                    </Grid>
                    <Grid container item  xs={10} sm={4} md={3} className={classes.data}>
                        <Typography variant="h6">Date of Travel</Typography>
                        <Typography variant="subtitle2"> 2021-05-03</Typography>
                    </Grid>
                </Grid>
                <Grid container item className={classes.titleButtons} >
                    <Button variant="contained">Edit</Button>
                    <Button variant="contained" color="secondary">Cancel Travel request</Button>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default DisplayTravelRequest;