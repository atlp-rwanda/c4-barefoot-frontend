import React from 'react';
import axios from 'axios';
import { Paper, Toolbar, Input, InputAdornment, IconButton, FormHelperText, CircularProgress, FormControl } from '@material-ui/core';
import { connect } from 'react-redux';
import { newMessageAction, supportResponds, getChats, getVisitorsMessages } from '../../../redux/actions/ChatAction'
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {Link} from 'react-router-dom';
import socket from 'socket.io-client';

const token = localStorage.getItem('barefootUserToken');
const idData = localStorage.getItem('userId');

const io = socket.connect(`${process.env.REACT_APP_BACKEND_LINK}/chat/${idData}`, {
    query: token,
    loggedInUser:localStorage.getItem('id')
})

function NewMessage(props) {
    const [message, setMessage] = React.useState('');
    const [vmessage, setvMessage] = React.useState('')
    const [image, setImage] = React.useState('')
    const [feedbackText, setFeedbackText] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [vimage, setvImage] = React.useState('')

    const senderId = localStorage.getItem('id');
    const handleClick = (e) => {
        const receiverId = localStorage.getItem('userId')
        if(message != ''){ 
            const messageData = {
                sender: senderId,
                receiver: receiverId,
                message: message,
                type: 'plain-text'
            }
            props.newMessageAction(messageData).then(() =>{
                setMessage('')
                setFeedbackText("Message sent!")
                props.getChats()
            }); 
            io.emit('send_message', messageData)
        }else if(image != ''){
            const messageData = {
                receiver: receiverId,
                message: image,
                type: 'image'
            }
            props.newMessageAction(messageData).then(() =>{
                setImage('')
                setMessage('')
                setFeedbackText("Image sent!")
                props.getChats()
            });
            io.emit('send_message', messageData)
        }else{
            e.preventDefault();
            setFeedbackText("Message can't be blank!")
        } 
    }

    const vhandleClick = (e) => {
        const receiverId = localStorage.getItem('userId')
        if(vmessage != ''){
            const messageData = {
                visitor: receiverId,
                message: vmessage,
                type: 'plain-text'
            }
            props.supportResponds(messageData).then(() =>{
                props.getVisitorsMessages()
                setvMessage('')
            });
            
        }else if(vimage != ''){
            const messageData = {
                visitor: receiverId,
                message: vimage,
                type: 'image'
            }
            props.supportResponds(messageData).then(() =>{
                props.getVisitorsMessages()
                setvMessage('')
            });
        }else{
            e.preventDefault();
            setFeedbackText("Message can't be blank!")
        } 
    }
    const visitor = localStorage.getItem('visit')
    return (
        <div>
            {!visitor ? <Paper position="fixed" style={{bottom:0, top: 'auto', left: 0, right: 0, borderRadius: 10, marginTop: '7px', padding: '10px', boxSizing: 'border-box'}}>
                <Toolbar position='fixed' color="primary">
                    <Input border={0} 
                        variant="outlined" 
                        style={{width: '100%', borderRadius: 50}}
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        name='message'
                        endAdornment={
                            <InputAdornment position="end">
                                
                                <input 
                                    id="file" 
                                    name="message_img" 
                                    type="file"
                                    hidden={true}
                                    onChange={(e) => {
                                        const messageimg = e.target.files[0]
                                        const formData = new FormData()
                                        formData.append('upload_preset', process.env.UPLOAD_PRESET)
                                        formData.append('file', messageimg)
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
                                <IconButton onClick={handleClick}><Link style={{textDecoration: 'none', color: 'inherit'}}><SendIcon/></Link></IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText>{feedbackText}</FormHelperText>
                </Toolbar>
            </Paper> :
            <Paper position="fixed" style={{bottom:0, top: 'auto', left: 0, right: 0, borderRadius: 10, marginTop: '7px', padding: '10px', boxSizing: 'border-box'}}>
                <Toolbar position='fixed' color="primary">
                    <FormControl>
                        <Input border={0} 
                            variant="outlined" 
                            style={{width: '100%', borderRadius: 50}}
                            value={vmessage}
                            onChange={(e)=>setvMessage(e.target.value)}
                            name='vmessage'
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
                                            setvImage(res.data.secure_url)
                                        })
                                        .catch(err => {
                                            setLoading(false)
                                            setFeedbackText(err.message)
                                        })
                                    }}
                                />
                                <label htmlFor="file">{loading === false ? <AttachFileIcon/>: <CircularProgress color="primary" />}</label>
                                    <IconButton onClick={vhandleClick}><Link style={{textDecoration: 'none', color: 'inherit'}}><SendIcon/></Link></IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText>{feedbackText}</FormHelperText>
                    </FormControl>
                </Toolbar>
            </Paper>}
        </div>
    )
}

export default connect(null, { newMessageAction, supportResponds, getChats, getVisitorsMessages })(NewMessage);