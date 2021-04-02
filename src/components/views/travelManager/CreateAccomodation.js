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
import { createAccomodation } from '../../../redux/actions/createAccAction'
import ErrorSnackBar from './createAccomodation/formSections/ErrorSnackBar';
import SuccessSnackBar from './createAccomodation/formSections/SuccessSnackBar';
import Loader from '../../Loader'






const CreateAccomodation = (props) => {

    const classes= useStyles();
    const { locationsData, createAcc } = props;
    const { error, accomodation, pending } = createAcc;

    const [regionInfo, setRegionInfo]= useState('');
    const [ openError, setErrorOpen]= useState(false);
    const [ openSuccess, setSuccessOpen]= useState(false);

    const handleErrorClose= ()=>{
        setErrorOpen(false);
    }
    const handleSuccessClose= ()=>{
        setSuccessOpen(false);
    }
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

    const initialState= {
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
        price: 0,
        photos: '',
    };
    const initialAmenities= {
        wifi: false,
        airConditioner: false,
        shampoo: false,
        ironing: false,
        tv: false,
        smokeDetector: false,
        fireExtinguisher: false,
        lockOnDoor: false,

    }

    const [data, setData] = useState(initialState);
    const [amenities, setAmenities]= useState(initialAmenities);


    useEffect( ()=>{
        console.log('fetch loacation');
        props.getLocations();
    },[])


    // console.log('Data',data);

    const handleChange = (event) => {
        const name = event.target.name;
        setData({
          ...data,
          [name]: name === 'numberOfRooms' || name === 'price' ? parseInt(event.target.value)  : event.target.value,
        });
    };

    const handleAmenity = (event) => {
        const name = event.target.name;
        setAmenities({
          ...amenities,
          [name]:  !amenities[name],
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

      const reset =()=>{
        setData(initialState);
        setAmenities(initialAmenities);
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
        props.createAccomodation(data, amenities);
    }

    const handleReset = (e)=>{
        reset();
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
                                handleAmenity= {handleAmenity}
                                amenities= {amenities}
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
                                    onClick= { (e)=> handleReset(e)}
                                >
                                    Reset
                                </Button>
                            </Box>




                        </form>
                </Grid>
            </Grid>
            {error && <ErrorSnackBar handleClose={handleErrorClose} open={openError} error={error} setOpen={setErrorOpen} />}
            {accomodation && <SuccessSnackBar handleClose={handleSuccessClose} open={openSuccess} accomodation={accomodation} setOpen={setSuccessOpen} reset={reset} />}
            { pending && <Loader open={pending} />} 
        </Box>
     );
}


const mapStateToProps = state => ({
    locationsData: state.fetchLocations,
    createAcc: state.createAcc
})
export {CreateAccomodation}
export default connect(mapStateToProps, {getLocations, createAccomodation}) ( CreateAccomodation)
 