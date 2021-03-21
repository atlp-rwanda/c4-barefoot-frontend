import { Typography ,Card, CardContent} from '@material-ui/core';
import React, { useEffect } from 'react';
import { readNotification, getNotifications, readTravelRequestInfo } from '../redux/actions/notificationAction';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TravelRequestCard from '../components/manageTravel/TravelRequestCard';



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
        //props.readNotification(id);
        props.getNotifications();
        props.readTravelRequestInfo(id)
        
    }, []);
    const {notification} = props;

    const classes = useStyles();

     console.log(props)
  
    return (
        
        <React.Fragment>
        
        {/* <Card className={classes.card}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                
            </Typography>
        </CardContent>
        </Card> */}

       
        </React.Fragment>
    )
}
const mapStateToProps = state=>{
    return {
        notification: state
    }
}

export default connect(mapStateToProps, { readNotification, getNotifications, readTravelRequestInfo })(Notification);