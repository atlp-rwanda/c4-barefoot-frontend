import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { Formik, Form, Field, useFormikContext } from 'formik';
import { TextField, Select, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'
import Upload from './imageUploadModel'
import * as yup from "yup";
import Box from '@material-ui/core/Box';
import { AccountCircle, Language, BusinessCenter, CloudUpload, Subject, EventBusy } from "@material-ui/icons";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media(max-width: 320px)' : {
      display: 'grid'
    },
  },
  button: {
    margin: theme.spacing(1)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  button: {
    margin: theme.spacing(1),
  },
  label: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d5d5d5',
    color: 'black',
    padding: '0.3rem',
    fontFamily: 'sans-serif',
    borderRadius: '0.3rem',
    cursor: 'pointer',
    margin: '1rem',
  },
  labelText: {
  }
}));

export  const FormPersonalDetails = ({
  formData,
  setFormData,
  nextStep,
  prevStep
}) => {
  const classes = useStyles();
  const [direction, setDirection] = useState('back');
  const [photo, setPhoto] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          direction === 'back' ? prevStep() : nextStep();
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className={classes.form}>
            <Box display='inline-flex' justifyContent='center' alignItems='center'>
              <Avatar 
              alt="user" 
              name='profile_picture' 
              margin='normal'
              src={formData ? formData.profile_picture : ''} 
              className={classes.large}/>
              {/* <Upload/> */}
              <input 
              id="file" 
              name="profile_picture" 
              type="file" 
              hidden='true'
              onChange={(e) => {
                const profile_picture = e.target.files[0]
                const formData = new FormData()
                formData.append('upload_preset', 'l9dhzfdi')
                formData.append('file', profile_picture)
                setLoading(true)
                
                axios.post(' https://api.cloudinary.com/v1_1/mjackson/image/upload', formData)
                .then(res => setFieldValue("profile_picture", res.data.secure_url))
                .then(
                  setLoading(false)
                )
                .catch(err => console.log(err))
              }}
              />
              <label for="file" className={classes.label}>
                <i class="fa fa-cloud-upload" aria-hidden="true"></i> 
                <div className={classes.labelText}>
                Upload Profile Image
                </div>

              </label>
            </Box>
            <Field 
            name='bio' 
            label='Biography' 
            as={TextField} 
            margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Subject />
                  </InputAdornment>
                ),
              }}
            />
            <Field 
            name='occupation' 
            label='Occupation' 
            as={TextField} 
            margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventBusy />
                  </InputAdornment>
                ),
              }}
            />
            <Field 
            as={Select} 
            name="address" 
            margin='normal' 
            label='Address' 
            placeholder='Address'
            margin='normal'
              InputProps={{
                startAdornment: (
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                ),
              }}
            >
              <option selected value="kk 509 st">kk 509 st</option>
              <option value="kk 309 st">kk 309 st</option>
              <option value="kk 280 st">kk 280 st</option>
            </Field>
            <Field 
            as={Select} 
            name="language" 
            margin='normal' 
            label='Language' 
            placeholder='Language'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Language />
                  </InputAdornment>
                ),
              }}
            >
              <option selected value="Kinyarwanda">Kinyarwanda</option>
              <option value="English">English</option>
              <option value="Franch">Franch</option>
            </Field>
            <div>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={() => {
                  setDirection('back'); 
                  console.log(JSON.stringify(formData))
                }}
              >
                Back
              </Button>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={() => setDirection('forward')}
              >
                Next
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

FormPersonalDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};
