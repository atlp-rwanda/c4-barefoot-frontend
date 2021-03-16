import React from 'react';
import { CssBaseline, Paper, AppBar, Toolbar, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { getChats, getVisitorsMessages } from '../../redux/actions/ChatAction';
import { connect } from 'react-redux';
import MessageList from './Lists/MessageList';
import NewMessage from './Lists/NewMessage';

function ChatMessages(props){

        props.getChats();
        props.getVisitorsMessages();

    const chats = props.chats;
    const user = localStorage.getItem('userName')
    const vMessages = props.vmessages;

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square container="true">
                <Paper>
                    <Toolbar>
                        <List>
                            <ListItem>
                                <ListItemAvatar><Avatar alt="Profile Picture" src="" /></ListItemAvatar>
                                <ListItemText primary={user} secondary="User"/>
                            </ListItem>
                        </List>
                    </Toolbar>
                </Paper>
                <MessageList chats={chats} vmessages={vMessages}/>
            </Paper>
            <NewMessage/>
        </React.Fragment>
    )
}

const mapStateToProps= state => ({
    chats: state.chat.allchats,
    vmessages: state.chat.vmessages
})

export default connect(mapStateToProps, { getChats, getVisitorsMessages })(ChatMessages);