import React, { useEffect } from 'react';
import { Grid, AppBar, Toolbar, TextField } from "@material-ui/core";
import ChatUsers from './ChatUsers';
import ChatMessages from './ChatMessages';
import { useStyles } from './ChatStyles';

const ChatRoom = () => {
    return (
        <div>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={4} md={2}>
                <ChatUsers/>
            </Grid>
            <Grid item xs={12} sm={8} md={10}>
                <ChatMessages/>
            </Grid> 
        </Grid>
        </div>
    )
}

export default ChatRoom;