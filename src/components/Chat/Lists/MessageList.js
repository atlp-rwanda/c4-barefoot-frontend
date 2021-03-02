import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useStyles } from '../ChatStyles';

export default function MessageList(props) {
    const receiver = localStorage.getItem('userId');
    const vmessages = props.vmessages;
    const chats = props.chats;
    const classes = useStyles();
    return (
        <div style={{height: '500px', overflow: 'scroll'}}>
            <List className={classes.list}>
                {chats != null ? chats.map(chat => (
                    <div key={chat.id}>
                        {chat.receiver != receiver ?
                        <ListItem>
                            {chat.image && <img src={chat.image} alt='Received Image' style={{width: 'auto', height: '150px', borderRadius: 10}}/>}{"\n"}
                            {chat.message && <ListItemText primary={chat.message}/>}
                        </ListItem> : 
                        <ListItem style={{backgroundColor: '#257AAA', textAlign: 'right', color: '#fff', opacity: 50}}>
                            {chat.image && <img src={chat.image} alt="Sent Image" style={{right: 0, width: 'auto', height: '150px', right: 0, borderRadius: 10}}/>}{"\n"}
                            {chat.message && <ListItemText primary={chat.message}/>}
                        </ListItem> }
                    </div>
                )): <p>No chats!</p>}
                {vmessages && vmessages.map(chat => (
                    <div key={chat.id}>
                        {chat.receiver != receiver ?
                        <ListItem>
                            {chat.image && <img src={chat.image} alt='Received Image' style={{width: 'auto', height: '150px', borderRadius: 10}}/>}{"\n"}
                            {chat.message && <ListItemText primary={chat.message}/>}
                        </ListItem> : 
                        <ListItem style={{backgroundColor: '#257AAA', textAlign: 'right', color: '#fff', opacity: 50}}>
                            {chat.image && <img src={chat.image} alt="Sent Image" style={{right: 0, width: 'auto', height: '150px', right: 0, borderRadius: 10}}/>}{"\n"}
                            {chat.message && <ListItemText primary={chat.message}/>}
                        </ListItem> }
                    </div>
                ))}
            </List>
        </div>
    )
}