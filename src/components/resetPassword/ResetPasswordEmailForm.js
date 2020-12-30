import React, { useState, useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { FormGroup, Grid, makeStyles, Paper, TextField, Typography, Button, CircularProgress, Snackbar, Slide, Container  } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { sendEmail, closeSnackbar } from "../../redux/actions/resetPasswordAction";
import { object, string } from 'yup'
import { ToastContainer, toast, Zoom, Bounce } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import MuiAlert from '@material-ui/lab/Alert';

const useStyle = makeStyles( (theme) => ({
    typographyColor: {
            color:'#257AAA',
            margin:'30px auto',
            align:"center" 
        },
        loadingHeader:{
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center',
            marginTop:'40vh',
            color:'gray',
            textAlign:'center'
        },
        message:{
            color:'green',
            textAlign:'center',
            padding:'10px',
            borderRadius:'8px'
        },
        rootGrid: {
            justifyContent:'center',
            height:'100vh'
        },
        errors:{
            color:'red'
        },
        buttonStyle: {
            margin: '20px auto',
            background:'#257AAA',
            width:"20vw",
            '@media(max-width:1024px)':{
                width:'100%'
            },
            '@media(max-width: 740px)' :{
                minHeight: '100%'
            },
            float:'right',
            marginRight:0,
            borderRadius:0
        },
        emailForm: {
            border: 'none'
        },
        paperStyle: {
            padding:' 5px 20px',
            maxHeight:'fit-content',
            margin:'70px auto',
            '@media(max-width: 740px)' :{
                minHeight: '450px'
            },
            '@media(max-width:1024px)':{
                marginTop:'90px'
            }
        }

}));

const initialValues = {
    email:''
}

function ResetPasswordEmailForm(props){

    const [Email, setEmail] = useState({email:''})
    const [loading, SetLoading] = useState(false)
    let { email } = Email;
    const errors = props.sendemail.error
    const opened = props.sendemail.open
    const anyLoading = props.sendemail.isLoading
    const messages = props.sendemail.message
    const myerror = JSON.stringify(errors)
    const classes= useStyle();
    const notify = (errors) => {
            toast.success(<p>Your email sent successful!</p>, {position:toast.POSITION.TOP_CENTER})
        };
        
    // let { isLoading } = loading;


    const emailHandle = (e) => {
        setEmail({...Email, [e.target.name]:e.target.value});
        setLoading({...loading, isLoading:true});
    };


    useEffect(() => {
        const loadingTime = setTimeout(() => {
            SetLoading(true);
        }, 2000)
        return () => cleanTimeout(loadingTime)
    }, []);

    const handleSubmition = (values)=>{
        console.log(values)
        console.log(errors)
        props.sendEmail(values)
        values=''
    };

    function handleClose(event, reason){
        if(reason === 'clickaway'){
            dispatch(closeSnackbar(opened=false))
        }
        opened
    };

    function Alert(props){
        return < MuiAlert elevation={6} variant="filled" {...props}/>
    };
        return (
            <>
            {errors ? (<Snackbar open={opened} autoHideDuration={5000} onclose={handleClose}>
                <Alert onclose={handleClose} severity="error">
                    Error: {errors}
                </Alert>
            </Snackbar>): (<Snackbar open={opened} autoHideDuration={5000} onclose={handleClose}>
                <Alert onclose={handleClose} severity="success">
                    successful: {messages}
                </Alert>
            </Snackbar>)}
                
            <Grid container data-test="main-grid" className={classes.rootGrid} component='main'>
                {/* <ToastContainer /> */}
                
            {anyLoading? ( <Typography className={classes.loadingHeader} variant="h5" > Loading ...</Typography> ):
            (
                <Grid item xs={10} sm={8} md={6}>
                <Paper item className={classes.paperStyle} >
                    <Typography data-test="typography-test" className={classes.typographyColor} variant="h5">Forgot your password don't worry ?</Typography>
                    <Typography data-test="typography-test" variant="h6" className={classes.typographyColor}>Enter email below and send you a link to reset your password.</Typography>
                    {/* <Typography className={classes.message}>{messages}</Typography> */}
                    <Formik 
                    initialValues={initialValues}
                    validationSchema={
                        object().shape({
                            email:string().required("Email is required!").email()
                        })
                    }
                    onSubmit={handleSubmition} 
                    >

                    {({ values, handleChange, handleBlur, errors, touched }) => (
                        <Form className={classes.emailForm} 
                        noValidate
                        data-test="form-test"
                        >
                        {/* <pre>{JSON.stringify(errors, null, 4)}</pre>
                        <pre>{JSON.stringify(values, null, 4)}</pre> */}
                        <FormGroup>
                             <Field 
                             name='email' 
                             as={TextField} 
                             label='Email'
                             type='email'
                             id="standard-basic" 
                             value={values.email} 
                             name='email'
                             onChange={handleChange}
                             onBlur={handleBlur}
                             placeholder="Enter Your email" 
                             fullWidth 
                             required
                             errors={errors.email}
                             touched={touched.email}
                             autoFocus 
                             data-test="input-test"
                             />
                            {touched.email && errors.email ? (<span className={classes.errors} >{errors.email }</span>) : null } 
                        <Button 
                            variant="contained"
                            type="submit"
                            maxWidth="sm"
                            color="primary"
                            className={classes.buttonStyle}
                            >Send</Button>
                            {/* <br /> */}
                        </FormGroup>
                        </Form>
                    )}
                    </Formik>
                </Paper>
                </Grid>
            )
            }
            </Grid>
           </> 
        )
    };
    const mapStateToProps = state =>({
    sendemail: state.sendEmail
});

export default connect(mapStateToProps, {sendEmail, closeSnackbar})(ResetPasswordEmailForm)
export { ResetPasswordEmailForm}