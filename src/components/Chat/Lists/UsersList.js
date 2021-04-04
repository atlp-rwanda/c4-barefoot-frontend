import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, List, Avatar } from '@material-ui/core';
import {useStyles} from '../ChatStyles';


function UsersList(props) {

    const users = props.users;
    const allusers = props.allusers;
    const lastchat = props.lastchat
    
    const classes = useStyles();
    return (
        <div className={classes.userlist}>
            <List>
                {users.length != 0 && users.map(user => (
                    <div key={user.id} onClick={()=> {
                        localStorage.setItem('userId', user.id),
                        localStorage.setItem('userName', user.first_name)
                        localStorage.setItem('pp', user.profile_picture)
                        localStorage.removeItem('visit')
                        
                    }}>
                        <a href='' style={{textDecoration: 'none', color: 'inherit'}}>
                            <ListItem button>
                                <ListItemAvatar>
                                <Avatar alt={user.first_name} src={user.profile_picture} />
                                </ListItemAvatar>
                                <ListItemText primary={user.first_name} secondary={localStorage.getItem('userId')===user.id ? lastchat.message : "Start a chat"} className={localStorage.getItem('userId')===user.id ? classes.clicked : classes.notclicked}/>
                            </ListItem>
                        </a>
                    </div>
                ))}
                {users.length === 0 && 
                allusers.map(user => (
                    <div key={user.id} onClick={()=> {
                        localStorage.setItem('userId', user.id),
                        localStorage.setItem('userName', user.first_name)
                        localStorage.removeItem('visit')
                        
                    }}>
                        <a href='' style={{textDecoration: 'none', color: 'inherit'}}>
                            <ListItem button>
                                <ListItemAvatar>
                                <Avatar alt={user.first_name} src={user.profile_picture} />
                                </ListItemAvatar>
                                <ListItemText primary={user.first_name} secondary="Click to chat" />
                            </ListItem>
                        </a>
                    </div>))}
            </List>
        </div>
    )
}

export default UsersList;