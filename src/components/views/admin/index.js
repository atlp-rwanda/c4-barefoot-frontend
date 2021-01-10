import { makeStyles } from '@material-ui/core'
import React, {Component} from 'react'
import Devider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'400px',
        textAlign:'center',
        color:'#257AAA',
    },
    counter:{
        display:'flex',
        margin:'20px'
    },
    hr:{
        height: 'unset',
        border: '1px solid',
        margin: '0 5px',
        color: '#257AAA'
    }
  }))
export function TravelAdmin(){
    const classes = useStyles()
    return(
        <div className={classes.container}>
            <div >
                <p>Welcome back the adminstrator!</p>
                <p>This is how your system looks so far</p>
            </div>
            <div className={classes.counter}>
                <div>0 locations </div>
                <Devider className={classes.hr}/>
                <div>0 accommodations</div>
            </div>
        </div>
        
    )
}