import React from 'react';
import { CssBaseline, Paper, AppBar, Toolbar, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { getChats, getVisitorsMessages } from '../../redux/actions/ChatAction';
import { connect } from 'react-redux';
import MessageList from './Lists/MessageList';
import NewMessage from './Lists/NewMessage';

class ChatMessages extends React.Component {

    UNSAFE_componentWillMount () {
        this.props.getChats();
        this.props.getVisitorsMessages();
    }

render () {

    const chats = this.props.chats;
    const user = localStorage.getItem('userName')
    const vMessages = this.props.vmessages;

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square container="true">
                <Paper>
                    <Toolbar>
                        <List>
                            <ListItem>
                                <ListItemAvatar><Avatar alt="Profile Picture" src="" /></ListItemAvatar>
                                <ListItemText primary={user} secondary="Online"/>
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
}

const mapStateToProps= state => ({
    chats: state.chat.allchats,
    vmessages: state.chat.vmessages
})

export default connect(mapStateToProps, { getChats, getVisitorsMessages })(ChatMessages);