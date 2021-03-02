import React from 'react';
import {Typography, FormControl, Container, InputLabel, Input, FormHelperText, Button, InputAdornment, IconButton} from '@material-ui/core';
import {useStyles} from '../ChatStyles';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {connect} from 'react-redux';
import {visitorsMessage} from '../../../redux/actions/ChatAction';

function NewForm(props){
    const classes = useStyles();
    const [message, setMessage] = React.useState('');
    const [feedbackText, setFeedbackText] = React.useState(null)

    const handleSubmit = () => {
        if(message === ''){
            setFeedbackText('Please type something!')
        }else{
            const senderEmail = localStorage.getItem('visitorEmail');
            const messageData = {
                sender: senderEmail,
                receiver: 'support-team',
                message: message,
                
            }
            props.visitorsMessage(messageData)
            setFeedbackText('Message sent!')
        }
    }
    return (
        <div>
            <div className={classes.secondform}>
                <Typography variant='h6' className={classes.supporttitle}>Barefoot Nomad Support</Typography>
                <hr/>
                <Container className={classes.vChatContainer}>
                    <ListMessages/>
                </Container>
                <FormControl className={classes.form}>
                    <Input 
                        variant="outlined" 
                        style={{width: '100%', borderRadius: 50}}
                        name='message'
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton><AttachFileIcon/></IconButton><IconButton onClick={handleSubmit}><SendIcon/></IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText>{feedbackText}</FormHelperText>
                </FormControl>
            </div>
        </div>
    )
}

export default connect(null, { visitorsMessage })(NewForm);