import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

export class NewPassword extends Component {
    render() {
        const NewMessage = ()=> {
            return(
                <p>Your password reset successful!</p>
            )};

        const message = 'Your password reset successful!'
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

    const notify = () => {
        toast.success(<NewMessage />, {position:toast.POSITION.TOP_CENTER})
    }
        return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Typography align="center" style={typographyColor} variant="h5">Reset Password</Typography>

                    <TextField id="standard-basic" type="password" placeholder="New password" label="New Password" fullWidth required /><br />
                    <TextField id="standard-basic" type="password" placeholder="Confurm password" label="Confurm Password" fullWidth required  /><br />
                    <Button variant="contained" color="primary" style={buttonStyle}onClick={notify}>Send</Button>
                </Paper>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword)
