import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import { blue, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
    successGrid:{
        width:'100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding:'10px'
    },
    paperStyle: {
            padding:'30px',
            height:'fit-content',
            margin:'80px auto',
            justifyContent:'center',
            alignItems: 'center',
        },
        typographyColorSuccess: {
            color:'white',
            margin:'30px auto',
            backgroundColor:'#6FCF97',
            padding:'10px'
        },
        typographySuccessColor: {
            color:'white',
            margin:'30px auto',
            align:"center" 
        },
        typographyColor: {
            color:'#257AAA',
            margin:'30px auto',
            align:"center",
            fontSize:'2rem'
        }

        // https://barefoot-nomad-app-v1.herokuapp.com/api/v1/user/request-reset-password
        //post

}));
export default function SuccessFulEmailSent(){
    // const token = props.history.location
    // console.log(token)
    const classes = useStyle();
        return (
            <Grid item className={classes.successGrid} maxWidth="sm">
                <Paper sx={12} sm={8} md={4} elevation={10} className={classes.paperStyle}>
                    <Typography className={classes.typographyColor}>An mail containing link to reset password has been successful sent. Please check your inbox and click on reset password button.</Typography>
                </Paper>
            </Grid>
        )
    };
