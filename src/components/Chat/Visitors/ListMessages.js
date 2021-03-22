import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import {useStyles} from '../ChatStyles';

function ListMessages(props){
    const messages = props.messages
    const classes = useStyles();
    const receiver = localStorage.getItem('visitorEmail')
    return (
        <div style={{height: '100%', overflow: 'scroll'}}>
            <List className={classes.list}>
                {messages != null ? messages.sort((a,b) => b.createdAt < a.createdAt ? 1 : -1).map(chat => (
                    <div key={chat.id}>
                        {chat.receiver != receiver ?
                        <ListItem style={{backgroundColor: '#257AAA', textAlign: 'right', color: '#fff', opacity: 50}}>
                        {chat.type==='plain-text'?<ListItemText primary={chat.message}/>: <img src={chat.message} style={{height: '150px'}}/>}
                    </ListItem> :
                        <ListItem>
                            {chat.type==='plain-text'?<ListItemText primary={chat.message}/>: <img src={chat.message} style={{height: '150px'}}/>}
                        </ListItem> }
                    </div>
                )): <p>Welcome, How can we help you?</p>}
            </List>
        </div>
    )
}

export default ListMessages;