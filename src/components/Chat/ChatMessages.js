import React from 'react';
import { CssBaseline, Paper, AppBar, Toolbar, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';
import { getChats, getVisitorsMessages } from '../../redux/actions/ChatAction';
import { connect } from 'react-redux';
import MessageList from './Lists/MessageList';
import NewMessage from './Lists/NewMessage';
import socket from 'socket.io-client';

const token = localStorage.getItem('barefootUserToken');
const idData = localStorage.getItem('userId');

const io = socket.connect(`${process.env.REACT_APP_BACKEND_LINK}/chat/${idData}`, {
    query: token,
    loggedInUser:localStorage.getItem('id')
})

function ChatMessages(props){
    // const [chats, setMessages] = React.useState([])
    // const [vMessages, setvMessages] = React.useState([])
    React.useEffect(()=>{
        props.getChats();
        io.on('new_message', messages => {
            // setMessages([messages])
            console.log(messages)
        });
        // io.on('request_support', messages=> {
        //     setvMessages([messages])
        // })
        
    }, [])

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