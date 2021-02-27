import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core'

export default function MessageList(props) {
    const chats = props.chats
    console.log(chats)
    return (
        <div>
            <List>
                {chats ? chats.map(chat => (
                    <div key={chat.id}>
                        <ListItem>
                            <ListItemText primary={chat.message} />
                        </ListItem>
                    </div>
                )): <p>No chats, find user to start a chat!</p>}
            </List>
        </div>
    )
}