import React from 'react';
import { Paper, Toolbar, Input, InputAdornment, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { newMessageAction } from '../../../redux/actions/ChatAction'

class NewMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
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

    render() {
        return (
            <div>
                <Paper position="fixed" style={{bottom:0, top: 'auto', left: 0, right: 0, borderRadius: 10, marginTop: '7px', padding: '10px', boxSizing: 'border-box'}}>
                    <Toolbar position='fixed' color="primary">
                        <Input border={0} 
                            variant="outlined" 
                            style={{width: '100%', borderRadius: 50}}
                            value={this.state.message}
                            onChange={this.handleChange}
                            name='message'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton><p>Attach</p></IconButton><IconButton onClick={this.handleClick}><a href='' style={{textDecoration: 'none', color: 'inherit'}}>Send</a></IconButton>
                                </InputAdornment>
                            }
                        />
                    </Toolbar>
                </Paper>
            </div>
        )
    }
}

export default connect(null, { newMessageAction })(NewMessage);