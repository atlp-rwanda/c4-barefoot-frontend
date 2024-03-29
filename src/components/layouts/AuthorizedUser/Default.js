import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AuthorisedNavBar from '../../AuthorizedUserNavBar'
import Footer from '../../Footer'


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30px',
  }
}));

const DefaultM = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div >
      <AuthorisedNavBar/>
      {/* <div className={classes.toolbar} /> */}
      <main className={classes.content}>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

DefaultM.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default DefaultM;