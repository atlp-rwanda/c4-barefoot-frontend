import React, { useState } from 'react';
import {Box, Button, Checkbox, CircularProgress, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography} from '@material-ui/core';
import {useStyles} from '../styles';

const LocData = (props) => {
    const classes= useStyles();
    const { handleToggle, toggles, handleChange, data }= props;

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
        <Box 
            className={classes.controlsSection}
        >
        
        <Grid container className={ classes.controlGroup}>
                    <Grid item xs={10} className={ classes.controlItem}>
                        <FormControl className={classes.formControl}>
                            <TextField  
                                    
                                    label="Country"
                                    name='country'
                                    value={ data.country }
                                    onChange={ (e)=> handleChange(e)}
                            />
                        </FormControl>
                    </Grid>
                    
            </Grid>

            <Grid container className={ classes.controlGroup}>
                    <Grid item xs={10} className={ classes.controlItem}>
                        <FormControl className={classes.formControl}>
                            <TextField  
                                    
                                    label="Location name"
                                    name='LocationName'
                                    value={ data.LocationName }
                                    onChange={ (e)=> handleChange(e)}
                            />
                        </FormControl>
                    </Grid>
                    
            </Grid>

            <Grid container className={ classes.controlGroup}>
                    <Grid item xs={10} className={ classes.controlItem}>
                        <FormControl className={classes.formControl}>
                            <TextField  
                                    
                                    label="Description"
                                    name='description'
                                    value={ data.description }
                                    onChange={ (e)=> handleChange(e)}
                            />
                        </FormControl>
                    </Grid>
                    
            </Grid>

            <Grid container className={ classes.controlGroup}>
                        <Grid item xs={10} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Currency</InputLabel>
                                <Select
                                    id="currency"
                                    MenuProps={menuProps}
                                    name='currency'
                                    value={ data.currency}
                                    onChange={ (e)=> handleChange(e)}

                                >
                                    <MenuItem value={'FRW'}>FRW</MenuItem>
                                    <MenuItem value={'EUR'}>EUR</MenuItem>
                                    <MenuItem value={'UGSH'}>UGSH</MenuItem>
                                    <MenuItem value={'KSH'}>KSH</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        
            </Grid>


        </Box>
     );
}
 
export default LocData;