import React, { useState, useEffect, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import LanguageIcon from '@material-ui/icons/Language';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
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
        marginTop: '3em',
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
    },
}));

const validationSchema = yup.object().shape({
    first_name: yup
        .string()
        .required(),
    last_name: yup
        .string('Enter your First Name')
        .required(),
    language: yup
        .string('Enter Your Preferred language')
        .required(),
    address: yup
        .string('Enter Your address')
        .required(),
    occupation: yup
        .string('Enter Your occupation')
        .required(),
    line_manager: yup
        .string('Enter your Line manager')
        .required(),
});

const UserProfile = () => {
    const classes = useStyles();
    const [edit, setEdit] = useState(true);
    const onChange = (e) => {
        const profile_picture = e.target.file;
        const formData = new FormData()
        formData.append('upload_preset', 'l9dhzfdi')
        formData.append('file', profile_picture)
        setLoading(true)
        setPhoto('')
        axios.post(' https://api.cloudinary.com/v1_1/mjackson/image/upload', formData)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }

    return (
        <React.Fragment >
            <div className={classes.root}>
                <Avatar src={Formik.profile_picture} className={classes.large} />
                <Button variant="contained" color="primary" >
                    <label onChange={onChange}>
                        <input type="file" style={{ display: "none" }} />
                        <PhotoCameraIcon /> Change Profile Picture
                    </label>
                </Button>
                <div>
                    <Formik
                        initialValues={{
                            first_name: '',
                            last_name: '',
                            email: '',
                            language: '',
                            address: '',
                            occupation: '',
                            line_manager: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className={classes.form}>
                                <InputLabel htmlFor="first_name" className={classes.inputLabel}> <AccountCircleRoundedIcon color="primary" /> First Name </InputLabel>
                                <Field
                                    error={errors.first_name && touched.first_name ? true : false}
                                    as={TextField}
                                    fullWidth
                                    id="first_name"
                                    name="first_name"
                                    InputProps={{
                                        classes: {
                                            disabled: classes.disabledTextField
                                        },
                                    }}
                                    onMouseEnter={() => { setEdit(false); }}
                                    onMouseLeave={() => { setEdit(true); }}
                                    disabled={edit}
                                    helperText={errors.first_name || null}
                                />
                                <InputLabel htmlFor="last_name" className={classes.inputLabel}> <AccountCircleRoundedIcon color="primary" /> Last Name </InputLabel>
                                <Field
                                    error={errors.last_name && touched.last_name ? true : false}
                                    as={TextField}
                                    fullWidth
                                    id="last_name"
                                    name="last_name"
                                    InputProps={{
                                        classes: {
                                            disabled: classes.disabledTextField
                                        },
                                    }}
                                    onMouseEnter={() => { setEdit(false); }}
                                    onMouseLeave={() => { setEdit(true); }}
                                    disabled={edit}
                                    helperText={errors.last_name || null}
                                />
                                <InputLabel htmlFor="email" className={classes.inputLabel}><EmailIcon color="primary" /> Email </InputLabel>
                                <Field
                                    error={errors.email && touched.email ? true : false}
                                    as={TextField}
                                    fullWidth
                                    id="email"
                                    name="email"
                                    InputProps={{
                                        classes: {
                                            disabled: classes.disabledTextField
                                        },
                                    }}
                                    disabled
                                    helperText={errors.email || null}
                                />
                                <InputLabel htmlFor="language" className={classes.inputLabel}><LanguageIcon color="primary" />Preferred Language</InputLabel>
                                <Field
                                    error={errors.language && touched.language ? true : false}
                                    as={TextField}
                                    fullWidth
                                    id="language"
                                    name="language"
                                    InputProps={{
                                        classes: {
                                            disabled: classes.disabledTextField
                                        },
                                    }}
                                    onMouseEnter={() => { setEdit(false); }}
                                    onMouseLeave={() => { setEdit(true); }}
                                    disabled={edit}
                                    helperText={errors.language || null}
                                />
                                <InputLabel htmlFor="address" className={classes.inputLabel}><LocationOnIcon color="primary" /> Office Location </InputLabel>
                                <Field
                                    error={errors.address && touched.address ? true : false}
                                    as={TextField}
                                    fullWidth
                                    id="address"
                                    name="address"
                                    InputProps={{
                                        classes: {
                                            disabled: classes.disabledTextField
                                        },
                                    }}
                                    onMouseEnter={() => { setEdit(false); }}
                                    onMouseLeave={() => { setEdit(true); }}
                                    disabled={edit}
                                    helperText={errors.first_name || null}
                                />
                                <InputLabel htmlFor="occupation" className={classes.inputLabel}><AccountCircleRoundedIcon color="primary" /> Occupation </InputLabel>
                                <Field
                                    error={errors.occupation && touched.occupation ? true : false}
                                    as={TextField}
                                    as={TextField}
                                    fullWidth
                                    id="occupation"
                                    name="occupation"
                                    InputProps={{
                                        classes: {
                                            disabled: classes.disabledTextField
                                        },
                                    }}
                                    onMouseEnter={() => { setEdit(false); }}
                                    onMouseLeave={() => { setEdit(true); }}
                                    disabled={edit}
                                    helperText={errors.first_name || null}
                                />
                                <InputLabel htmlFor="line_manager" className={classes.inputLabel}><AccountCircleRoundedIcon color="primary" /> Line Manager </InputLabel>
                                <Field
                                    error={errors.line_manager && touched.line_manager ? true : false}
                                    as={TextField}
                                    fullWidth
                                    id="line_manager"
                                    name="line_manager"
                                    InputProps={{
                                        classes: {
                                            disabled: classes.disabledTextField
                                        },
                                    }}
                                    onMouseEnter={() => { setEdit(false); }}
                                    onMouseLeave={() => { setEdit(true); }}
                                    disabled={edit}
                                    helperText={errors.first_name || null}
                                />
                                <div className={classes.btnGrp} spacing={10}>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        className={classes.btn}
                                    >
                                        Save
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

export default UserProfile;