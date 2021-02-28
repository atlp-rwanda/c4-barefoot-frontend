import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ErrorModal= (props)=> {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const {isOpen, setIsOpen, error, clearUpdateTravelRequest}= props

  useEffect( ()=>{
    if(error){
        setIsOpen(true);
    }
  }, [])


  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
    clearUpdateTravelRequest()
  };

  return (
    <div className={classes.root}>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
            <Typography variant='subtitle1' component='h6' id="simple-modal-description">
               Status: { error && error.status? error.status: "Error occured"} Error: {error && error.message? error.message: (error && error.error ? error.error : "Unable to load data from server")}
            </Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}
export default ErrorModal; 






















// import React, { useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import { Typography } from '@material-ui/core'

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//     position: 'absolute'
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: '30px 20px',
//   },
// }));

// const ErrorModal=(props)=> {
//   const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);
// //   const [open, setOpen] = React.useState(false);
// const {isOpen, setIsOpen, error}= props

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const body = (
//     <div style={modalStyle} className={classes.paper}>
//       <center>
//             <Typography variant="h3" component="h6" id="simple-modal-title" style={{color: 'red'}}>{ error && error.status? error.status: "Error occured"}</Typography>
//             <Typography variant='subtitle1' component='h6' id="simple-modal-description">
//                 {error && error.message? error.message: "Unable to load data from server"}
//             </Typography>
//       </center>
//     </div>
//   );

//   useEffect( ()=>{
//     if(error){
//         setIsOpen(true)
//         // setTimeout(() => {
//         //     handleClose()
//         // }, 5000);
//     }
//   }, [])


//   return (
//     <div>
//       <Modal
//         open={isOpen}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         {body}
//       </Modal>
//     </div>
//   );
// }
// export default ErrorModal;