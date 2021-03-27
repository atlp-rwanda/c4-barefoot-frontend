import React from 'react';
import { TextField, Typography, CssBaseline, AppBar, makeStyles, Toolbar, IconButton, Fab, ListItem, ListItemAvatar, ListItemText, ListSubheader, Avatar, Paper, List, Snackbar } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { connect } from 'react-redux';
import { fetchUsersChat,fetchUsers, getVisitorsList } from '../../redux/actions/ChatAction';
import UsersList from './Lists/UsersList';
import VisitorsListing from './vList';
import LinearProgress from '@material-ui/core/LinearProgress';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ChatUsers(props) {
    const theerror = props.error;
    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState('')
    React.useEffect(()=>{
        props.fetchUsersChat();
        props.getVisitorsList();
        props.fetchUsers();
        if(theerror){
            setError(theerror)
            setOpen(true)
        }
    }, [])
    const users = props.users;
    const visitors = props.visitors;
    const allusers = props.allusers;
    const pending = props.pending;
  
    const handleClose = () => {
    
        setOpen(false);
    };


    return (
        <div>
            <CssBaseline/>
            {error && <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                {error}
                </Alert>
            </Snackbar>}
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