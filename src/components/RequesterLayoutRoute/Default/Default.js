import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import NavBar from '../NavBar'
import Footer from '../../AuthorizeUserFooter'
import { SideBar } from '../sideNav';
import jwt from 'jwt-decode';
// import SideDrower from '../SideDrawer'
// eface43c-2e49-473b-bbe2-305d1a5190f1 super admin
// 45429837-ed2c-435d-bc22-ad9c5dbe3782 requester
// 7254a9e7-2e1b-4f83-ad73-78b90dd3df77 manager
// 4fd084a0-cdd6-47a5-aaf5-5fdc8b5629dd travel admin
// 47e327b8-0073-4443-968b-ef8849ddfb49 travel admin member
// 29df247e-c86e-4fc7-b2fd-26b57f975b88 accommodation supplier

const useStyles = makeStyles(() => ({
  
  content: {
    height: '100%',
    paddingLeft:'220px',
    marginBottom:'70px',
    '@media(max-width:840px)':{
      paddingLeft:'inherit'
    }
  }
}));

const RequesterDefault = props => {
  const { children } = props;
  const classes = useStyles();
  useEffect(() =>{
    return Authorization();
  },[])
  const Authorization = () =>{
    const userToken = localStorage.getItem('barefootUserToken');
    if(userToken){
      console.log('we have the token', userToken);
      const decoded = jwt(userToken);
      console.log('decoded the token', decoded);
      if(decoded.role === '45429837-ed2c-435d-bc22-ad9c5dbe3782'){
        return console.log('history', props);
         
      }
    }
    return props.children.props.history.push('/login'); 
  }

  return (
    <div >
      <NavBar />
      <SideBar/>
      <main className={classes.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

RequesterDefault.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default RequesterDefault;