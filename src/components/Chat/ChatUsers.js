import React from 'react';
import { TextField, Typography, CssBaseline, AppBar, makeStyles, Toolbar, IconButton, Fab, ListItem, ListItemAvatar, ListItemText, ListSubheader, Avatar, Paper, List } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { connect } from 'react-redux';
import { fetchUsersChat,fetchUsers, getVisitorsList } from '../../redux/actions/ChatAction';
import UsersList from './Lists/UsersList';
import VisitorsListing from './vList';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ChatUsers(props) {
    props.fetchUsersChat();
    props.getVisitorsList();
    const users = props.users;
    const visitors = props.visitors;
    const allusers = props.allusers;
    const [openSnack, setOpenSnack] = React.useState(false);
    const error = props.error;

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
                    <Typography style={{backgroundColor: "#376C7C", color: "#fff", padding: "10px", textAlign: 'center', fontWeight: 'bolder'}}>VISITORS</Typography>
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