import React, { useState } from 'react';
import {Box, Button, Checkbox, CircularProgress, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { useStyles } from '../styles';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import axios from 'axios';


const AccImage = (props) => {
    const classes= useStyles();
    const { handleToggle, toggles, handlePhoto, data }= props;
    const [url, setUrl]= useState('');
    const [loading, setLoading]= useState(false)
    const handleCollapse= (section)=>{
        handleToggle(section)
    }

    // console.log('local url', url);
    const uploadImage= (e)=>{
        const accImage = e.target.files[0]
        const formData = new FormData()
        formData.append('upload_preset', process.env.UPLOAD_PRESET)
        formData.append('file', accImage)
        setLoading(true);
             
        axios.post(process.env.IMAGE_UPLOAD_LINK, formData)
        .then(res => {

            setLoading(false); 
            setUrl(res.data.secure_url);
            // console.log('image url',res.data.secure_url);
            handlePhoto(res.data.secure_url)
        })
        .catch(err => { 
            console.log('Upload error',err.request);
            setLoading(false);
        })       
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
                                            onChange={(e)=> uploadImage(e)}
                                        />

                                        <Box className={classes.imageContainer} style={{minHeight: data.photos === '' ? '250px': 'initial'}}>
                                            { data.photos === '' ? 
                                                (
                                                    
                                                    <Box className={classes.imageIcon}>
                                                        { loading ? (
                                                            <CircularProgress />
                                                        ) 
                                                        :
                                                        (
                                                    
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
                                                        )}
                                                    </Box>
                                                    

                                                )
                                                :
                                                (
                                                    <img src={data.photos}  alt={'image not found'} style={{width: '100%'}} />
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