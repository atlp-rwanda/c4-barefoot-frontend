import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
      backgroundColor: 'inherit',
      width: '100%',
      height: '500px',
      padding: '10px',
      border: 0,
      outline: 'none',
      borderRadius: '0',
      boxShadow: 'none',
    },
    list: {
      marginBottom: theme.spacing(2),
      overflow: 'scroll',
      margin: 10
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
    title: {
        backgroundColor: "#376C7C",
        color: "#fff",
        padding: "10px",
        textAlign: 'center',
        fontWeight: 'bolder'
    },
    icon: {
        margin: '20px 16px 0 0',
        color: theme.palette.action.active,
    },
    header: {
        backgroundColor: '#43A0D6'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    sent: {
        textAlign: "right"
    },
    feedbackText: {
      padding: '10px',
      fontSize: '30px',
      textAlign: 'center',
      
    },
    userlist: {
      height: 400,
      overflow: 'scroll'
    },
    chatIcon: {
      boxShadow: '0 2.8px 2.2px rgba(27, 27, 27, 0.034), 0 6.7px 5.3px rgba(110, 110, 110, 0.048), 0 12.5px 10px rgba(117, 116, 116, 0.06)',
      backgroundColor: '#376C7C',
      bottom: 80,
      left: 30,
      position: 'fixed'
    },
    firstform: {
      backgroundColor: '#376C7C',
      position: 'fixed',
      bottom: 130,
      left: 70,
      padding: 10,
      borderRadius: 10
    },
    sendButton: {
      color: '#fff',
      opacity: 1000,
      backgroundColor: '#479B7D',
      marginTop: 20
    },
    supporttitle: {
      boxSizing: 'border-box',
      fontWeight: 100,
      color: 'inherit',
      textAlign: 'center',
      opacity: 5000,
      fontWeight: 700
    },
    secondform: {
      backgroundColor: '#F0FAFF',
      width: '30%',
      position: 'fixed',
      bottom: 130,
      left: 70,
      padding: 10,
      borderRadius: 4
    },
    vChatContainer: {
      height: 300,
      width: '100%',
    },
    form: {
      width: '100%',
      backgroundColor: '#E5E5E5',
      padding: 10,
      boxSizing: 'border-box',
    },
    visitor: {
      padding: 10,
      borderBottom: '1px solid grey',
      margin: 0.5
    },
    root: {
      maxWidth: 345,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    media: {
      height: 140
    },
    clicked: {
      color: '#376C7C',
      fontWeight: 'bold'
    },
    notclicked: {
      color: 'inherit'
    }
  }));