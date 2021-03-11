import React from 'react';
import {Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { useStyles } from '../styles';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';

const AccCapacity = (props) => {
    const { handleToggle, toggles }= props;
    const handleCollapse= (section)=>{
        handleToggle(section)
    }

    const classes= useStyles();

    const menuProps= {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        getContentAnchorEl: null
      };

    return ( 
        <Box className={classes.formSection}>
            <Box 
                className={classes.sectionHeader}
                onClick= { (e)=> handleCollapse('capacity')}
            >
                <Box className={ classes.sectionHeaderTitle}>
                    <AccountBalanceIcon className={ classes.headerIcon } />
                    <Typography variant='subtitle2' component='h6' >Accomodation Capacity</Typography>
                </Box>
                <Box >
                {toggles.capacity.open? '-': '+'}
                </Box>
            </Box>
            <Box 
                className={classes.controlsSection}
                style={{display: toggles.capacity.open? 'flex': 'none'}}
            >
                <Typography 
                    variant='subtitle1' 
                    component='h6'
                    className={classes.groupTitle}

                > 
                    What type and capacity of this acccomodation?
                </Typography>

                <Grid container className={ classes.controlGroup}>
                        <Grid item xs={10} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Choose property type</InputLabel>
                                <Select
                                    id="property type"
                                    MenuProps={menuProps}

                                >
                                    <MenuItem value={'Hotel'}>Hotel</MenuItem>
                                    <MenuItem value={'Motel'}>Motel</MenuItem>
                                    <MenuItem value={'Hostel'}>Hostel</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        
                </Grid>

            
                <Grid container className={ classes.controlGroup}>
                        <Grid item xs={10} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <TextField  label="Number of bedrooms" />
                            </FormControl>
                        </Grid>
                        
                </Grid>

                <Grid container className={ classes.controlGroup}>
                        <Grid item xs={10} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Type of bed</InputLabel>
                                <Select
                                    id="bed type"
                                    MenuProps={menuProps}

                                >
                                    <MenuItem value={'double'}>Double</MenuItem>
                                    <MenuItem value={'single'}>single</MenuItem>
                                    <MenuItem value={'triple'}>triple</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        
                </Grid>


            </Box>
        </Box>        
     );
}
 
export default AccCapacity;