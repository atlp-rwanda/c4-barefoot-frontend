import React from 'react';
import axios from 'axios';
import { Paper, Toolbar, Input, InputAdornment, IconButton, FormHelperText, CircularProgress, FormControl } from '@material-ui/core';
import { connect } from 'react-redux';
import { newMessageAction, supportResponds } from '../../../redux/actions/ChatAction'
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';


class NewMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            vmessage: '',
            image: '',
            feedbackText: '',
            loading: false,
            vimage: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.vhandleClick = this.vhandleClick.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        const receiverId = localStorage.getItem('userId')
        if(this.state.message != ''){
            const messageData = {
                receiver: receiverId,
                message: this.state.message,
                type: 'plain-text'
            }
            this.props.newMessageAction(messageData);
            
        }else if(this.state.image != ''){
            const messageData = {
                receiver: receiverId,
                message: this.state.image,
                type: 'image'
            }
            this.props.newMessageAction(messageData);
        }else{
            this.setState({
                feedbackText: "Message can't be blank!"
            })
        } 
    }

    vhandleClick = () => {
        const receiverId = localStorage.getItem('userId')
        if(this.state.vmessage != ''){
            const messageData = {
                receiver: receiverId,
                message: this.state.vmessage,
                type: 'plain-text'
            }
            this.props.newMessageAction(messageData);
            
        }else if(this.state.vimage != ''){
            const messageData = {
                receiver: receiverId,
                message: this.state.vimage,
                type: 'image'
            }
            this.props.newMessageAction(messageData);
        }else{
            this.setState({
                feedbackText: "Message can't be blank!"
            })
        } 
    }

    render() {
        const visitor = localStorage.getItem('visit')
        return (
            <div>
                {!visitor ? <Paper position="fixed" style={{bottom:0, top: 'auto', left: 0, right: 0, borderRadius: 10, marginTop: '7px', padding: '10px', boxSizing: 'border-box'}}>
                    <Toolbar position='fixed' color="primary">
                        <Input border={0} 
                            variant="outlined" 
                            style={{width: '100%', borderRadius: 50}}
                            value={this.state.message}
                            onChange={this.handleChange}
                            name='message'
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
                                            this.setState({loading: true})            
                                            axios.post(process.env.IMAGE_UPLOAD_LINK, formData)
                                            .then(res => {
                                                this.setState({loading: false}) 
                                                this.setState({image: res.data.secure_url})
                                            })
                                            .catch(err => {
                                                this.setState({
                                                    loading: false,
                                                    feedbackText: err.message
                                                })
                                            })
                                        }}
                                    />
                                    <label htmlFor="file">{this.state.loading === false ? <AttachFileIcon/>: <CircularProgress color="primary" />}</label>
                                    <IconButton onClick={this.handleClick}><a href='' style={{textDecoration: 'none', color: 'inherit'}}><SendIcon/></a></IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText>{this.state.feedbackText}</FormHelperText>
                    </Toolbar>
                </Paper> :
                <Paper position="fixed" style={{bottom:0, top: 'auto', left: 0, right: 0, borderRadius: 10, marginTop: '7px', padding: '10px', boxSizing: 'border-box'}}>
                    <Toolbar position='fixed' color="primary">
                        <FormControl>
                            <Input border={0} 
                                variant="outlined" 
                                style={{width: '100%', borderRadius: 50}}
                                value={this.state.vmessage}
                                onChange={this.handleChange}
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
                                            this.setState({loading: true})            
                                            axios.post(process.env.IMAGE_UPLOAD_LINK, formData)
                                            .then(res => {
                                                this.setState({
                                                    loading: false,
                                                    vimage: res.data.secure_url
                                                })
                                            })
                                            .catch(err => {
                                                this.setState({
                                                    loading: false,
                                                    feedbackText: err.message
                                                })
                                            })
                                        }}
                                    />
                                    <label htmlFor="file">{this.state.loading === false ? <AttachFileIcon/>: <CircularProgress color="primary" />}</label>
                                        <IconButton onClick={this.vhandleClick}><a href='' style={{textDecoration: 'none', color: 'inherit'}}><SendIcon/></a></IconButton>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText>{this.state.feedbackText}</FormHelperText>
                        </FormControl>
                    </Toolbar>
                </Paper>}
            </div>
        )
    }
}

export default connect(null, { newMessageAction, supportResponds })(NewMessage);