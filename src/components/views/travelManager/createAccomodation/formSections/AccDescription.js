import React from 'react';
import {Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { useStyles } from '../styles';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';

const AccDescription = (props) => {
    const classes= useStyles();
    const { handleToggle, toggles, handleChange, data }= props;
    const handleCollapse= (section)=>{
        handleToggle(section)
    }

    return ( 
        <Box className={classes.formSection}>
            <Box 
                className={classes.sectionHeader}
                onClick= { (e)=> handleCollapse('description')}
            >
                <Box className={ classes.sectionHeaderTitle}>
                    <TextFieldsIcon className={ classes.headerIcon } />
                    <Typography variant='subtitle2' component='h6' >Add title and description</Typography>
                </Box>
                <Box >
                {toggles.description.open? '-': '+'}
                </Box>
            </Box>
            <Box 
                className={classes.controlsSection}
                style={{display: toggles.description.open? 'flex': 'none'}}
            >
                <Typography 
                    variant='subtitle1' 
                    component='h6'
                    className={classes.groupTitle}

                > 
                    Attract users with a best title and description
                </Typography>

                                                
                <Grid container className={ classes.controlGroup}>
                        <Grid item xs={10} className={ classes.controlItem}>
                            <FormControl className={classes.formControl}>
                                <TextField  
                                    label="Add a title of this accomodation" 
                                    name='title'
                                    value={ data.title}
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
                                multiline
                                rows={5}
                                placeholder="Fill accomodation description here."
                                variant="outlined"
                                helperText={500}
                                name='description'
                                value={ data.description}
                                onChange={ (e)=> handleChange(e)}
                            />
                            </FormControl>
                        </Grid>
                        
                </Grid>


            </Box>
        </Box>        
     );
}
 
export default AccDescription;