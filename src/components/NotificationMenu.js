import { Menu, MenuItem, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getNotifications } from "../redux/actions/notificationAction";

const NotificationMenu = (props) => {
    useEffect(()=>{
        console.log('run');
        props.getNotifications();
    },[])
    const {anchorEl, handleClose} = props;
    const {error, notifications, pending} = props.notifications;
    return ( 
        <Menu
            id="noti-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            
            {notifications.rows && notifications.rows.map(notification=>(
                
                <Box key={notification.id}>
                    <MenuItem component='a' href='/notifications'>{notification.message}</MenuItem>
                </Box>
            ))}
            {!notifications.rows && <MenuItem onClick={handleClose}>No notifications</MenuItem>}
        </Menu>
     );
}

const mapStateToProps = state=> {
    return {
        notifications: state.notifications
    }
}
 
export default connect(mapStateToProps, { getNotifications })(NotificationMenu);