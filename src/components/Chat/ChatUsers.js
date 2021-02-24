import React from 'react';
import { TextField, InputAdornment, Typography, CssBaseline, AppBar, makeStyles, Toolbar, IconButton, Fab, ListItem, ListItemAvatar, ListItemText, ListSubheader, Avatar, Paper, List } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { useStyles } from './ChatStyles';
import { users } from './Dummydata';

export const ChatUsers = () => {
    const classes = useStyles();
    return (
        <React.Fragment >
            <CssBaseline/>
            <Paper position="fixed">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Find Users" 
                    variant="filled"
                    style={{boxSizing: "border-box",width: '100%', padding: '10px', borderRadius: '50px'}}
                ><Person/></TextField>
                <List className={classes.list}>
                    {
                        users.map(({id, name, message, person}) => (
                            <React.Fragment key={id}>
                                <ListItem button>
                                    <ListItemAvatar>
                                        <Avatar alt="Profile Picture" src={person} />
                                    </ListItemAvatar>
                                    <ListItemText primary={name} secondary={message} />
                                </ListItem>
                            </React.Fragment>
                        ))
                    }
                </List>
                <Typography className={classes.title}>VISITORS</Typography>
                <List className={classes.list}>
                    {
                        users.map(({id, name, message, person}) => (
                            <React.Fragment key={id}>
                                <ListItem button>
                                    <ListItemAvatar>
                                        <Avatar alt="Profile Picture" src={person} />
                                    </ListItemAvatar>
                                    <ListItemText primary={name} secondary={message} />
                                </ListItem>
                            </React.Fragment>
                        ))
                    }
                </List>
            </Paper>
        </React.Fragment>
    )
}