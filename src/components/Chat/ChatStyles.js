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
      overflow: 'scroll'
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
    }
  }));
  