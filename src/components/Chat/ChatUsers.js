import React from 'react';
import { TextField, Typography, CssBaseline, AppBar, makeStyles, Toolbar, IconButton, Fab, ListItem, ListItemAvatar, ListItemText, ListSubheader, Avatar, Paper, List } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { connect } from 'react-redux';
import { fetchUsersChat, getVisitorsList } from '../../redux/actions/ChatAction';
import UsersList from './Lists/UsersList';
import VisitorsListing from './vList';

class ChatUsers extends React.Component {
    UNSAFE_componentWillMount() {
        this.props.fetchUsersChat();
        this.props.getVisitorsList();
    }
    render () {
        const users = this.props.users;
        const visitors = this.props.visitors;
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
                    <UsersList users={users}/>
                    {visitors && <div>
                        <Typography style={{backgroundColor: "#376C7C", color: "#fff", padding: "10px", textAlign: 'center', fontWeight: 'bolder'}}>VISITORS</Typography>
                        <VisitorsListing visitors={visitors}/>
                    </div>}
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.chat.users,
    visitors: state.chat.visitors
})

export default connect(mapStateToProps, { fetchUsersChat,  getVisitorsList })(ChatUsers)