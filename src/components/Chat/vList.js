import React from 'react';
import {useStyles} from './ChatStyles';

function VisitorsListing(props){
    const visitors = props.visitors;
    const classes = useStyles();
    return (
        <div className={classes.list}>
            {visitors.map(visitor => (
                <div key={visitor} className={classes.visitor} onClick={()=> {
                    localStorage.setItem('userId', visitor)
                    localStorage.setItem('userName', visitor)
                    localStorage.setItem('visit', true)
                }}>
                   <a href='' style={{textDecoration: 'none', color: 'inherit'}}>{visitor}</a>
                </div>
            ))}
        </div>
    )
}

export default VisitorsListing;