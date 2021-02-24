import React from 'react';
import { CssBaseline, Paper, AppBar, Toolbar, Input, IconButton, InputAdornment, List, ListItem, ListItemAvatar, Avatar, ListItemText, Box  } from '@material-ui/core';
import { MenuIcon, SendIcon } from '@material-ui/icons';
import { useStyles } from './ChatStyles';

export const ChatMessages = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square className={classes.paper} container="true">
                <Paper>
                    <Toolbar>
                        <List>
                            <ListItem>
                                <ListItemAvatar><Avatar alt="Profile Picture" src="" /></ListItemAvatar>
                                <ListItemText primary="Name" secondary="Online"/>
                            </ListItem>
                        </List>
                    </Toolbar>
                </Paper>
                <Box component="div" overflow="scroll">
                    <Box component="span" display="block" bgcolor="background.paper"  p={2} m={1} width={1/4}>Received</Box>
                    <Box component="span" display="block" p={2} m={1} bgcolor="info.main" className="classes.sent">Sent</Box>
                    <Box component="span" display="block" bgcolor="background.paper"  p={2} m={1}>Received</Box>
                    <Box component="span" display="block" p={2} m={1} bgcolor="info.main" className="classes.sent">Sent</Box>
                    <Box component="span" display="block" p={2} m={1} bgcolor="info.main" className="classes.sent">Sent</Box>
                </Box>
            </Paper>
            <Paper position="fixed" style={{bottom:0, top: 'auto', left: 0, right: 0, borderRadius: 50, marginTop: '7px', padding: '10px', boxSizing: 'border-box'}}>
                <Toolbar position='fixed' color="primary" className={classes.appBar}>
                    <Input
                        border={0}
                        variant="outlined"
                        style={{width: '100%', borderRadius: 50}}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton>
                                <p>Attach</p>
                            </IconButton>
                            <IconButton>
                                <p>Send</p>
                            </IconButton>
                            </InputAdornment>
                        }
                    />
                </Toolbar>
            </Paper>
        </React.Fragment>
    )
}