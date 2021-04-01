import { makeStyles } from '@material-ui/core/styles';


const loginStyles = makeStyles((theme) => ({
    Login: {
      height: '90vh',
    },
    paper: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justify: 'center',
      textAlign: 'center',
    },
    paper2: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justify: 'center',
      textAlign: 'center',
      color: 'white',
      height: '90%'
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    login: {
      margin: theme.spacing(3, 0, 2),
      width: '40%'
    },
    submit: {
      margin: theme.spacing(3, 0, 12),
      width: '35%'
    },
    social_media: {
      margin: theme.spacing(3, 0, 2),
      width: '40%',
      height:'40px'
    },
    image_icon:{
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    social_media_sm: {
      margin: theme.spacing(3, 0, 2),
      width: '40%',
      height:'40px'
    },
    social_media_grid: {
      margin: 'auto',
      marginTop: '0',
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    secondpart: {
      margin: theme.spacing(5, 0, 5),
      width: '60%',
      justifyContent: 'center'
    },
    forgotPassword: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    
  }));

  export default loginStyles;