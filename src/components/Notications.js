import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { getNotifications } from '../redux/actions/notificationAction';
import { connect } from 'react-redux'

const Notification = () => {
  
    return (
        
        <React.Fragment>
            <Typography>
                Notifications
            </Typography>
        </React.Fragment>
    )
}

export default Notification;