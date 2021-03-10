import React from 'react';
import {Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { useStyles } from './createAccomodation/styles';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';





const CreateAccomodation = () => {
    const classes= useStyles();
    return ( 
        <Box className={classes.container} >
            <Grid container className={ classes.responsiveWrapper}>
                <Grid item xs={12} sm={9} md={8} className={classes.wrapperItem}>
                        <Typography variant='h6' component='h6' > Create a new accomodation</Typography>
                        <form className={classes.form}>


{/** -----------------------------------------Location of acc------------------------------------------------------ */}

                            <Box className={classes.formSection}>
                                <Box className={classes.sectionHeader}>
                                    <Box className={ classes.sectionHeaderTitle}>
                                        <LocationOnIcon className={ classes.headerIcon } />
                                        <Typography variant='subtitle2' component='h6' >Select location</Typography>
                                    </Box>
                                    <Box >
                                        {'+'}
                                    </Box>
                                </Box>
                                <Box className={classes.controlsSection}>
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
                                                    >
                                                        <MenuItem value={'Kigali'}>Kigali</MenuItem>
                                                        <MenuItem value={'Huye'}>Huye</MenuItem>
                                                        <MenuItem value={'Rubavu'}>Rubavu</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            
                                     </Grid>

                                     <Grid container className={ classes.controlGroup} spacing={1}>
                                            <Grid item xs={5} className={ classes.controlItem}>
                                                <FormControl className={classes.formControl}>
                                                    <TextField  label="City" />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={5} className={ classes.controlItem}>
                                                <FormControl className={classes.formControl}>
                                                    <TextField  label="State" />
                                                </FormControl>
                                            </Grid>
                                     </Grid>

                                     <Grid container className={ classes.controlGroup}>
                                            <Grid item xs={10} className={ classes.controlItem}>
                                                <FormControl className={classes.formControl}>
                                                    <TextField  label="Steet Address" />
                                                </FormControl>
                                            </Grid>
                                            
                                     </Grid>
                                </Box>
                            </Box>

{/** -----------------------------------------Capacity and type------------------------------------------------------ */}

                            <Box className={classes.formSection}>
                                <Box className={classes.sectionHeader}>
                                    <Box className={ classes.sectionHeaderTitle}>
                                        <AccountBalanceIcon className={ classes.headerIcon } />
                                        <Typography variant='subtitle2' component='h6' >Accomodation Capacity</Typography>
                                    </Box>
                                    <Box >
                                        {'+'}
                                    </Box>
                                </Box>
                                <Box className={classes.controlsSection}>
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

{/** -----------------------------------------Title and description------------------------------------------------------ */}


                            <Box className={classes.formSection}>
                                <Box className={classes.sectionHeader}>
                                    <Box className={ classes.sectionHeaderTitle}>
                                        <TextFieldsIcon className={ classes.headerIcon } />
                                        <Typography variant='subtitle2' component='h6' >Add title and description</Typography>
                                    </Box>
                                    <Box >
                                        {'+'}
                                    </Box>
                                </Box>
                                <Box className={classes.controlsSection}>
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
                                                    <TextField  label="Number of bedrooms" />
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
                                                />
                                                </FormControl>
                                            </Grid>
                                            
                                     </Grid>


                                </Box>
                            </Box>

{/** -----------------------------------------Accomodation Image------------------------------------------------------ */}
                            <Box className={classes.formSection}>
                                <Box className={classes.sectionHeader}>
                                    <Box className={ classes.sectionHeaderTitle}>
                                        <AddPhotoAlternateIcon className={ classes.headerIcon } />
                                        <Typography variant='subtitle2' component='h6' >Add photos</Typography>
                                    </Box>
                                    <Box >
                                        {'+'}
                                    </Box>
                                </Box>
                                <Box className={classes.controlsSection}>
                                    <Typography 
                                        variant='subtitle1' 
                                        component='h6'
                                        className={classes.groupTitle}

                                    > 
                                        Liven up this accomodation with photos
                                    </Typography>

                                     <Grid container className={ classes.controlGroup}>
                                            <Grid item xs={10} className={ classes.controlItem}>
                                                <FormControl className={classes.formControl}>
                                                    <Box className={classes.imageContainer}>
                                                        { true ? 
                                                            (
                                                                <Box className={classes.imageIcon}>
                                                                    <AddPhotoAlternateOutlinedIcon
                                                                        fontSize='large' 
                                                                         
                                                                     />
                                                                     <Typography variant='caption' component='h6'>select 2 or more images</Typography>
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

                                </Box>
                            </Box>

{/** -----------------------------------------Amenities------------------------------------------------------ */}

                            <Box className={classes.formSection}>
                                <Box className={classes.sectionHeader}>
                                    <Box className={ classes.sectionHeaderTitle}>
                                        <LiveTvOutlinedIcon className={ classes.headerIcon } />
                                        <Typography variant='subtitle2' component='h6' >Select amenities</Typography>
                                    </Box>
                                    <Box >
                                        {'+'}
                                    </Box>
                                </Box>
                                <Box className={classes.controlsSection}>
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


                            <Box className={classes.formActions}>
                                <Button 
                                    variant='contained' 
                                    color='primary'
                                    className={classes.button}
                                >
                                    Post
                                </Button>

                                <Button 
                                    variant='contained' 
                                    color='secondary'
                                    className= { `${classes.button} ${classes.resetBtn}`}
                                >
                                    Reset
                                </Button>
                            </Box>




                        </form>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default CreateAccomodation;