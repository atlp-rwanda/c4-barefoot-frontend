import React from 'react';
import {Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { useStyles } from '../styles';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';

const AccAmenities = (props) => {
    const classes= useStyles();
    const { handleToggle, toggles }= props;
    const handleCollapse= (section)=>{
        handleToggle(section)
    }


    return ( 
        <Box className={classes.formSection}>
            <Box 
                className={classes.sectionHeader}
                onClick= { (e)=> handleCollapse('amenities')}
            >
                <Box className={ classes.sectionHeaderTitle}>
                    <LiveTvOutlinedIcon className={ classes.headerIcon } />
                    <Typography variant='subtitle2' component='h6' >Select amenities</Typography>
                </Box>
                <Box >
                {toggles.amenities.open? '-': '+'}
                </Box>
            </Box>
            <Box 
                className={classes.controlsSection}
                style={{display: toggles.amenities.open? 'flex': 'none'}}

            >
                <Typography 
                    variant='subtitle1' 
                    component='h6'
                    className={classes.groupTitle}

                > 
                    What amenities are available?
                </Typography>

                <Grid container className={ classes.controlGroupAmenities}>
                        <Grid item xs={10} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                            <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={true}
                                        name="essentials"
                                        color="primary"
                                    />
                                    }
                                    label="Essentials"
                            />
                            </FormControl>
                        </Grid>
                        
                </Grid>

                <Grid container className={ classes.controlGroupAmenities} spacing={1}>
                        <Grid item xs={10} sm={5} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={true}
                                        name="wifi"
                                        color="primary"
                                    />
                                    }
                                    label="Wi-fi"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={10} sm={5} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={true}
                                            name="tv"
                                            color="primary"
                                        />
                                        }
                                        label="TV"
                                />
                            </FormControl>
                        </Grid>
                </Grid>

                <Grid container className={ classes.controlGroupAmenities} spacing={1}>
                        <Grid item xs={10} sm={5} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={true}
                                        name="airConditioning"
                                        color="primary"
                                    />
                                    }
                                    label="Air-conditioning"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={10} sm={5} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={true}
                                            name="heat"
                                            color="primary"
                                        />
                                        }
                                        label="heat"
                                />
                            </FormControl>
                        </Grid>
                </Grid>

                <Grid container className={ classes.controlGroupAmenities} spacing={1}>
                        <Grid item xs={10} sm={5} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={true}
                                        name="shampoo"
                                        color="primary"
                                    />
                                    }
                                    label="Shampoo"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={10} sm={5} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={true}
                                            name="hairDryer"
                                            color="primary"
                                        />
                                        }
                                        label="Hair-Dryer"
                                />
                            </FormControl>
                        </Grid>
                </Grid>

                <Typography 
                    variant='subtitle1' 
                    component='h6'
                    className={classes.groupTitle}
                > 
                    Safety amenities
                </Typography>
                
                
                <Grid container className={ classes.controlGroupAmenities}>
                        <Grid item xs={10} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                            <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={true}
                                        name="smokeDetector"
                                        color="primary"
                                    />
                                    }
                                    label="Smoke-detector"
                            />
                            </FormControl>
                        </Grid>
                        
                </Grid>

                <Grid container className={ classes.controlGroupAmenities}>
                        <Grid item xs={10} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                            <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={true}
                                        name="fireExtinguisher"
                                        color="primary"
                                    />
                                    }
                                    label="Fire-extinguisher"
                            />
                            </FormControl>
                        </Grid>
                        
                </Grid>


                <Grid container className={ classes.controlGroupAmenities}>
                        <Grid item xs={10} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                            <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={true}
                                        name="bedroomLock"
                                        color="primary"
                                    />
                                    }
                                    label="Lock on bedroom door"
                            />
                            </FormControl>
                        </Grid>
                        
                </Grid>

            </Box>
        </Box>

     );
}
 
export default AccAmenities;