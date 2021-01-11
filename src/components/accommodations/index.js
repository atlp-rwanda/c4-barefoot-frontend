import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { AccountBalance, AddPhotoAlternate, CheckBox, DevicesOther, LocationOn, Title } from '@material-ui/icons';
import { Box, Button, Select, Snackbar } from '@material-ui/core';
import TextField from 'material-ui/TextField';
import DropZoneField from "../locations/dropzoneField";
import MuiAlert from '@material-ui/lab/Alert';
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';
import { Field, Form, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { closeSnackbar, createAccommodation } from '../../redux/actions/createAccommodationAction'
import axios from 'axios';
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import Checkbox from 'material-ui/Checkbox'

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    background: '#ABD5ED',
    opacity: '0.6',
    color:'#000',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    justifyContent:'center'
  },
}))(MuiAccordionDetails);
const useStyle = makeStyles(theme => ({
  col_box:{
    display:'flex',
    justifyContent:'space-around'
  },
  detailBox:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  },
  input:{
    width:'100%'
  }
}))
const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
  );
const renderTextField = (
  { input, type, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    floatingLabelText={label}
    errorText={touched && error}
    type={type}
    {...input}
    {...custom}
  />
);
const renderField = ({ input, label, type, textarea, meta: { touched, error, warning, invalid } }) => {
  const textareaType = <textarea {...input} /*placeholder={label}*/  type={type} className={`form-control ${touched && invalid ? 'has-danger' : ''}`}/>;
  const inputType = <input {...input} /*placeholder={label}*/  type={type} className={`form-control ${touched && invalid ? 'has-danger' : ''}`}/>;

  return (
      <div>
          <label>{label}</label>
          <div>
              {textarea ? textareaType : inputType}
              {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
          </div>
      </div>
  );
};
const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
)

const imageIsRequired = value => (!value ? "Required" : undefined);

export function CreateAccommodation(props) {
  const [expanded, setExpanded] = React.useState('panel1');
  const [Thumb, setThumb] = React.useState('')
  const [suggestion, setSuggestion] = React.useState([])
  // const [locationId, setLocationId] = React.useState()
  const classes = useStyle();
  const { handleSubmit, pristine, reset, submitting } = props
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const token = localStorage.getItem('barefootUserToken');
  const handleFormSubmit = formProps => {
    console.log("Clicked")
    const formData = new FormData();
    const accommodation_picture = formProps.location_image[0]
    formData.append('upload_preset', process.env.UPLOAD_PRESET)
    formData.append('file', accommodation_picture)
    const amenities = (
        {wifi=false,airConditioner=false,shampoo=false,ironing=false,tv=false,smokeDetector=false,fireExtinguisher=false,lockOnDoor=false}
      )=>(
        {wifi,airConditioner,shampoo,ironing,tv,smokeDetector,fireExtinguisher,lockOnDoor}
      )
    const amenitiesData = amenities(...formData)
    axios.post(process.env.IMAGE_UPLOAD_LINK, formData)
      .then(res => {
        const {name, locationId , country} = formProps.city
        console.log(name, locationId)
        const {accommodation_picture, location_image, city,...data} = {...formProps}
        data.photos = res.data.secure_url
        data.city = name
        data.country = country
        data.locationID = locationId
        alert(JSON.stringify(data, null, 4));
        props.dispatch(createAccommodation(data, amenitiesData, token));
      })
      .catch(err => { console.log(err) })
    
    // append any additional Redux form fields
    // create an AJAX request here with the created formData
  };
  const handleSuggestions = (value) => {
    axios.get(`${process.env.REACT_APP_BACKEND_LINK}/search/locations/all`,{ params: { search: 'k' }})
    .then(res => {
      setSuggestion(res.data.locations.rows)
    })
  }
  const handleClose = () => {
    props.dispatch(closeSnackbar());
  };
  const handleOnDrop = newImageFile => {setThumb(newImageFile); console.log("Image:"+newImageFile)};

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props}  itemID='alert' />;
  }
  const weekdayOptions = [
    // 'AccommodationId',
    'wifi',
    'airConditioner',
    'shampoo',
    'ironing',
    'tv',
    'smokeDetector',
    'fireExtinguisher',
    'lockOnDoor'
  ];

  return (
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Snackbar open={props.AccommodationState.errorOpen} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="error" >
          Error: {props.AccommodationState.error ? JSON.stringify(props.AccommodationState.error).replace(/[\\'"]+/g, '') : 'Error Not set'}
        </Alert>
      </Snackbar>
      <Snackbar open={props.AccommodationState.successOpen} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" >
          Success: {props.AccommodationState.successMessage ? 'Accommodation created successfully' : 'Message Not set'}
        </Alert>
      </Snackbar>
        <Box>
          <div style={{textAlign:'center'}}><p>Create New Accommodations</p></div>
          <Box style={{margin:'10px'}}>
            <Form onSubmit={handleSubmit(handleFormSubmit)}>
              <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
                  <Typography><LocationOn/></Typography>
                  <Typography>Select location</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  
                  <Typography className={classes.detailBox}>
                    <Typography>Where is the accommodation located?</Typography>
                    {/* <div>
                      <Field
                        name="country"
                        label="Country/Region"
                        component={renderTextField}
                        onChange={handleSuggestions}
                        fullWidth={true}
                      />
                    </div> */}
                    <div>
                      <Field
                        name="city"
                        component={renderSelectField}
                        label="City"
                        onClick={handleSuggestions}
                        fullWidth={true}
                      >
                        {location 
                          ?(suggestion.map(location => (
                            <MenuItem value={{name:location.LocationName, locationId:location.id, country:location.country}} primaryText={location.LocationName} /> ))) 
                          : 'no location'}
                        
                        <MenuItem value="Motel" primaryText="Motel" />
                        <MenuItem value="Lodge" primaryText="Lodge" />
                      </Field>
                    </div>
                    {/* <Box className={classes.col_box}> */}
                      {/* <div>
                        <Field
                          name="city"
                          label="City"
                          component={renderTextField}
                          defaultValue={''}
                        />
                      </div> */}
                      {/* {console.log(props.form)} */}
                      <div style={{marginLeft:'5px'}}>
                        <Field
                          name="state"
                          label="State"
                          component={renderTextField}
                          fullWidth={true}
                        />
                      </div>
                    {/* </Box> */}
                    <div>
                        <Field
                          name="streetAddress"
                          label="Street Address"
                          component={renderTextField}
                          fullWidth={true}
                        />
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
                  <Typography><AccountBalance/></Typography>
                  <Typography>Accommodation capacity</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Typography>What type or capacity of this accommodation?</Typography>
                    {/* <div>
                      <Field
                        name="propertyType"
                        label="Choose a property type"
                        component={renderTextField}
                        fullWidth={true}
                      />
                    </div> */}
                    <div>
                      <Field
                        name="propertyType"
                        component={renderSelectField}
                        label="Choose a property type"
                        fullWidth={true}
                      >
                        <MenuItem value="Hostel" primaryText="Hostel" />
                        <MenuItem value="Motel" primaryText="Motel" />
                        <MenuItem value="Lodge" primaryText="Lodge" />
                      </Field>
                    </div>
                    <div>
                      <Field
                        name="numberOfBedrooms"
                        label="Number Of Bedrooms"
                        type='number'
                        InputProps={{ inputProps: { min: 0, max: 10 } }}
                        // format={formatOption}
                        // normalize={normalizeOption}
                        component={renderTextField}
                        fullWidth={true}
                      />
                    </div>
                    <div >
                      <Field
                        name="numberOfRooms"
                        label="Number Of Rooms"
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        component={renderTextField}
                        normalize={ val => (val || "").replace(/[^\d]/g, "") }
                        fullWidth={true}
                      />
                    </div>
                    <div>
                      <Field
                        name="typeOfBed"
                        component={renderSelectField}
                        label="Type Of Bed"
                        fullWidth={true}
                      >
                        <MenuItem value="Double Decker" primaryText="Double Decker" />
                        <MenuItem value="Flat" primaryText="Flat" />
                        <MenuItem value="Poster" primaryText="Poster" />
                      </Field>
                    </div>
                    {/* <div>
                      <Field
                        name="typeOfBed"
                        label="Type Of Bed"
                        component={renderTextField}
                        fullWidth={true}
                      />
                    </div> */}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
                <Typography><Title/></Typography>
                  <Typography>Add title and description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  <div>
                      <Field
                        name="title"
                        label="Add A Title Of Accommodation"
                        component={renderTextField}
                        fullWidth={true}
                      />
                  </div>
                  <div>
                      <Field 
                        name="description"  
                        component={renderField} 
                        type="text" 
                        label="Description" 
                        textarea={true} 
                      />
                  </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
                <Typography><AddPhotoAlternate/></Typography>
                  <Typography>Add photos</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Field
                      name="location_image"
                      component={DropZoneField}
                      type="file"
                      imagefile={Thumb}
                      handleOnDrop={handleOnDrop}
                      validate={[imageIsRequired]}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
                <Typography><DevicesOther/></Typography>
                  <Typography>Select amenities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', columnGap:'10px' }}>
                    {weekdayOptions.map(option => (
                      <Field name={option} component={renderCheckbox} label={option} />
                    ))}
                    
                  </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <div style={{display:'flex',justifyContent:'center', marginTop:'15px'}}>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    size='large'
                    disabled={pristine || submitting}
                    style={{margin:'0 5px'}}
                  >
                    Post
                  </Button>
                  <Button 
                    type="button" 
                    color="secondary"
                    variant="contained"
                    size='large'
                    disabled={pristine || submitting} 
                    onClick={reset}
                    style={{margin:'0 5px'}}
                  >
                    Cancel
                  </Button>
                </div>
            </Form>
          </Box>
        </Box>
      </MuiThemeProvider>
    </div>
  );
}

const mapStateToProps = state => {
  return{AccommodationState: state.createAccommodation,}
  
}
const decoratedComponent = connect(mapStateToProps,{createAccommodation})(CreateAccommodation);
export default reduxForm({ form: "CreateAccommodation" }) (decoratedComponent)
