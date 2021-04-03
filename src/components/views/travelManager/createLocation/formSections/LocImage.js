import React, { useState } from 'react';
import {Box, Button, Checkbox, CircularProgress, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography} from '@material-ui/core';
import { useStyles } from '../styles';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import axios from 'axios';



const LocImage = (props) => {
    const classes= useStyles();
    const { handleToggle, toggles, handlePhoto, data }= props;
    const [url, setUrl]= useState('');
    const [loading, setLoading]= useState(false)
    

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
        <Box>
            <Grid container>
                <Grid item xs={12} >
                    <FormControl className={classes.formControl}>
                        <input
                            id='upload' 
                            type='file'
                            hidden= {true}
                            onChange={(e)=> uploadImage(e)}
                        />

                        <Box className={classes.imageContainer} style={{minHeight: data.link === '' ? '300px': 'initial'}}>
                            { data.link === '' ? 
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
                                    <img src={data.link}  alt={'image not found'} style={{width: '100%'}} />
                                )
                            }

                        </Box>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default LocImage;