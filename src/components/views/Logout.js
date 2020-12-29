import React, {useEffect} from 'react';

function Logout(props){
    useEffect(()=>{
        localStorage.clear();
        props.history.push('/login');
    });

    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}


export default Logout;