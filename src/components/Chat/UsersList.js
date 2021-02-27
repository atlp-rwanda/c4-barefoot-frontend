import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, List, Avatar } from '@material-ui/core';
import {useStyles} from './ChatStyles';


function UsersList({users}) {
    
    
    return (
        <div>
            <List>
                {users ? users.map(user => (
                    <div key={user.id} onClick={()=> localStorage.setItem('userId', user.id)}>
                        <a href='' style={{textDecoration: 'none', color: 'inherit'}}>
                            <ListItem button>
                                <ListItemAvatar>
                                <Avatar alt={user.first_name} src={user.profile_picture} />
                                </ListItemAvatar>
                                <ListItemText primary={user.first_name} secondary={user.last_name} />
                            </ListItem>
                        </a>
                    </div>
                )): <p>No chats, find user to start a chat!</p>}
            </List>
        </div>
    )
}

export default UsersList;