import { Typography ,Card, CardContent} from '@material-ui/core';
import React, { useEffect } from 'react';
import { readNotification } from '../redux/actions/notificationAction';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: '150px',
      marginTop: '100px',
      color:'white',
      width:'60%',
      height:'60px'
    },
    card:{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '150px',
        marginTop: '100px',
        backgroundColor:'green',
        color: 'white',
        width:'60%',
        height:'60px'
    }
   
   
  }));

const Notification = (props) => {
    const { id } = props.match.params;
    useEffect(()=>{
        props.readNotification(id);
        
    }, []);
    const {notification} = props;

    const classes = useStyles();

    
  
    return (
        
        <React.Fragment>
        
        <Card className={classes.card}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {notification.message}
            </Typography>
        </CardContent>
        </Card>
       
        </React.Fragment>
    )
}
const mapStateToProps = state=>{
    return {
        notification: state.notifications.notification
    }
}

export default connect(mapStateToProps, { readNotification })(Notification);