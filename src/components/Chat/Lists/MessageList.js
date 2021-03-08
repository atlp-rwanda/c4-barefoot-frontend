import React from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { useStyles } from '../ChatStyles';
import { connect } from 'react-redux';
import { Skeleton } from '@material-ui/lab'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MessageList(props) {
    const receiver = localStorage.getItem('userId');
    const vmessages = props.vmessages;
    const chats = props.chats;
    const classes = useStyles();
    
    
    


    return (
        <div style={{height: '500px', overflow: 'scroll'}}>
            
            <List className={classes.list} style={{height: '500px', overflow: 'scroll'}}>
                {chats != null ? chats.sort((a,b) => b.createdAt < a.createdAt ? 1 : -1).map(chat => (
                    <div key={chat.id}>
                        {chat.receiver != receiver ?
                        <ListItem>
                            {chat.type==='plain-text'?<ListItemText primary={chat.message}/>: <img src={chat.message} style={{height: '150px'}}/>}
                            
                        </ListItem> : 
                        <ListItem style={{backgroundColor: '#257AAA', textAlign: 'right', color: '#fff', opacity: 50}}>
                            {chat.type==='plain-text'?<ListItemText primary={chat.message}/>: <img src={chat.message} style={{height: '150px'}}/>}
                        </ListItem> }
                    </div>
                )): <p>No chats!</p>}
                {vmessages && vmessages.sort((a,b) => b.createdAt < a.createdAt ? 1 : -1).map(chat => (
                    <div key={chat.id}>
                        {chat.receiver != receiver ?
                        <ListItem>
                            {chat.type==='plain-text'?<ListItemText primary={chat.message}/>: <img src={chat.message} style={{height: '150px'}}/>}
                        </ListItem> : 
                        <ListItem style={{backgroundColor: '#257AAA', textAlign: 'right', color: '#fff', opacity: 50}}>
                            {chat.type==='plain-text'?<ListItemText primary={chat.message}/>: <img src={chat.message} style={{height: '150px'}}/>}
                        </ListItem> }
                    </div>
                ))}
            </List>
        </div>
    )
}

const mapStateToProps = state => ({
    pending: state.chat.pending,
})

export default connect(mapStateToProps, null)(MessageList);