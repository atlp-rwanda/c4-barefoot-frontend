import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { CircularProgress, FormGroup, Snackbar, Avatar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/actions/loginAction';
import PropTypes from 'prop-types';

const initialValues ={
    email : '',
    password: ''
};

const loginForm = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Your email is required'),
    password: Yup.string().min(8, 'At least 8 characters').required('Your password is required')
});

const useStyles = makeStyles((theme) => ({
    Login: {
      height: '90vh',
    },
    paper: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justify: 'center',
      textAlign: 'center',
    },
    paper2: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justify: 'center',
      textAlign: 'center',
      color: 'white',
      height: '90%'
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    login: {
      margin: theme.spacing(3, 0, 2),
      width: '40%'
    },
    submit: {
      margin: theme.spacing(5, 0, 10),
      width: '35%'
    },
    social_media: {
      margin: theme.spacing(3, 0, 2),
      width: '40%',
      height:'40px'
    },
    social_media_sm: {
      margin: theme.spacing(3, 0, 2),
      width: '40%',
      height:'40px'
    },
    social_media_grid: {
      margin: 'auto',
      marginTop: '0',
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    secondpart: {
      margin: theme.spacing(5, 0, 5),
      width: '60%',
      justifyContent: 'center'
    },
    forgotPassword: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      loader: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        outline: 'none',
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center'
      }
  }));
function Login(props) {
    const [loading , setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({open: false, severity: 'error', message:'Something went wrong!'});
    const classes = useStyles();

    useEffect(() =>{
        console.log('---------------props');
        console.log(props);
        const timer = setTimeout(() =>{
            setLoading(true);
        }, 2000);
        console.log(loading);
        return () => clearTimeout(timer);
        
    }, []);

    const handleSubmition = async (values) => { 
        props.loginAction(values);
    }
    const handleCloseSnackbar = () =>{
        let newState ={open: false} 
        if(snackbar.severity === "error"){
            newState.severity= 'error';
        } else if(snackbar.severity === "success"){
            newState.severity= 'success';
        } else if(snackbar.severity === "warning"){
            newState.severity= 'warning';
        }else{
            newState.severity= 'error';
        }

        return setSnackbar(newState);
    }
    let load = false;
    props.login.loading ? load = true : load = false;

    return(
        <>
        <Grid container component="main" className={classes.Login}>
            <CssBaseline/> 
            
            <Grid item container sm={8} xs={12} component={Paper} elevation={6} square>
                <Modal
                className={classes.modal}
                open={load}
                closeAfterTransition
                >
                <Fade in={load} >
                    
                    <div className={classes.loader}>
                        <CircularProgress />
                        <Typography>
                            Processing ...
                        </Typography>
                    </div>
                </Fade>
                </Modal>
                <div>
                    <Snackbar
                    open={snackbar.open}
                    onClose={handleCloseSnackbar}
                    onExit={handleCloseSnackbar}
                    autoHideDuration={6000}
                    >
                        <MuiAlert 
                        severity={snackbar.severity} 
                        onClose={handleCloseSnackbar}
                        variant="filled"
                        elevation={6}
                        >{snackbar.message}</MuiAlert>
                    </Snackbar>
                </div>
                <div className={classes.paper}>
                    
                    {/*logic for skeletons*/}
                    {(loading ? 
                    <>
                    <Typography component="h1" variant="h5">
                        Sign in to Barefoot Nomad {props.login.success ? 'Y' : 'N'}
                    </Typography>
                    <Formik 
                    initialValues={initialValues} 
                    validationSchema={loginForm}  
                    onSubmit={handleSubmition} 
                    >
                        {({errors, touched}) => (
                        <Form className={classes.form} noValidate>
                            <FormGroup>
                                <Field as={TextField}
                                variant="standard"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                disabled={load}
                                autoFocus
                                />
                                {errors.email && touched.email ? (<div style={{textAlign: 'left', color:'red'}}>{errors.email}</div>) : null}
                            </FormGroup>
                            <FormGroup>
                                <Field as={TextField}
                                variant="standard"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                disabled={load}
                                />
                                {errors.password && touched.password ? (<div style={{textAlign: 'left', color:'red'}}>{errors.password}</div>) : null}
                            </FormGroup>
                            <Grid container item >
                                <Grid item xs className={classes.forgotPassword} >
                                    <Link href="#" variant="body2">Forgot password?</Link> 
                                </Grid>
                            </Grid>
                            <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={load}
                            className={classes.login}
                            >Login</Button>
                        </Form>
                        )}
                    </Formik>
                    </> : 
                    
                    <>
                        {/*the skeleton itself*/}
                        <Typography component="h1" variant="h5">
                            <Skeleton width={300} />
                        </Typography>
                        <div className={classes.form} >
                        <Skeleton height={40} width={400} />
                        <Skeleton height={40} width={400} />
                        <Grid container item >
                            <Grid item xs className={classes.forgotPassword} >
                                <Skeleton width={150}/>
                            </Grid>
                        </Grid>
                        <Skeleton variant='rect' className={classes.login} height={35} width={150} style={{margin:'auto'}}/>
                        </div>
                        <Grid container direction="column" className={classes.social_media_grid} >
                        <Typography variant="h6" component="h6">
                            <Skeleton style={{margin:'auto'}} width={150} />
                        </Typography>
                        
                        <Grid item container justify='space-between'>
                            <Skeleton variant='rect' className={classes.social_media} width={120} height={30} /> <Skeleton variant='rect' className={classes.social_media} height={30} width={120}/>
                        </Grid>
                        
                    </Grid>
                    </>)}
                </div>

                {(loading ?
                <Grid container direction="column" className={classes.social_media_grid} >
                        <Typography variant="h6" component="h6">
                            Or Login with
                        </Typography>
                        <Grid item container justify='space-between' >
                            <Button
                            variant="contained"
                            disabled={load}
                            className={classes.social_media}
                            startIcon={<Avatar src={'../src/images/facebook.png'}/>}
                            >
                            Facebook
                            </Button>
                        
                            <Button
                            variant="contained"
                            disabled={load}
                            className={classes.social_media}
                            startIcon={<Avatar src={'../src/images/goo.png'}/>}
                            >
                                Google
                            </Button>
                        </Grid>
                        
                </Grid> : null )}
            </Grid>
            <Grid item container sm={4} xs={12} style={{background:"#257AAA"}}>
                <div className={classes.paper2} text='primary'>
                
                    {(loading ? 
                    <>
                    <Typography component="h1" variant="h5">
                        Hello, Friend!
                    </Typography>
                    <Grid item container className={classes.secondpart}>
                        <Typography variant="subtitle1">
                            Enter your personal details and start your journey with us.
                        </Typography>
                        
                    </Grid>
                    <Typography variant="subtitle1">
                        Don't have an account?
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.submit}
                        disabled={load}
                    >Signup</Button>
                    </> : 
                    <>
                        <Typography component="h1" variant="h5">
                        <Skeleton width={150} />
                        </Typography>
                        <Grid item container className={classes.secondpart}>
                            <Skeleton height={20} width={200} /> <Skeleton height={20} width={200} />
                        </Grid>
                        <Typography variant="subtitle1">
                            <Skeleton width={150} />
                        </Typography>
                        <Skeleton variant='rect' height={35} width={150} style={{margin:'auto'}}/>
                    </>)}

                </div>

            </Grid>
        </Grid>
        </>
    )
}



const mapStateToProps = state =>({
    login: state.login
});


export default connect(mapStateToProps, { loginAction })(Login);