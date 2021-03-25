import { Menu, MenuItem, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getNotifications } from "../redux/actions/notificationAction";
import {Link} from "react-router-dom";

const NotificationMenu = (props) => {
   
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
                    <MenuItem  onClick={()=>localStorage.setItem("travelId",notification.travelId)} component='a' href={`/notification/${notification.travelId}`}><b>{notification.message}</b></MenuItem>
                </Box>
            ))}
            {notifications.count<=0 && <MenuItem onClick={handleClose}>No notifications</MenuItem>}
            
        </Menu>
     );
}

export default NotificationMenu;