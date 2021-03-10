import React, { useState } from 'react';
import {Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography} from '@material-ui/core';

import { useStyles } from './createAccomodation/styles';
import AccLocation from './createAccomodation/formSections/AccLocation';
import AccCapacity from './createAccomodation/formSections/AccCapacity';
import AccDescription from './createAccomodation/formSections/AccDescription';
import AccImage from './createAccomodation/formSections/AccImage';
import AccAmenities from './createAccomodation/formSections/AccAmenities';





const CreateAccomodation = () => {
    const classes= useStyles();
    const [ toggles, setToggles] =useState(
        {
            location:{
                open: false,
            },
            capacity:{
                open: false,
            },
            description:{
                open: false,
            },
            image:{
                open: false,
            },
            amenities:{
                open: false,
            },
        }
    );
    // console.log('toggles', toggles);
    
    const handleToggle= (section)=>{
        const newState= {
            ...toggles,
            [`${section}`]: {open: !toggles[`${section}`].open}
        };
        // console.log('new Toggles', newState);
        setToggles(newState);
    }


    return ( 
        <Box className={classes.container} >
            <Grid container className={ classes.responsiveWrapper}>
                <Grid item xs={12} sm={9} md={8} className={classes.wrapperItem}>
                        <Typography variant='h6' component='h6' > Create a new accomodation</Typography>
                        <form className={classes.form}>


{/** -----------------------------------------Location of acc------------------------------------------------------ */}

                            <AccLocation handleToggle={handleToggle} toggles={toggles} />
                           

{/** -----------------------------------------Capacity and type------------------------------------------------------ */}

                            <AccCapacity handleToggle={handleToggle} toggles={toggles} />
                            

{/** -----------------------------------------Title and description------------------------------------------------------ */}

                            <AccDescription handleToggle={handleToggle} toggles={toggles} />
                            

{/** -----------------------------------------Accomodation Image------------------------------------------------------ */}
                            
                            <AccImage handleToggle={handleToggle} toggles={toggles} />

{/** -----------------------------------------Amenities------------------------------------------------------ */}

                            <AccAmenities handleToggle={handleToggle} toggles={toggles} />

{/**----------------------------------------------------Form actions------------------------------------------------------ */}


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