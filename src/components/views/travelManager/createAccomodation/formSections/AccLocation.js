import React from 'react';
import {Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { useStyles } from '../styles';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';

const AccLocation = (props) => {
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

    const { handleToggle, toggles, handleChange, data }= props;
    const handleCollapse= (section)=>{
        handleToggle(section)
    }
    return ( 
        <Box className={classes.formSection}>
            <Box 
                className={classes.sectionHeader} 
                onClick= { (e)=> handleCollapse('location')}
            >
                <Box className={ classes.sectionHeaderTitle}>
                    <LocationOnIcon className={ classes.headerIcon } />
                    <Typography variant='subtitle2' component='h6' >Select location</Typography>
                </Box>
                <Box >
                {toggles.location.open? '-': '+'}
                </Box>
            </Box>
            <Box 
                className={classes.controlsSection}
                style={{display: toggles.location.open? 'flex': 'none'}}
            >
                <Typography 
                    variant='subtitle1' 
                    component='h6'
                    className={classes.groupTitle}

                > 
                    Where is the accomodation Located
                </Typography>
                <Grid container className={ classes.controlGroup}>
                        <Grid item xs={10} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Country/Region</InputLabel>
                                <Select
                                    id="region"
                                    name= 'country'
                                    MenuProps={menuProps}
                                    value={ data.country}
                                    onChange={ (e)=> handleChange(e)}
                                >
                                    <MenuItem value={'Rwamda'}>Rwamda</MenuItem>
                                    <MenuItem value={'Uganda'}>Uganda</MenuItem>
                                    <MenuItem value={'Kenya'}>Kenya</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        
                </Grid>

                <Grid container className={ classes.controlGroup} spacing={1}>
                        <Grid item xs={5} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <TextField
                                  label="City" 
                                  name='city'
                                  value={ data.city}
                                  onChange={ (e)=> handleChange(e)}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={5} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <TextField  
                                    label="State" 
                                    name='state'
                                    value={ data.state}
                                    onChange={ (e)=> handleChange(e)}
                                />
                            </FormControl>
                        </Grid>
                </Grid>

                <Grid container className={ classes.controlGroup}>
                        <Grid item xs={10} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <TextField  
                                    label="Steet Address"
                                    name='streetAddress'
                                    value={ data.streetAddress}
                                    onChange={ (e)=> handleChange(e)} 
                                />
                            </FormControl>
                        </Grid>
                        
                </Grid>
            </Box>
        </Box>       
     );
}
 
export default AccLocation;