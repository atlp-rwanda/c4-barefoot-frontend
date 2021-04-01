import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom'
import queryString from 'query-string';
const GoogleRedirect = (props) => {
   
       const { search } = useLocation();
       const { q } = queryString.parse(search);
       localStorage.setItem('barefootUserToken', q);
       if(localStorage.getItem('barefootUserToken'))
       {
        return <Redirect to='/profile'/>
       }else {
           return <Redirect to='/login'/>
       }
        
    
}

export default GoogleRedirect;