import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast, Zoom, Bounce } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { connect, useSelector } from 'react-redux';
import { resetNewPassword } from '../../redux/actions/resetPasswordAction';
import { Field, Form, Formik } from 'formik'
import { FormGroup } from '@material-ui/core';
import { object, string, ref } from 'yup';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:'10px'
  },
   sendingHeader:{
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center',
            marginTop:'40vh',
            color:'gray',
            textAlign:'center'
        },
  avatar: {
    margin: theme.spacing(1),

    backgroundColor: theme.palette.secondary.main,
  },
  errors:{
      color:'red'
      },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding:'20px',
    height:'fit-content',
    borderBottom: '2px solid lightgray'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
  // const err = useSelector(state => state.newPassword.error)
const notify = () => {
        event.preventDefault();
        
        toast.success(<p>Your password reset successful! You can login with new password.</p>, {position:toast.POSITION.TOP_CENTER})
    };
  
const initialValues = {
  password:'',
  confirmPassword:''
}

function NewPassword(props) {
  const classes = useStyles();
  const sending = useSelector(state => state.newPassword.isLoading)

  const handleSubmition = (values)=>{
        event.preventDefault()
        alert(JSON.stringify(values, null, 2))
        props.resetNewPassword(values)
        console.log(values)
        values=''
        notify()
    }

  return (
    <Container component="main" maxWidth="xs">
        <ToastContainer />
      {sending? ( <Typography className={classes.sendingHeader} variant="h5" > Sending ...</Typography> ): (
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Formik
        initialValues={initialValues}
        validationSchema={
          object().shape({
            password:string().required(),
            confirmPassword:string().required().when("password", {
               is: val => (val && val.length > 0 ? true : false),
               then: string().oneOf(
               [ref("password")], "Both password need to be the same")
            })
          })
        }
        onSubmit={handleSubmition}
        >
        {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form className={classes.form} noValidate>
                <FormGroup>
                  <Field
                    as={TextField}
                    variant="outlined"
                    margin="normal"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="New password"
                    name="password"
                    autoComplete="current-password"
                    autoFocus
                  />
                  {touched.password && errors.password ? (<span className={classes.errors} >{errors.password }</span>): null}
                </FormGroup>
                <FormGroup>
                  <Field
                    as={TextField}
                    variant="outlined"
                    margin="normal"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="current-password"
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (<span className={classes.errors} >{errors.confirmPassword }</span>): null}
                </FormGroup>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // onClick={notify}
              >
                RESET
              </Button>
            </Form>
        )}
        </Formik>
      </div>
      )}
    </Container>
  );
};

const mapStateToProps = state =>({
    newPassword: state.resetNewPassword
});

export default connect(mapStateToProps, {resetNewPassword})(NewPassword)