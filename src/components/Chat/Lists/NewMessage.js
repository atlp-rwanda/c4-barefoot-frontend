import React from 'react';
import { Paper, Toolbar, Input, InputAdornment, IconButton } from '@material-ui/core';
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
            image: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.vhandleClick = this.vhandleClick.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        const receiverId = localStorage.getItem('userId')
        console.log(receiverId)
        const messageData = {
            receiver: receiverId,
            message: this.state.message,
            type: 'plain-text'
        }
        this.props.newMessageAction(messageData);
    }
    handleUpload = () => {
        const receiverId = localStorage.getItem('userId')
        const messageData = {
            receiver: receiverId,
            message: this.state.image,
            type: 'image-url'
        }
        
        this.props.newMessageAction(messageData);
    }

    vhandleClick = () => {
        const receiverId = localStorage.getItem('userId')
        console.log(receiverId)
        const messageData = {
            visitor: receiverId,
            message: this.state.vmessage,
            type: 'plain-text'
        }
        console.log(messageData)
        this.props.supportResponds(messageData);
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
                                    <IconButton onClick={this.handleUpload}>
                                    <AttachFileIcon/>
                                        
                                    </IconButton><IconButton onClick={this.handleClick}><a href='' style={{textDecoration: 'none', color: 'inherit'}}><SendIcon/></a></IconButton>
                                </InputAdornment>
                            }
                        />
                    </Toolbar>
                </Paper> :
                <Paper position="fixed" style={{bottom:0, top: 'auto', left: 0, right: 0, borderRadius: 10, marginTop: '7px', padding: '10px', boxSizing: 'border-box'}}>
                    <Toolbar position='fixed' color="primary">
                        <Input border={0} 
                            variant="outlined" 
                            style={{width: '100%', borderRadius: 50}}
                            value={this.state.vmessage}
                            onChange={this.handleChange}
                            name='vmessage'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton><AttachFileIcon/></IconButton><IconButton onClick={this.vhandleClick}><a href='' style={{textDecoration: 'none', color: 'inherit'}}><SendIcon/></a></IconButton>
                                </InputAdornment>
                            }
                        />
                    </Toolbar>
                </Paper>}
            </div>
        )
    }
}

export default connect(null, { newMessageAction, supportResponds })(NewMessage);