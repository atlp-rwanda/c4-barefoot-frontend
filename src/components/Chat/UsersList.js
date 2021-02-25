import React from 'react';
import { ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';

function UsersList(users) {
    console.log(users)
    return (
        <div>
            {users &&
                users.map(user => (
                    <div key={user.id}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="Profile Picture" src={user.profile_picture} />
                            </ListItemAvatar>
                            <ListItemText primary={user.first_name} secondary={user.last_name} />
                        </ListItem>
                    </div>
                ))
            }
        </div>
    )
}

export default UsersList;