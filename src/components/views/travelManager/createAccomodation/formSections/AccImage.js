import React from 'react';
import {Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { useStyles } from '../styles';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';


const AccImage = (props) => {
    const classes= useStyles();
    const { handleToggle, toggles }= props;
    const handleCollapse= (section)=>{
        handleToggle(section)
    }

    return ( 
        <Box className={classes.formSection}>
            <Box 
                className={classes.sectionHeader}
                onClick= { (e)=> handleCollapse('image')}
            >
                <Box className={ classes.sectionHeaderTitle}>
                    <AddPhotoAlternateIcon className={ classes.headerIcon } />
                    <Typography variant='subtitle2' component='h6' >Add photos</Typography>
                </Box>
                <Box >
                {toggles.image.open? '-': '+'}
                </Box>
            </Box>
            <Box 
                className={classes.controlsSection}
                style={{display: toggles.image.open? 'flex': 'none'}}

            >
                <Typography 
                    variant='subtitle1' 
                    component='h6'
                    className={classes.groupTitle}

                > 
                    Liven up this accomodation with photos
                </Typography>

                <Grid container className={ classes.controlGroup}>
                        <Grid item xs={10} className={ classes.controlItem}>
                            <Grid container className={classes.respImageContainer}>
                                <Grid item xs={12} md={6}>
                                    <FormControl className={classes.formControl}>
                                        <input
                                            id='upload' 
                                            type='file'
                                            hidden= {true}
                                        />

                                        <Box className={classes.imageContainer} style={{minHeight: true ? '250px': 'initial'}}>
                                            { true ? 
                                                (
                                                    
                                                    <Box className={classes.imageIcon}>
                                                            <label htmlFor="upload">
                                                                <AddPhotoAlternateOutlinedIcon
                                                                    fontSize='large' 
                                                                    
                                                                />
                                                                <Typography 
                                                                    variant='caption' 
                                                                    component='h6'
                                                                >
                                                                    select 2 or more images
                                                                </Typography>
                                                            </label>
                                                        </Box>
                                                    

                                                )
                                                :
                                                (
                                                    <img src='image.jpg'  alt={'image not found'} />
                                                )
                                            }

                                        </Box>
                                    </FormControl>
                            </Grid>

                            </Grid>
                        </Grid>
                        
                </Grid>

            </Box>
        </Box>
     );
}
 
export default AccImage;