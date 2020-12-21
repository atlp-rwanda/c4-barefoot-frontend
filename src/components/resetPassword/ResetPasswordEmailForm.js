import React, { useState, useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
// import Button from '@material-ui/core/Button'
import { FormGroup, Grid, makeStyles, Paper, TextField, Typography, Button } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { blue } from '@material-ui/core/colors';
import { sendEmail } from "../../redux/actions/resetPasswordAction";
import { ResetPasswordEmailReducer } from '../../redux/reducers/resetPasswordEmail';
import { object, string } from 'yup'
// import { string } from 'yup/lib/locale'
import { ToastContainer, toast, Zoom, Bounce } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import store from '../../redux/store'


// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'


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
        errors:{
            color:'red'
        },
        buttonStyle: {
            margin: '20px auto',
            background:'#257AAA'
        },
        emailForm: {
            border: 'none'
        },
        paperStyle: {
            padding:30,
            height:'fit-content',
            width:'50vw',
            margin:'80px auto'
        }

}));

const initialValues = {
    email:''
}

function ResetPasswordEmailForm(props){
    const loading = useSelector(state => state.sendEmail.isLoading)
const notify = (errors) => {
        // event.preventDefault();
        toast.success(<p>Your email sent successful!</p>, {position:toast.POSITION.TOP_CENTER})
    };
    const classes= useStyle();
    const [Email, setEmail] = useState({email:''})
    const [isLoading, SetIsLoading] = useState(false)
    let { email } = Email;
    // let { isLoading } = loading;


    const emailHandle = (e) => {
        setEmail({...Email, [e.target.name]:e.target.value});
        setLoading({...loading, isLoading:true});
    };


    // useEffect(() => {
    //     const loadingTime = setTimeout(() => {
    //         SetIsLoading(true);
    //     }, 1000)
    //     return () => {
    //         cleanTimeout(loadingTime)
    //         SetIsLoading(false);
    //     }
    // }, [])
    const handleSubmition = (values)=>{
        event.preventDefault()
        // alert(JSON.stringify(values, null, 2))
        // const data = {
        //     email:Email.email,
        //     isLoading:loading.isLoading
        // }
        console.log(values)
        // -----------  //
        props.sendEmail(values)
        // store.dispatch(sendEmail(data))
        setEmail({email:''})
        notify()
    }
        return (
            <Grid>
                <ToastContainer />
            {loading? ( <Typography className={classes.loadingHeader} variant="h5" > Loading ...</Typography> ):
            (
                <Paper className={classes.paperStyle}>
                    <Typography  className={classes.typographyColor} variant="h5">Forgot your password don't worry ?</Typography>
                    <Typography variant="h6" className={classes.typographyColor}>Enter email below and send you a link to reset your password.</Typography>
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
                             />
                            {touched.email && errors.email ? (<span className={classes.errors} >{errors.email }</span>) : null } 
                        </FormGroup>
                        <Button 
                            variant="contained"
                            type="submit"
                            maxWidth="sm"
                            color="primary"
                            className={classes.buttonStyle}
                            >Send</Button>
                            {/* <br /> */}
                        </Form>
                    )}
                    </Formik>
                    {/* <TextField id="standard-basic" value={ email } name='email' onChange={emailHandle} label="Email" placeholder="Enter Your email" fullWidth required /><br />
                    <Button variant="contained" color="primary" className={classes.buttonStyle} onClick={onsubmit}>Send</Button> */}
                </Paper>
            )
            }
            </Grid>
            
        )
    };
    const mapStateToProps = state =>({
    login: state.sendEmail
});

export default connect(mapStateToProps, {sendEmail})(ResetPasswordEmailForm)