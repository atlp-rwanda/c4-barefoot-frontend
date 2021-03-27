import React, { useEffect } from 'react';
import { Grid, AppBar, Toolbar, TextField } from "@material-ui/core";
import ChatUsers from './ChatUsers';
import ChatMessages from './ChatMessages';
import { useStyles } from './ChatStyles';
import socket from 'socket.io-client';

const ChatRoom = () => {
    const token = localStorage.getItem('barefootUserToken');
    const loggedInUser= localStorage.getItem('id')
    const io = socket(`http://localhost:30000`, {
        query: {
            token,
            loggedInUser
        }
    });
    useEffect(() => {
       
    }, [])
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={4} md={2}>
                <ChatUsers/>
            </Grid>
            <Grid item xs={12} sm={8} md={10}>
                <ChatMessages io={io}/>
            </Grid> 
        </Grid>
        </div>
    )
}

export default ChatRoom;