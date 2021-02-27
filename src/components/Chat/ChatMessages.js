import React from 'react';
import { CssBaseline, Paper, AppBar, Toolbar, Input, IconButton, InputAdornment, List, ListItem, ListItemAvatar, Avatar, ListItemText, Box  } from '@material-ui/core';
import { getChats } from '../../redux/actions/ChatAction';
import { connect } from 'react-redux';
import MessageList from './MessageList';

class ChatMessages extends React.Component {

    UNSAFE_componentWillMount () {
        this.props.getChats();
    }

render () {

    const chats = this.props.chats;

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square container="true">
                <Paper>
                    <Toolbar>
                        <List>
                            <ListItem>
                                <ListItemAvatar><Avatar alt="Profile Picture" src="" /></ListItemAvatar>
                                <ListItemText primary="Name" secondary="Online"/>
                            </ListItem>
                        </List>
                    </Toolbar>
                </Paper>
                <MessageList chats={chats}/>
            </Paper>
            <Paper position="fixed" style={{bottom:0, top: 'auto', left: 0, right: 0, borderRadius: 50, marginTop: '7px', padding: '10px', boxSizing: 'border-box'}}>
                <Toolbar position='fixed' color="primary">
                    <Input border={0} variant="outlined" style={{width: '100%', borderRadius: 50}}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton><p>Attach</p></IconButton><IconButton><p>Send</p></IconButton>
                            </InputAdornment>
                        }
                    />
                </Toolbar>
            </Paper>
        </React.Fragment>
    )
}
}

const mapStateToProps= state => ({
    chats: state.chat.allchats
})

export default connect(mapStateToProps, { getChats })(ChatMessages);