import React from 'react';
import { TextField, Typography, CssBaseline, AppBar, makeStyles, Toolbar, IconButton, Fab, ListItem, ListItemAvatar, ListItemText, ListSubheader, Avatar, Paper, List } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { connect } from 'react-redux';
import { fetchUsersChat,fetchUsers, getVisitorsList } from '../../redux/actions/ChatAction';
import UsersList from './Lists/UsersList';
import VisitorsListing from './vList';
import LinearProgress from '@material-ui/core/LinearProgress';


function ChatUsers(props) {
    React.useEffect(()=>{
        props.fetchUsersChat();
        props.getVisitorsList();
        props.fetchUsers();
    }, [])
    const users = props.users;
    const visitors = props.visitors;
    const allusers = props.allusers;
    const pending = props.pending;
    const error = props.error;

    return (
        <div>
            <CssBaseline/>
            
            {pending === true ? <LinearProgress style={{boxSizing: 'border-box', padding: 50,  width: '100%'}}/>  :<Paper position="fixed" elevation={1}>
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
            </Paper>}
        </div>
    )
}


const mapStateToProps = (state) => ({
    users: state.chat.users,
    visitors: state.chat.visitors,
    allusers: state.chat.allusers,
    error: state.chat.error,
    pending: state.chat.pending,
    error: state.chat.error
})

export default connect(mapStateToProps, { fetchUsersChat,  getVisitorsList, fetchUsers })(ChatUsers)