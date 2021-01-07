import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import './UserProfile.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const UserProfile = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className="newContainer" border={1}>
                <Avatar />
                <Button variant="contained" color="primary" >
                    Change Profile Picture
                </Button>
                <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <AccountCircleRoundedIcon />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Name"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        first name and last name
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemText>

                        </ListItemText>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            </div>
        </React.Fragment>
    )
}

export default UserProfile;