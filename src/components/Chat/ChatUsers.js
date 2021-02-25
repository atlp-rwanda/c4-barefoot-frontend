import React from 'react';
import { TextField, Typography, CssBaseline, AppBar, makeStyles, Toolbar, IconButton, Fab, ListItem, ListItemAvatar, ListItemText, ListSubheader, Avatar, Paper, List } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { connect } from 'react-redux';
import { fetchUsersChat } from '../../redux/actions/SendMessageAction';
import UsersList from './UsersList';

class ChatUsers extends React.Component {
    UNSAFE_componentWillMount() {
        this.props.fetchUsersChat();
    }
render () {
    const users = this.props.users;
    console.log(users)
    return (
        <div>
            <CssBaseline/>
            <Paper position="fixed">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Find Users" 
                    variant="filled"
                    style={{boxSizing: "border-box",width: '100%', padding: '10px', borderRadius: '50px'}}
                ><Person/></TextField>
                <UsersList users={users}/>
                <Typography>VISITORS</Typography>
            </Paper>
        </div>
    )
}
}

const mapStateToProps = (state) => ({
    users: state.chat.users
})

export default connect(mapStateToProps, { fetchUsersChat })(ChatUsers)