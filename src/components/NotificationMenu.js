import { Menu, MenuItem, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getNotifications } from "../redux/actions/notificationAction";

const NotificationMenu = (props) => {
    useEffect(()=>{
        props.getNotifications();
        var channel = pusher.subscribe('bare-foot-normad');
        channel.bind('notification', (data)=>{
            props.getNotifications();
        })
    },[]);
    const {anchorEl, handleClose} = props;
    const {error, notifications, pending} = props.notifications;
    console.log(notifications);
    return ( 
        <Menu
            id="noti-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            
            {notifications.count>0 && notifications.rows.map(notification=>(
                
                <Box key={notification.id}>
                    <MenuItem component='a' href={`/notification/${notification.id}`}><b>{notification.message.slice(0,20)}...</b></MenuItem>
                </Box>
            ))}
            {notifications.count<=0 && <MenuItem onClick={handleClose}>No notifications</MenuItem>}
        </Menu>
     );
}

const mapStateToProps = state=> {
    return {
        notifications: state.notifications
    }
}
 
export default connect(mapStateToProps, { getNotifications })(NotificationMenu);