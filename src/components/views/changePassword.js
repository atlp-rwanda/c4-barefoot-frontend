import React, { useState, useEffect, useRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    root: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5em',
    },
    form: {
        [theme.breakpoints.up('lg')]: {
            width: '30vw',
        },
        width: '70vw',
    },
    disabledTextField: {
        color: "black",
        borderBottom: 0,
        "&:before": {
            borderBottom: 0
        }
    },
    inputLabel: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '5px'
    },
    btnGrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px'
    },
    btn: {
        width: theme.spacing(20),
        marginTop: '20px'
    }
}));

const validationSchema = yup.object().shape({
    current_password: yup
        .string('Enter your password')
        .required()
        .min(8, 'Password should be of minimum 8 characters length'),
    new_password: yup
        .string('Enter your password')
        .required()
        .min(8, 'Password should be of minimum 8 characters length'),
});

const ChangePassword = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    return (
        <React.Fragment >
            <div className={classes.root}>
                <h2> Change your password</h2>
                <div>
                    <Formik
                        initialValues={{
                            current_password: "",
                            new_password: ""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className={classes.form}>
                                <InputLabel htmlFor="current_password" className={classes.inputLabel}> <LockIcon color="primary" /> Current Password </InputLabel>
                                <Field
                                    as={TextField}
                                    error={errors.current_password && touched.current_password ? true : false}
                                    fullWidth
                                    id="current_password"
                                    name="current_password"
                                    type={showPassword ? 'text' : 'password'}
                                    helperText={errors.current_password || null}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <InputLabel htmlFor="new_password" className={classes.inputLabel}> <LockIcon color="primary" /> New Password </InputLabel>
                                <Field
                                    as={TextField}
                                    error={errors.new_password && touched.new_password ? true : false}
                                    fullWidth
                                    id="new_password"
                                    name="new_password"
                                    type={showPassword ? 'text' : 'password'}
                                    helperText={errors.new_password || null}
                                    InputProps={{
                                        endAdornment: (
                                            < InputAdornment position="end" >
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}

                                />
                                <div className={classes.btnGrp} spacing={10}>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        className={classes.btn}
                                    >
                                        Submit
                        </Button>
                                    <Button
                                        type="reset"
                                        color="secondary"
                                        variant="contained"
                                        className={classes.btn}
                                    >
                                        Cancel
                        </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </React.Fragment >
    )
}

export default ChangePassword;