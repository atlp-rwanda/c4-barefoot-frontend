import { Avatar, Card, CardContent, Typography, Button, CardActions,
    Select, MenuItem } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

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
    const { skeleton } = props;
    let loading = true;
    let photo = 'https://cdn.filestackcontent.com/Nvdf2SQRFSR8adGrueTw';
    const cardStyle = {maxWidth: 250, margin: 2, padding: 3, backgroundColor: '#EAF4FB'};
    photo = '';
    return (
      skeleton
    ? <UserCardSkeleton />
    : <Card style={cardStyle}>
        <Avatar 
            style={{width: '100%', height: '50%', minHeight: 250, backgroundColor: '#ABD5ED'}}
            alt="user" 
            name='profile_picture' 
            margin='normal'
            src={photo ? photo : 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg' }
        />
        <Typography gutterBottom component="h2" style={{fontWeight: 600, color: '#43A0D6'}}>
            FirstName lastName
        </Typography>
        <Select style={{width: '100%'}} defaultValue='none'>
          <MenuItem value="none" disabled>
            <em>assign line manager</em>
          </MenuItem>
          <MenuItem value={1}>Manager 1</MenuItem>
          <MenuItem value={2}>Manager 2</MenuItem>
          <MenuItem value={3}>Manager 3</MenuItem>
        </Select>
        <CardActions>
        
        <Button size="small" color="primary" style={{marginLeft: 'auto', marginTop: 10}}>
            Profile
          </Button>
        </CardActions>
    </Card>
    )
};

export  default UserCard;
