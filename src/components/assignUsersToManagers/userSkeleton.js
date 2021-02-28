import { Avatar, Card, CardContent, Typography, Button, CardActions,
    Select, MenuItem } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

const UserCard = ({style}) => {
    let loading = true;
    let photo = 'https://cdn.filestackcontent.com/Nvdf2SQRFSR8adGrueTw';
    photo = '';
    return (
    <Card style={{maxWidth: 250, margin: 2, padding: 3}}>
        <Avatar 
            style={{width: '100%', height: '50%', minHeight: 250}}
            alt="user" 
            name='profile_picture' 
            margin='normal'
            src={photo ? photo : 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg' }
        />
        <Typography gutterBottom component="h2" style={{fontWeight: 600}}>
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
