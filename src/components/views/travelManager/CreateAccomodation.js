import React, { useEffect, useState } from 'react';
import {Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography} from '@material-ui/core';

import { useStyles } from './createAccomodation/styles';
import AccLocation from './createAccomodation/formSections/AccLocation';
import AccCapacity from './createAccomodation/formSections/AccCapacity';
import AccDescription from './createAccomodation/formSections/AccDescription';
import AccImage from './createAccomodation/formSections/AccImage';
import AccAmenities from './createAccomodation/formSections/AccAmenities';
import { connect } from 'react-redux';
import { getLocations } from '../../../redux/actions/fetchLocationsAction'






const CreateAccomodation = (props) => {

    useEffect( ()=>{
        console.log('fetch loacation');
        props.getLocations();
    },[])

    const classes= useStyles();
    const { locationsData } = props;

    const [regionInfo, setRegionInfo]= useState('');
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

    const [data, setData] = useState({
        country: '',
        city: '',
        state: '',
        streetAddress: '',
        locationID: '',
        propertyType: '',
        numberOfRooms: 1,
        typeOfBed: '',
        title: '',
        description: '',
        photos: ''
    });


    // console.log('Data',data);

    const handleChange = (event) => {
        const name = event.target.name;
        setData({
          ...data,
          [name]: name === 'numberOfRooms' ? parseInt(event.target.value)  : event.target.value,
        });
      };
    
      const handlePhoto = (url)=>{
        //   console.log('state url', url);
          setData({
              ...data,
              photos: url
          })
      }
      const handleLocation= (e)=>{
          setRegionInfo(e.target.value);
          const locData= e.target.value.split(",");
          setData({
              ...data,
              country: locData[1],
              locationID: locData[0]
          })
      }
    
    const handleToggle= (section)=>{
        const newState= {
            ...toggles,
            [`${section}`]: {open: !toggles[`${section}`].open}
        };
        // console.log('new Toggles', newState);
        setToggles(newState);
    }

    const handleSubmit = (e)=>{
        console.log('Data',data);
    }


    return ( 
        <Box className={classes.container} >
            <Grid container className={ classes.responsiveWrapper}>
                <Grid item xs={12} sm={9} md={8} className={classes.wrapperItem}>
                        <Typography variant='h6' component='h6' > Create a new accomodation</Typography>
                        <form className={classes.form}>


{/** -----------------------------------------Location of acc------------------------------------------------------ */}

                            <AccLocation 
                                handleToggle={handleToggle} 
                                toggles={toggles} 
                                handleChange={handleChange} 
                                data={data} 
                                locationsData={locationsData}
                                handleLocation={handleLocation} 
                                regionInfo={regionInfo}
                            />
                           

{/** -----------------------------------------Capacity and type------------------------------------------------------ */}

                            <AccCapacity 
                                handleToggle={handleToggle} 
                                toggles={toggles} 
                                handleChange={handleChange} 
                                data={data} 
                            />
                            

{/** -----------------------------------------Title and description------------------------------------------------------ */}

                            <AccDescription 
                                handleToggle={handleToggle} 
                                toggles={toggles} handleChange={handleChange} 
                                data={data} 
                            />
                            

{/** -----------------------------------------Accomodation Image------------------------------------------------------ */}
                            
                            <AccImage 
                                handleToggle={handleToggle} 
                                toggles={toggles} handleChange={handleChange} 
                                data={data} handlePhoto={handlePhoto} 
                            />

{/** -----------------------------------------Amenities------------------------------------------------------ */}

                            <AccAmenities 
                                handleToggle={handleToggle} 
                                toggles={toggles} 
                            />

{/**----------------------------------------------------Form actions------------------------------------------------------ */}


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


const mapStateToProps = state => ({
    locationsData: state.fetchLocations,
})

export default connect(mapStateToProps, {getLocations}) ( CreateAccomodation)
 
