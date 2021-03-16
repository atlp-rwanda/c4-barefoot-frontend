import React from 'react';
import { Paper, Toolbar, Input, InputAdornment, IconButton, FormHelperText } from '@material-ui/core';
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
            feedbackText: ''
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
        if(this.state.message === ''){
            this.setState({
                feedbackText: "Message can't be blank!"
            })
        }else{
            const messageData = {
                receiver: receiverId,
                message: this.state.message,
                type: 'plain-text'
            }
            this.props.newMessageAction(messageData);
        } 
    }
    handleUpload = () => {
        
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
                                    
                                        
                                    </IconButton><IconButton onClick={this.handleClick}><a href='' style={{textDecoration: 'none', color: 'inherit'}}><SendIcon/></a></IconButton>
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
                                    <IconButton><AttachFileIcon/></IconButton><IconButton onClick={this.vhandleClick}><a href='' style={{textDecoration: 'none', color: 'inherit'}}><SendIcon/></a></IconButton>
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