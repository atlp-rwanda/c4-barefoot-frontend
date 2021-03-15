import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import {useStyles} from './createLocation/styles';
import LocImage from './createLocation/formSections/LocImage';
import LocData from './createLocation/formSections/LocData';

const CreateLocation = () => {
    const initialData= {
        LocationName: '',
        description: '',
        link: '',
        country: '',
    };
    const [data, setData] = useState(initialData);

    const handleChange = (event) => {
        const name = event.target.name;
        setData({
          ...data,
          [name]: event.target.value,
        });
    };

    const handlePhoto = (url)=>{
        //   console.log('state url', url);
          setData({
              ...data,
              link: url
          })
    }

    const reset =()=>{
        setData(initialData);
        // setAmenities(initialAmenities);
    }

    const handleReset = (e)=>{
        reset();
    }

    const handleSubmit = (e)=>{
        console.log('Data',data);
        // props.createAccomodation(data, amenities);
    }

    const classes= useStyles();
    return ( 
        <Box className={classes.container}>
            <Grid container className={ classes.responsiveWrapper}>
                <Grid item xs={12} sm={9} md={5} lg={4} className={classes.wrapperItem}>
                    <Typography
                        variant='h6' 
                        component='h6'
                    >
                        Create a new location
                    </Typography>
                    <form className={classes.form}>
                        <LocImage 
                            data={data}
                            handlePhoto= {handlePhoto}
                        />

                        <LocData 
                            data={data}
                            handleChange={handleChange}
                        />

                            <Box className={classes.formActions}>
                                <Button 
                                    variant='contained' 
                                    color='primary'
                                    className={classes.button}
                                    onClick={ (e)=> handleSubmit(e)}
                                >
                                    Post
                                </Button>

                                <Button 
                                    variant='contained' 
                                    color='secondary'
                                    className= { `${classes.button} ${classes.resetBtn}`}
                                    onClick= { (e)=> handleReset(e)}
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
 
export default CreateLocation;