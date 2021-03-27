import React from 'react';
import { CssBaseline, Paper, AppBar, Toolbar, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';
import { getChats, getVisitorsMessages } from '../../redux/actions/ChatAction';
import { connect } from 'react-redux';
import MessageList from './Lists/MessageList';
import NewMessage from './Lists/NewMessage';
import socket from 'socket.io-client';
import LinearProgress from '@material-ui/core/LinearProgress';

const token = localStorage.getItem('barefootUserToken');
const idData = localStorage.getItem('userId');

// const io = socket.connect(`${process.env.REACT_APP_BACKEND_LINK}/chat/${idData}`, {
//     query: token,
//     loggedInUser:localStorage.getItem('id')
// })

function ChatMessages(props){
    // const [chats, setMessages] = React.useState([])
    // const [vMessages, setvMessages] = React.useState([])
    const io = props.io;
    React.useEffect(()=>{
        io.on('new_message', data => {
            setMessages([messages])
            console.log(data)
        });
        props.getChats();
        // io.on('request_support', messages=> {
        //     setvMessages([messages])
        // })
        
    }, [])

    const chats = props.chats;
    const user = localStorage.getItem('userName')
    const vMessages = props.vmessages;
    const pending = props.pending;
    const error = props.error;
    

    return (
        <React.Fragment>
            <CssBaseline />
            {pending === true ? <LinearProgress/> : <Paper square container="true">
                
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
             </Paper>}
            {pending === true ? <LinearProgress style={{boxSizing: 'border-box', padding: 50, width: '100%'}}/>  :<NewMessage io={io}/>}
        </React.Fragment>
    )
}

const mapStateToProps= state => ({
    chats: state.chat.allchats,
    vmessages: state.chat.vmessages,
    pending: state.chat.pending,
    error: state.chat.error
})

export default connect(mapStateToProps, { getChats, getVisitorsMessages })(ChatMessages);