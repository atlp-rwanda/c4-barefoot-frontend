import { Grid, Typography, Skeleton } from '@material-ui/core';
import React from 'react';
import UserCard from './userSkeleton';
import styles from './styles';


const UsersList = () => {
    const classes = styles();
    let loading = true;
    return (
        <div>
            <Typography variant='h4' className={classes.center}>
                List of all users
            </Typography>
            <hr />
            <Grid container style={{width: '100%', backgroundColor: 'green'}} spacing={1} >
                <UserCard />
                <UserCard />
                <UserCard />
            </Grid>
        </div>
    )
}

export default UsersList;
