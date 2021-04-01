import React, { useState, useEffect, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Skeleton from '@material-ui/lab/Skeleton';
import LanguageIcon from '@material-ui/icons/Language';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { fetchUserProfile, updateUserProfile, closeSnackbar } from '../../redux/actions/userProfileAction';

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
        marginRight: 100
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
        .required()
});

function Alert(props) {
    return < MuiAlert elevation={6} variant="filled" {...props} />
};

const UserProfile = (props) => {
    const [edit, setEdit] = useState(true);
    useEffect(() => {
        props.fetchUserProfile();
    }, []);

    let data = null
    if (props.userProfile.user.data) {
        let result = props.userProfile.user.data;
        const { id, username, refreshtoken, verified, ...rest } = result
        data = rest
    }
    const classes = useStyles();
    const onChange = (e) => {
        const profile_picture = e.target.files[0];
        const formData = new FormData()
        formData.append('upload_preset', 'l9dhzfdi')
        formData.append('file', profile_picture)
        props.updateUserProfile({ profile_picture: formData })
    }

    const handleClose = () => props.closeSnackbar();

    return (
        <React.Fragment >
            {props.userProfile.loading && !data ? (
                <div className={classes.root} id="#skeletonContainer">
                    <Skeleton animation="wave" variant="circle" className={classes.large} />
                    <Skeleton animation="wave" height={80} width={150} />
                    <Skeleton animation="wave" className={classes.form} height={80} />
                    <Skeleton animation="wave" className={classes.form} height={80} />
                    <Skeleton animation="wave" className={classes.form} height={80} />
                    <Skeleton animation="wave" className={classes.form} height={80} />
                    <Skeleton animation="wave" className={classes.form} height={80} />
                    <Skeleton animation="wave" className={classes.form} height={80} />
                    <Skeleton animation="wave" className={classes.form} height={80} />
                </div>
            ) : (
                <div className={classes.root}>
                    <Avatar src={data ? data.profile_picture : ""} className={classes.large} />
                    <Button variant="contained" color="primary" >
                        <label>
                            <input id="file" type="file" style={{ display: "none" }} accept="image/png, image/jpeg" onChange={onChange} />
                            {
                                props.updated.profileLoading ? (
                                    <CircularProgress color="secondary" />
                                ) :
                                    <div id="profilePicture"> <PhotoCameraIcon /> Change Profile Picture </div>}
                        </label>
                    </Button>
                    < div >
                        <Snackbar
                            open={props.updated.snackbarOpen}
                            autoHideDuration={5000}
                            onClose={handleClose}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        >
                            <Alert
                                severity={props.updated.error ? "error" : "success"}
                                onClose={handleClose}
                            >{props.updated.error || props.updated.successMsg}</Alert>
                        </Snackbar>
                        <Formik
                            enableReinitialize
                            validationSchema={validationSchema}
                            initialValues={data ?
                                ({
                                    first_name: data.first_name,
                                    last_name: data.last_name,
                                    email: data.email,
                                    language: data.language,
                                    address: data.address,
                                    occupation: data.occupation,
                                    line_manager: data.line_manager
                                })
                                : ({})
                            }
                            onSubmit={values => {
                                const { email, line_manager, ...rest } = values
                                props.updateUserProfile(rest)
                            }}
                        >
                            {({ errors, touched }) => (
                                < Form className={classes.form}>
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
                                        helperText={errors.address || null}
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
                                        helperText={errors.occupation || null}
                                    />
                                    <InputLabel htmlFor="line_manager" className={classes.inputLabel}><AccountCircleRoundedIcon color="primary" /> Line Manager </InputLabel>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        id="line_manager"
                                        name="line_manager"
                                        InputProps={{
                                            classes: {
                                                disabled: classes.disabledTextField
                                            },
                                        }}
                                        disabled
                                    />
                                    <div className={classes.btnGrp} spacing={10}>
                                        <Button
                                            type="submit"
                                            color="primary"
                                            variant="contained"
                                            className={classes.btn}
                                        >
                                            {props.updated.loading ? (
                                                <div>
                                                    <CircularProgress color="secondary" />
                                                </div>
                                            ) : "Save"}
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
            )
            }

        </React.Fragment >
    )
}

const mapStateToProps = state => ({
    userProfile: state.fetchUserProfile,
    updated: state.updateUserProfile
})

export { UserProfile, Alert };
export default connect(mapStateToProps, { fetchUserProfile, updateUserProfile,closeSnackbar })(UserProfile);