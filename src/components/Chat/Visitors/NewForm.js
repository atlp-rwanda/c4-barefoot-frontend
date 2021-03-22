import React from 'react';
import axios from 'axios';
import {Typography, FormControl, Container, InputLabel, Input, FormHelperText, Button, InputAdornment, IconButton, CircularProgress} from '@material-ui/core';
import {useStyles} from '../ChatStyles';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {connect} from 'react-redux';
import {visitorsMessage, getSupportResponse} from '../../../redux/actions/ChatAction';
import ListMessages from './ListMessages';

function NewForm(props){
    const classes = useStyles();
    const [message, setMessage] = React.useState('');
    const [feedbackText, setFeedbackText] = React.useState(null);
    const [loading, setLoading] = React.useState(false)
    const [image, setImage] = React.useState('')
    const messages = props.messages;
    React.useEffect(()=>{
        props.getSupportResponse();
    }, [])
    const handleSubmit = () => {
        if(message != ''){
            const senderEmail = localStorage.getItem('visitorEmail');
            const messageData = {
                sender: senderEmail,
                receiver: 'support-team',
                message: message,
                type: 'plain-text'
            }
            props.visitorsMessage(messageData).then(() => {
                props.getSupportResponse();
            });
            setFeedbackText('Message sent!');
            setMessage('')
        }else if(image != ''){
            const senderEmail = localStorage.getItem('visitorEmail');
            const messageData = {
                sender: senderEmail,
                receiver: 'support-team',
                message: image,
                type: 'image'
            }
            props.visitorsMessage(messageData).then(() => {
                props.getSupportResponse();
            });
            setFeedbackText('Image sent!');
            setMessage('')
        }else{
            setFeedbackText('Please type something!')
        }
    }
    return (
        <div>
            <div className='secondform'>
                <Typography variant='h6' className={classes.supporttitle}>Barefoot Nomad Support</Typography>
                <hr/>
                <Container className={classes.vChatContainer}>
                    <ListMessages messages={messages}/>
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
                                <input 
                                    id="file" 
                                    name="message_img" 
                                    type="file"
                                    hidden={true}
                                    onChange={(e) => {
                                        const profile_picture = e.target.files[0]
                                        const formData = new FormData()
                                        formData.append('upload_preset', process.env.UPLOAD_PRESET)
                                        formData.append('file', profile_picture)
                                        setLoading(true)            
                                        axios.post(process.env.IMAGE_UPLOAD_LINK, formData)
                                        .then(res => {
                                            setLoading(false) 
                                            setImage(res.data.secure_url)
                                        })
                                        .catch(err => {
                                            setLoading(false)
                                            setFeedbackText(err.message)
                                        })
                                    }}
                                />
                                <label htmlFor="file">{loading === false ? <AttachFileIcon/>: <CircularProgress color="primary" />}</label>
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

const mapStateToProps = (state) => ({
    messages: state.chat.supportresponse
})

export default connect(mapStateToProps, { visitorsMessage, getSupportResponse })(NewForm);