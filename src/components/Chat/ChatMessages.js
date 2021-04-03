import React from 'react';
import { CssBaseline, Paper, AppBar, Toolbar, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Snackbar } from '@material-ui/core';
import { getChats, getVisitorsMessages } from '../../redux/actions/ChatAction';
import { connect } from 'react-redux';
import MessageList from './Lists/MessageList';
import NewMessage from './Lists/NewMessage';
import socket from 'socket.io-client';
import LinearProgress from '@material-ui/core/LinearProgress';
import MuiAlert from '@material-ui/lab/Alert';
import io from './io';
// import { io } from './io';
 

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ChatMessages(props){
    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState('')
    const theerror = props.error;
    React.useEffect(()=>{
        props.getChats();
        props.getVisitorsMessages()
        io.on('new_message', data =>{
            props.getChats();
            console.log('User message', data)
        })
        io.on('support_message', data=>{
            props.getVisitorsMessages()
            console.log("Visitor's messages",data)
        })
       
        
        if(theerror){
            setError(theerror)
            setOpen(true)
        }
        
    }, [])


    const chats = props.chats;
    const user = localStorage.getItem('userName')
    const vMessages = props.vmessages;
    const pending = props.pending;
   

    
    
    const handleClose = () => {
    
        setOpen(false);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            {error && <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                {error}
                </Alert>
            </Snackbar>}
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
            {pending === true ? <LinearProgress style={{boxSizing: 'border-box', padding: 50, width: '100%'}}/>  :<NewMessage/>}
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