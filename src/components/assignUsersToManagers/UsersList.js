import { Divider, Grid, Typography, Skeleton, Container } from '@material-ui/core';
import React from 'react';
import UserCard from './UserCard';
import styles from './styles';


const UsersList = () => {
    const classes = styles();
    let loading = true;
    return (
        <Container style={{padding: 'unset'}}>
            <Typography variant='h4' className={classes.center}>
                List of all users
            </Typography>
            <Divider />
            <Grid container style={{width: '100%'}} alignItems='flex-start' justify='space-evenly'>
                <UserCard />
                <UserCard />
                <UserCard />
            </Grid>
        </Container>
    )
};

export default UsersList;
