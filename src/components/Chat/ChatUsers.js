import React from 'react';
import { TextField, Typography, CssBaseline, AppBar, makeStyles, Toolbar, IconButton, Fab, ListItem, ListItemAvatar, ListItemText, ListSubheader, Avatar, Paper, List } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { connect } from 'react-redux';
import { fetchUsersChat,fetchUsers, getVisitorsList } from '../../redux/actions/ChatAction';
import UsersList from './Lists/UsersList';
import VisitorsListing from './vList';

function ChatUsers(props) {
    React.useEffect(()=>{
        props.fetchUsersChat();
        props.getVisitorsList();
        props.fetchUsers();
    }, [])
    const users = props.users;
    const visitors = props.visitors;
    const allusers = props.allusers;

    return (
        <div>
            <CssBaseline/>
            
            <Paper position="fixed" elevation={1}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Find Users" 
                    variant="filled"
                    style={{boxSizing: "border-box",width: '100%', padding: '10px', borderRadius: '50px'}}
                ><Person/></TextField>
                <UsersList users={users} allusers={allusers}/>
                {visitors && <div>
                    <VisitorsListing visitors={visitors}/>
                </div>}
            </Paper>
        </div>
    )
}


const mapStateToProps = (state) => ({
    users: state.chat.users,
    visitors: state.chat.visitors,
    allusers: state.chat.allusers,
    error: state.chat.error
})

export default connect(mapStateToProps, { fetchUsersChat,  getVisitorsList, fetchUsers })(ChatUsers)