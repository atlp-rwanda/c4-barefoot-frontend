import React from 'react'
import {Box, makeStyles, Typography, Container} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.secondary.main,
    height: '90vh',
    color: "#fff",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

function PageNotFound (){
  const classes = useStyles();

  return(
    <React.Fragment>
      <Box className={classes.box}>
        <Typography variant='h1' >404</Typography>
        <Typography variant='h4' >Page Not Found :(😹</Typography>
      </Box>
    </React.Fragment>
  )
}

export default PageNotFound