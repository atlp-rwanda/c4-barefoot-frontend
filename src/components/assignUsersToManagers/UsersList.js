import { Avatar, Button, Divider, Grid, MenuItem, Typography, Container } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import UserCard from './UserCard';
import styles from './styles';
import { assignUsersFromQueue, cancelAllQueue } from '../../redux/actions/managerSelectedActions';

const UsersList = (props) => {
    const classes = styles();
    const { loading } = props;
    const managersList = useSelector(state => state.fetchAllManagers.getAllManagers);
    const usersList = useSelector(state => state.fetchVerifiedUsers.verifiedUsers.rows);
    const count = useSelector(state => state.fetchVerifiedUsers.verifiedUsers.count);
    const{ page, handlePageChange }= props;
    const dispatch = useDispatch();
    const handleAssignPendingUsers = () => {
        assignUsersFromQueue(dispatch);
    }
    const handleCancelAllAssignQueue = () => {
        cancelAllQueue(dispatch);
    }
    const managersElements = managersList.map(manager => (
            <MenuItem key={manager.id} value={manager.id}>
                <Avatar src={manager.profile_picture} style={{marginRight: 5}}/>
                <Typography>{manager.first_name + ' ' + manager.last_name}</Typography>
            </MenuItem>
            )
        );
    const usersElements = usersList.map(user => <UserCard key={user.id} user={user} managersElements={managersElements} username={user.username} manager_id={user.manager_id} />);
    let btnStyle = {backgroundColor: '#257AAA', color: '#FFF', margin:'0 20px auto auto'};
    let cancelBtn = {backgroundColor: '#828282', color: '#FFF', margin: '0 auto auto 20px'};
    return (
        <Container style={{padding: 'unset'}}>
            <Typography variant='h4' className={classes.center}>
                List of Users
            </Typography>
            <Divider />
            <Grid container style={{width: '100%'}} alignItems='flex-start' justify='space-evenly'>
            {
                !loading 
                ? <>{usersElements}</>
                : <><UserCard skeleton={true} /><UserCard skeleton={true} /><UserCard skeleton={true} /></>
            }
            </Grid>
            <Container style={{display: 'flex', marginTop: 20}}>
            {
                !loading
                ?<Button onClick={handleAssignPendingUsers} style={btnStyle}>Save</Button>
                :<Skeleton style={{width: 100, height: 50, margin: 'auto'}} />
            }
            {
                !loading
                ?<Button onClick={handleCancelAllAssignQueue} style={cancelBtn}>Cancel</Button>
                :<Skeleton style={{width: 100, height: 50, margin: 'auto'}} />
            }
            </Container>
            <Container style={{display: 'flex'}}>
            {
                !loading
                ?<Pagination onChange={handlePageChange} page={page} style={{margin: '20px auto 0 auto'}} count={count/10 <= 1 ? 1 : Math.floor(count/10 + 1)} variant="outlined" color="primary" hideNextButton hidePrevButton/>
                :<Skeleton style={{margin: '20px auto 0 auto'}}>
                    <Pagination count={10} variant="outlined" color="primary" hideNextButton hidePrevButton/>
                </Skeleton>
            }
            </Container>
        </Container>
    )
};

export default UsersList;
