import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Grid, Paper, TextField, Typography } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
export class ResetPasswordEmailForm extends Component {
    render() {
        const paperStyle = {
            padding:30,
            height:'fit-content',
            width:'50vw',
            margin:'80px auto'
        }
        const buttonStyle = {
            margin: '20px auto',
            background:'#257AAA'
        }
        const typographyColor = {
            color:'#257AAA',
            margin:'30px auto'
        }
        return (
            <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Typography align="center" style={typographyColor} variant="h5">Forgot your password don't worry ?</Typography>
                <Typography variant="h6" align="center" style={typographyColor}>Enter email below and send you a link to reset your password.</Typography>
                <TextField id="standard-basic" label="Email" placeholder="Enter Your email" fullWidth required /><br />
                <Button variant="contained" color="primary" style={buttonStyle}>
  Send
</Button>

            </Paper>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordEmailForm)
