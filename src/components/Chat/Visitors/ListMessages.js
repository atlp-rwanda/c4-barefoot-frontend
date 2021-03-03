import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import {useStyles} from '../ChatStyles';

function ListMessages(props){
    const messages = props.messages
    const classes = useStyles();
    const receiver = localStorage.getItem('visitorEmail')
    console.log(messages)
    return (
        <div style={{height: '100%', overflow: 'scroll'}}>
            <List className={classes.list}>
                {messages != null ? messages.sort((a,b) => b.createdAt < a.createdAt ? 1 : -1).map(chat => (
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
                )): <p>Welcome, How can we help you?</p>}
            </List>
        </div>
    )
}

export default ListMessages;