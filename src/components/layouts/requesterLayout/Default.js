import React from "react";
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import RequesterNavbar from '../../requesterNavbar';
import Footer from '../../Footer'

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    separate:{
      marginBottom:theme.spacing(3)
    }
  }));
  
  const DefaultM = props => {
    const { children } = props;
    const classes = useStyles();
    return (
      <div >
        <RequesterNavbar/>
        <div className={classes.toolbar} />
        <main className={classes.content,classes.separate}>
          {children}
        </main>
        <Footer />
      </div>
    );
  };
  
  DefaultM.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };
  
  export default DefaultM;