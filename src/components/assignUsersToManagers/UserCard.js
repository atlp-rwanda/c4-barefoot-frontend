import { Avatar, Card, CardContent, Typography, Button, CardActions,
    Select, MenuItem } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUsersToAssignQueue } from '../../redux/actions/managerSelectedActions';

const UserCardSkeleton = () => {
  return (
    <Card style={{margin: 15}}>
      <Skeleton width={200} height={200} variant='circle' />
      <Typography variant='h5'><Skeleton /></Typography>
      <Typography variant='h5'><Skeleton /></Typography>
      <Typography variant='h5' style={{width: '50%', float: 'right'}}><Skeleton /></Typography>
    </Card>
  )
};

const UserCard = (props) => {
    const { skeleton, managersElements, user: USER } = props;
    const cardStyle = {maxWidth: 250, margin: 2, padding: 3, backgroundColor: '#EAF4FB'};
    const dispatch = useDispatch();
    // const assignUsersToManagersQueue = useSelector(state => state.addAssignActionToQueue);
    // console.log(assignUsersToManagersQueue);
    const handleManagerSelected = ({target}) => {
      const managerId = target.value;
      dispatch(addUsersToAssignQueue(USER.id, managerId));
    }
    return (
      skeleton
    ? <UserCardSkeleton />
    : <Card style={cardStyle}>
        <Avatar 
            style={{width: '100%', maxHeight: '50%', minHeight: 250, backgroundColor: '#ABD5ED'}}
            alt="user" 
            name='profile_picture' 
            margin='normal'
            src={USER.profile_picture ? USER.profile_picture : 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg' }
        />
        <Typography gutterBottom component="h2" style={{fontWeight: 600, color: '#43A0D6'}}>
            {`${USER.first_name} ${USER.last_name}`}
        </Typography>
        <Select onChange={handleManagerSelected} style={{width: '100%'}} defaultValue={props.manager_id ? props.manager_id : 'none'}>
          <MenuItem value="none" disabled>
            <Avatar />
            <Typography><em>assign line manager</em></Typography>
          </MenuItem>
           {managersElements} 
        </Select>
        <CardActions>
          <Button href={`/${props.username}`} size="small" color="primary" style={{marginLeft: 'auto', marginTop: 10}}>
            Profile
          </Button>
        </CardActions>
    </Card>
    )
};

export  default UserCard;
