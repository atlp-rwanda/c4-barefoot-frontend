import { Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";

const NotificationMenu = (props) => {
    const {anchorEl, handleClose} = props;
    return ( 
        <Menu
            id="noti-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>No notifications</MenuItem>
            <MenuItem onClick={handleClose}>No notifications</MenuItem>
            <MenuItem onClick={handleClose}>No notifications</MenuItem>
        </Menu>
     );
}
 
export default NotificationMenu;