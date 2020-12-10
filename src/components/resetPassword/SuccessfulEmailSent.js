import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import { blue, green } from '@material-ui/core/colors'
export class SuccessFulEmailSent extends Component {
    render() {
        const paperStyle = {
            padding:30,
            height:'fit-content',
            width:'50vw',
            margin:'80px auto'
        }
       
        const typographyColorSuccess = {
            color:'white',
            margin:'30px auto',
            backgroundColor:'#6FCF97',
            padding:'10px'
        }
        const typographySuccessColor = {
            color:'white',
            margin:'30px auto'
        }
        const typographyColor = {
            color:'#257AAA',
            margin:'30px auto'
        }
        return (
            <Grid>
            <Paper elevation={10} style={paperStyle}>
                
                <Paper elevation={12} style={typographyColorSuccess}>
                    <Typography align="center" style={typographySuccessColor } variant="h7">An mail containing link to reset password has been successful sent.</Typography>
                </Paper>
                <Typography variant="h6" align="center" style={typographyColor}>Please check your inbox and click on reset password button.</Typography>
            </Paper>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessFulEmailSent)
