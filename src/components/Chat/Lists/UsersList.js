import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, List, Avatar } from '@material-ui/core';
import {useStyles} from '../ChatStyles';


function UsersList({users}) {
    
    const classes = useStyles();
    return (
        <div className={classes.userlist}>
            <List>
                {users.length != 0 ? users.map(user => (
                    <div key={user.id} onClick={()=> {
                        localStorage.setItem('userId', user.id),
                        localStorage.setItem('userName', user.first_name)
                    }}>
                        <a href='' style={{textDecoration: 'none', color: 'inherit'}}>
                            <ListItem button>
                                <ListItemAvatar>
                                <Avatar alt={user.first_name} src={user.profile_picture} />
                                </ListItemAvatar>
                                <ListItemText primary={user.first_name} secondary={user.last_name} />
                            </ListItem>
                        </a>
                    </div>
                )): <p className={classes.feedbackText}>No chats, find user to start a chat!</p>}
            </List>
        </div>
    )
}

export default UsersList;