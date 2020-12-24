import { Box, Button, makeStyles } from '@material-ui/core'
import Devider from '@material-ui/core/Divider'
import { BorderBottom, CheckCircle } from '@material-ui/icons'
import Axios from 'axios'
import React, {Component, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

const useStyle = makeStyles(theme => ({
    container: {
        display: 'grid',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '400px',
        padding: '10px'
    },
    boxContainer: {
        textAlign: 'center'
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        // flexDirection: 'row',
        alignItems: 'center',
        padding: '10px',
        color: '#90a4ae'
    },
    hr: {
        height: '2px',
        margin: '5px -10px',
        '@media(max-width: 740px)': {
            margin: '5px'
        }
    },
    tokenMissing: {
        fontSize: '5vh',
        padding: '20px',
        borderBottom: '2px black solid',
    }
}))

const verifyAccount = () => {
    const classes = useStyle()
    const { token} = useParams();
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState('');
    console.log("Token: " + token)
    
    Axios.patch(`https://barefoot-nomad-app-v1.herokuapp.com/api/v1/user/verification?token=` + token)
    .then(res => {
        console.log(JSON.stringify(verified))
      setVerified(true)
    })
    .catch(err => { 
      if (err.response){
        setError(err.response.data.error)
      }else if(err.request){
        setError(err.request.data.error)
      }else if(err.message){
        setError(err.message.data.error)
      }
    })
    return (
        
            <div className={classes.container}>
                <Box className={classes.boxContainer}>
                    {token && verified ? (
                    <>
                        <Box className={classes.box}>
                            <CheckCircle style={{color: '#1b5e20'}}/>Your e-mail has been verified
                            {"Verified : " + JSON.stringify(verified)}
                        </Box>
                        <Devider flexItem className={classes.hr}/>
                        <Box className={classes.box}>
                            Thank you for verifying your account. You can now continue to use BarefootNomad
                        </Box>
                        
                    </>) : (
                        <Box className={classes.tokenMissing}>
                            :( Token Missing
                        </Box>
                    )}
                    <Button variant="contained" color="primary" href='/'> Go Home</Button>
                </Box>
                
            </div>
        
        
    )
}

export default verifyAccount