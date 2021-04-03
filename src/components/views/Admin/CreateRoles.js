import React from 'react'
import { Typography, makeStyles, Divider, Box, Button, Grid} from '@material-ui/core'
import { createRoleAction, clearSnackBar,updateRoleAction } from '../../../redux/actions/createRoleAction'
import { cleanEditRoleAction} from '../../../redux/actions/fetchRolesAction'
import { connect } from 'react-redux'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { FormGroup, TextField, Slide, CssBaseline, Snackbar} from '@material-ui/core';
import Loader from '../../Loader';
import MuiAlert from '@material-ui/lab/Alert';
import { useTranslation } from 'react-i18next';


//form validation with yup
const roleForm = Yup.object().shape({
  role: Yup.string().required('The role name is required'),
  description: Yup.string().min(5, 'At least 5 characters').required('Description of the role is required')
})

const useStyles = makeStyles((theme) => ({
  titleBox: {
    marginBottom: theme.spacing(5)
  },
  createForm:{

  },
  form: {
    marginTop: theme.spacing(1),
    width: '100%'
  },
  TextField: {
    marginBottom: theme.spacing(2)
  },
  formButtons: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    justifyContent: 'space-around'
  }
}))

function CreateRoles (props) {
  const { t, i18n } = useTranslation();
  let initialValues;
  const classes = useStyles()
  const [visible, setVisible] = React.useState(false);
  initialValues = props.role?(
    {
      role:props.role.name,
      description:props.role.description == null?(''):(props.role.description)
    }
  ):(
    {
      role: '',
      description: ''
    }
)
  const handleSubmition = (payload, {resetForm}) => {
    if(props.role){
      props.updateRoleAction(props.role.id,payload)
      window.location.reload()
    }else{(props.createRoleAction(payload))}
    resetForm({payload: ''})
    props.cleanEditRoleAction();
    setVisible(false)
  }

  
  const TransitionUp = (props) => {
    return <Slide {...props} direction="up" />;
  }

  const closeSnackBarTimer = () => {
    props.clearSnackBar()
  }
 
const message =props.role?('Role Successfully Updated!'):("Role Successfully Created!")
const title =props.role?('Update Role'):("Create new Role")
const handelCancel=(resetform)=>{
    //props.cleanEditRoleAction();
    setVisible(false)
    resetform()
}


  let load = props.createRoles.pending

  return(
    <Grid 
    container 
    justify='center'
    >
      <CssBaseline/>

      <Grid item md={3} sm={6} xs={10}>
        <Loader open={load}/>
        
        <Snackbar
        open={props.createRoles.snackBarMessage.open}
        onClose={closeSnackBarTimer}
        autoHideDuration={4000}
        TransitionComponent={TransitionUp}
        >
          <MuiAlert
          severity={props.createRoles.snackBarMessage.severity}
          variant='filled'
          elevation={6}
          >{props.createRoles.snackBarMessage.message}</MuiAlert>
        </Snackbar>

        <div className={classes.titleBox}>
        <Typography variant='h5' align='center'>{title}</Typography>
        <Divider/>
        </div>
        <div className={classes.createForm}>
          <Formik
          initialValues={initialValues}
          validationSchema={roleForm}
          onSubmit={handleSubmition}
          >
            {({errors, touched,resetForm}) => (
              <Form className={classes.form} noValidate
              onChange={() => { setVisible(true);}}
              >
                <FormGroup className={classes.TextField}>
                  <Field as={TextField} 
                  label='Role title'
                  name= 'role' 
                  fullWidth 
                  autoFocus
                  required
                  disabled={load}
                  />
                  {errors.role && touched.role ? (<div style={{textAlign: 'left', color:'red'}}>{errors.role}</div>) : null}
                </FormGroup>
                <FormGroup>
                  <Field as={TextField}
                   label='Role description' 
                   variant='outlined' 
                   name='description' 
                   fullWidth
                   disabled={load}
                   />
                   {errors.description && touched.description ? (<div style={{textAlign: 'left', color:'red'}}>{errors.description}</div>) : null}
                </FormGroup>
                {visible?(
                  <Box className={classes.formButtons} >
                    <Button variant='contained' size='medium' color='primary' type="submit" disabled={load}>Save</Button>
                    <Button type="reset" variant='contained' size='medium' color='secondary' onClick={handelCancel.bind(null,resetForm)}>Cancel</Button>
                </Box>
                ):(null)}
            
          </Form>
              
            )}
          </Formik>
        </div>
      </Grid>
      
    </Grid>
  )
}

const mapStateToProps = state =>({
  createRoles: state.createRoles,
  role:state.roles.role
})

export default connect(mapStateToProps, {createRoleAction, clearSnackBar,cleanEditRoleAction,updateRoleAction})(CreateRoles)