import React from 'react';
import {useStyles} from './ChatStyles';
import {Typography} from '@material-ui/core'

function VisitorsListing(props){
    const visitors = props.visitors;
    const classes = useStyles();
    return (
        <div className={classes.list}>
            <Typography style={{backgroundColor: "#376C7C", color: "#fff", padding: "10px", textAlign: 'center', fontWeight: 'bolder'}}>VISITORS</Typography>
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