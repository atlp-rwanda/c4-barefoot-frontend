import React from 'react';
import {useStyles} from '../ChatStyles';
import { Typography, FormControl, Input, InputAdornment, IconButton, FormHelperText} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

function RecordEmail(){
    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [feedbackText, setFeedbackText] = React.useState(null)

    const handleSubmit = () => {
        if(email === ''){
            setFeedbackText('Type your email please!')
        }else {
            localStorage.setItem('visitorEmail', email)
        }
    }
    return (
        <div>
            <div className={classes.secondform}>
                    <Typography variant='h6' className={classes.supporttitle}>Barefoot Nomad Support</Typography>
                    <hr/>
                    <Typography style={{padding: 10, textAlign: 'center'}}>Hi there,<br></br>We need your Email to identify you.</Typography>
                    <FormControl className={classes.form}>
                        <Input 
                            variant="filled" 
                            style={{width: '100%', borderRadius: 50}}
                            label='Enter Your Email...'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={handleSubmit}><SendIcon/></IconButton>
                                </InputAdornment>
                            }
                            
                        />
                        <FormHelperText>{feedbackText}</FormHelperText>
                    </FormControl>
            </div>
        </div>
    )
}

export default RecordEmail;